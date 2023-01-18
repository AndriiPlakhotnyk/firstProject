import express from 'express'
import cors from "cors"
import ownerRouter from './src/routes/owner.routes.js';
import carRouter from './src/routes/car.routes.js';

const PORT = 5000;

const app = express()

app.use(cors())

app.use(express.json())
app.use('/api', ownerRouter)
app.use('/api', carRouter)

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))