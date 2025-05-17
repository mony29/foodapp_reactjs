import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState(null);

  const BASE_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "8e5a762d77244a38b4272c6861688002";

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${BASE_URL}?apiKey=${API_KEY}`);
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }
    fetchFood();
  }, [foodId]);

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{food.title}</h1>
      <img className={styles.image} src={food.image} alt={food.title} />

      <div className={styles.details}>
        <p><strong>Ready in:</strong> {food.readyInMinutes} minutes</p>
        <p><strong>Servings:</strong> {food.servings}</p>
        <p><strong>Vegetarian:</strong> {food.vegetarian ? "Yes" : "No"}</p>
        <p><strong>Vegan:</strong> {food.vegan ? "Yes" : "No"}</p>
        <p><strong>Gluten Free:</strong> {food.glutenFree ? "Yes" : "No"}</p>
        <p><strong>Dairy Free:</strong> {food.dairyFree ? "Yes" : "No"}</p>
        <p><strong>Price per Serving:</strong> ${food.pricePerServing.toFixed(2)}</p>
        <p><strong>Health Score:</strong> {food.healthScore}</p>
        <p><strong>Source:</strong> <a href={food.sourceUrl} target="_blank" rel="noopener noreferrer">{food.sourceName}</a></p>
      </div>

      <div className={styles.section}>
        <h2>Ingredients</h2>
        <ul>
          {food.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.original}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Instructions</h2>
        {food.analyzedInstructions.length > 0 ? (
          <ol>
            {food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
    </div>
  );
}
