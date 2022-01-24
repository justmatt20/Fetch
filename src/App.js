import React, { Component } from "react";
import Header from "./components/Header";
import axios from "axios";
import Form from "./components/Form";
import PickState from "./components/PickState";
import PickJob from "./components/PickJob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "",
        email: "",
        password: "",
        occupation: "",
        state: "",
      },
    };
  }

  dog = () => <FontAwesomeIcon icon={faDog} />;

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      info: { ...prevState.info, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const info = this.state.info;
    axios
      .post("https://frontend-take-home.fetchrewards.com/form", this.state.info)
      .then(() => {
        if (
          info.name === "" ||
          info.email === "" ||
          info.password === "" ||
          info.occupation === "" ||
          info.state === ""
        ) {
          alert("Please fill out all fields");
        } else {
          alert(
            `Thank you for submitting your information, ${this.state.info.name}! `
          );
          console.log(this.state.info);
        }
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <>
        <Header />
        <div className="min-h-screen  bg-purple pt-24 pb-5 font-lex">
          {" "}
          <div className="flex flex-col  justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
            {" "}
            <h1 className="font-bold text-center text-4xl text-orange">
              Take Home{" "}
            </h1>
            <div className="object-fill flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center text-purple underline decoration-orange ">
                Create an Account
              </h1>
              <Form
                handleChange={this.handleChange}
                post={this.state}
                handleSubmit={this.handleSubmit}
              />
              <PickJob
                handleChange={this.handleChange}
                post={this.state.info.occupation}
                handleSubmit={this.handleSubmit}
              />
              <PickState
                handleChange={this.handleChange}
                post={this.state.info.state}
                handleSubmit={this.handleSubmit}
              />
              <div className="flex flex-col sp ace-y-1">
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="bg-purple text-white font-bold px-5 py-2 rounded  focus:outline-none shadow hover:bg-blue-700 transition-colors mt-6"
                >
                  {this.dog()} {""}
                  Submit
                </button>
                <p className="text-sm text-purple text-opacity-50">*required</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
