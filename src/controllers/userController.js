/* First EndPoin */
export function getUser(req, res, log, error) {
    const { username } = req.params
    res.json({
        'status': 200,
        'username': username
    })
}

export function createUser(req, res, log, error) {
    const { data } = req.body
    res.json({
        'status': 201,
        'postData': data
    })
}