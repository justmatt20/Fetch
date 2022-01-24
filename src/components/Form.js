import React from "react";

export default function ({ handleChange, info }) {
  return (
    <div>
      <div className="flex flex-col sp ace-y-1">
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
      <div className="flex flex-col sp ace-y-1">
        <label className="text-orange">Email*:</label>
        <input
          type="email"
          id="email"
          required
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
          name="email"
          onChange={handleChange}
          value={info}
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col sp ace-y-1">
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
