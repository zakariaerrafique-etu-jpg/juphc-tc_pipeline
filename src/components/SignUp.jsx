import React, { useState } from "react";

function SignUp() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = () => {
    fetch("https://api.stayhealthy/register", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };

  return (
    <div>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={register}>Sign Up</button>
    </div>
  );
}

export default SignUp;

