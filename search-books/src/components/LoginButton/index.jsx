import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../../contexts/Auth";

export default function LoginButton() {
  const { setClient } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleFailure = (result) => {
    console.log("Error: ", result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
    setClient(googleData);
    navigate("/");
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Continue with Google"
      onSuccess={handleLogin}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
