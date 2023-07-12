import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Stack } from 'react-bootstrap';

const SegmentIntro = ({ title }) => {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div className=""><h3>Manage {title}</h3></div>
        <div className="ms-auto"><Button className='px-4 py-2' variant="primary"><FontAwesomeIcon className='me-3' icon={faCirclePlus} />Add New Tenant</Button></div>
      </Stack>
      <hr />
    </>
  );
};

export default SegmentIntro;

