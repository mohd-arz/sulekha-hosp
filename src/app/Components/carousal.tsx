"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Loader from "./loader";
import { GoArrowDown } from "react-icons/go";


const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/carousal");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };

    fetchImages();
  }, []);

  // Image rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);
  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  // if (images.length === 0) {
  //   return <Loader />;
  // }

  const [depisOpen, setdepIsOpen] = useState(false);
  
  const [docisOpen, setdocIsOpen] = useState(false);

  const deptoggleDropdown = () => setdepIsOpen(!depisOpen);
  const doctoggleDropdown = () => setdocIsOpen(!docisOpen);


  return (
    <div className="relative flex items-center justify-center ml-auto w-full lg:w-11/12 h-[80vh] lg:h-[645px]">
      <img
        src={images[currentImage]}
        alt="carousel"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isTransitioning ? "opacity-50" : "opacity-100"
        }`}
      />

      <div className="absolute bottom-24 left-0 right-0 px-4 flex items-center justify-between w-full">
        <div className="flex flex-row space-x-4">
          <button
            className="group text-white bg-gray-100 rounded-full p-4 hover:bg-customBlue hover:text-white transition duration-300 ease-in-out outline:none"
            onClick={prevImage}
          >
            <IoIosArrowRoundBack className="text-2xl text-black group-hover:text-white" />
          </button>
          <button
            className="group text-white bg-gray-100 rounded-full p-4 hover:bg-customBlue hover:text-white transition duration-300 ease-in-out outline:none"
            onClick={nextImage}
          >
            <IoIosArrowRoundForward className="text-2xl text-black group-hover:text-white" />
          </button>
        </div>

        <div className="flex items-center  h-24 bg-white w-10/12 mr-auto ml-4">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-customBlue h-full px-4 flex flex-row ">
              <span className="text-white text-sm flex items-center">
                Book your Appointments <br /> with Zulekha Hospital
              </span>
              <select className="flex-grow  outline:none  text-white py-4 px-4 bg-customBlue leading-tight focus:outline-none focus:shadow-outline ">
                <option value="option1" className="text-white">
                  zh dubai
                </option>
                <option value="option2" className="text-white">
                  zh sharja
                </option>
                <option value="option3" className="text-white">
                  zmc quasis
                </option>
                <option value="option3" className="text-white">
                  zmc Alkhan
                </option>
              </select>
            </div>
            <div
              className="w-0 h-0  border-t-[48px] border-t-transparent
              border-l-[30px] border-l-customBlue
              border-b-[48px] border-b-transparent"
            ></div>

            {/* <div className="flex-grow flex space-x-2 p-2">
              <select
                className="flex-grow border border-black outline-none text-black py-4 px-6"
                required
              >
                <option value="">Select Department</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              
              <select className="flex-grow border border-black outline:none  text-black py-4 px-2">
                <option value="">Select Doctor</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div> */}

            <div className="flex flex-grow flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2">
              <div className="relative w-full">
                <select
                  className="block appearance-none w-full bg-white border border-black text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onClick={deptoggleDropdown}
                  onBlur={() => setdepIsOpen(false)}
                >
                  <option value="">Select Department</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div
                  className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 text-2xl transform ${
                    depisOpen ? "rotate-180" : "rotate-0"
                  } transition-transform duration-200 ease-in-out`}
                >
                  <GoArrowDown />
                </div>
              </div>

              <div className="relative w-full">
                <select
                  className="block appearance-none w-full bg-white border border-black text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onClick={doctoggleDropdown}
                  onBlur={() => setdocIsOpen(false)}
                >
                  <option value="">Select Department</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div
                  className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 text-2xl transform ${
                    docisOpen ? "rotate-180" : "rotate-0"
                  } transition-transform duration-200 ease-in-out`}
                >
                  <GoArrowDown />
                </div>
              </div>
            </div>

            <button className="bg-green-500 h-full px-8 text-white text-2xl hover:bg-customBlue transition duration-500 ease-in-out">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
