import AppExpress from "@itznotabug/appexpress"
import * as controller from '../controllers/userController.js'

const router = new AppExpress.Router()

// const getUser = (req, res, log, error) => {
//     const { username } = req.params
//     res.json({ 'username': username })
// }

// const createUser = (req, res, log, error) => {
//     const { data } = req.body
//     res.json({ 'postData': data })
// }

// router.get("/:username", getUser)
// router.post("/", createUser)

router.get("/:username", controller.getUser)
router.post("/", controller.createUser)

export default router

