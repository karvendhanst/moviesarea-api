import Movie from "../models/movie.model.js";

export const movieIndex = async(req, res)=>{
    try{
        const movies = await Movie.find()
        res.json(movies)
    }catch(error){
        res.json({message: error.message})
    }
} 

export const movieCreate = async(req, res)=>{
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try{
        const movie = await newMovie.save()
        res.status(201).json(movie)
    }
    catch(error){
        res.status(400).json({ message: error.message})
    }
} 

export const movieUpdate = async(req, res)=>{
   try{
    const updatedMovie = await Movie.findOneAndUpdate(
        {_id: req.params.id}, 
        {
        title: req.body.title,
        desc: req.body.desc,
        }
)
    res.status(200).json(updatedMovie)
   }catch(error){
    res.status(400).json({message: error.message})
   }
} 

export const movieDelete = async(req, res)=>{
    try{
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedMovie)
    }catch(error){
        res.status(500).json({message: error.message})
    } 
}