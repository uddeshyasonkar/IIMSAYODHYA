import React from "react";

const CareerForm = () => {
  return (
    <div
      id="career-form"
      className="text-black p-10 lg:p-4 rounded-2xl flex-initial md:w-1/2 lg:w-full md:p-10 md:rounded-3xl"
    >
      <form action="" method="post" enctype="multipart/form-data" className="">
        <div className="md:w-full flex flex-col lg:flex-row justify-between gap-6 ">
          <div className="mb-4 w-full ">
            <label htmlFor="name" className="label">
              Candidate Name: *
            </label>

            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              className="text-field mt-2"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4 w-full ">
            <label htmlFor="email" className="label">
              Contact Number *
            </label>

            <input
              type="number"
              name="email"
              id="email"
              autoComplete="number"
              required
              placeholder="+91 1234567890"
              className="text-field mt-2"
            />
          </div>
        </div>

        <div className="md:w-full flex flex-col lg:flex-row justify-between gap-6">
          <div className="mb-4 w-full">
            <label htmlFor="email" className="label">
              EMAIL *
            </label>

            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              required
              placeholder="hello@example.com"
              className="text-field mt-2"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="email" className="label">
              Highest Qualification *
            </label>

            <select
              name="highest-qualification"
              id="highest-qualification"
              required
              className="text-field mt-2"
            >
              <option value="default">Highest qualification</option>
              <option value="B.A.">B.A.</option>
              <option value="B.Sc.">B.Sc.</option>
              <option value="B.Com.">B.Com.</option>
              <option value="B.Tech">B.Tech</option>
              <option value="B.Ed.">B.Ed.</option>
              <option value="BTC">BTC</option>
              <option value="Ph.D.">Ph.D.</option>
              <option value="others">others</option>
            </select>

            {/* <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              required
              placeholder="hello@example.com"
              className="text-field mt-2"
            /> */}
          </div>
        </div>

        <div className="md:w-full flex flex-col lg:flex-row justify-between gap-6">
          <div className="mb-4 w-full">
            <label htmlFor="experience" className="label">
              Experience (in years)*
            </label>

            <input
              type="number"
              name="experience"
              id="experience"
              autoComplete="experience"
              required
              placeholder="Enter your experience in years"
              className="text-field mt-2"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="resume" className="label">
              Upload ypur Resume (word / pdf Format):
            </label>

            {/* <input
              type="number"
              name="experience"
              autoComplete="experience"
              placeholder="Enter your experience in years"
			  /> */}
            <input
              required
              className=" mt-2"
              id="resume"
              type="file"
              name="file"
              accept=".doc, .docx, .pdf"
              placeholder="Upload your resume"
            ></input>
          </div>
        </div>

        <div className="mb-4 w-full lg:w-1/2">
          <label htmlFor="message" className="label">
            MESSAGE*
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="Type your message here"
            required
            className="text-field  resize-y min-h-32 max-h-80"
          ></textarea>
        </div>

        <div className="mb-4 grid place-items-center">
          <button
            type="submit"
            className="max-w-max h-10 flex items-center gap-2 px-12 rounded-3xl font-medium text-sm bg-black text-white "
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
