import React from "react";
import ScrollToTop from "../utils/ScrollToTop";
import NameInfoBanner from "../components/NameInfoBanner";
import Form from "../components/Form";

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
      <Form />
    </div>
  );
};

export default Contact;
