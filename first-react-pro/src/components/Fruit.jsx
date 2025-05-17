export default function Fruit({ name, price }) {
  return (
    //   {name} {price}
    // fragement
    <>
      {price >= 10 ? (
        <li>
          name: {name}, price: {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
