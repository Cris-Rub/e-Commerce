import React from 'react'
import { Spinner, Stack } from 'react-bootstrap'
import './Loading.css'

const Loading = () => {
  return (
    <>
      <Stack>
        <div>
          <h1>Loading content... <Spinner animation='border' size='lg' variant='danger' /></h1>
        </div>
      </Stack>
    </>
  )
}

export default Loading
