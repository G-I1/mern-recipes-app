import React, { useState } from "react";
import UserForms  from "../../components/userform/UserForm";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resMessage , setResMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5010/auth/register", {
        username: userName,
        email: userEmail,
        password: password,
      });
      setResMessage(res.data.message)
    } catch (error) {
     return console.log(error);
      
    }
  };

  return (
    <div className="register-form">
      <UserForms
        userName={userName}
        setUserName={setUserName}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
        label="register"
      />
      {resMessage ?<div className="message">{resMessage}</div>:""}
    </div>
  );
};

export default Register;