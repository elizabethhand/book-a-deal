import React from "react";
import HeaderButtons from "../components/headerButtons";
import LoggedInButtons from "../components/loggedinButtons";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Header({ currentUser, setCurrentUser, items }) {
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  function search(event) {
    event.preventDefault();
    setSearchInput(event.target.q.value);

    let foundItem;

    if (searchInput) {
      foundItem = items.find(
        (item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.description.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (!foundItem) {
      alert("No matching items");
    } else {
      history.push(`/items/${foundItem.id}`);
    }
  }

  return (
    <div className="header">
      <h1> Book-a-deal</h1>
      <form id="form" onSubmit={search}>
        <input type="text" id="query" name="q" placeholder="Search..." />
        <button>Search</button>
      </form>
      {currentUser ? (
        <LoggedInButtons
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        <HeaderButtons />
      )}
    </div>
  );
}
