import React,{useEffect,useState} from 'react';
import Rick_Morty from './components/Rick_Morty';
import Characters from './components/Characters';
import './App.css';




function App() {


  const[characters, Setcharacters]=useState([]);
  
  const urlApi= "https://rickandmortyapi.com/api/character"

  const character = ()=>{




fetch(urlApi)
.then(Response=> Response.json())
.then( data => Setcharacters(data.results) )
.catch(Error => console.log(Error))


  };

  useEffect(()=>{
  
    character(urlApi);
   
  }, [] )

 

  return (
    <>
    
    <Rick_Morty />
   
    <div className='container mt-5'>

    <Characters characters={characters} />

      
    </div>

    
    </>
    

    

  );
}

export default App;
