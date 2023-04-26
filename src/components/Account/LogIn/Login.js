import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Login() {
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
          <h4 className="form-title">Login</h4>
          <form>
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
                type="password"
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
