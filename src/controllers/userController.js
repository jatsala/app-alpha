/* First EndPoin */
export function getUser(req, res, log, error) {
    const { username } = req.params
    res.json({ 'username': username })
}

export function createUser(req, res, log, error) {
    const { data } = req.body
    res.json({ 'postData': data })
}