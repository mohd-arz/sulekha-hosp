"use client";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoUmbrellaSharp, IoGlobeSharp } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
import { TbUsersPlus } from "react-icons/tb";
import { FaCreditCard, FaPen } from "react-icons/fa";
import React, { useState, useEffect } from "react";

import { MdOutlinePhoneCallback, MdFeedback } from "react-icons/md";
export default function Header() {
  const menuItems = [
    { icon: <FaPen />, label: "Pre-Registration" },
    { icon: <FaCreditCard />, label: "Pay Online" },
    { icon: <BiSolidReport />, label: "Lab Report" },
    { icon: <MdOutlinePhoneCallback />, label: "Request for call back" },
    { icon: <MdFeedback />, label: "Feedback" },
    { icon: <IoUmbrellaSharp />, label: "Insurance" },
    { icon: <TbUsersPlus />, label: "Patients" },
    { icon: <IoGlobeSharp />, label: "International consultants" },
  ];

  return (
    <header className="bg-gray-100" >
      <div className="w-11/12 ml-auto justify-center items-center ">
        <div className="bg-customGreen h-40 w-full">
          <div className="py-8 px-4 md:px-12 flex flex-col md:flex-row justify-center items-center w-11/12">
            <div className="text-white text-center md:text-left mb-4 md:mb-0 md:mr-auto">
              <div className="py-2">
                <h1 className="text-4xl font-bold">Find a Doctor</h1>
              </div>
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    href="#"
                    className="text-white hover:text-gray-900 inline-flex items-center"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <IoIosArrowRoundForward />
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
                    >
                      Find a Doctor
                    </Link>
                  </div>
                </li>
              </ol>
            </div>
            <div className="relative rounded-lg w-full max-w-xl flex">
              <input
                type="text"
                className="rounded-full p-5 pl-12 w-full  focus:outline-none focus:shadow-outline"
                placeholder="Search Zulekha for Locations, Departments and Doctors"
                style={{ paddingRight: "3rem", fontSize: "15px" }}
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-12 text-3xl"
              >
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex bg-customBlue divide-x divide-gray-400 w-full md:w-11/12 overflow-x-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={"/"} // Ensure each `item` has a `to` attribute for routing
              className="flex flex-wrap items-center justify-center px-2 md:px-4 py-2 md:py-4 text-white text-center whitespace-nowrap hover:bg-green-600 min-w-max"
            >
              {item.icon}
              <span className="text-xs md:text-sm px-1 md:px-2">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
