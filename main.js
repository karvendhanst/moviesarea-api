const express = require('express')
const app = express()
const movieRoutes = require("./routes/movies.route")
const db = require("./lib/db")

const PORT = 3000;
db()

app.use(express.json())


app.get("/", (req, res)=>{
    res.json({msg : "From Express"})
})

app.use("/movies", movieRoutes)

app.listen(PORT, ()=>{
    console.log(`Server Listening ${PORT}`);
})