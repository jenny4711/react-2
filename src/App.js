import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";

import Snack from "./FoodItem";
import AddItem from './AddItem';

function App() {
  const ITEM = [
    {
      id: "choco-chip",
      name: "Choco-Chip",
      description: "sweet!",
      recipe: "Purchase one container of choco-Chipes",
      serve: "Serve in a hand-thrown ceramic bowl",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [addItem, setAddItem] = useState();
  const [category,setCategory]=useState("")
console.log(addItem)
  // const addIt = (newItem) => {
   
  //   setAddItem((addItem) =>  [{ ...newItem, id: addItem.name.toLowerCase() }]);
  // };


  async function saveItem() {
    if(category === 'snacks'){
      await SnackOrBoozeApi.addSnacks(addItem);
    }else if(category === 'drinks'){
      await SnackOrBoozeApi.addDrinks(addItem);
    }
    
  }

  

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    
   saveItem()
  
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
           
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            <Route exact path="/snacks">
              <Menu items={snacks} address={"snacks"} title="Snacks" />
            </Route>

            <Route exact path="/drinks">
              <Menu items={drinks} address={"drinks"} title="Drinks" />
            </Route>

            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>

            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>

            <Route path="/additem">
              <AddItem setAddItem={setAddItem} setCategory={setCategory}/>
            </Route>


            <Route>

              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
