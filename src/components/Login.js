import React from "react";
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth,googleProvider);
            console.log(result.user);      
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={GoogleLogin}>Sign in with Google</button>
      <h4>Are you new user? <Link to="/register">Register</Link></h4>
    </div>
  );
};

export default Login;
