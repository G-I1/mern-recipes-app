import React, { useState } from 'react';
import axios from 'axios';
import UserForms  from "../../components/userform/UserForm";
import {useCookies} from "react-cookie";
import {useNavigate} from 'react-router-dom';


 const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [_,setCookies] = useCookies(["access_token"])
    const navigate = useNavigate();

    const onSubmit = async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5010/auth/login",{
          username : userName,
          password: password
        });

        setCookies("access_token",res.data.token);
        window.localStorage.setItem("userId",res.data.userId);
        navigate("/");
        
      } catch (error) {
        return console.log(error);
      }
    }
  
    return (
      <div className="login-form">
        <UserForms
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          label="login"
          onSubmit={onSubmit}
        />
      </div>
    );
}

export default Login ; 