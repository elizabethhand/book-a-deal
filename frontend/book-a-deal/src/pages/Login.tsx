import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function LoginPage({ setCurrentUser, users, setUsers }) {
    // const classes = useStyles();
    const { register, getValues } = useForm();

    function logIn(event) {
        if (users) {
            let checkPassword = users.find(user =>
                user.username === getValues("username") &&
                user.password === getValues("password"))
            setCurrentUser(checkPassword.id)
        }

    }


    return (
        <main className='main-div'>
            <div className="login-container">
                <h1> Login</h1>
                <form className="register-form" style={{ width: 450 }}  >
                    <TextField {...register("username")} variant="outlined" type="text" placeholder="Username" ></TextField>
                    <TextField {...register("password")} variant="outlined" type="text" placeholder="Password" ></TextField>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        < Button onClick={logIn} type="submit" color="secondary" variant="contained"> Login</Button >
                    </Link>
                </form>
            </div>
        </main >
    )
}
