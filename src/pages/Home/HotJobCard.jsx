import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2 m-4">
        <figure>
          <img className="w-16" src={company_logo} alt="lOGO" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-1 items-center">
            {" "}
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-secondary">New</div>
        <p>{description}</p>
        <div>
          {requirements.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
