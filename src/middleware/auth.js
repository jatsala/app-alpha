const authMiddleware = (req, __, log) => {
    const { token } = req.headers;

    if (!token) {
        log("No token");
    } else {
        log("There is a token..");
    }
};

export default authMiddleware;
