import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";

const API_KEY = "8e5a762d77244a38b4272c6861688002";
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
