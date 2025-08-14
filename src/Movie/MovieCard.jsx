import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router';

export const MovieCard = () => {
    const[movie ,setMovie]=useState(' ')
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false); 
    const [totalPages, setTotalPages] = useState(1);
    

 const url=  `https://api.themoviedb.org/3/trending/movie/day?api_key=d8e3e873f97d720456a96c8a7f837dd2&page=${currentPage}`;
   

    const nextPage = () => {
  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
};

const prevPage = () => {
  setCurrentPage((prev) => Math.max(prev - 1, 1));
};
  
    useEffect(()=>{
        fetchNews(currentPage);
       
},[currentPage])
    const fetchNews=async()=>{
setLoading('true');
        const response = await fetch( url  
    );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }   
        const data = await response.json();
      
        setMovie(data);
        setTotalPages(data.total_pages);
      setLoading('false');
    }
  return (
     <>
     <NavLink to='/searchmovie' className='bg-violet-500 rounded-2xl p-4 text-white m-2'>Search</NavLink>
   
     <div className="bg-white/20 backdrop-blur-lg border border-white border-opacity-30 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 grid lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-2  gap-4 h-fit">
     
     {movie.results && movie.results.map((item) => (
            <NavLink to={`/movie/${item.id}`}><div key={item.id} className="bg-white/20 bg-opacity-40 backdrop-blur-lg border border-white border-opacity-30 p-6 rounded-xl shadow-md hover:shadow-xl duration-300 object-fill hover:scale-105 transition-all h-full ">
                       
                     <div className="bg-white rounded shadow p-4 max-w-fit h-full">
                       <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <h2 className="text-lg font-bold mt-2">{item.title}</h2>
                     <p className="text-sm text-gray-600">{item.overview}</p>
                     <h1>Release date :{item.release_date}</h1>
                     <h1>Popularty:{item.popularity}</h1>
                     <h1>Vote Average :{item.vote_average} </h1>
                     <h1>vote Count :{item.vote_count}</h1>
                     

  </div>
    </div></NavLink>))}
      <div className="pagination-controls flex gap-3">
      <button className='rounded-2xl bg-red-500 p-4 hover:bg-red-600 hover:scale-105 text-white  h-[75px]' onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
      <span className='rounded-2xl bg-green-500 p-4 hover:bg-green-600 hover:scale-105 text-white  h-[75px] min-w-fit'>Page {currentPage} of {totalPages}</span>
      <button className='rounded-2xl bg-violet-500 p-4 hover:bg-violet-600 hover:scale-105 text-white h-[75px]' onClick={nextPage} disabled={currentPage === totalPages}>Next Page</button><span>

        <input type='text' placeholder='pagenumber'  value={currentPage}  className='bg-white text-black min-w-[4px] '
     onChange={(e) => setCurrentPage(e.target.value)}

             /> </span>
    </div>
    
  </div>


     

     </>
  )
}

               
      