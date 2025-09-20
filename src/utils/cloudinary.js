import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUINARY_CLOUD_NAME, 
  api_key: process.env.CLOUINARY_API_KEY, 
  api_secret: process.env.CLOUINARY_API_SECRET,
});

const uploadToCloud = async (filePath) => {
    try {
        if (!filePath) return null
        const response = await cloudinary.uploader.upload(filePath,{resource_type: "auto"})
        console.log("file uploaded on cloudinary", response.url);
        return response;
    } catch (error){
            fs.unlinkSync(filePath)
            return null;
    }

}

export {uploadToCloud}