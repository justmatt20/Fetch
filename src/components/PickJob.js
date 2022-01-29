import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Test({ info, handleChange }) {
  const [jobs, setJobs] = useState([]);

  let isRendered = useRef(false);
  useEffect(() => {
    isRendered = true;
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => setJobs(response.data.occupations));
  }, []);

  const works = jobs.map((work) => {
    return (
      <option key={work.id} value={work}>
        {work}
      </option>
    );
  });

  {
    return (
      <div className="flex flex-col space-y-1 ">
        <label className="text-orange ">Select an occupation*:</label>

        <select
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
          required
          name="occupation"
          value={info}
          onChange={handleChange}
        >
          {works}
        </select>
      </div>
    );
  }
}
