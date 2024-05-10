"use client";

// pages/Navbar.tsx

import { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import Link from "next/link";

export default function Navbar() {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] =
    useState<boolean>(false);
  const [isPackagesDropdownOpen, setIsPackagesDropdownOpen] =
    useState<boolean>(false);
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);
  const [isPackagesHovered, setIsPackagesHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleEngClick = () => {
    console.log("English clicked");
  };

  const handleAraClick = () => {
    console.log("Arabic clicked");
  };
  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };
  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
  };

  const togglePackagesDropdown = () => {
    setIsPackagesDropdownOpen(!isPackagesDropdownOpen);
  };

  const closeAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(false);
  };

  const closePackagesDropdown = () => {
    setIsPackagesDropdownOpen(false);
  };
  return (
    <>
    <div className={`sticky top-0 z-50 ${hasScrolled ? "shadow-lg" : ""}`}>
      <nav className="bg-sky-50 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link
            href="#"
            className={`flex items-center justify-center w-full md:justify-center md:items-center md:w-auto transition-transform duration-300 focus:outline-none ${
              hasScrolled ? "scale-75" : ""
            }`}
          >
            <img
              src="/images/zulekha-hospital-logo.svg"
              className="h-16"
              alt="Flowbite Logo"
            />
          </Link>

          {/* Mobile menu button */}

          {/* Mobile menu */}
          <div
            className={`fixed top-0 right-0 h-full bg-gray-50 md:hidden z-50 transform transition-transform  ease-in-out duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button onClick={toggleMobileMenu}>
              <IoClose />
            </button>
            <div className="flex flex-col items-start p-4 ">
              <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    About us
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Packages
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/departments"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Departments
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/best_doctors_in_uae"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Find a Doctor
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/home_care"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Home care Services
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    href="/contact_us"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Contact
                  </Link>
                </li>
                <hr />
                <br />
                <li>
                  <Link
                    className="bg-blue-800 text-xs text-white py-2 px-4  rounded-3xl items-center hover:bg-green-500"
                    href="/book_appoinment"
                  >
                    Make an appoinment
                  </Link>
                </li>

                <li>
                  <div className="bg-green-600 text-xs text-white py-1 px-2 border rounded-2xl mt-4 w-1/2 ">
                    <a
                      className="cursor-pointer hover:text-yellow-500"
                      onClick={handleEngClick}
                    >
                      Eng
                    </a>
                    <span className="mx-1">/</span>
                    <a
                      className="cursor-pointer hover:text-yellow-500"
                      onClick={handleAraClick}
                    >
                      Ara
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:w-auto">
          <ul className="flex flex-col text-sm p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-transparent text-sm">

              <li
                className="relative"
                onMouseEnter={() => {
                  toggleAboutUsDropdown();
                  setIsAboutUsHovered(true);
                }}
                onMouseLeave={() => {
                  closeAboutUsDropdown();
                  setIsAboutUsHovered(false);
                }}
              >
                <button className="flex items-center">
                  About Us{" "}
                  <MdArrowDropDown
                    className={`ml-1 ${
                      isAboutUsHovered && isAboutUsDropdownOpen
                        ? "-rotate-180 transition-transform duration-500 ease-in-out"
                        : "transition-transform duration-300 ease-in-out"
                    }`}
                  />
                </button>
                {isAboutUsDropdownOpen && (
                  <div className="absolute top-full -left-2  w-44 bg-white shadow-lg border border-gray-200 text-xs">
                    <div className="h-1 bg-green-500"></div>
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Comapnay Overview
                    </Link>
                    <hr />
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Leadership
                    </Link>
                    <hr />
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Quality
                    </Link>
                    <hr />
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Recognition
                    </Link>
                    <hr />
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Corporate Social Responsibility (CSR)
                    </Link>
                    <hr />
                  </div>
                )}
              </li>
              <li
                className="relative"
                onMouseEnter={() => {
                  togglePackagesDropdown();
                  setIsPackagesHovered(true);
                }}
                onMouseLeave={() => {
                  closePackagesDropdown();
                  setIsPackagesHovered(false);
                }}
              >
                <button className="flex items-center">
                  Packages
                  <MdArrowDropDown
                    className={`ml-1 ${
                      isPackagesHovered && isPackagesDropdownOpen
                        ? "-rotate-180 transition-transform duration-500 ease-in-out"
                        : "transition-transform duration-300 ease-in-out"
                    }`}
                  />
                </button>
                {isPackagesDropdownOpen && (
                  <div className="absolute top-full -left-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 text-xs">
                    <div className="h-1 bg-green-500"></div>
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Health Packages
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Bariatric Package
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Cardiac Packages
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Dermatology Package
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      DXH One Day Packages
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Immunization Packages
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Maternity Packages
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Plastic Surgery Packages
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Testing And Therapy - Psychology
                    </Link>
                    <hr />
                    <Link
                      href="/packages"
                      className="block px-4 py-2 text-gray-800 hover:bg-customGreen  hover:text-white"
                    >
                      Vaccination Packages
                    </Link>
                    <hr />
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/departments"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  href="/best_doctors_in_uae"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Find a Doctor
                </Link>
              </li>

              <li>
                <Link
                  href="/home_care"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Home care services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact_us"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  className="bg-blue-800 md:text-sm text-xs text-white md:py-3 md:px-8 py-2 px-4 rounded-3xl items-center hover:bg-green-500"
                  href="/book_appoinment"
                >
                  Make an appoinment
                </Link>
              </li>
              <li>
                <div className="bg-green-600 text-xs text-white py-1 px-4 border rounded-2xl ">
                  <a
                    className="cursor-pointer hover:text-yellow-500"
                    onClick={handleEngClick}
                  >
                    Eng
                  </a>
                  <span className="mx-1">/</span>
                  <a
                    className="cursor-pointer hover:text-yellow-500"
                    onClick={handleAraClick}
                  >
                    Ara
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <button onClick={toggleDesktopMenu} className="ml-[-2rem]">
            <RiMenu2Fill className="text-2xl md:text-4xl mr-2" />
          </button>
          {/* Desktop dropdown menu */}
          {isDesktopMenuOpen && (
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fade-down animate-duration-1000 ">
              <button
                onClick={toggleDesktopMenu}
                className="absolute top-0 right-0 px-12 md:px-16 md:py-2"
              >
                <IoClose className="text-white hover:text-black text-5xl mt-2" />
              </button>
              <div className="container border rounded shadow-lg h-5/6 md:mx-4 flex flex-wrap justify-around p-8 overflow-y-scroll scrollbar-hide   animate-fade-up animate-duration-500 animate-delay-1000">
                {/* More Links */}
                <div className="flex-grow w-full md:w-1/4 mb-8 md:mb-0 md:pr-8 animate-fade-up animate-duration-1000 animate-delay-1000">
                  <h2 className="text-lg font-bold mb-4 text-sky-300">
                    More Links
                  </h2>
                  <hr className="border-gray-400" />
                  <ul className="overflow-hidden py-4 text-sm space-y-4">
                    {/* List of more links */}
                    <li>
                      <Link
                        href="#"
                        className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0"
                      >
                        Patient Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Life Support Training
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Media
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Dialysis on Holidays
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      CME Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Medical Tourism

                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Join Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Facility Tour
                      </Link>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
                {/* Departments */}
                <div className="flex-grow w-full md:w-2/4 mb-8 md:mb-0 md:px-8 animate-fade-up animate-duration-500 animate-delay-1000">
                  <h2 className="text-lg font-bold mb-4 text-sky-300">
                    Departments
                  </h2>
                  <hr className="border-gray-400" />
                  <ul className="overflow-hidden py-4 text-sm space-y-2 grid grid-cols-3 gap-x-3">
                    {/* List of departments */}
                    <li>
                    <Link
                        href="#"
                        className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0"
                      >
                        Patient Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Life Support Training
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Media
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Dialysis on Holidays
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      CME Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Medical Tourism

                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Join Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Facility Tour
                      </Link>
                    </li>
                    <li>
                    <Link
                        href="#"
                        className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0"
                      >
                        Patient Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Life Support Training
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Media
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Dialysis on Holidays
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      CME Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Medical Tourism

                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Join Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Facility Tour
                      </Link>
                    </li>
                    <li>
                    <Link
                        href="#"
                        className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0"
                      >
                        Patient Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Life Support Training
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Media
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Dialysis on Holidays
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      CME Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Medical Tourism

                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Join Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Facility Tour
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Life Support Training
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Media
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Dialysis on Holidays
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      CME Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Medical Tourism

                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Join Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Facility Tour
                      </Link>
                    </li>
                    <li>
                    <Link
                        href="#"
                        className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50%] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0"
                      >
                        Patient Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Life Support Training
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Media
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Dialysis on Holidays
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      CME Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Medical Tourism

                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Join Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white text-xs hover:text-gray-300 relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:h-[1px] before:w-0 hover:before:w-[50px] before:-bottom-2 before:left-0 after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[0%] after:bottom-2 after:right-0">
                      Facility Tour
                      </Link>
                    </li>
                    
                    
                    {/* Add more departments as needed */}
                  </ul>
                </div>
                {/* Address Section */}
                <div className="flex-grow w-full md:w-1/4  animate-fade-up animate-duration-500 animate-delay-1000">
                  <div>
                    <h5 className=" font-bold  text-sky-300">Address</h5>
                    {/* Add your address content here */}
                    <p className="text-white text-sm">P.O.Box 48577</p>
                    <p className="text-white text-sm">
                      Doha Street, Al Nadha 2, Al Qusais
                    </p>
                    <p className="text-white text-sm">Dubai, U.A.E.</p>
                  </div>
                  <div className="">
                    <h5 className=" font-bold  text-sky-300">FAX NO:</h5>
                    {/* Add your address content here */}
                    <p className="text-white text-sm mb-2">+9714 - 267 8855</p>
                    <hr className="border-gray-400 mb-2" />
                  </div>
                  <div className="">
                    <h5 className=" font-bold  text-sky-300 ">
                      FOR APPOINTMENTS:
                    </h5>
                    {/* Add your address content here */}
                    <p className="text-white text-sm mb-2">600 52 4442</p>
                    <hr className="border-gray-400 mb-2" />
                  </div>
                  <div className="">
                    <h5 className="text-md font-bold  text-sky-300">
                      MAKE AN APPOINTMENTS VIA WHATSAPP:
                    </h5>
                    {/* Add your address content here */}
                    <p className="text-white text-sm mb-2">+971 600524442</p>
                    <hr className="border-gray-400 mb-2" />
                  </div>
                  <div className="">
                    <h5 className="text-md font-bold  text-sky-300">
                      INFORMATION:
                    </h5>
                    {/* Add your address content here */}
                    <p className="text-white text-sm mb-2">
                      info@zulekhahospitals.com
                    </p>
                    <hr className="border-gray-400 mb-2 " />
                  </div>
                  <div className="">
                    <h5 className="text-md font-bold  text-sky-300">
                      SEND RESUME TO:
                    </h5>
                    {/* Add your address content here */}
                    <p className="text-white text-sm mb-2">
                      r@zulekhahospitals.com
                    </p>
                    <hr className="border-gray-400  mb-2 " />
                  </div>
                  <div className="">
                    <h5 className="text-md font-bold  text-sky-300">
                      NEAREST METRO STATION:
                    </h5>
                    {/* Add your address content here */}
                    <p className="text-white text-sm mb-2">Al Nahda</p>
                    <hr className="border-gray-400  mb-2" />
                    <hr className="border-gray-400 " />
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            className="inline-flex items-center -mt-10  justify-center text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <CiMenuBurger />
          </button>
        </div>
      </nav>
    </div>





    </>


  );
}
