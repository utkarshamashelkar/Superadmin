import React from 'react'
import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import DataViewer from '../common/Table/DataViewer'
import SegmentIntro from '../common/SegmentIntro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleMinus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from "react-bootstrap";
import './TenantTable.scss'

export default function TenantTable() {

  const [tableData, setTableData] = useState()
  const [dataSize, setDataSize] = useState(0)

  const fetchData = async (query = '', page = 1, limit = 10) => {
    return await axios.get(`http://localhost:3001/data/?q=${query}&_page=${page}&_limit=${limit}`)
      .then(res => {
        setTableData(res.data)
        // length of your data without page limit
        console.log(res.headers["x-total-count"])
        setDataSize(res.headers["x-total-count"])
      })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const sortBoolean = (a, b, columnId) => {
    const valueA = a.values[columnId];
    const valueB = b.values[columnId];
    return valueA === valueB ? 0 : valueA ? -1 : 1;
  };

  const columns = useMemo(() => [
    {
      Header: 'TENANT NAME',
      accessor: 'tenant_name',
      Cell: ({ row }) => (
        <a className='table-link' href="#" onClick={() => console.log(row.original)}>
          {row.original.tenant_name}
        </a>
      )
    },
    {
      Header: "CONTACT",
      accessor: "contact_name"
    },
    {
      Header: "EMAIL",
      accessor: "email",
    },
    {
      Header: "PHONE",
      accessor: "phone"
    },
    {
      Header: "STATUS",
      accessor: "status",
      Cell: ({ row }) => (

        row.original.status ? <><FontAwesomeIcon color="green" icon={faCircleCheck} /> Active</> : <><FontAwesomeIcon color="red" icon={faCircleMinus} /> Inactive</>
      ),
      sortType: sortBoolean
    },
    {
      Header: "NO. OF USERS",
      accessor: "no_of_users"
    },
    {
      Header: "ACTIONS",
      id: 'actions',
      Cell: ({ row }) => (
        // <FontAwesomeIcon onClick={() => console.log(row.original)} icon={faEllipsisVertical} />
        <NavDropdown title={<span><FontAwesomeIcon icon={faEllipsisVertical} /></span>} drop="start" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#">Edit</NavDropdown.Item>
          <NavDropdown.Item href="#">Delete</NavDropdown.Item>
          <NavDropdown.Item href="#">Reset Password</NavDropdown.Item>
          <NavDropdown.Item href="#">Activate/Deactivate</NavDropdown.Item>
        </NavDropdown>
      ),
      disableSortBy: true
    }
  ], [])

  return (
    <div className='container'>
      <SegmentIntro />
      {tableData && <DataViewer tableData={tableData} fetchData={fetchData} dataSize={dataSize} title="Tenants" columns={columns} />}
    </div>
  )
}
