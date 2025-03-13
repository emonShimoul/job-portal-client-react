import React, { useEffect, useState } from "react";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  console.log(jobs);

  return (
    <div>
      <h2>Hot Jobs: {jobs.length}</h2>
    </div>
  );
};

export default HotJobs;
