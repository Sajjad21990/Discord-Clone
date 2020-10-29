import React from "react";
import { Button } from "antd";
import { auth, provider } from "./firebase/firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(function (result) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="login"
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        className="login__logo"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "50vh",
          alignItems: "center",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png    "
          alt=""
          style={{ objectFit: "contain", height: "150px" }}
        />

        <Button
          onClick={signIn}
          style={{
            width: "300px",
            backgroundColor: "#738adb",
            color: "#eff2f5",
            fontWeight: "800",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
