import React from 'react'
import {auth, provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }

  return (
    <div className='login_page'>
      <p>Sign in With Google to Continue to Blog</p>
      <button onClick={signInWithGoogle} className='login_btn'>Sign in with Google</button>
    </div>
  )
}

export default Login;