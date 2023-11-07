import { useState } from "react";
import { signUp } from "../auth/firebase";
import { toast } from "react-toastify";

const initState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const TestRegister = () => {
  const [info, setInfo] = useState(initState);
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(info.name, info.email, info.password);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={info.name}
          name="name"
          required
        />
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
         <input
          type="password"
          onChange={(e) => handleChange(e)}
          value={info.passwordConfirm}
          name="passwordConfirm"
          required
        />
        <button type="submit">Create new account</button>
      </form>
    </div>
  );
};

export default TestRegister;
