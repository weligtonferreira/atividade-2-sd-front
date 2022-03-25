import React, { useContext, useEffect } from "react";
import { LoginButton, LoginButtonImg, LoginButtonLabel } from "./styles";

import googleIcon from "../../assets/search.png";
import { AuthContext } from "../../contexts/Auth";

export default function Login() {
  const { client, login, logout } = useContext(AuthContext);

  // const initClient = () => {
  //   const clientData = google.accounts.oauth2.initTokenClient;
  // };

  // useEffect(() => {
  //   initClient();
  // }, []);

  return (
    <main>
      <h1 className="App-title">Search Books</h1>
      <h3 className="App-text">Entre agora com a sua conta do Google</h3>
      <LoginButton>
        <LoginButtonImg src={googleIcon} />
        <LoginButtonLabel>Continue with Google</LoginButtonLabel>
      </LoginButton>
    </main>
  );
}
