import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ListMovies from "./components/ListMovies/ListMovies";

function App() {
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Header
        sortOption={sortOption}
        setSortOption={setSortOption}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ListMovies sortOption={sortOption} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
