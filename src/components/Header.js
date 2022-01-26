import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const dog = <FontAwesomeIcon icon={faDog} />;

  return (
    <>
      <nav className="bg-orange shadow font-lex">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center ">
          <div className="flex items-center justify-between">
            <div className="text-3xl text-purple">
              {dog} {""}
              <a className="text-md font-bold text-purple underline decoration-white transition-colors duration-200 transform  md:text-3xl hover:text-gray-700 ">
                Fetch Rewards Frontend Take Home
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
