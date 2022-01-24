import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import styles from "./pokemonCard.module.css";

function PokemonCard() {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [hasError, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
      .then(function (response) {
        setPokemonData(response);
      })
      .catch(setError(hasError));
  }, []);
  console.log(pokemonData);
  return (
    <>
      <Card
        title={pokemonName}
        hoverable={true}
        bordered={true}
        className={styles.card}
      >
        {" "}
        <div>
          <ul>
            <li>
              Type:{" "}
              {pokemonData.data
                ? pokemonData.data.genera[7].genus
                : "loading..."}
            </li>
            <li>
              Base happiness:{" "}
              {pokemonData.data
                ? pokemonData.data.base_happiness
                : "loading..."}
            </li>
            <li>
              Capture rate:{" "}
              {pokemonData.data ? pokemonData.data.capture_rate : "loading..."}
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
}

export default PokemonCard;
