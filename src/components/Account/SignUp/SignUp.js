import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useGlobalContext } from "../../../helpers/context";
function SignUp() {
  const { user, setUser } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/account");
    } else {
      navigate("/account/signup");
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const newUser = userCredential.user;
        setUser(newUser);
        navigate("/account");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
      });
  };
  // states
  const [name, setName] = useState({
    value: "",
    isActive: false,
  });
  const [email, setEmail] = useState({
    value: "",
    isActive: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isActive: false,
  });
  const [isShown, setIsShown] = useState(false);
  // functions
  const handleName = (e) => {
    setName((prev) => ({ ...prev, value: e.target.value }));
    if (e.target.value.length > 0) {
      setName((prev) => ({ ...prev, isActive: true }));
    } else {
      setName((prev) => ({ ...prev, isActive: false }));
    }
  };
  const handleEmail = (e) => {
    setEmail((prev) => ({ ...prev, value: e.target.value }));
    if (e.target.value.length > 0) {
      setEmail((prev) => ({ ...prev, isActive: true }));
    } else {
      setEmail((prev) => ({ ...prev, isActive: false }));
    }
  };
  const handlePassword = (e) => {
    setPassword((prev) => ({ ...prev, value: e.target.value }));
    if (e.target.value.length > 0) {
      setPassword((prev) => ({ ...prev, isActive: true }));
    } else {
      setPassword((prev) => ({ ...prev, isActive: false }));
    }
  };

  return (
    <section className="form">
      <div className="account-wrapper">
        <div className="form-wrapper">
          <h4 className="form-title">Create Account</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="field-wrap">
              <label className={`${name.isActive ? "active" : ""}`}>
                Name<span className="req">*</span>
              </label>
              <input
                onChange={(e) => handleName(e)}
                value={name.value}
                type="text"
                required
                autoComplete="off"
              />
            </div>
            <div className="field-wrap">
              <label className={`${email.isActive ? "active" : ""}`}>
                Email<span className="req">*</span>
              </label>
              <input
                value={email.value}
                type="email"
                required
                autoComplete="off"
                onChange={(e) => handleEmail(e)}
              />
            </div>
            <div className="field-wrap">
              <label className={`${password.isActive ? "active" : ""}`}>
                Password<span className="req">*</span>
              </label>
              <input
                value={password.value}
                onChange={(e) => handlePassword(e)}
                type={isShown ? "text" : "password"}
                required
                autoComplete="off"
                className="password-input"
              />
              <span className="eye" onClick={() => setIsShown((prev) => !prev)}>
                {isShown ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-account">
                Get Started
              </button>
            </div>
          </form>
          <p className="form-paragraph">
            Already have an account,
            <Link className="redirect" to={"/account/login"}>
              Login.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;