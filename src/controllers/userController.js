import { PROJECT_ID } from '../lib/appwrite.js'
/* First EndPoin */
export function getUser(req, res, log, error) {
    const { username } = req.params
    res.json({
        'status': 200,
        'username': username,
        'projectId': appwriteConfig.PROJECT_ID,

    })
}

export function createUser(req, res, log, error) {
    const { data } = req.body
    res.json({
        'status': 201,
        'postData': data
    })
}