import express from 'express'
import pool from './src/db.js';
import userRouter from './src/routes/user.routes.js';


const PORT = 5000;

const app = express()


app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))