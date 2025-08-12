

 
 import React ,{useState} from 'react'
import { MovieCard } from './MovieCard'
 
 export const MovieClub = () => {

    
    return (
        <>
        <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4  bg-gradient-to-br from-red-300 via-yellow-300 to-orange-300 text-blue-800'>
         <h1>TRENDING MOVIES</h1>
         
          <MovieCard />
   
        
        </div>
        </>
     )
 }
 