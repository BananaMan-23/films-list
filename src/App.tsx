import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header"; // Убедитесь, что путь правильный
import ListMovies from "./components/ListMovies/ListMovies";

function App() {
  const [sortOption, setSortOption] = useState('');

  return (
    <div className="App">
      <Header sortOption={sortOption} setSortOption={setSortOption} />
      <ListMovies sortOption={sortOption} />
    </div>
  );
}

export default App;
