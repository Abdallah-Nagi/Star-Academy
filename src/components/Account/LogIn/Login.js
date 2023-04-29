import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useGlobalContext } from "../../../helpers/context";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
function Login() {
  const { userAuth, loadingAuth } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (loadingAuth) {
      return;
    } else if (userAuth) {
      navigate("/account");
    } else {
      navigate("/account/login");
    }
  }, [userAuth, loadingAuth]);
  // states
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
  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        navigate("/account");
      })
      .catch((error) => {
        console.log(error.message);
      });
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

  if (loadingAuth) {
    return (
      <section className="loading" style={{ marginTop: 200 }}>
        Loading...
      </section>
    );
  }

  return (
    <section className="form">
      <div className="account-wrapper">
        <div className="form-wrapper">
          <h4 className="form-title">Login</h4>
          <form onSubmit={(e) => handleLogin(e)}>
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
                type={`${isShown ? "text" : "password"}`}
                required
                autoComplete="off"
              />
              <span className="eye" onClick={() => setIsShown((prev) => !prev)}>
                {isShown ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="btn-container">
              <button type="submit" className="btn btn-account">
                Login
              </button>
            </div>
          </form>
          <p className="form-paragraph">
            Don't have an account,
            <Link className="redirect" to={"/account/signup"}>
              Create One.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
