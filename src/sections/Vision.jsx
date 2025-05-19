import React from "react";

const Vision = () => {
  return (
    <div
      id="modules"
      className="hero p-5 lg:py-20 w-full h-max bg-project-white flex flex-col items-center gap-14 lg:gap-6 text-center"
    >
      <h2 className="Zilla text-project-red text-2xl font-bold">OUR VISION</h2>;
      <div className="lg:w-2/3 flex gap-6 lg:gap-12 px-4 ">
        <p className="Zilla text-2xl">
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
      </div>
    </div>
  );
};

export default Vision;
