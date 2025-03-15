import React from "react";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    console.log(newJob);
  };
  return (
    <div className="card bg-base-100 w-1/2 mx-auto my-6 shrink-0 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mt-6">Add a Job</h2>
      <div className="card-body">
        <form onSubmit={handleAddJob} className="fieldset">
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

          {/* Job type */}
          <label className="fieldset-label">Job Type</label>
          <select defaultValue="Pick a font" className="select select-ghost">
            <option disabled={true}>Pick a Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Intern</option>
          </select>

          {/* Job category */}
          <label className="fieldset-label">Job Field</label>
          <select defaultValue="Pick a font" className="select select-ghost">
            <option disabled={true}>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>

          {/* salary range */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div>
              <label className="fieldset-label">Salary Range</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Min"
              />
            </div>

            <div>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Max"
              />
            </div>

            <div>
              <select
                defaultValue="Pick a font"
                className="select select-ghost"
                name="currency"
              >
                <option disabled={true}>Pick a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>

          {/* job description */}
          <label className="fieldset-label">Job Description</label>
          <textarea
            className="textarea"
            name="description"
            placeholder="Job Description"
            required
          ></textarea>

          {/* Company name */}
          <label className="fieldset-label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />

          {/* job requirements */}
          <label className="fieldset-label">Job Requirements</label>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Put each requirements in a new line"
            required
          ></textarea>

          {/* job responsibilities */}
          <label className="fieldset-label">Job Responsibilities</label>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Put each responsibilities in a new line"
            required
          ></textarea>

          {/* HR email */}
          <label className="fieldset-label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input w-full"
            placeholder="HR Email"
          />

          {/* HR name */}
          <label className="fieldset-label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />

          {/* Company logo */}
          <label className="fieldset-label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo"
          />

          {/* Submit button */}
          <button className="btn btn-neutral mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
