import { useState } from "react";
import { Button } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import styles from "./pokemonList.module.css";

function PokemonList() {
  const [pagination, setPagination] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [hasError, setError] = useState(false);
  const handleClick = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${pagination}`)
      .then(function (response) {
        console.log(response);
        setPokemonList(response.data.results);
      })
      .catch(setError(hasError))
      .then(setPagination(pagination + 20));
  };
  return (
    <>
      <div className="App">
        <ul>
          {pokemonList.map((pokemon) => (
            <li key={pokemon.name}>
              <NavLink
                to={{
                  pathname: `/pokemon_card/${pokemon.name}`,
                }}
              >
                {pokemon.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttonContainer">
        <Button onClick={handleClick}>
          {pagination !== 0 ? "Load more" : "Load pokemons"}
        </Button>
      </div>
    </>
  );
}

export default PokemonList;
