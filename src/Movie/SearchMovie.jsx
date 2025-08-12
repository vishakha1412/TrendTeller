import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router';

export const SearchMovie = () => {
    const[movie ,setMovie]=useState('')
    const [currentPage, setCurrentPage] = useState(1);
      const[movieFetch,setMovieFetch]=useState('');
    
    const [totalPages, setTotalPages] = useState(1);
     
 const url=  `https://api.themoviedb.org/3/search/movie?api_key=d8e3e873f97d720456a96c8a7f837dd2&page=${currentPage}&query=${encodeURIComponent(movieFetch)}`;


  /*const url=  `https://api.themoviedb.org/3/trending/movie/day?api_key=d8e3e873f97d720456a96c8a7f837dd2&page=${currentPage}`;*/


    const nextPage = () => {
  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
};

const prevPage = () => {
  setCurrentPage((prev) => Math.max(prev - 1, 1));
};

  const handleSearch = () => {
    if (movieFetch.trim()) fetchNews(movieFetch);
  };
  
    useEffect(()=>{
        fetchNews(currentPage);
       
},[currentPage])
    const fetchNews=async()=>{
        const response = await fetch( url  
    );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }   
        const data = await response.json();
       console.log(data)
        setMovie(data);
        setTotalPages(data.total_pages);

    }
  return (
     <><div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4  bg-gradient-to-br from-red-300 via-yellow-300 to-orange-300 text-blue-800'>
      <div className="bg-blue-100 px-6 py-4 flex justify-between items-center rounded-md space-x-4 mb-4">
        <h1 className="text-2xl font-bold text-blue-800">Trendy News</h1>
        <div className="flex gap-2 space-x-4 ">
          <input
            type="text"
            placeholder="Search Movie"
            value={movieFetch}
            onChange={(e) => setMovieFetch(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none space-x-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>
   
     <div className="bg-white/20 backdrop-blur-lg border border-white border-opacity-30 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
     
     {movie.results && movie.results.map((item) => (
      <NavLink to={`/movie/${item.id}`}>
            <div key={item.id} className="bg-white/20 bg-opacity-40 backdrop-blur-lg border border-white border-opacity-30 p-6 rounded-xl shadow-md hover:shadow-xl duration-300 object-fill hover:scale-105 transition-all h-full ">
                       
                     <div className="bg-white rounded shadow p-4 w-full h-full">
                       <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className='w-full' />
                        <h2 className="text-lg font-bold mt-2">{item.title}</h2>
                     <p className="text-sm text-gray-600">{item.overview}</p>
                     <h1>Release date :{item.release_date}</h1>
                     <h1>Popularty:{item.popularity}</h1>
                     <h1>Vote Average :{item.vote_average} </h1>
                     <h1>vote Count :{item.vote_count}</h1>
                     

  </div>
    </div> </NavLink>))}
      <div className="pagination-controls flex gap-3">
      <button className='rounded-2xl bg-red-500 p-4 hover:bg-red-600 hover:scale-105 text-white  h-[75px]' onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
      <span className='rounded-2xl bg-green-500 p-4 hover:bg-green-600 hover:scale-105 text-white  h-[75px] min-w-fit'>Page {currentPage} of {totalPages}</span>
      <button className='rounded-2xl bg-violet-500 p-4 hover:bg-violet-600 hover:scale-105 text-white h-[75px]' onClick={nextPage} disabled={currentPage === totalPages}>Next Page</button><span>

        <input type='text' placeholder='pagenumber'  value={currentPage}  className='bg-white text-black min-w-[4px] '
     onChange={(e) => setCurrentPage(e.target.value)}

             /> </span>
    </div>
  </div>


     </div>

     </>
  )
}

               
      