import React, { Suspense } from "react";
import { Register, Login } from "../../components/exports";
import "./auth.css";

const Auth = () => {
  return (
    <div className="auth_container">
      <Suspense>
        <Login />
        <div className="bar"></div>
        <Register />
      </Suspense>
    </div>
  );
};

export default Auth;
