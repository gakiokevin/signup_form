import React, { useState } from "react";
const Login = () => {
  const [FormData, updateData] = useState({
    name: "",
    phone_num: "",
    email: "",
    pswrd: "",
    confirm_passwrd: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData(() => ({ ...FormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>SIGNUP FORM</h3>
      <div className="inputs">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter your name ..."
          value={FormData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputs">
        <label htmlFor="phone_num">Phone Number</label>
        <input
          type="text"
          name="phone_num"
          id=""
          placeholder="Enter mobile number ..."
          value={FormData.phone_num}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputs">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your email ..."
          value={FormData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputs">
        <label htmlFor="pswrd">New Password</label>
        <input
          type="text"
          name="pswrd"
          id=""
          placeholder="Enter you new password..."
          value={FormData.pswrd}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputs">
        <label htmlFor="confirm_passwrd">Confirm Password</label>
        <input
          type="text"
          name="confirm_passwrd"
          id=""
          placeholder="Confirm your password..."
          value={FormData.confirm_passwrd}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};
export default Login;
