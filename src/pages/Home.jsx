import React from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { useState } from 'react'
function Home() {
   
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")


  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
        <Link to={'/watch'}>View History</Link>
      </div>
      <div className="container-fluid mt-5 mb-4 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
        </div>

        <div className="col-lg-6">
        <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
         
        </div>
      </div>
    </>
  )
}

export default Home