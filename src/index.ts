import express from "express"
import axios   from "axios"
import dotenv  from "dotenv"

const app     = express()
const port    = 8080

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello there!")
})

app.listen(port, () => {
  console.log("up and running")
})
