import React from "react";

export default function ({ handleChange, info }) {
  function verify(email) {
    if (email.includes("@") && email.includes(".")) {
      return true;
    } else {
      return alert("Please enter a valid email address");
    }
  }
  return (
    <div>
      <div className="flex flex-col space-y-1 mb-5 ">
        <label className="text-orange">Full Name*:</label>
        <input
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
          name="name"
          onChange={handleChange}
          type="text"
          value={info}
          placeholder="Full Name"
        />
      </div>
      <div className="flex flex-col mb-5  ">
        <label className="text-orange">Email*:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
          placeholder="Email Address"
          value={info}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col space-y-1 mb-5  ">
        <label className="text-orange">Password*:</label>
        <input
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
          name="password"
          onChange={handleChange}
          type="password"
          value={info}
          placeholder="Create a password"
        />
      </div>
    </div>
  );
}
