"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; // Import FaWhatsapp icon
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsChatFill  } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";

import { ImArrowUp } from "react-icons/im";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolledDown(scrollOffset < currentScrollPos);
      setScrollOffset(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollOffset]);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollOffset(0);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setShowChat(true);
    }, 250); // Delay in milliseconds (3 seconds)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowChat(false);
  };
  return (
    <>
      {/* Sidebar on the right */}
      <div className="fixed top-90 -right-32 flex items-center justify-center transform -rotate-90 ">
        <div className="mt-0 flex w-72 py-2 flex-col items-center justify-center bg-customBlue text-white">
          <div className="flex h-full flex-row justify-between space-x-1 t">
            <Link href="/dubai">
              <div className="text-xs py-1 cursor-pointer font-bold hover:text-sky-400">
                DUBAI
              </div>
            </Link>
            <span className="text-[10px] py-1">|</span>{" "}
            {/* Customize the font size here */}
            <Link href="/sharjah">
              <div className="text-xs py-1 cursor-pointer font-bold hover:text-sky-400">
                SHARJAH
              </div>
            </Link>
            <span className="text-[10px] py-1">|</span>{" "}
            {/* Customize the font size here */}
            <Link href="/dubai">
              <div className="text-xs py-1 cursor-pointer font-bold hover:text-sky-400">
                ZMC
              </div>
            </Link>
            <span className="text-[10px] py-1">|</span>{" "}
            {/* Customize the font size here */}
            <Link href="/dubai">
              <div className="text-xs py-1 cursor-pointer font-bold hover:text-sky-400">
                ZMECR
              </div>
            </Link>
            <span className="text-[10px] py-1">|</span>{" "}
            {/* Customize the font size here */}
            <Link href="/dubai">
              <div className="text-xs py-1 cursor-pointer font-bold hover:text-sky-400">
                ZSMFC
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar on the left */}
      <div className="fixed top-52 -left-1 text-white flex flex-col justify-center items-center h-64  px-1 bg-white z-10">
        <div className="md:flex md:flex-col space-y-1 transform ">
          <Link href="/facebook">
            <div className=" p-2 cursor-pointer ">
              <FaFacebookF className="transform text-blue-500 hover:text-sky-700" />
            </div>
          </Link>
          <Link href="/instagram">
            <div className="p-2 cursor-pointer hover:text-sky-700">
              <FaInstagram className="transform text-purple-400 hover:text-sky-700" />
            </div>
          </Link>
          <Link href="/youtube">
            <div className="p-2 cursor-pointer">
              <FaYoutube className="transform text-red-500  hover:text-sky-700" />
            </div>
          </Link>
          <Link href="/twitter">
            <div className=" p-2 cursor-pointer ">
              <RiTwitterXLine className="transform text-black hover:text-sky-700" />
            </div>
          </Link>
          <Link href="/linkedin">
            <div className="  p-2 cursor-pointer ">
              <FaLinkedinIn className="transform text-sky-600 hover:text-sky-700" />
            </div>
          </Link>
          <Link href="/soundcloud">
            <div className=" p-2 cursor-pointer ">
              <FaSoundcloud className="transform text-orange-500 hover:text-sky-700" />
            </div>
          </Link>
        </div>
      </div>

      <div
        className="fixed bottom-28 right-6 bg-green-500 rounded-full p-2 cursor-pointer h-14 w-14 flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="rounded-full w-14 h-14 flex justify-center items-center bg-green-500">
          <Link href="https://api.whatsapp.com/send?phone=971600524442">
            <FaWhatsapp
              className={`transform ${
                isHovered
                  ? "rotate-45 transition-transform duration-500 ease-in-out"
                  : "transition-transform duration-300 ease-in-out"
              } text-white text-4xl`}
            />
          </Link>
          {showChat && (
            <div
              className={`absolute bg-green-500 text-white px-3 py-2 rounded-lg right-12 whitespace-nowrap transition-opacity duration-1000 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link href={"https://api.whatsapp.com/send?phone=971600524442"}>
                Chat with us
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="fixed bottom-12 right-6 bg-sky-500 rounded-full p-2 cursor-pointer h-14 w-14 flex justify-center items-center">
    <div className="rounded-full w-14 h-14 flex justify-center items-center bg-sky-500" style={{ transform: 'scaleX(-1)' }}>
        <Link href="">
            <BsChatFill className="text-4xl text-white" />
        </Link>
    </div>
</div>

   

      {/* Up arrow icon */}
      {/* {isScrolledDown && ( */}
      <div
        className={`fixed bottom-2 right-2 border-black border-2 rounded-full p-2 cursor-pointer h-10 w-10 flex justify-center items-center`}
        onClick={handleScrollUp}
      >
        <div className="rounded-full w-full h-full flex justify-center items-center ">
          <ImArrowUp className={`transform text-green-500 text-2xl`} />
        </div>
      </div>
      
  
    </>
  );
}
