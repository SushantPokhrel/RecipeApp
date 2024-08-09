import React from "react";
import CardContainer from "./CardContainer";

export default function Input() {
  const [searchValue, setSearchValue] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [searched, setSearched] = React.useState(false);

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  async function fetchApi() {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
      searchValue
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResult(data);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setSearched(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedSearchValue = searchValue.trim();

    // Prevent empty searches
    if (trimmedSearchValue === "") {
      setResult(null); // Clear previous results
      setSearched(true);
      return;
    }

    setSearched(false);
    fetchApi();
  }

  return (
    <div>
      <form className="form-get-recipe" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-search"
          placeholder="Search here..."
          id="search"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit" className="btn-search">
          Get Recipe
        </button>
      </form>

      {searched &&
        (result && result.meals && result.meals.length > 0 ? (
          <CardContainer result={result} />
        ) : (
          <h2 className="error-alert">No results found :(</h2>
        ))}
    </div>
  );
}
