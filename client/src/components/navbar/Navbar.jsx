import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./navbar.css";


 const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const logout = ()=>{
    setCookies("access_token","");
    window.localStorage.removeItem("userId");
    useNavigate("/");
  }
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button className="button-logout" onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Navbar ;
