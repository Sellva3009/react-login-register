import React from "react";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
  return (
    <div>
      <h1>Welcome "{user.displayName}" to the Dashboard!</h1>
      {!user && (
        <p>testing</p>
      )}
      {user && (
       <img src={user.photoURL} alt={user.email} /> 
      )}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Dashboard;
