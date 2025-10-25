// import { Client, Databases } from 'node-appwrite'

export const appwriteConfig = {
    PROJECT_ID: process.env.PROJECT_ID
    DATABASE_ID: process.env.DATABASE_ID
    COLLECTION_ID: process.env.COLLECTION_ID
}

console.log(appwriteConfig.PROJECT_ID)