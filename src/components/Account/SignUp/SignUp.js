import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useGlobalContext } from "../../../helpers/context";

function SignUp() {
  const { userAuth, loadingAuth } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    // if loading == true => didnt fetch user info from AuthState
    if (loadingAuth === true) {
      return;
    } else if (userAuth) {
      navigate("/account");
    } else {
      navigate("/account/signup");
    }
  }, [userAuth, loadingAuth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      await setDoc(doc(db, "users", res.user.uid), {
        name: name.value,
        email: email.value,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const docRef = await addDoc(collection(db, "users", userAuth.uid), {
    //     name: name.value,
    //     email: email.value,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
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

  // if loading is true => didn't fetch user auth
  if (loadingAuth) {
    return <section className="loading">Loading....</section>;
  }
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
