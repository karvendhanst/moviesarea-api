const express = require("express")
const { movieIndex, movieCreate,movieUpdate,movieDelete } = require("../controllers/movies.controller")

const router = express.Router()

router.get("/", movieIndex)

router.post("/", movieCreate)

router.put("/", movieUpdate)

router.delete("/", movieDelete)

module.exports = router