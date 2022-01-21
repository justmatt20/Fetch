import React from "react";
import PickJob from "./PickJob";
import PickState from "./PickState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const dog = <FontAwesomeIcon icon={faDog} />;

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

              <div className="flex flex-col space-y-1">
                <input
                  type="text"
                  name="name"
                  id="name"
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
                  className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow"
                  placeholder="Password"
                  required
                />
              </div>

              <PickJob />
              <PickState />

              <div className="flex flex-col space-y-1">
                <button
                  type="submit"
                  className="bg-purple text-white font-bold px-5 py-2 rounded  focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  {dog} Submit
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
