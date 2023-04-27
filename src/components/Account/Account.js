import React, { useEffect } from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../helpers/context";
function Account() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/account/signup");
    } else {
      navigate("/account");
    }
  }, [user]);
  return <section className="account">Your Account</section>;
}

export default Account;
