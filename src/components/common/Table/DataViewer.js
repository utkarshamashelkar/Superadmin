import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DataTable from "./DataTable";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useMemo } from "react";
import { useTable, useRowSelect, useSortBy } from "react-table";
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DataViewer = ({ tableData, fetchData, dataSize, title, columns }) => {
    const [searchValue, setSearchValue] = useState('')
    const [activePage, setActivePage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    // const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => tableData, [tableData])

    // const columns = useMemo(() => calculateColumnHeaders(
    //   tableData[0]).filter((obj) => obj.accessor !== 'tenant_name' && obj.accessor !== 'status'),
    //   [tableData])

    const sortBoolean = (a, b, columnId) => {
        const valueA = a.values[columnId];
        const valueB = b.values[columnId];
        return valueA === valueB ? 0 : valueA ? -1 : 1;
    };

    // const columns = calculateColumnHeaders(data)
    // add edit icon after checking permission
    const tableInstance = useTable({
        columns,
        data
    },
        useSortBy,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    ...columns
                ]
            })
        }
    )

    const handlePrevPage = () => {
        if (activePage >= 2) { setActivePage(activePage - 1) }
    }

    const handleNextPage = () => {
        setActivePage(activePage + 1)
    }

    const paginationText = () => {
        // Calculate the start and end row numbers for the current page.
        const startRow = (activePage - 1) * pageSize + 1;
        const endRow = Math.min(dataSize, activePage * pageSize);

        // Return the pagination text.
        return `${startRow}-${endRow} of ${dataSize}`;
    }

    useEffect(() => {
        fetchData(searchValue, activePage, pageSize)
    }, [pageSize, activePage])

    const handleSearchClear = () => {
        setSearchValue('')
        fetchData()
    }

    return (
        <>
            {/* Filter Input Box */}
            <Stack direction="horizontal" className="mb-3">
                <h5>{dataSize} {title}</h5>
                <InputGroup className="ms-auto w-25">
                    <Form.Control
                        placeholder={`Search by ${title} Name`}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button variant="light" onClick={() => fetchData(searchValue)}><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                </InputGroup>
            </Stack>

            {/* Actual Table */}
            <DataTable tableInstance={tableInstance} />

            <Stack direction="horizontal" className="ms-auto" gap={2}>
                {/* Pagination */}

                <ul className="pagination my-auto me-3">
                    <li className="p-1 me-3" onClick={handlePrevPage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </li>
                    <li className="p-1" onClick={handleNextPage}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                </ul>

                <div>
                    {paginationText()}
                </div>

                {/* Items per page */}
                <span className="ms-auto">Items per page</span>
                <DropdownButton id="dropdown-item-button" variant="outline-secondary" title={pageSize} >
                    <Dropdown.Item as="button" onClick={() => { setPageSize(10); }}>10</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => { setPageSize(25); }}>25</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => { setPageSize(50); }}>50</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => { setPageSize(100); }}>100</Dropdown.Item>
                </DropdownButton>
            </Stack>
        </>
    )
}

export default DataViewer;