import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"


//add component call upload video to store the videos
export const uploadVideoAPI =  async (video) =>{

   return await commonAPI("POST",`${SERVER_URL}/videos`,video)

}

//get videos api called by view
export const getAllVideosAPI = async () =>{
   return await commonAPI("GET",`${SERVER_URL}/videos`,"")
}

//store watch history by video card


export const saveHistoryAPI = async (videoDetails) =>{
   return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch component to 

export const getHistoryAPI = async () =>{
   return await commonAPI("GET",`${SERVER_URL}/history`,"")
}


//remove history

export   const removeHistoryAPI = async (videoID) =>{
   return await commonAPI("DELETE",`${SERVER_URL}/history/${videoID}`,{})

}

//remove video by videoCard

export const removeVideoAPI =  async (videoId) =>{

   return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})

}

//add category
export const addCategoryAPI =  async (categoryDetails) =>{

   return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)

}

//get category
export const getCategoryAPI =  async () =>{

   return await commonAPI("GET",`${SERVER_URL}/categories`,"")

}
//remove category
//get category
export const removeCategoryAPI =  async (categoryId) =>{

   return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})

}

//get single video api
export const getAVideoAPI =  async (videoId) =>{

   return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")

}
//update category
export const updateCategoryAPI =  async (categoryId,updatedCategoryDetails) =>{

   return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)

}

//get single category api

export const getSingleCategoryAPI =  async (categoryId) =>{

   return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")

}