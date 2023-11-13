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
      <img
        className="container-login-img"
        src="/assets/images/login-regis-background.png"
        alt=""
      />
      <div className="container-login-container">
        <div className="container-login-container-left">
          <div className="container-bc">
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
          <div className="welcome-to-ccd">Welcome to CCD</div>
          <div className="title-sign-up-now">
            Sign Up now to discover the full experience
          </div>
          </div>
        </div>
        <div className="container-login-container-right">
          <div className="block-login">
            <div className="title-login">Log in</div>
            <div className="callout" data-closable>
              <button
                className="close-button"
                aria-label="Close alert"
                type="button"
                data-close
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </div>
            <div className="title-username">Email</div>
            <div className="username-bar">
              <input
                type="text"
                className="input-username"
                placeholder="example@gmail.com"
              ></input>
            </div>
            <div className="title-password">Password</div>
            <div className="password-bar">
              <input
                type="password"
                className="input-password"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              ></input>
              <button className="password-bar-eyeIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  
                  
                  
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </button>
            </div>
            <div className="container-checkbox">
              <label htmlFor="checkbox"></label>
              <input className="cb-remember" type="checkbox" />
              <div className="title-remember">remember me</div>
            </div>

            <div className="button-login">
              <button className="button-login-your-account">
                Log In to your account
              </button>
            </div>
            <div className="title-or">
              <div className="line1"></div>
              <div className="text-or">or</div>
              <div className="line2"></div>
            </div>
            <button className="button-continue-with-gg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <div className="text-ctn-gg">Continue with Google</div>
            </button>
            <div className="title-create">Create new account</div>
            <div className="forgot-password">
              <div className="title-forgot-password">Forgot password?</div>
              <div className="title-recover">Recover my password</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
