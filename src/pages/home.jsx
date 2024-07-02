import React from "react";
import {  useNavigate } from "react-router-dom";
const CustomHome = () => {
  const navigate = useNavigate();
  return(
    <div >
      <h1>Welcome to our Website </h1>
      <button onClick={(event) => {
        event.preventDefault();
        navigate('/login');
      }}>LogOut</button>
    </div>
  )
}

export default CustomHome;
