import React from "react";

const AddJob = () => {
  return (
    <div className="card bg-base-100 w-1/2 mx-auto my-6 shrink-0 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mt-6">Add a Job</h2>
      <div className="card-body">
        <form className="fieldset">
          {/* job title */}
          <label className="fieldset-label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job Title"
          />
          {/* job location */}
          <label className="fieldset-label">Job Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Job Location"
          />
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
