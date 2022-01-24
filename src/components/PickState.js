import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Test({ handleChange, state, handleClick }) {
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
      <option key={state.id} value={state.name}>
        {state.name}
      </option>
    );
  });
  {
    return (
      <div className="flex flex-col space-y-1">
        <label className="text-orange">Select a state*:</label>
        <select
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
          id="state"
          required
          value={state}
          onChange={handleChange}
          onClick={handleClick}
        >
          {lives}
        </select>
      </div>
    );
  }
}
