import React from "react";

export default function Header() {
  return (
    <>
      <nav className="bg-orange shadow font-lex">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a className="text-2xl font-bold text-purple underline decoration-white transition-colors duration-200 transform  lg:text-3xl hover:text-gray-700 ">
                Fetch Rewards Frontend Take Home
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
