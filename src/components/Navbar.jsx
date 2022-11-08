import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar(props) {
  const [menu, setmenu] = useState(false);

  const handleNav = () => {
    setmenu(!menu);
  };

  return (
    <div className="flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-2">
      <h1 className="w-full uppercase text-3xl text-[#00df9a] font-bold">
        React.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {menu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          menu
            ? "fixed left-0 top-0 w-[60%] h-ful bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full uppercase text-3xl text-[#00df9a] font-bold m-4">
          React.
        </h1>
        <ul className=" p-4 ">
          <li className="p-4 ">Home</li>
          <li className="p-4 ">Company</li>
          <li className="p-4 ">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
