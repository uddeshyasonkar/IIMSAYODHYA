import React from "react";

const socials = [
  {
    id: 1,
    icon: "./images/icons/fb.png",
    url: "https://www.facebook.com/IIMSHospital/",
  },
  {
    id: 2,
    icon: "./images/icons/twitter.png",
    url: "https://x.com/",
  },
  {
    id: 3,
    icon: "./images/icons/instagram.png",
    url: "https://www.instagram.com/iims_indian_hospital/",
  },
  {
    id: 4,
    icon: "./images/icons/wa.png",
    url: "https://wa.me/+917905202014",
  },
];

const SocialsBar = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-center gap-4 bg-project-sec-red p-2 shadow-lg border border-gray-300 rounded-l-lg">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 cursor-pointer hover:scale-110 transition-transform"
        >
          <img src={social.icon} alt="" className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialsBar;
