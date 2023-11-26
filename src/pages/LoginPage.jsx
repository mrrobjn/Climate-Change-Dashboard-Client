import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { signIn, signInWithGoogle } from "../auth/firebase";
import { Link, useNavigate } from "react-router-dom";
import "../assets/scss/pages/LoginPage.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import LoadingPage from "../components/LoadingPage";

const initState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [info, setInfo] = useState(initState);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    setIsLoading(true);
    if (user) {
      navigate("/");
    }
    setIsLoading(false);
  }, [user, loading]);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(info.email, info.password);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="login-page-container">
          <div className="login-container">
            <div className="logo-container">
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
              <h1>Welcome to CCD</h1>
              <p>Sign Up now to discover the full experience</p>
            </div>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={info.email}
                  name="email"
                  id="email"
                  required
                  placeholder="example@gmail.com"
                  className="input-field"
                />
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  value={info.password}
                  name="password"
                  id="password"
                  required
                  placeholder="***********"
                  className="input-field"
                />
                <div className="remember-checkbox">
                  <input type="checkbox" />
                  <label htmlFor="">remember me</label>
                </div>
                <button type="submit" className="login-btn">
                  Login to your account
                </button>
                <div className="or-line">
                  <div className="line"></div>
                  <span>or</span>
                  <div className="line"></div>
                </div>
                <button
                  type="button"
                  className="google-btn"
                  onClick={handleGoogleSignIn}
                >
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
                  Continue with Google
                </button>
                <div className="navigate-container">
                  <Link to="/register">Create new account</Link>
                  <p>
                    Forgot password?{" "}
                    <Link to="/reset_password">Recover my password</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
