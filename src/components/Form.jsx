import React from "react";

const Form = () => {
  return (
    <div className="contact bg-yellow-200 text-black p-4 rounded-2xl flex-initial md:w-1/2 md:p-10 md:rounded-3xl">
      <span className="text-sm font-semibold tracking-wide">
        READY TO COLLABORATE?
      </span>

      <br />
      <br />

      <span className="text-base font-normal text-black">
        Let's create something epic together
      </span>

      <div className="mt-4 ">
        <form action="" method="post" className="">
          {/* <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                <div className="mb-4">
                  <label htmlFor="firstName" className="label">
                    FIRST NAME *
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="firstName"
                    required
                    className="text-field mt-2"
                    placeholder="John"
                  />
                </div> */}

          {/* <div className="mb-4">
                  <label htmlFor="lastName" className="label">
                    LAST NAME *
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="lastName"
                    required
                    className="text-field mt-2"
                    placeholder="Prasad"
                  />
                </div> */}
          {/* </div> */}

          <div className="md:w-full">
            <div className="mb-4">
              <label htmlFor="name" className="label">
                NAME *
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="text-field mt-2"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="md:w-full">
            <div className="mb-4">
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

            <div className="mb-4">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
