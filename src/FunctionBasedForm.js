import React, { useState } from "react";
import logIn from "./log-in.png";

export const FunctionBasedForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    alert(`Login: ${login}, password: ${password}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <header>
        <img width="60" src={logIn} alt="log in" />
      </header>
      <label htmlFor="login">Login</label>
      <input
        onChange={(event) => setLogin(event.target.value)}
        id="login"
        name="login"
        type="text"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(event) => setPassword(event.target.value)}
        name="password"
        type="password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};
