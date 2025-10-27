import AppExpress from "@itznotabug/appexpress"
import * as controller from '../controllers/userController.js'
const router = new AppExpress.Router()

router.get("/:username", controller.getUser)
router.post("/", controller.createUser)

export default router