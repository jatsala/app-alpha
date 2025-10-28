// import { Client, Databases, } from 'appwrite'
import { Client, Query, TablesDB, } from 'appwrite'


const appwriteConfig = {
    PROJECT_ID: process.env.PROJECT_ID,
    COLLECTION_ID: process.env.COLLECTION_ID,
    DATABASE_ID: process.env.DATABASE_ID,
}

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject(appwriteConfig.PROJECT_ID);

// export const db = new Databases(client);

const tablesDB = new TablesDB(client);

export { appwriteConfig, client, tablesDB }



