import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import './App.css'
import ParentContainer from "./components/ParentContainer";
import InnerContainer from "./components/InnerComponent";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="app">
      <Navbar />
      <Search  foodData={foodData} setFoodData={setFoodData}/>
      <ParentContainer>
       <InnerContainer>
         <FoodList foodData={foodData} setFoodId={setFoodId} />
       </InnerContainer>
       <InnerContainer>
        <FoodDetails foodId={foodId} />
       </InnerContainer>
      </ParentContainer>
    </div>
  );
}

export default App;
