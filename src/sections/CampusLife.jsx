import React from "react";

const socials = [
  {
    id: 1,
    icon: "./images/icons/fb.png",
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: "./images/icons/twitter.png",
    url: "https://x.com/",
  },
  {
    id: 3,
    icon: "./images/icons/instagram.png",
    url: "https://www.instagram.com",
  },
  {
    id: 4,
    icon: "./images/icons/yt.png",
    url: "https://www.youtube.com/",
  },
];

const feedImages = [
  "./images/feed/ig5.webp",
  "./images/feed/ig1.webp",
  "./images/feed/ig2.webp",
  "./images/feed/ig3.webp",
  "./images/feed/ig4.webp",
  "./images/feed/ig6.webp",
  "./images/feed/ig7.webp",
  "./images/feed/ig8.webp",
  "./images/feed/ig9.webp",
];

const CampusLife = () => {
  return (
    <div
      id="campusLife"
      className="campusLife py-20  w-full h-max  flex flex-row items-center justify-center gap-14 lg:gap-6 text-center"
    >
      <div className="flex flex-col lg:flex-row lg:w-2/3">
        <div className=" Barlow flex-1 p-10 flex  flex-col gap-8 lg:items-start items-center  justify-center">
          <div className="text-center lg:text-left flex flex-col gap-5 lg:gap-3 items-center lg:items-start ">
            <img src="./images/Rainbow.webp" alt="" className="h-22" />
            <h2 className=" Zilla  text-4xl font-bold">
              THIS IS OUR CAMPUS LIFE
            </h2>
            <p className=" text-lg text-justify">
              College life at IIMS, Ayodhya is a vibrant and enriching
              experience that goes beyond academics. Students engage in a
              variety of activities, including cultural events, sports
              competitions, and community service initiatives. The campus is a
              hub of creativity and collaboration, where students can explore
              their interests, develop leadership skills, and build lifelong
              friendships.
            </p>
            <button className=" px-10 py-3 rounded-full bg-project-black text-white">
              GALLERY
            </button>
          </div>
          <div className="">
            <div className="bg-white p-2 border-2 border-black hardShadow">
              <div className="bg-black">
                <p className="p-2 text-left text-xs text-white ">
                  Follow us on our social media handles to stay updated with the
                  latest news and events at IIMS, Ayodhya. We share photos,
                  videos, and stories that showcase the vibrant campus life..
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 cursor-pointer"
              >
                <img src={social.icon} alt="" className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center  p-6 md:p-6">
          <div className="grid grid-cols-3 gap-1 lg:gap-1  sm:grid-cols-3">
            {feedImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Feed ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
