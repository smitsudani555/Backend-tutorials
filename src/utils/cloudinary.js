import {v2 as cloudinary} from "cloudinary"
import exp from "constants";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null;
        const responce = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //// console.log("file is uploader on cloudinary",responce.url);
        fs.unlinkSync(localFilePath)
        return responce
        
    }
    catch(error){
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}