import React, { useEffect, useState , Component } from "react";
import { Table } from 'react-bootstrap';

function Pokemons(){

  const [pokemons, setPokemons] = useState([])



  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then(res => res.json())
    .then(res => {
        setPokemons(res.results)
    })
  }, [])


      return(
        <Table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map(name=>(
                <tr>
                  <td>{name.name}</td>
                </tr>
          ))}
        </tbody>
        </Table>
      )
}

export default Pokemons
