import React from "react";
import Typed from "react-typed";

function Landing(props) {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] uppercase font-bold">
          Growing with data analytics
        </p>
        <h1 className="text-white font-bold md:text-5xl sm:text-4xl  text-4xl">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4 ">
            Fast, flexible finacing for
          </p>
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={100}
            backSpeed={100}
            loop
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platform.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
}

export default Landing;
