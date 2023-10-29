import { Link } from "react-router-dom";
import "../assets/scss/pages/Login.scss";
import { useEffect, useState } from "react";
import getInitialTheme from "../utility/getInitialTheme";
import { formatDate } from "../utility/formatDateTime";

const Login = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(JSON.parse(localStorage.getItem("darkTheme")) || false);
    });

  }, []);
  return (
    <div className={`container-login ${theme ? "dark" : "light"}`}>
      <img className="container-login-img" src="/../../public/assets/images/login-regis-background.png" alt="" />
      <div className="container-login-container">
        <div className="container-login-container-left">

            <div className="container-login-container-left-logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="43"
                viewBox="0 0 63 43"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9946 20.7863V0.0403442H0.0426045C0.029604 0.280276 0.0106049 0.457702 0.0106049 0.634123C0.0106049 7.54272 -0.0203953 14.4513 0.0236053 21.3589C0.0401173 25.4931 1.30111 29.5245 3.63977 32.9202C4.3876 34.0289 5.2926 35.0249 6.1916 36.155L21.0366 21.1946"
                  fill="#1BBAFD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9586 21.1956V42.1643C23.3589 42.2321 25.7496 41.8309 27.9986 40.9828C36.2682 38.0234 41.8185 30.1656 41.8876 21.3196C41.9566 14.4372 41.9086 7.5548 41.9106 0.672411C41.9106 0.504056 41.8896 0.334694 41.8686 0L20.9536 21.0433"
                  fill="#FACA4A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.8346 21.1956V42.1643C44.2349 42.2321 46.6256 41.8309 48.8746 40.9828C57.1438 38.0231 62.6936 30.1654 62.7626 21.3196C62.8316 14.4372 62.7836 7.5548 62.7856 0.672411C62.7856 0.504056 62.7646 0.334694 62.7436 0L41.8286 21.0433"
                  fill="#F47690"
                />
              </svg>
            </div>
            <div className="welcome-to-ccd">
                Welcome to CCD
            </div>
            <div className="signupnow">
                Sign Up now to discover the full experience
            </div>
        </div>
        <div className="container-login-container-right">
          <div className="block-login">
            <div className="title-login">
              Log in
            </div>
            <div className="title-username">
              Username
            </div>
            <div className="username-bar">
              <input type="text" className="input-username" placeholder="Username"></input>
            </div>
            <div className="title-password">
              Password
            </div>
            <div className="password-bar">
              {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg> */}
              <input type="password" className="input-password" placeholder="Password">
                
              </input>
            </div>
            <div className="container-checkbox">
              <input className="cb-remember" type="checkbox"/>
              <div className="title-remember">
                remember me
              </div>
            </div>
            <div className='button-login'>
            <button className='button-login-your-account'>
              Log In to your account
            </button>
          </div>
          <div className="title-or">
            or
          </div>
          <div className='button-continue-gg'>
            <button className='button-continue-with-gg'>
              Continue with Google
            </button>
          </div>
          <div className="title-create">
            Create new account
          </div>
          <div className="forgot-password">
            <div className="title-forgot-password">
              Forgot password?
            </div>
            <div className="title-recover">
              Recover my password
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
