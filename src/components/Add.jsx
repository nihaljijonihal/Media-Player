import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadVideoAPI } from '../services/allAPI'



function Add({setUploadVideoResponse}) {


  const [uploadVideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })

  const getYoutubeEmbedLink=(link)=>{
    if(link.includes("v=")){
      let videoID = link.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoID}`})
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);

 // console.log(uploadVideo);


  const handleUpload = async () => {
    const {caption,imageURL,youtubeLink} = uploadVideo

 
    if(caption  &&  imageURL  &&  youtubeLink)
    {
      // http://localhosrt:3000/videos
      //console.log("Hello");
      const result = await uploadVideoAPI(uploadVideo);
     // console.log(result);
      if(result.status>=200 && result.status<300)
      {
        alert(`Video ${result.data.caption} uploaded successfully!!!`)
        setUploadVideoResponse(result.data)
        handleClose();

      }else{
        alert("API CALL FAILED   Please try again!!!")
      }
    }
    else{
      alert("Please fill the form!!!")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload A Video</h5>
        <button onClick={handleShow} className='btn btn-secondary ms-2 text-secondary'>
          <i style={{ fontSize: '30px', color: 'white' }} className="fa-solid fa-plus"></i>
        </button>

      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the folloing details!!!</p>
          <div className='border rounded border-secondary p-3 '>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
           <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputImg"
              label="Image Url"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube Video Link"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)}  type="text" placeholder="Youtube Video Link" />
            </FloatingLabel>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add