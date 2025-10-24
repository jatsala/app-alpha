export function requestTime(req, res, next, log, error) {
    req.requestTime = new Date().toISOString()
    next()
}