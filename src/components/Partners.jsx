import React from "react";

const ContactInfo = [
  {
    id: 0,
    text: "+91-8009740607",
    icon: "call",
  },
  {
    id: 1,
    text: "+91-7905202014",
    icon: "call",
  },
  {
    id: 2,
    text: "iimsrauzza@gmail.com",
    icon: "mail",
  },
  {
    id: 3,
    text: "iimsrauzzagaon@gmail.com",
    icon: "mail",
  },
];

<<<<<<< Updated upstream
=======
const ContactInfo = [
  {
    id: 0,
    text: "+91-8009740607",
    icon: "call",
  },
  {
    id: 1,
    text: "+91-9116161612",
    icon: "call",
  },
  {
    id: 2,
    text: "iimsrauzza@gmail.com",
    icon: "mail",
  },
  {
    id: 3,
    text: "iimsrauzzagaon@gmail.com",
    icon: "mail",
  },
];

>>>>>>> Stashed changes
const Partners = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-8 ">
      <h2 className="Zilla text-project-red text-2xl font-bold">CONTACT US</h2>

      <div className="flex flex-col lg:flex-nowrap lg:flex-row items-start lg:items-center  justify-center gap-8 lg:gap-10  lg:text-center py-4 ">
        {/* {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src="./images/placeholderLogo.png"
            alt={`Partner ${index + 1}`}
            className="partner-image-class h-10 lg:h-16 mix-blend-multiply opacity-50"
          />
        ))} */}

        {ContactInfo.map((text, index) => (
          <span
            className="Barlow text-xl font-normal flex justify-center items-center gap-2 "
            key={index}
          >
            <span class="material-symbols-outlined">{text.icon}</span>
            {text.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Partners;
