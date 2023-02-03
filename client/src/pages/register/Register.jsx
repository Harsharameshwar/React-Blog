import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",

  });
  const [error, setError] = useState(false);


  function handleonChange(e){
   const {name,value}=e.target;
   setUser(prevNote => {
    return {
      ...prevNote,
      [name]: value
    };
  });
  }
  const handleSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        user
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err)
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={handleonChange}
          autoComplete="off"
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={handleonChange}
          autoComplete="off"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={handleonChange}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      {/* <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button> */}
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}