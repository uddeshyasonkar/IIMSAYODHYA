import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import NameInfoBanner from "../components/NameInfoBanner";
import Form from "../components/Form";

const contactDetails = [
  { title: "Front Office GIET", details: "0130 – 2231313, 9728100273" },
  { title: "Front Office GCAD", details: "9992600600" },
  { title: "Head HR", details: "Mr. Mandan Mishra: 7496999707" },
  { title: "TPO and Head Alumni", details: "Ms. Geeta Kukreja: 9728100231" },
  {
    title: "Director, Admissions & Outreach",
    details: "Dr. Mohit Bansal: 8800553350",
  },
  { title: "Registrar", details: "Mr. Harish Kumar: 9728100240" },
  {
    title: "Head Administrator",
    details: "Mr. Lalit Gureja: 8295891200, 7496999255",
  },
  { title: "Dean Academics", details: "Mr. Sunny Singla: 9050301180" },
  {
    title: "Dean Student Welfare",
    details: "Mr. Ajay Kaushik: 9896896449",
  },
  { title: "Head IT", details: "Mr. Yogesh Khokhar: 9812357277" },
  {
    title: "Chief Safety and Security Officer | Transport Incharge",
    details: "Sub. Maj.(Retd.) Kuldeep Singh: 7496999254",
  },
];

const Contact = () => {
  ScrollToTop();
  return (
    <div className="w-full min-h-screen">
      <div
        id="hero"
        className="hero w-full min-h-screen bg-project-white h-[80vh] lg:h-[90vh] flex flex-col items-center justify-center gap-16 lg:gap-10 mt-10 md:mt-0 p-10 lg:p-0 lg:pt-32 text-center relative"
      >
        <div className="w-full lg:w-3/5 Barlow text-xl lg:text-lg italic font-normal">
          <p className="text-3xl">Get in Touch with Us</p>

          <p className="">
            If you have any questions regarding programs, facilities or have
            requests or suggestions to make, feel free to give us a call or fill
            out the form below. Request for a campus visit by submitting the
            form below.
          </p>
        </div>

        <div className="text-center Barlow text-xl lg:text-lg italic font-semibold">
          <p className="">Campus Address</p>
          <p className="">
            Village-Tanda Khulasa Post-Rauzagaon, Rudauli, Ayodhya
          </p>
          <br />
          {/* <br /> <p className="">Phone: 0130 – 2231313</p> */}
          <p className="">
            Email: <span className="underline">iimsrauzzagaon@gmail.com</span>
          </p>
          <br /> <p className="">Admission Helpline</p>
          <p className="">Phone: (+91) 7905202014</p>
          <p className="">Phone: (+91) 9116161612</p>
          <p className="">
            Email: <span className="underline">iimsrauzza@gmail.com</span>
          </p>
        </div>
      </div>
      <NameInfoBanner />

      {/* <Form /> */}
      <div className="py-10 px-6 p-0 lg:p-16 w-full h-max bg-project-white flex flex-col lg:flex-row items-center gap-10 lg:gap-16 text-center">
        {/* Left Section: Table */}
        <div className="w-full lg:w-1/2 bg-red-200">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold border-b">
                    Title
                  </th>
                  <th className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold border-b">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactDetails.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                  >
                    <td className="px-2 py-1 border-b text-gray-700">
                      {item.title}
                    </td>
                    <td className="px-2 py-1.5 border-b text-gray-700">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full lg:w-1/2 bg-red-200">
          <form className="bg-white shadow-md rounded-lg p-6 flex flex-col text-left gap-4">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
