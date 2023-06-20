import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import ErrorPage from "./components/Error/errorPage";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/Favorites";

const email = "victorio@gmail.com";
const password = "1234tuki";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const randomChar = () => {
    const randomNumber = Math.floor(Math.random() * 826 + 1);
    axios(`http://localhost:3001/rickandmorty/character/${randomNumber}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          if (characters.length < 8) {
            setCharacters([...characters, data]);
          } else {
            alert(`solo numeros hasta el 826 y solo 8 cartas`);
          }
        }
      });
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} random={randomChar} />
      ) : null}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id " element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
