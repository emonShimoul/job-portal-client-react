import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl">
        Applications for this job {applications.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>GitHub</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{app?.applicant_email}</td>
                <td>{app?.github}</td>
                <td>{app.resume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
