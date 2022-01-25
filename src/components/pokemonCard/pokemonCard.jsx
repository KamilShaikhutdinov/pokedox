import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import cardImage from "../../assets/images/bulbasaur.png";
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
    <div className={styles.flip}>
      <div className={[styles.flip, styles.inner].join(" ")}>
        <Card
          title={pokemonName}
          hoverable={true}
          bordered={true}
          className={[styles.flip, styles.front].join(" ")}
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
                {pokemonData.data
                  ? pokemonData.data.capture_rate
                  : "loading..."}
              </li>
            </ul>
          </div>
        </Card>
        <div className={[styles.flip, styles.back].join(" ")}>
          <img src={cardImage} alt="pokemon" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
