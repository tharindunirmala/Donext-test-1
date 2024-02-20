import logo from './logo.svg';
import BasicTable from './Components/BasicTable';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import AuthForm from './Components/AuthForm';
import background from './Assets/background.jpg';

import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAnimatedSignIn, setIsAnimatedSignIn] = useState(false);

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
    setIsAnimatedSignIn(!isAnimatedSignIn);
    };

  return (
    <div className={`wrapper ${isAnimatedSignIn ? 'animated-signin' : ''}`}>
    {/* <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh'}}>
      <AuthForm />
      <BasicTable/>
    </div>*/} 
      {isSignIn ? <SignIn toggleForm={handleToggleForm} /> : <SignUp toggleForm={handleToggleForm}/>}

    </div>
  );
}

export default App;
