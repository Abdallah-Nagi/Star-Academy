import React, { useEffect } from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../helpers/context";
import { auth } from "../../config/firebase";
function Account() {
  const { userAuth, loadingAuth } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (loadingAuth === true) {
      return;
    } else if (userAuth) {
      navigate("/account");
    } else {
      navigate("/account/signup");
    }
  }, [userAuth, loadingAuth]);

  if (loadingAuth) {
    return (
      <section className="loading" style={{ marginTop: 200 }}>
        Loading....
      </section>
    );
  }
  return <section className="account">Your Account</section>;
}

export default Account;
