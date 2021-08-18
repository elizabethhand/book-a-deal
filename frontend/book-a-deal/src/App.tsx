import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import "./styles/App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Itempage from "./pages/Itempage";
import Register from "./pages/Register";
import Basket from "./pages/Basket";
import { useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  const [users, setUsers] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then(setUsers);
  }, []);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ userName: "readA", passWord: "Password123" }),
  //   };
  //   fetch("http://localhost:4000/login", requestOptions)
  //     .then((response) => response.json())
  //     .then(setCurrentUser);
  // }, []);

  // console.log(currentUser);

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login
              users={users}
              setCurrentUser={setCurrentUser}
              setUsers={setUsers}
              currentUser={currentUser}
            />
          </Route>
          <Route path="/item">
            <Itempage />
          </Route>
          <Route path="/register">
            <Register setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
