import React from "react";
import HeaderButtons from "../components/headerButtons";
import LoggedInButtons from "../components/loggedinButtons";
import TextField from "@material-ui/core/TextField";

export default function Header({ currentUser, setCurrentUser }) {
  return (
    <div className="header">
      <h1 className="logo"> Book-a-deal</h1>
      <TextField type="text" placeholder="Search..."></TextField>
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
