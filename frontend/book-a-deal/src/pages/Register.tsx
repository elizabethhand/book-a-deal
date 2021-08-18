import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegisterPage({ setCurrentUser }) {
  const { register, getValues } = useForm();

  function registerUser() {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: getValues("username"),
        passWord: getValues("password"),
        firstName: getValues("firstName"),
        lastName: getValues("lastName"),
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setCurrentUser(data.id);
      });
  }

  return (
    <main className="main-div">
      <form className="register-form" style={{ width: 450 }}>
        <h1> Register</h1>
        <div className="details-div">
          <TextField
            {...register("firstName")}
            variant="outlined"
            type="text"
            placeholder="First Name"
          ></TextField>
          <TextField
            {...register("lastName")}
            variant="outlined"
            type="text"
            placeholder="Last Name"
          ></TextField>
        </div>
        <TextField
          {...register("username")}
          fullWidth
          variant="outlined"
          type="text"
          placeholder="Username"
        ></TextField>
        <TextField
          {...register("email")}
          fullWidth
          variant="outlined"
          type="text"
          placeholder="Email Address"
        ></TextField>
        <TextField
          {...register("password")}
          fullWidth
          variant="outlined"
          type="text"
          placeholder="Password"
        ></TextField>
        <FormControlLabel
          control={<Checkbox name="Promotions" />}
          label="I would like to recieve promotions and updates via email"
        />
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button color="secondary" variant="contained" onClick={registerUser}>
            {" "}
            Register
          </Button>
        </Link>
        <Link className="link"> Already have an account? Sign in here</Link>
      </form>
    </main>
  );
}
