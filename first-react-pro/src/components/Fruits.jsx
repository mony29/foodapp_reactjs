import Fruit from "./Fruit";

export default function Fruits() {
  // list array
  //   const fruits = ["Apple", "Banana", "Grape"];

  // array object
  const fruites = [
    { name: "apple", price: 10 },
    { name: "banana", price: 20 },
    { name: "grape", price: 10 },
    { name: "pineapple", price: 8 },
  ];

  return (
    <div>
      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul> */}
      {/* <ul>
        {fruites.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} {fruit.price}
          </li>
        ))}
      </ul> */}

      {/* Redering components inside a loop,
      Fruits is now called as Parent component
      Fruit is called as child component
       */}
      <ul>
        {fruites.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
