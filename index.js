import express, { json } from 'express';
const app = express();
import 'dotenv/config'
import './Models/db.js';
import cors from 'cors';
import AuthRouter from './Routes/AuthRouter.js';

const PORT = process.env.PORT || 8081;

app.get("/hi", (req, res) => {
    res.send("Hello, World!");
})

app.use(json());
app.use(cors());
app.use('/auth', AuthRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})