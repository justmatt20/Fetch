import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Test() {
  const [jobs, setJobs] = useState([]);

  const defaultState = "Select a state";

  useEffect(() => {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => setJobs(response.data.occupations));
  }, []);

  const works = jobs.map((work) => {
    return <option>{work}</option>;
  });
  {
    return (
      <div className="flex flex-col space-y-1">
        <select
          className="border-2 rounded px-3 py-2 w-full focus:outline-orange focus:border-blue-400 focus:shadow "
          required
        >
          {works}
        </select>
      </div>
    );
  }
}
