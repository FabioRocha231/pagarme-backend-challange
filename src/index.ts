import express from "express";
import { routes } from "./routes/routes";


const processId = process.pid;

const app = express();
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log(`Server is Running on port 3000, pid: ${processId}`))