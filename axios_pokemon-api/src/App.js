import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  const [pokemonData, setPokemonData] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then((response)=>{
        console.log(response.data);
        setPokemonData(response.data.results)})
  }, []);


  return (
    <div className="App">
      {
        pokemonData.map((pokemon, index)=>(
          <div key={ index }>
            <ul>
              <li>
              { pokemon.name }
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;
