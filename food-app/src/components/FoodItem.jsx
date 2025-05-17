import styles from "./fooditem.module.css";

export default function FoodItem({ foodItem, setFoodId }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={foodItem.image} alt="" />
      <div className={styles.content}>
        <p>{foodItem.title}</p>
      </div>
      <div className={styles.btnContainer}>
        <button
          onClick={() => setFoodId(foodItem.id)}
          className={styles.button}
        >
          View
        </button>
      </div>
    </div>
  );
}
