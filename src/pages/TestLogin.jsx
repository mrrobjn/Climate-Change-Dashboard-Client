import { useState } from "react";
import { toast } from "react-toastify";
import { signIn, signInWithGoogle } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const initState = {
  email: "",
  password: "",
};

const TestLogin = () => {
  const [info, setInfo] = useState(initState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(info.email, info.password);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => handleChange(e)}
          value={info.email}
          name="email"
          required
        />
        <input
          type="password"
          onChange={(e) => handleChange(e)}
          value={info.password}
          name="password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button type="button" onClick={()=>signInWithGoogle()}>GOOGLE</button>
    </div>
  );
};

export default TestLogin;
