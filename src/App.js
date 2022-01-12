import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("")

  const APP_ID = "66d4f346";
  const APP_KEY = "83fd11cbc0112cea556243a63ddac552";
  const api = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchData(api);
  }, [api]);

  const fetchData = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleSubmit = e => {
      e.preventDefault();
      setQuery(searchKeyword)
  }

  return (
    <div className="App">
      <form action="#">
        <input
         type="text" 
         value={searchKeyword}
         onChange={e => setSearchKeyword(e.target.value)}
        />
        <button
          type='submit'
          onClick={e => handleSubmit(e)}
        >Search
        </button>
      </form>

      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          label={recipe.recipe.label}
          img={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  );
}

export default App;
