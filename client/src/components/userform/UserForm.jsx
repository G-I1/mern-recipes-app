import React from "react";
import "./userform.css";

 const UserForms = ({
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className= "user_form">
      <h2>{label}</h2>
      <div className="user_form-group">
        <label htmlFor={`username-${label}`}>Username :</label>
        <input
          type="text"
          id={`username-${label}`}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {label === "register" ? <div className="user_form-group">
        <label htmlFor={`email-${label}`}>Email :</label>
        <input
          type="email"
          id={`email-${label}`}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>: ""}
      <div className="user_form-group">
        <label htmlFor={`password-${label}`}>Password :</label>
        <input
          type="password"
          id={`password-${label}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">{label}</button>
    </form>
  );
};

export default UserForms;