import config from "../config/config";
import { Client, ID, Storage } from "appwrite";

export class StorageService {
    client = new Client();
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.bucket = new Storage(this.client);
    }

    async uploadFile(file){
        try {
            const data = await this.bucket.createFile(
                config.appwriteBucketId, 
                ID.unique(),
                file
            );
            return data;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    }
}

const storageService = new StorageService();

export default storageService;

