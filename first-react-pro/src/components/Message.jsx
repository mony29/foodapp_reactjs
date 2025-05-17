export default function Message() {
  function handleClick() {
    console.log("You clicked button");
  }
  return (
    <div>
      {/* 
      <button onClick={handleClick()}>Click here!</button> 
      The button click will render when application start but not handle on click
      */}
      <button onClick={handleClick}>Click here!</button>
    </div>
  );
}
