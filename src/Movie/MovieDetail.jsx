import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router';

export const MovieDetail = () => {
    const {id} =useParams();
    console.log('Movie ID from URL:', id);

    const [movie,setMovie]=useState('');
    const[error,setError]=useState(null);
    const API_KEY='d8e3e873f97d720456a96c8a7f837dd2';
  
    useEffect(() =>{
      fetchMovies(id);
    },[id])
    const fetchMovies =async () =>{
        if (!id) return;
        const url=`https://api.themoviedb.org/3/movie/${id}?api_key=d8e3e873f97d720456a96c8a7f837dd2`;
        try{
            const response=await axios.get(url);
            setMovie(response.data);
            console.log(response)
            console.log("hello")
            setError(null);
        }catch(error) {
            setError("Invalid Movie Id");
            console.log(error);
            setMovie(null);
        }
    }
  return (
     <>
     <div  className='bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4  bg-gradient-to-br from-red-300 via-yellow-300 to-orange-300 text-blue-800'>
     {movie && (
         <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">


      <div className= "flex flex-col lg:flex-row bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden"
>
        <div className="lg:w-1/2">
       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} ` } alt={movie.title} className="w-full h-64 sm:h-96 lg:h-full object-cover"

 /></div>

      <div className="lg:w-1/2 p-6 space-y-4 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-white">{movie.title}</h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">{movie.releaseDate} • {movie.genre} • {movie.runtime} min</p>

        <p className="text-zinc-700 dark:text-zinc-300 text-sm line-clamp-4 sm:text-base">{movie.overview}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-yellow-500 font-semibold text-lg">⭐ {movie.vote_average}/10</span>
          <NavLink to = {`https://www.youtube.com/results?search_query=${movie.title} trailer`} className="px-4 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition">
            Watch Trailer
             
          </NavLink>
        </div>
      </div>
    </div> </div>)}</div>


     </>
  )
}
