import express from 'express' //ESM Ecmascript modules
import cors from 'cors'
import 'dotenv/config'
import router from './router';
import { connectDB } from './config/db';
import { corsConfig } from './config/cors';

connectDB()

//instancia de express
const app = express()

//cors
app.use(cors(corsConfig))

//leer datos
app.use(express.json())

//usar todos los routers
app.use('/', router)

export default app