import React from "react";

function Contact(props) {
  return (
    <div className="w-full py-16 bg-black text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 py-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Want tips and tricks to optimze your low?
          </h1>
          <p>Signup to our newsletter and stay up to date. </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row w-full items-center justify-between">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 mx-auto py-3 text-black">
              Notify me
            </button>
          </div>
          <p>
            We care about the protextion of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
