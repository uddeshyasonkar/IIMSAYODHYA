import React, { useState } from "react";

const AddressalData = [
  {
    id: 0,
    name: "Mr. D. K. Gupta",
    title:
      "Managing Director, Indian Institute of Medical Science and Hospital",
    imgUrl: "./images/director.jpeg",
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
As you peruse these pages, I invite you to join us in celebrating the accomplishments of our students, faculty, and the broader community we serve. Thank you for being a part of our journey toward excellence.
 <br />
            <br />
            Warm regards,`,
  },
  {
    id: 1,
    name: "Mrs. Anamika Gupta",
    title: "President, Indian Institute of Medical Science and Hospital",
    imgUrl: "./images/MD.jpeg",
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
            I encourage you to explore the pages within and discover the story
            of the Indian Institute of Medical Science and Hospital. Your
            journey toward a rewarding career in healthcare begins here.
            <br />
            <br />
            Warm regards,`,
  },
  {
    id: 3,
    name: "Dr. D R Bhuwan",
    title: " Secretary IIMS & Indian Hospital, Ayodhya",
    imgUrl: "./images/secretary.png",
    preAddressal: "A Message from the Secretary",
    addressal: ` I am extremely happy to address you as the Secretary of IIMS & 
INDIAN HOSPITAL.  Since its inception in the year 2012, the 
institution has been continuously striving towards maintaining 
high academic standards and excellence in the field of medical 
education. 
 <br />
<br />
We are committed to providing a variety of 
opportunities to our students to help them achieve their highest 
potential. Our aim is to inculcate in the students endurance, 
courage, compassion and dedication towards duty, as a result of 
which the students bring glory to themselves and the institution 
in the years to come.
 <br />
            <br />
We have a dedicated team of highly 
qualified range of expertise who work hard to provide the latest 
knowledge and skills to the students and as a result of this hard 
work, our students stand strong in any competition in the world.
 <br />
            <br />
 So I welcome all the new students and wish them a bright 
future.
 <br />
            <br />
            Warm regards,`,
  },
];

const Addressal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % AddressalData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + AddressalData.length) % AddressalData.length
    );
  };

  const currentData = AddressalData[currentIndex];

  return (
    <div
      id="addressal"
      className="addressal py-8 lg:py-20 w-full h-max flex flex-col items-center justify-center gap-8 lg:gap-0 text-center"
    >
      <div className="flex  lg:w-2/3 flex-col lg:flex-row ">
        <div className="flex-1 flex  items-center flex-col gap-6 p-4 lg:p-8 ">
          <div
            className="w-70 h-80 lg:h-110 lg:w-100 rounded-2xl overflow-hidden flex justify-center items-center"
            style={{
              backgroundImage: `url(${currentData.imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="">
            {/* name */}
            <p className="Zilla text-lg font-medium">{currentData.name}</p>
            {/* title */}
            <span className="Barlow text-sm">{currentData.title}</span>
          </div>
        </div>

        {/* Nav Buttons  */}
        <div className="flex justify-center  lg:hidden gap-4  lg:mt-6 ">
          <button onClick={handlePrev} className="px-4 py-2 cursor-pointer">
            <img src="./images/icons/arrow_left.png" alt="left" />
          </button>
          <button onClick={handleNext} className="px-4 py-2 cursor-pointer">
            <img src="./images/icons/arrow_right.png" alt="right" />
          </button>
        </div>

        <div className="Barlow flex-1 px-12 pt-8  flex flex-col gap-4 items-start  ">
          {/* preAddressal */}
          <p className="w-full Zilla text-base font-semibold">
            {currentData.preAddressal}
          </p>

          {/* addressal */}
          <p
            className="Zilla font-medium text-sm lg:text-sm leading-5"
            dangerouslySetInnerHTML={{ __html: currentData.addressal }}
          ></p>
        </div>
      </div>

      {/* Nav Buttons */}
      <div className="hidden lg:flex gap-4  lg:mt-6 ">
        <button onClick={handlePrev} className="px-4 py-2 cursor-pointer">
          <img src="./images/icons/arrow_left.png" alt="left" />
        </button>
        <button onClick={handleNext} className="px-4 py-2 cursor-pointer">
          <img src="./images/icons/arrow_right.png" alt="right" />
        </button>
      </div>
    </div>
  );
};

export default Addressal;
