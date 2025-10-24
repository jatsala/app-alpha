import AppExpress from "@itznotabug/appexpress"
const router = new AppExpress.Router()

const getUser = ({ req, res, log, error }) => {
    const { username } = req.params
    res.json({ 'username': username })
}

const createUser = ({ req, res, log, error }) => {
    res.json({ 'postData': req.body })
}

router.get("/:username", getUser)
router.post("/", createUser)

export default router