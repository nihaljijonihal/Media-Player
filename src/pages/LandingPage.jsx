import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {


  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/home')
  }
  return (
    <>
      <div className='container mt-5'>

        <div className="header row align-items-center">
          <div className='col-lg-5'>
            <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
            <p>Media Player App. will allow you to
              arrange them in different categories by
              add and remove
              providing drag
              their uploaded videos
              also helps to
              and drop functionalities.</p>
            <button className='btn btn-info mt-3'
              onClick={handleNavigate}>Get Started</button>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="landing image" />
          </div>
        </div>
        <div className="features">
          <h3 className='text-center'>Features</h3>
          <div className="row">
           
            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
                <Card.Img style={{height:'300px'}}  variant="top" src="https://media3.giphy.com/media/XGbfacwWVO9J34OSBL/200w.gif?cid=6c09b952wsqyl9wtt5xka8h77p94dao1cgrh7pj7eewoy4gb&ep=v1_gifs_search&rid=200w.gif&ct=g" />
                <Card.Body>
                  <Card.Title>Managing  Videos</Card.Title>
                  <Card.Text>
                   User can upload, view and remove videos
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
                <Card.Img  style={{height:'300px'}}  variant="top" src="https://64.media.tumblr.com/56f3849bcc51b191bb9da4ff953ef678/tumblr_pae601K9kj1s60oo7o1_400.gif" />
                <Card.Body>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                   User can categorise the videos according to their prefaces using drag and drop features.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
                <Card.Img  style={{height:'300px'}}  variant="top" src="https://media.freewebstock.com/man-with-headphones-listens-to-music.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    Users are able to see the history of their watched videos.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="row video border p-5 mt-5 rounded">
          
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          
          <p style={{textAlign:'justify'}}><span className='fs-4'> Play Everything:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet fugit id totam. </p>
          <p style={{textAlign:'justify'}}><span className='fs-4'> Categorize Video:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet fugit id totam. </p>
          <p style={{textAlign:'justify'}}><span className='fs-4'> Watch History:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eveniet fugit id totam. </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
      </div >
      <hr />
    </>
  )
}

export default LandingPage