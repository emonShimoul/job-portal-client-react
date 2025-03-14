import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company, applicationDeadline } = useLoaderData();
  //   const job = useLoaderData();
  //   console.log(job);

  return (
    <div className="m-10 flex flex-col gap-4">
      <h2 className="text-3xl">Job Details for {title}</h2>
      <p>apply for: {company}</p>
      <p>deadline: {applicationDeadline}</p>

      <div>
        <button className="btn btn-primary">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
