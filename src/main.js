// import AppExpress from "@itznotabug/appexpress"
// const app = new AppExpress()
import * as express from 'express'
const app = express()

import userRoutes from './routes/userRoutes.js'
import authMiddleware from './middleware/auth.js'

// MIDDLEWARES
app.middleware(authMiddleware)

// Routes
app.use("/user", userRoutes)

const getRoutes = (req, res, next, log, error) => {
    res.json({ routes: ["/", "/user/:username", "/user"] })
}

app.get("/", getRoutes)

// Appwrite Function Entrypoint!
export default async (context) => await app.attach(context)