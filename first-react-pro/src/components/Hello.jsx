// Destructing value, {name, message} must be match with data to pass
// function Hello({name, messaage1 }) { // message1 : undefined
function Hello({ person }) {
  console.log(person.name);
  // console.log({person});
  // console.log(person.name);

  return (
    <div>
      Name: {person.name} <br />
      Age: {person.age}
    </div>
  );
}

export default Hello;
