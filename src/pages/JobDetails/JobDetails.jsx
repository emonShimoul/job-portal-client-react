import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, applicationDeadline } = useLoaderData();

  return (
    <div className="m-10 flex flex-col gap-4">
      <h2 className="text-3xl">Job Details for {title}</h2>
      <p>apply for: {company}</p>
      <p>deadline: {applicationDeadline}</p>

      <div>
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
