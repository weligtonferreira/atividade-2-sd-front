import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { AuthContext } from "../../contexts/Auth";

export default function Login() {
  const { client, login, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (response) => {
    console.log(response);

    login(response);
    navigate("/");
  };

  return (
    <main>
      <h1 className="App-title">Search Books</h1>
      <h3 className="App-text">Entre agora com a sua conta do Google</h3>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Continue with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </main>
  );
}
