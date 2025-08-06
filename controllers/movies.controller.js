import Movie from "../models/movie.model.js";

export const movieIndex = (req, res)=>{
    res.send("Get Movies List")
} 

export const movieCreate = async(req, res)=>{
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try{
        const movie = await newMovie.save()
        return res.status(201).json(movie)
    }
    catch(error){
        return res.status(400).json({ message: error.message})
    }
} 

export const movieUpdate = (req, res)=>{
    res.send("Update a Movie")
} 

export const movieDelete = (req, res)=>{
    res.send("Delete a Movie")
} 