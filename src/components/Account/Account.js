import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  useEffect(() => {
    if (true) {
      navigate("/account/signup");
    }
  }, []);
  return <div>Account</div>;
}

export default Account;
