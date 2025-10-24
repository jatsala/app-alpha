import AppExpress from "@itznotabug/appexpress"
const app = new AppExpress()
import userRoutes from './routes/user.js'
import authMiddleware from './middleware/auth.js'

app.middleware(authMiddleware)
app.use("/user", userRoutes)

const getRoutes = (req, res, log, error) => {
    res.json({ routes: ["/", "/user/:username", "/user"] })
}

app.get("/", getRoutes)

export default async (context) => await app.attach(context)