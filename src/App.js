import { Route, Routes, Redirect, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import PokemonCard from "./components/pokemonCard/pokemonCard";
import PokemonList from "./components/pokemonList/pokemonList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList/>} />
        <Route path="/pokemon_card/:pokemonName" element={<PokemonCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
