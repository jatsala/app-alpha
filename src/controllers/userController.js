import { PROJECT_ID, DATABASE_ID } from '../lib/appwrite.js'
/* First EndPoin */
export function getUser(req, res, log, error) {
    const { username } = req.params
    res.json({
        'status': 200,
        'username': username,
        'projectId': PROJECT_ID,
        'databaseId' DATABASE_ID,
    })
}

export function createUser(req, res, log, error) {
    const { data } = req.body
    res.json({
        'status': 201,
        'postData': data
    })
}