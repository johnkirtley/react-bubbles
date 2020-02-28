import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route

const Login = (props) => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  })

  const handleChanges = e => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', login)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        props.history.push('/bubble-page');

      })
      .catch(err => console.log("Error logging in", err));
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Email</label>
          <input type="text" name="username" value={login.username} onChange={handleChanges} />

          <label htmlFor="password"></label>
          <input type="text" name="password" value={login.password} onChange={handleChanges} />
          <button>Login</button>
        </form>
      </div>

    </>
  );
};

export default Login;
