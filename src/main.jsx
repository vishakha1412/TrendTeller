import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider ,Route,createBrowserRouter,createRoutesFromElements} from 'react-router'
 
import { Home } from './components/Home.jsx'
import { LatestNews } from './News/LatestNews.jsx'
import { MovieClub } from './Movie/MovieClub.jsx'
import { SearchMovie } from './Movie/SearchMovie.jsx'


 const router=createBrowserRouter( 
    createRoutesFromElements([
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/latestNews' element={<LatestNews/>}/>
        <Route path='/movie' element={<MovieClub/>}/>
        <Route path='/searchmovie' element={<SearchMovie/>}/>
      
      </Route>
    ])
 )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>

  </StrictMode>,
)
