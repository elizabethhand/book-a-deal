import React from "react"
import HeaderButtons from "../components/headerButtons";
import LoggedInButtons from "../components/loggedinButtons";
import TextField from '@material-ui/core/TextField';

export default function Header({ currentUser, setCurrentUser }) {
    console.log(currentUser)

    return (
        <div className="header">
            <h1> Book-a-deal</h1>
            <TextField type="text" placeholder="search"></TextField>
            {currentUser ? <LoggedInButtons currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <HeaderButtons />}
        </div >
    )
}