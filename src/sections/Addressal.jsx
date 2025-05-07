import React from "react";

const AddressalData = [
  {
    id: 0,
    name: "Mrs. Anamika Gupta",
    title: "President, Indian Institute of Medical Science and Hospital",
    preAddressal: "A Message from the President",
    addressal: `Dear Members of the Indian Institute of Medical Science and Hospital Community. As we proudly present this prospectus for the Indian
            Institute of Medical Science and Hospital, it is my pleasure to
            extend a warm welcome to all current and prospective students,
            faculty, and stakeholders.
            <br />
            <br />
            Since our establishment in 2013, we have committed ourselves to
            providing job-oriented professional courses in Nursing and Pharmacy.
            Today, we stand as a beacon of excellence in education, affiliated
            with Abdul Kalam Technical University and approved by the Government
            of Uttar Pradesh.
            <br />
            <br />
            This prospectus is a testament to our journey, our values, and our
            aspirations. We aim not only to deliver quality education but also
            to foster research and provide a platform for the overall
            development of highly competent nursing and pharmacy professionals.
            Our dedication extends beyond the classroom, reaching into the
            communities we serve through various outreach programs.
            <br />
            <br />
            The pharmacy profession demands adherence to strict ethical
            practices, and our goal is to impart high-quality, value-based
            education with an international focus. As we grow, our vision is to
            become a global leader in Nursing and Pharmaceutical Sciences.
            <br />
            <br />
            I encourage you to explore the pages within and discover the story
            of the Indian Institute of Medical Science and Hospital. Your
            journey toward a rewarding career in healthcare begins here.
            <br />
            <br />
            Warm regards,`,
  },
  {
    id: 1,
    name: "Mr. D. K. Gupta",
    title:
      "Managing Director, Indian Institute of Medical Science and Hospital",
    preAddressal: "A Message from the Managing Director",
    addressal: `Dear Friends and Stakeholders of the Indian Institute of Medical Science and Hospital, It is with great pleasure that I introduce this prospectus, a reflection of our institution's commitment to excellence in nursing and pharmaceutical education.
 <br />
<br />
Since our inception, strategic direction has guided us towards becoming a center of excellence in pharmaceutical education and research. This prospectus serves as a snapshot of our achievements and the unique strengths that distinguish the Indian Institute of Medical Science and Hospital.
 <br />
            <br />
I extend my gratitude to the dedicated faculty and staff who have contributed to our growth and success. Together, we aim to present a comprehensive overview of our institution, emphasizing the academic prowess, ethical practices, and global perspective that define us.
 <br />
            <br />
As you peruse these pages, I invite you to join us in celebrating the accomplishments of our students, faculty, and the broader community we serve. Thank you for being a part of our journey toward excellence.`,
  },
];

const Addressal = () => {
  return (
    <div
      id="addressal"
      className="addressal py-20  w-full h-max  flex flex-row items-center justify-center gap-14 lg:gap-6 text-center"
    >
      <div className="flex  lg:w-2/3 flex-col lg:flex-row">
        <div className="flex-1  flex justify-center items-center flex-col gap-6 p-8 lg:p-0">
          <img src="./src/assets/MD.jpeg" alt="" className="" />

          <div className="">
            {/* name */}
            <p className="Zilla text-lg font-medium">Mrs. Anamika Gupta</p>
            {/* title */}
            <span className="Barlow text-sm">
              President, Indian Institute of Medical Science and Hospital
            </span>
          </div>
        </div>
        <div className="Barlow flex-1 px-12 flex flex-col gap-4 items-start justify-center ">
          {/* preAddressal */}
          <p className="w-full Zilla text-base font-semibold">
            "A Message from the President"
          </p>

          {/* addressal */}
          <p className="Barlow font-medium text-sm lg:text-sm leading-5">
            Dear Members of the Indian Institute of Medical Science and Hospital
            Community, As we proudly present this prospectus for the Indian
            Institute of Medical Science and Hospital, it is my pleasure to
            extend a warm welcome to all current and prospective students,
            faculty, and stakeholders.
            <br />
            <br />
            Since our establishment in 2013, we have committed ourselves to
            providing job-oriented professional courses in Nursing and Pharmacy.
            Today, we stand as a beacon of excellence in education, affiliated
            with Abdul Kalam Technical University and approved by the Government
            of Uttar Pradesh.
            <br />
            <br />
            This prospectus is a testament to our journey, our values, and our
            aspirations. We aim not only to deliver quality education but also
            to foster research and provide a platform for the overall
            development of highly competent nursing and pharmacy professionals.
            Our dedication extends beyond the classroom, reaching into the
            communities we serve through various outreach programs.
            <br />
            <br />
            The pharmacy profession demands adherence to strict ethical
            practices, and our goal is to impart high-quality, value-based
            education with an international focus. As we grow, our vision is to
            become a global leader in Nursing and Pharmaceutical Sciences.
            <br />
            <br />
            I encourage you to explore the pages within and discover the story
            of the Indian Institute of Medical Science and Hospital. Your
            journey toward a rewarding career in healthcare begins here.
            <br />
            <br />
            Warm regards,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addressal;
