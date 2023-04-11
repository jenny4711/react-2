import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import NotFound from './NotFound';
import Snack from "./FoodItem";
import AddItem from './AddItem';

function App() {
  // const ITEM = [
  //   {
  //     id: "choco-chip",
  //     name: "Choco-Chip",
  //     description: "sweet!",
  //     recipe: "Purchase one container of choco-Chipes",
  //     serve: "Serve in a hand-thrown ceramic bowl",
  //   },
  // ];

  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);




  
// get List from API
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

            {/* However, you shouldn’t solve this by just cloning the FoodMenu and FoodItem components — 
            you’d have so much duplicate code! Instead, turn these into generic components 
            that can work with either food or drink lists/items. 
            -changed to items and address */}

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
              <AddItem />
            </Route>

            {/* Make sure you handle not-found pages — if a visitor tries to go to a link that doesn’t work, 
            it should give a friendly 404-style message. If someone tries to go to a drink or food item that 
            doesn’t exist, it should redirect to the drinks or food items listing page. */}

            <Route path="/*">
            <NotFound/>
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
