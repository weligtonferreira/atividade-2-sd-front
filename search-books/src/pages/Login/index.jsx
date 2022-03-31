import React from 'react';
import LoginButton from '../../components/LoginButton';

export default function Login() {
  return (
    <main>
      <h1 className='App-title'>SearchBooks</h1>
      <h3 className='App-text'>Entre agora com a sua conta do Google</h3>
      <LoginButton />
    </main>
  );
}
