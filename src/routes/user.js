import AppExpress from "@itznotabug/appexpress"
const router = new AppExpress.Router()

const getUser = (req, res) => {
    const { username } = request.params
    res.json({ 'username': username })
}

const createUser = (req, res) => {
    res.json({ 'postData': request.body })
}

router.get("/:username", getUser)
router.post("/", createUser)

export default router