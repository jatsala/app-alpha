import { appwriteConfig, db } from '../lib/appwrite.js'
/* First EndPoin */
export async function getUser(req, res, log, error) {
    // const { username } = req.params
    // res.json({
    //     'status': 200,
    //     'username': username,
    //     'projectId': appwriteConfig.PROJECT_ID,
    //     'databaseId': appwriteConfig.DATABASE_ID,
    // })

    if (req.method === 'GET') {
        const { username } = req.params
        const response = await db.listDocuments({
            databaseId: appwriteConfig.DATABASE_ID,
            collectionId: appwriteConfig.COLLECTION_ID,
        });
        res.json({
            'status': 200,
            'username': username,
            'documents': response.documents
        })
    }

    res.send('Hello World!!!')

}

export function createUser(req, res, log, error) {
    const { data } = req.body
    res.json({
        'status': 201,
        'postData': data
    })
}