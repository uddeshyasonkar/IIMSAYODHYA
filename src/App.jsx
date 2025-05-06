import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function WrappedApp() {
  // Routes
  // -->Home
  // -->AboutUs
  // -->Admissions
  // -->Courses
  // -->Gallery
  // -->Career
  // -->ContactUs
  return (
    <div className="App w-full h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        {/* <h1 className="Barlow text-7xl font-bold">404</h1> */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    // <ReactLenis root>
    <BrowserRouter>
      <WrappedApp />
    </BrowserRouter>
    // </ReactLenis>
  );
}

export default App;
