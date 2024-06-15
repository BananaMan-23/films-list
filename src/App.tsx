import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ListMovies from "./components/ListMovies/ListMovies";

function App() {
  return (
    <div className="App">
      <Header />
      <ListMovies />
    </div>
  );
}

export default App;
