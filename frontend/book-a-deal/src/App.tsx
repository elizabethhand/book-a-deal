import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Itempage from "./pages/Itempage";
import Register from "./pages/Register";
import Basket from "./pages/Basket";
import AddReview from "./pages/AddReview";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [baskets, setBaskets] = useState([])

  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    const fetchResults = (endpoint) =>
      fetch(`http://localhost:4000/${endpoint}`).then((resp) => resp.json());

    const dataFetches = [
      fetchResults("users").then(({ users }) => setUsers(users)),
      fetchResults("items").then(({ result }) => setItems(result)),
      fetchResults("reviews").then(({ result }) => setReviews(result)),
      fetchResults("basket").then(({ baskets }) => setBaskets(baskets)),
    ];


    Promise.all(dataFetches)
      .catch(setFetchError)
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} items={items} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login users={users} setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/items/:itemId">
            {isFetching && <>Loading...</>}
            {fetchError && <>Error fetching data</>}
            {!isFetching && !fetchError && (
              <Itempage items={items} reviews={reviews} users={users} currentUser={currentUser} baskets={baskets} />
            )}
          </Route>
          <Route path="/register">
            <Register setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/basket">
            <Basket currentUser={currentUser} />
          </Route>
          <Route path="/addreview/:itemId">
            <AddReview currentUser={currentUser} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
