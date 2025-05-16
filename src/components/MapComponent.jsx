import React from "react";

const MapComponent = () => {
  return (
    <div className="flex-1 w-full h-60 md:h-[400px] lg:h-90 rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7123.43974297807!2d81.695136!3d26.785198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a257f24572775%3A0x9ba0d9e09f4e5b8f!2sIIMS%20%26%20Indian%20Hospital!5e0!3m2!1sen!2sin!4v1747054694886!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default MapComponent;
