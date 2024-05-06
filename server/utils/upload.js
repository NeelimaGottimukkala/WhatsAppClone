import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();


const storage = new GridFsStorage({
    url: `mongodb://sujay:sujay1234@ac-tojnkbw-shard-00-00.uiom6po.mongodb.net:27017,ac-tojnkbw-shard-00-01.uiom6po.mongodb.net:27017,ac-tojnkbw-shard-00-02.uiom6po.mongodb.net:27017/?ssl=true&replicaSet=atlas-12eiml-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`,
    
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 