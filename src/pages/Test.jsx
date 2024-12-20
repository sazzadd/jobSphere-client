import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Test = () => {
  return (
    <div className="p-10">
      {/* Fade Animation */}
      <Fade duration={2000} cascade>
        <h1 className="text-4xl font-bold text-center text-blue-500">
          Hello World (Fade Animation)
        </h1>
      </Fade>

      {/* Slide Animation */}
      <Slide direction="left" duration={1500}>
        <p className="text-lg text-center mt-4">
          This text slides in from the left!
        </p>
      </Slide>

      {/* Zoom Animation */}
      <Zoom duration={1000}>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
          Zoom Animation Button
        </button>
      </Zoom>
    </div>
  );
};

export default Test;
