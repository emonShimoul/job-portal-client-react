import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  // console.log(id, user);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;

    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkedin, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-1/2 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl mb-8 font-bold text-center">
            Apply Job and Good Luck!
          </h1>
          <form onSubmit={submitJobApplication} className="fieldset">
            <label className="fieldset-label">LinkedIn URL</label>
            <input
              type="url"
              name="linkedin"
              className="input w-full"
              placeholder="LinkedIn URL"
            />
            <label className="fieldset-label">GitHub URL</label>
            <input
              type="url"
              name="github"
              className="input w-full"
              placeholder="GitHub URL"
            />
            <label className="fieldset-label">Resume URL</label>
            <input
              type="url"
              name="resume"
              className="input w-full"
              placeholder="Resume URL"
            />
            <button className="btn btn-neutral mt-4">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
