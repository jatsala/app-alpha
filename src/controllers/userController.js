import { appwriteConfig, tablesDB, } from '../lib/appwrite.js'
import { Query, } from 'appwrite'

/* First EndPoin */
export async function getUser(req, res, log, error) {
    const { username } = req.params
    // const response = await db.listDocuments({
    //     databaseId: appwriteConfig.DATABASE_ID,
    //     collectionId: appwriteConfig.COLLECTION_ID,
    // });
    // res.json({
    //     'status': 200,
    //     'username': username,
    //     'documents': response.documents
    // })
    const response = await tablesDB.listRows({
        databaseId: appwriteConfig.DATABASE_ID,
        tableId: appwriteConfig.COLLECTION_ID,
        queries: [
            Query.notContains("$permissions", "$createdAt", "$updatedAt", "$permissions", "$sequence"),
            Query.orderAsc('username')
        ]
    });
    res.json({
        'status': 200,
        'documents': response
    })
}

export function createUser(req, res, log, error) {
    const { data } = req.body
    res.json({
        'status': 201,
        'postData': data
    })
}