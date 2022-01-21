import React, { Component } from "react";
import axios from "axios";
import PickJob from "./PickJob";
import PickState from "./PickState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      occupation: "",
      state: "",
    };
  }

  dog = () => <FontAwesomeIcon icon={faDog} />;

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
    e.preventDefault();
    console.log(this.state);
  };

  handleClick = (e) => {
    const { name, email, password, occupation, state } = this.state;
    axios
      .post("https://frontend-take-home.fetchrewards.com/form", {
        name: name,
        password: password,
        email: email,
        occupation: occupation,
        state: state,
      })
      .then((response) => {
        response.status(200).json({ message: "success" });
      })

      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div>
        <div className="min-h-screen  bg-purple pt-24 pb-5 font-lex">
          <div className="flex flex-col  justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
            <h1 className="font-bold text-center text-4xl text-orange">
              Take Home
            </h1>
            <form action="#">
              <div className="object-fill flex-col bg-white p-10 rounded-lg shadow space-y-6">
                <h1 className="font-bold text-xl text-center text-purple underline decoration-orange ">
                  Create an Account
                </h1>

                <div className="flex flex-col sp ace-y-1">
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.name}
                    className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={this.email}
                    onChange={this.handleChange}
                    className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={this.password}
                    onChange={this.handleChange}
                    className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
                    placeholder="Password"
                    required
                  />
                </div>

                <PickJob
                  type="text"
                  name="job"
                  value={this.occupation}
                  onChange={this.handleChange}
                />
                <PickState
                  type="text"
                  name="state"
                  value={this.state}
                  onChange={this.handleChange}
                />

                <div className="flex flex-col space-y-1">
                  <button
                    onClick={this.handleClick()}
                    type="submit"
                    className="bg-purple text-white font-bold px-5 py-2 rounded  focus:outline-none shadow hover:bg-blue-700 transition-colors"
                  >
                    {this.dog} Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center text-white text-sm">
              <p>&copy;2022. I love dogs, too.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
