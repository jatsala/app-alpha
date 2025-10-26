import { appwriteConfig, client } from '../lib/appwrite.js'
// import { Databases } from 'node-appwrite'
import { Databases, } from 'appwrite'


/* First EndPoin */
export async function getUser(req, res, log, error) {
    // const { username } = req.params
    // res.json({
    //     'status': 200,
    //     'username': username,
    //     'projectId': appwriteConfig.PROJECT_ID,
    //     'databaseId': appwriteConfig.DATABASE_ID,
    // })


    const { username } = req.params
    const db = new Databases(client);
    const response = await db.listDocuments({
        databaseId: appwriteConfig.DATABASE_ID,
        collectionId: appwriteConfig.COLLECTION_ID,
    });
    res.json({
        'status': 200,
        'username': username,
        'documents': response.documents
    })


    // res.send('Hello World!!!')

}

export function createUser(req, res, log, error) {
    const { data } = req.body
    res.json({
        'status': 201,
        'postData': data
    })
}