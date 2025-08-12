 
import { Outlet } from "react-router";
import Header from "./components/Header";
import { MovieCard } from "./Movie/MovieCard";
 
  
const apiKey = "5d97bbac5e144f8b905dc2e99bc8e4e9";
 

function App() {
  
   return(
    <>
    
    <Header/>
    <Outlet/>
    
  
     
    
   
    </>
   )
}

export default App;

   


 

     