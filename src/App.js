import React, { useState, useEffect } from "react";
import Header from "./component/ui/Header";
import CharacterGrid from "./component/characters/CharacterGrid";
import axios from "axios";
import Search from "./component/ui/Search";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      // console.log("axios직전");
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
    // console.log("useeffect종료");
  }, [query]);

  return (
    <div className="container">
      <Header></Header>
      <Search getQuery={(q) => setQuery(q)}></Search>
      <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    </div>
  );
};

export default App;
