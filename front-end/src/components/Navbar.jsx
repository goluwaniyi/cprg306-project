import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="fixed w-full p-3 shadow-xl z-[100] bg-white h-20 text-black">
        <div className="flex justify-between items-center w-full h-full px-4 lg:px-12 max-w-[1240px] mx-auto">
          <div>
            <div>
              <Link to="/">
                <h4 className="font-bold text-3xl italic tracking-wide">
                  Trip<span className="text-red-500">Explorer</span>
                </h4>
              </Link>
              <h6 className="font-bold lg:tracking-wide text-sm lg:text-base">
                Where in the world are you going to?
              </h6>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-24 font-bold">
              <li className="cursor-pointer hover:text-red-500">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <HashLink smooth to="/#trips">Trips</HashLink>
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <HashLink smooth to="/#about">About</HashLink>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            {/* Hamburger Icon */}
            <div onClick={handleNav} className="lg:hidden z-9 ml-3">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-full h-screen bg-[#2B3945] p-4 ease-in duration-500 z-[100]"
                : "fixed left-[-100%] top-0 p-4 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-end px-6 py-9 ">
                <div onClick={handleNav} className="cursor-pointer relative">
                  <AiOutlineClose size={25} color={"#fff"} />
                </div>
              </div>
            </div>

            <div className="px-9 flex flex-col">
            <div>
              <Link href="/TripExplorer">
                <h4 className="font-bold text-3xl italic tracking-wide">
                  Trip Explorer
                </h4>
              </Link>
              <h6 className="font-bold lg:tracking-wide text-sm lg:text-base">
                Where in the world are you going to?
              </h6>
            </div>
              <div>
                <ul className="flex flex-col gap-6 text-lg my-10 text-white">
                  <li onClick={() => setNav(false)}>
                    <Link to="/">Home</Link>
                  </li>

                  <li onClick={() => setNav(false)}>
                    <HashLink smooth to="/#trips">Trips</HashLink>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <HashLink smooth to="/#about">About</HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
