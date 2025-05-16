import React from "react";

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
    <div className="flex justify-center flex-col items-center gap-10">
      <h2 className="Zilla text-project-red text-2xl font-bold">
        OUR PARTNERS
      </h2>

      <div className="flex flex-wrap lg:flex-nowrap flex-row items-center justify-center gap-10 lg:gap-10 text-center py-4">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src="./images/placeholderLogo.png"
            alt={`Partner ${index + 1}`}
            className="partner-image-class h-10 lg:h-16 mix-blend-multiply opacity-50"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
