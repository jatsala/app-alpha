// import { Client, Databases } from 'node-appwrite'
import { Client, Databases, } from 'appwrite'

export const appwriteConfig = {
    PROJECT_ID: process.env.PROJECT_ID,
    COLLECTION_ID: process.env.COLLECTION_ID,
    DATABASE_ID: process.env.DATABASE_ID,
}

export const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject(appwriteConfig.PROJECT_ID);

export const db = new Databases(client);



