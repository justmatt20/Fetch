import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Test() {
  const [states, setStates] = useState([]);

  let isRendered = useRef(false);
  useEffect(() => {
    isRendered = true;
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => setStates(response.data.states));
  }, []);

  const lives = states.map((state) => {
    return (
      <option key={state.id} value={state.abbreviation}>
        {state.abbreviation}
      </option>
    );
  });
  {
    return (
      <div className="flex flex-col space-y-1">
        <select
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
          required
        >
          {lives}
        </select>
      </div>
    );
  }
}
