import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
            <div style={{ paddingTop: '100px', height: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
                <h1 className='fw-bold'>404</h1>
                <img width={'300px'} style={{ height: '200px' }} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
                <h1 className='fw-bold mb-2'>Looks like you're lost.</h1>
                <p className='mb-2'>The page you are looking for is not available</p>
                <Link to={'/'} className='bg-success p-2 text-light rounded'>Home</Link>
            </div>
        </>
    )
}

export default PageNotFound