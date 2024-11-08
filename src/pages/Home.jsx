import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/landingImg.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectApi } from '../services/allAPI'

const Home = () => {

  const [allHomeProjects, setAllHomeProjects] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllHomeProjects()
  }, [])

  const getAllHomeProjects = async () => {
    try {
      const result = await getHomeProjectApi()
      if (result.status == 200) {
        setAllHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(allHomeProjects);


  const handleProjects = () => {
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    } else {
      alert("Please login to get full access to our projects!!!")
    }
  }

  return (
    <>
      <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }}><i className="fa-brands fa-docker"></i>Project Fair</h1>
              <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis, quo ullam, expedita corporis dolor veniam eligendi corrupti hic, aperiam inventore quidem voluptatum pariatur aliquam nemo earum mollitia suscipit consectetur?</p>
              {
                sessionStorage.getItem("token") ?
                  <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                  :
                  <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
              }
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={landingImg} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {
              allHomeProjects?.map(project => (
                <div key={project?._id} className='me-5'>
                  <ProjectCard displayData={project}/>
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleProjects} className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-user-cartoon-girl-avatar-image_1200112.jpg" alt="" />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center mb-1'>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quam ut ab eum asperiores assumenda labore.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-user-cartoon-girl-avatar-image_1200112.jpg" alt="" />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center mb-1'>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quam ut ab eum asperiores assumenda labore.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-user-cartoon-girl-avatar-image_1200112.jpg" alt="" />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center mb-1'>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quam ut ab eum asperiores assumenda labore.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home