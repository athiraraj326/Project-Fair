import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='container mt-5 w-100'>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column mt-3">     
          <h5><i className="fa-brands fa-docker"></i>Project Fair</h5>
          <p>Designed and built with all the love in the world by <br /> the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div className="d-flex flex-column mt-3">
          <h5>Links</h5>
          <div className='d-flex flex-column'>
            <Link to={'/'} style={{textDecoration:'none'}}>Home</Link>
            <Link to={'/login'} style={{textDecoration:'none'}}>Login</Link>
            <Link to={'/register'} style={{textDecoration:'none'}}>Register</Link>
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <h5>Guides</h5>
          <div className='d-flex flex-column'>
            <Link style={{ textDecoration:'none'}}>React</Link>
            <Link style={{ textDecoration:'none'}}>React Bootstrap</Link>
            <Link style={{ textDecoration:'none'}}>React Router</Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between mt-3">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input type="text" className='form-control' placeholder='Enter your email here' />
            <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <Link style={{ textDecoration: 'none'}} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
            <Link style={{ textDecoration: 'none'}} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
            <Link style={{ textDecoration: 'none'}} target='_blank'><i className="fa-brands fa-facebook"></i></Link>
            <Link style={{ textDecoration: 'none'}} target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
            <Link style={{ textDecoration: 'none'}} target='_blank'><i className="fa-brands fa-github"></i></Link>
            <Link style={{ textDecoration: 'none'}} target='_blank'><i className="fa-solid fa-phone"></i></Link>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; June 2024, Project Fair. Built with React</p>
    </div>
  )
}

export default Footer