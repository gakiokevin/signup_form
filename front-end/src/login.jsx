import React from "react";
const Login = ({ onclick }) => {
  return (
    <div className="login">
      <form action="" className="login">
        <h3>Welcome User</h3>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Password" required />
        <button type="Submit" className="loginBtn">
          LOGIN
        </button>
      </form>
      <p>
        No account yet?<button onClick={onclick}>Sign Up</button>
      </p>
    </div>
  );
};
export default Login;
