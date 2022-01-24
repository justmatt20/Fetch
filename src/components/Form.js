import React, { useState } from "react";
import axios from "axios";
import PickState from "./PickState";
import PickJob from "./PickJob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

function TestForm2() {
  const dog = () => <FontAwesomeIcon icon={faDog} />;

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  console.log(values);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post("https://frontend-take-home.fetchrewards.com/form", values)
      .then(() => {
        if (
          values.name === "" ||
          values.email === "" ||
          values.password === ""
        ) {
          alert("Please fill out all fields");
        } else {
          alert(`Thank you for submitting your information, ${values.name}!`);
          console.log(values);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="min-h-screen  bg-purple pt-24 pb-5 font-lex">
      <div className="flex flex-col  justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
        <h1 className="font-bold text-center text-4xl text-orange">
          Take Home
        </h1>

        <div className="object-fill flex-col bg-white p-10 rounded-lg shadow space-y-6">
          <form>
            <h1 className="font-bold text-xl text-center text-purple underline decoration-orange ">
              Create an Account
            </h1>
            <div className="flex flex-col sp ace-y-1">
              <label className="text-orange">Full Name*:</label>
              <input
                type="text"
                required
                value={values.name}
                onChange={set("name")}
                className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
              />
            </div>
            <div className="flex flex-col sp ace-y-1">
              <label className="text-orange">Email*:</label>
              <input
                type="email"
                required
                value={values.email}
                onChange={set("email")}
                className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
              />
            </div>
            <div className="flex flex-col sp ace-y-1">
              <label className="text-orange">Password*:</label>
              <input
                type="password"
                required
                value={values.password}
                onChange={set("password")}
                className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
              />
            </div>

            <PickJob />
            <PickState
              onCLick={handleClick}
              onChange={set}
              state={values.state}
            />

            <div className="flex flex-col sp ace-y-1">
              <button
                type="submit"
                onClick={handleClick}
                className="bg-purple text-white font-bold px-5 py-2 rounded  focus:outline-none shadow hover:bg-blue-700 transition-colors mt-6"
              >
                {dog()} {""}
                Submit
              </button>
              <p className="text-sm text-purple text-opacity-50">*required</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TestForm2;
