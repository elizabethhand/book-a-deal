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
  const [basket, setBasket] = useState();

  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    const fetchResults = (endpoint) =>
      fetch(`http://localhost:4000/${endpoint}`).then((resp) => resp.json());

    const dataFetches = [
      fetchResults("users").then(({ users }) => setUsers(users)),
      fetchResults("items").then(({ result }) => setItems(result)),
      fetchResults("reviews").then(({ result }) => setReviews(result)),
    ];

    Promise.all(dataFetches)
      .catch(setFetchError)
      .finally(() => setIsFetching(false));
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetch(`http://localhost:4000/basket/${currentUser.id}`)
        .then((resp) => resp.json())
        .then(({ found }) => setBasket(found));
    }
  }, [currentUser]);

  function addToBasket(foundItem) {
    fetch("http://localhost:4000/basket-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qty: 1,
        basketId: basket.userId,
        itemId: foundItem.id,
      }),
    }).then(() => {
      fetch(`http://localhost:4000/basket/${currentUser.id}`)
        .then((resp) => resp.json())
        .then(({ found }) => setBasket(found));
    });
  }

  function decreseQuantity(item) {
    if (item.qty === 1) {
      fetch(`http://localhost:4000/basket-items/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        fetch(`http://localhost:4000/basket/${currentUser.id}`)
          .then((resp) => resp.json())
          .then(({ found }) => setBasket(found));
      });
    } else {
      fetch(`http://localhost:4000/basket-items/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qty: 1,
        }),
      }).then(() => {
        fetch(`http://localhost:4000/basket/${currentUser.id}`)
          .then((resp) => resp.json())
          .then(({ found }) => setBasket(found));
      });
    }
  }

  function deleteBasketItem(item) {
    fetch(`http://localhost:4000/basket-items/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetch(`http://localhost:4000/basket/${currentUser.id}`)
        .then((resp) => resp.json())
        .then(({ found }) => setBasket(found));
    });
  }

  let total = 0;

  if (basket) {
    for (const basketItem of basket.items) {
      let foundItem = items.find((item) => item.id === basketItem.itemId);
      total += basketItem.qty * foundItem.price;
    }
  }

  console.log(`total ${total}`);

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
              <Itempage
                items={items}
                reviews={reviews}
                users={users}
                currentUser={currentUser}
                addToBasket={addToBasket}
                basket={basket}
              />
            )}
          </Route>
          <Route path="/register">
            <Register setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/basket">
            <Basket
              basket={basket}
              items={items}
              total={total}
              addToBasket={addToBasket}
              deleteBasketItem={deleteBasketItem}
              decreseQuantity={decreseQuantity}
            />
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
