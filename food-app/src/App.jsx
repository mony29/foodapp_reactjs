import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./App.css";
import ParentContainer from "./components/ParentContainer";
import InnerContainer from "./components/InnerComponent";
import FoodDetails from "./components/FoodDetails";
import Testing from "./components/testing";
import MainComponent from "./todolist";

function App() {
  // const [foodData, setFoodData] = useState([]);
  // const [foodId, setFoodId] = useState("658615");
  // return (
  //   <div className="app">
  //     <Navbar />
  //     <Search  foodData={foodData} setFoodData={setFoodData}/>
  //     <ParentContainer>
  //      <InnerContainer>
  //        <FoodList foodData={foodData} setFoodId={setFoodId} />
  //      </InnerContainer>
  //      <InnerContainer>
  //       <FoodDetails foodId={foodId} />
  //      </InnerContainer>
  //     </ParentContainer>
  //   </div>
  // );

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Code",
      done: false,
    },
    {
      id: 2,
      name: "Research",
      done: true,
    },
    {
      id: 3,
      name: "Sleep",
      done: false,
    },
    {
      id: 4,
      name: "Repeat",
      done: false,
    },
  ]);

  return (
    <div>
      {/* <Testing todoList={todoList} setTodoList={setTodoList} /> */}
      <MainComponent todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
