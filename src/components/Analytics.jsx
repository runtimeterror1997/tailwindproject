import React from "react";
import background from "../assets/back_ground.jpeg";

function Analytics(props) {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={background} alt="hello" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] text-2xl font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            doloremque ex praesentium molestiae optio in rem recusandae illum
            aliquam quam quaerat facilis, nemo voluptas maiores doloribus
            possimus, consequuntur officia voluptates.
          </p>
          <button className="bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
