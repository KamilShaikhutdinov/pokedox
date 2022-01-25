import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
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
        setPokemonList(response.data.results);
      })
      .catch(setError(hasError))
      .then(setPagination(pagination + 20));
  };
  return (
    <div className={styles.container}>
      <div className={styles.listArea}>
        <ul className={styles.pokemonList}>
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
      <div className={styles.buttonContainer}>
        <Button type="primary " onClick={handleClick} className={styles.button}>
          {pagination !== 0 ? "Load more" : "Load pokemons"}
        </Button>
      </div>
    </div>
  );
}

export default PokemonList;
