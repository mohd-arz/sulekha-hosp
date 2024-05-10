"use client";
import Image from "next/image";
import Layout from "../app/rootlayout";
import Coming from "./Components/coming";
import Carousel from "./Components/carousal";
import { BsArrowRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { MdPhoneCallback } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { IoUmbrella } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./globals.css";
import Loader from "./Components/loader";

export default function Home() {
  // const images = [
  //   {
  //     src: "/images/Dr Abderezak Hadrouf.png",
  //     alt: "Burger",
  //     name: "Dr.Abderezak Hadrouf",
  //     designation: "ENT",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/Dr.-Ahmed-Fawwaz.png",
  //     alt: "Burger",
  //     name: "Dr.Ahmed Fawwaz",
  //     designation: "Orthopedics",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/DR_AALA_SALIM_AHMED.webp",
  //     alt: "Burger",
  //     name: "Dr. AALA SALIM AHMED",
  //     designation: "Psychiatry",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/DR_MOHAMMED_MOINUDDIN.webp",
  //     alt: "Burger",
  //     name: "Dr. MOHAMMED MOINUDDIN",
  //     designation: "Nephrology",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/Dr-Ajay-Raj-Gupta-Anesthilogy.webp",
  //     alt: "Burger",
  //     name: "Dr. Ajay Raj Gupta",
  //     designation: "Anesthesiology",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/Dr.Amarendra-Prasad.webp",
  //     alt: "Burger",
  //     name: "Dr.Amarendra Prasad",
  //     designation: "Paediatrics",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/dr-anuja-anna-varghese.webp",
  //     alt: "Burger",
  //     name: "Dr Anuja Anna Varghese",
  //     designation: "Dermatology",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/Dr-Ahmed-Javid.webp",
  //     alt: "Burger",
  //     name: "Dr.Ahmed Javid",
  //     designation: "Internal Medicine",
  //     place: "ZH Dubai",
  //   },
  //   {
  //     src: "/images/Dr-Lamya-Ibrahim.webp",
  //     alt: "Burger",
  //     name: "Dr.Lamya Ibrahim",
  //     designation: "Laboratory",
  //     place: "ZH Dubai",
  //   },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalDuration = 3000; // Change this value to adjust the sliding interval
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  interface Doctor {
    src: string;
    alt: string;
    name: string;
    designation: string;
    place: string;
  }
  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch("/api/doctors");
      const data = await response.json();
      setDoctors(data);
    };

    fetchDoctors();
  }, []);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(doctors.length) - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(doctors.length) - 3 : prevIndex - 1
    );
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    let intervalId = undefined;

    if (!isPaused) {
      intervalId = setInterval(() => {
        handleNext();
      }, intervalDuration);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isPaused]);

  {
    /* 2nd carousal function */
  }
  const carousalimages = [
    {
      src: "/images/mr-ahmadibrahimbusherinandmr-tahershamssigningthecontract-jpg.webp",
      alt: "Burger",
      heading: "Zulekha Healthcare Group partners with Dubai Sports Council",
      description:
        "Dubai, UAE: Zulekha Healthcare Group announced their collaboration with the Dubai Sports Council (DSC)",
    },
    {
      src: "/images/quality.webp",
      alt: "Burger",
      heading: "Experience a Higher Level of Surgical Care",
      description:
        "Zulekha Hospital, Dubai is now an accredited Centre of Excellence for Bariatric and Metabolic Surgery.",
    },
    {
      src: "/images/scas-scas-news.webp",
      alt: "Burger",
      heading:
        "Zulekha Hospital highlights importance of cardiac care alongside DCAS ",
      description:
        "The recent UAE National Health Survey identified CVDs as a significant health burden in the UAE ",
    },
    {
      src: "/images/breast-cancer.webp",
      alt: "Burger",
      heading:
        "Pink It Now- Zulekha Hospitals Breast Cancer Awareness Initiative",
      description: "Breast cancer checks can keep disease at bay",
    },
    {
      src: "/images/blood-donation.webp",
      alt: "Burger",
      heading: "Zulekha Hospital seeks more than 100 blood donors",
      description:
        "Sharjah - The hospital is hosting the 'Donate Blood. Save Life' campaign between 9am and 2pm in association with the Sharjah Blood Transfusion and Research Centre.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === Math.ceil(carousalimages.length) - 4 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(carousalimages.length) - 4 : prevIndex - 1
    );
  };

  {
    /* video popup function */
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Layout>
      <div className="bg-sky-50">
        <Carousel />
      </div>
      {/* 2nd component starts */}
      <div className="px-4 md:px-16 ">
        <div className="flex flex-col md:flex-row justify-center">
          {/* left part  */}
          <div className="w-full md:w-1/2 h-auto flex flex-col items-center md:items-left p-6 mt-8 md:mt-32">
            <div className="justify-center items-center px-20">
              <h1 className="text-customBlue text-5xl font-bold mb-4 text-left py-3 text-customBlue">
                Zulekha <br /> Health Packages
              </h1>

              <p className="text-black text-md mb-4 text-left py-3">
                The Zulekha Healthcare Group found its roots in 1964 when its
                creator Dr. Zulekha Daud moved from her native India to Sharjah,
                UAE in order to pursue her dream of serving people in need and
                offer affordable medical facilities to all.
              </p>
              <button className="group relative inline-flex overflow-hidden border border-customBlue border-opacity-50 px-2 py-3 md:w-[200px] sm-w-full font-medium text-white items-center">
                <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                <div className="relative flex flex-row items-center group-hover:text-white">
                  <span className="relative ml-1 text-customBlue group-hover:text-white text-sm">
                    View all packages
                  </span>
                  <BsArrowRight className="ml-4 my-auto  text-xl transition duration-300 ease-in-out text-customGreen group-hover:text-customGreen" />
                </div>
              </button>
            </div>
          </div>
          {/* right part  */}
          <div
            className="w-full md:w-2/3 custom-scroll scroll-smooth cursor-pointer mt-8 md:mt-0"
            style={{ overflowY: "auto", maxHeight: "700px" }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="mb-4 md:mr-4 md:mt-48">
                <div className=" icon relative mb-4">
                  <img src="/images/hp1.jpg" alt="Image 1" />
                  <div className="absolute bottom-0 left-0 w-16 bg-black bg-opacity-50 px-8 h-full flex flex-col justify-end hover:bg-whit">
                    <Link
                      href="#"
                      className="text-green-500 font-bold text-xl transform -rotate-90 whitespace-nowrap mb-16"
                    >
                      Health packages
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-white w-16 h-16 flex justify-center items-center">
                    <span className="text-customGreen text-3xl">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-customGreen hover:bg-black px-2 py-2">
                    <span className="text-white text-sm">View Details</span>
                  </div>
                </div>

                <div className=" icon relative mb-4">
                  <img src="/images/hp2.jpg" alt="Image 2" />
                  <div className="absolute bottom-0 left-0 w-16 bg-black bg-opacity-50 px-8 h-full flex flex-col justify-end">
                    <Link
                      href="#"
                      className="text-green-500 font-bold text-xl transform -rotate-90 whitespace-nowrap mb-16"
                    >
                      cardiac packages
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-white w-16 h-16 flex justify-center items-center">
                    <span className="text-customGreen text-3xl">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-customGreen hover:bg-black px-2 py-2">
                    <span className="text-white text-sm ">View Details</span>
                  </div>
                </div>
                <div className=" icon relative">
                  <img src="/images/hp3.jpg" alt="Image 3" />
                  <div className="absolute bottom-0 left-0 w-16 bg-black bg-opacity-50 px-8 h-full flex flex-col justify-end ">
                    <Link
                      href="#"
                      className="text-green-500 font-bold text-xl transform -rotate-90 whitespace-nowrap mb-16"
                    >
                      Bariatric packages
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-white w-16 h-16 flex justify-center items-center">
                    <span className="text-customGreen text-3xl">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-customGreen hover:bg-black px-2 py-2">
                    <span className="text-white text-sm">View Details</span>
                  </div>
                </div>
              </div>

              <div className=" mb-4 md:ml-4 md:-mt-48">
                <div className=" icon  relative mb-4">
                  <img src="/images/hp4.jpg" alt="Image 1" />
                  <div className="absolute bottom-0 left-0 w-16 bg-black bg-opacity-50 px-8 h-full flex flex-col justify-end">
                    <Link
                      href="#"
                      className="text-green-500 font-bold text-xl transform -rotate-90 whitespace-nowrap mb-16"
                    >
                      Maternity packages
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-white w-16 h-16 flex justify-center items-center">
                    <span className="text-customGreen text-3xl">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-customGreen hover:bg-black px-2 py-2">
                    <span className="text-white text-sm">View Details</span>
                  </div>
                </div>
                <div className=" icon  relative mb-4">
                  <img src="/images/hp5.jpg" alt="Image 2" />
                  <div className="absolute bottom-0 left-0 w-16 bg-black bg-opacity-50 px-8 h-full flex flex-col justify-end">
                    <Link
                      href="#"
                      className="text-green-500 font-bold text-xl transform -rotate-90 whitespace-nowrap mb-16"
                    >
                      Vaccination packages
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-white w-16 h-16 flex justify-center items-center">
                    <span className="text-customGreen text-3xl">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-customGreen hover:bg-black px-2 py-2">
                    <span className="text-white text-sm">View Details</span>
                  </div>
                </div>
                <div className="icon  relative">
                  <img src="/images/hp6.jpg" alt="Image 3" />
                  <div className="absolute bottom-0 left-0 w-16 bg-black bg-opacity-50 px-8 h-full flex flex-col justify-end">
                    <Link
                      href="#"
                      className="text-green-500 font-bold text-xl transform -rotate-90 whitespace-nowrap mb-16"
                    >
                      Plastic surgery packages
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-white w-16 h-16 flex justify-center items-center">
                    <span className="text-customGreen text-3xl">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-customGreen hover:bg-black px-2 py-2">
                    <span className="text-white text-sm">View Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd component starts */}
      <div className="h-auto ">
        <div
          className=" relative bg-cover flex items-center justify-center ml-auto w-11/12 bg-no-repeat"
          style={{ backgroundImage: "url('/images/old.png')" }}
        >
          <div className="w-3/5 h-full ml-auto ">
            <h1 className="text-5xl px-12 mt-24 font-bold text-white">
              Patient Care
            </h1>
            <div className="links-container flex flex-wrap px-12 mt-8 gap-4 mb-20">
              <Link
                href="/link1"
                className="flex items-center  px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <FaPen className="mr-2 text-xl" /> Pre-registration
              </Link>
              <Link
                href="/link1"
                className="flex items-center  px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <FaCreditCard className="mr-2 text-xl" /> Pay Online
              </Link>
              <Link
                href="/link1"
                className="flex items-center  px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <TbReport className="mr-2 text-2xl" /> Lab-report
              </Link>
              <Link
                href="/link1"
                className="flex items-center px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <MdPhoneCallback className="mr-2 text-2xl" /> Request a Call
                Back
              </Link>
              <Link
                href="/link1"
                className="flex items-center  px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <MdFeedback className="mr-2 text-2xl" />
                Feedback
              </Link>
              <Link
                href="/link1"
                className="flex items-center  px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <IoUmbrella className="mr-2 text-2xl" /> Insurance
              </Link>
              <Link
                href="/link1"
                className="flex items-center  px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <FaUserPlus className="mr-2 text-2xl" /> Patients
              </Link>
              <Link
                href="/link1"
                className="flex items-center  px-4 py-2 border border-white rounded-full text-center text-white bg-black bg-opacity-50 hover:bg-customBlue  transition duration-300 ease-in-out"
              >
                <BsGlobe className="mr-2 text-xl" /> International Counsltant
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4rth component starts */}
      <div className="px-4 md:px-8 md:py-16  flex flex-col md:flex-row justify-center w-full  bg-sky-50"  style={{ backgroundImage: "url('/images/bg2.jpg')" }}>
        {/* left part  */}
        <div className="w-full md:w-2/6 h-auto flex flex-col items-center md:items-left px-12 mt-8   ">
          <div className="justify-center items-center px-8">
            <h1 className="text-customBlue text-5xl font-bold mb-4 text-left py-3 text-customBlue">
              Zulekha
              <br /> Medical Team
            </h1>

            <p className="text-black text-md mb-4 text-left py-3">
              The Zulekha Healthcare Group found its roots in 1964 when its
              creator Dr. Zulekha Daud moved from her native India to Sharjah,
              UAE in order to pursue her dream of serving people in need and
              offer affordable medical facilities to all
            </p>
            <button className="group relative inline-flex overflow-hidden border border-customBlue border-opacity-50 px-2 py-3 md:w-[200px] sm-w-full font-medium text-white items-center">
              <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
              <div className="relative flex flex-row items-center group-hover:text-white">
                <span className="relative ml-1 text-customBlue group-hover:text-white text-sm">
                  View all Doctors
                </span>
                <BsArrowRight className="ml-4 my-auto  text-xl transition duration-300 ease-in-out text-customGreen group-hover:text-customGreen" />
              </div>
            </button>
          </div>
        </div>
        {/* right part  */}
        <div className="container mx-auto mt-8 w-full md:w-4/6 mt-8 md:mt-0 relative transition-all">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-2000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-2 "
                >
                  <div className="icon">
                  <img
                    src={doctor.src}
                    alt={doctor.alt}
                    className="w-full h-auto rounded-lg"
                  />
                  </div>
                 
                  <div className="p-4 rounded-lg mt-4">
                    <h1 className="text-center text-customBlue font-semibold text-lg">
                      {doctor.name}
                    </h1>
                    <p className="text-center text-sm text-black font-semibold">
                      {doctor.designation}
                    </p>
                    <p className="text-center text-sm text-black font-semibold">
                      {doctor.place}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-6 right-0 flex">
            <button
              onClick={handlePrev}
              className="text-white p-3 rounded-full border border-black hover:bg-gray-300 focus:outline-none mr-2"
            >
              <IoIosArrowRoundBack className="text-2xl text-black" />
            </button>
            <button
              onClick={handleNext}
              className="text-white p-3 rounded-full border border-black hover:bg-gray-300 focus:outline-none"
            >
              <IoIosArrowRoundForward className="text-2xl text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* 5fth component starts */}
      <div className=" h-auto flex flex-col bg-sky-50 md:py-16">
        <div className="flex-1 animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-500">
          <img src="/images/shape1.png" alt="shape" />
        </div>

        <div className="h-full flex-1 flex w-full relative px-40 z-20 ">
          <div className="w-1/2 flex flex-col justify-center items-center h-auto bg-white relative z-30 shadow-lg p-12">
            <div className="justify-center items-center ">
              <div className="font-bold text-[45px] px-2 mb-4 text-customBlue">
                Our Patients say it best.
              </div>
              <div className="flex flex-row">
                <div className="mr-2 py-10 px-2 text-5xl text-green-500">
                  <RiDoubleQuotesL />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-left py-4 text-md leading-loose ">
                      “Staffs and doctors are very accommodating. Best and
                      amazing doctors especially Doctor Jasbir and Doctor
                      Bashar. Good service and very efficient. Definitely hats
                      off and kudos.”
                    </div>
                  </div>
                  <div className="w-full h-px bg-black mb-4"></div>
                  <div className="text-customBlue mb-3 text-sm">
                    Ameera francesca castro
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-3">
                <button className="group relative inline-flex overflow-hidden border border-black border-opacity-50 px-6 py-4 font-medium text-white items-center">
                  <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <div className="relative flex flex-row items-center ">
                    <span className="relative ml-1 -mt-1 text-customBlue group-hover:text-white">
                      View all testimonials
                    </span>
                    <BsArrowRight className="ml-2 my-auto text-2xl transition duration-300 ease-in-out group-hover:text-green-500 text-green-500" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-2/3 relative z-0 -mt-32 h-[450px] -ml-24 flex justify-center items-center">
            <div className="cursor-pointer" onClick={handleOpen}>
              <img
                src="/images/video-bg.webp"
                alt="Play Video"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative p-4 w-10/12 h-5/6 flex justify-center items-center ">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aU2UvsnT4N0"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 p-6 rounded-full text-white z-50"
              aria-label="Close video"
            >
              &#10005; {/* Stylish close icon */}
            </button>
          </div>
        )}
      </div>

      {/* 6th component starts */}
      <div className=" h-auto flex flex-col bg-sky-50 w-full ">
        <div className="flex-1 animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-500 ml-auto">
          <img src="/images/shape1.png" alt="shape" />
        </div>

        <div className="h-full flex-1 flex w-full relative mb-12 ">
          <div className="w-8/12 relative z-0 -mt-32 h-[580px] flex justify-center items-center overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover filter "
              src="/images/bg3.jpg"
              alt="image"
            />
          </div>

          <div className="w-4/12 flex flex-col justify-center items-center h-auto bg-white relative  shadow-lg p-16 z-10 -ml-28 mt-12">
            <div className="justify-center items-center ">
              <div className="font-bold text-[50px] mb-4 leading-[1.2] text-customBlue">
                Expert Care Comes Homes
              </div>
              <div className="flex flex-row">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-left py-4 text-md ">
                      We are proud to be part of your world and we make
                      everything possible to ensure your health and happiness.
                      As one of the leading healthcare brands in the region, we
                      seamlessly blend healthcare innovation with human
                      expertise to deliver comprehensive and long-lasting
                      solutions.
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <button className="group relative inline-flex overflow-hidden border border-black border-opacity-50 px-6 py-4 font-medium text-white ">
                  <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <div className="relative flex flex-row items-center ">
                    <span className="relative ml-1 -mt-1 text-customBlue group-hover:text-white">
                      View all Details
                    </span>
                    <BsArrowRight className="ml-2 my-auto text-2xl transition duration-300 ease-in-out group-hover:text-green-500 text-green-500" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7th component starts */}
      <div className="w-full h-auto   flex flex-row bg-sky-50 mb-12">
        <div className="w-2/5  h-full flex justify-center items-center">
          <div className=" w-3/5 h-full px-8">
            <h1 className="text-5xl font-bold py-6 text-blue-900">
              Zulekha Healthcare Group
            </h1>
            <p className="py-4 text-md text-gray-500">
              Zulekha Hospitals has a team of renowned and experienced
              consultants with 50+ clinical departments that cater to various
              diseases
            </p>
            <div className="w-full  flex">
              <div className=" w-2/3 flex justify-between items-center space-x-6 w-full">
                <img
                  src="/images/certifications.png"
                  alt="Logo 1"
                  className=""
                />
                <img
                  src="/images/certifications2.png"
                  alt="Logo 2"
                  className=""
                />
                <img
                  src="/images/certifications3.png"
                  alt="Logo 3"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-3/5  flex flex-col  ">
          <div
            className=" icon w-4/5 bg-yellow-500 ml-20 h-full flex justify-end"
            style={{ backgroundImage: "url('/images/intro-img.webp')" }}
          >
            <div className="flex justify-end w-full h-full">
              <div className="flex justify-end w-full h-full">
                <div className="w-2/5 bg-customBlue bg-opacity-70 p-8 text-white flex flex-col justify-center items-center">
                  <h2 className="text-3xl font-bold mb-4">Zulekha Vision</h2>
                  <div className="w-full h-[2px] bg-white mb-2"></div>
                  <p className="md:text-2xl md:font-semibold leading-3">
                    "To be the most efficient, competent and courteous providers
                    of comprehensive healthcare in the world."
                  </p>
                  <div className="w-full h-[2px] bg-white mt-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-32 w-4/5 ml-20 flex flex-col justify-center items-center mb-12 ">
            <div className="flex justify-around w-full -ml-16 ">
              <div className="text-center">
                <p className="text-4xl text-blue-900 font-bold">1500+</p>
                <p className="text-gray-500">PHYSICIANS</p>
              </div>
              <div className="text-center">
                <p className="text-4xl text-blue-900 font-bold">2+</p>
                <p className="text-gray-500">HOSPITALS</p>
              </div>
              <div className="text-center">
                <p className="text-4xl text-blue-900 font-bold">2+</p>
                <p className="text-gray-500">Locations</p>
              </div>
              <div className="text-center">
                <p className="text-4xl text-blue-900 font-bold ">600000+</p>
                <p className="text-gray-500">SATISFIED PATIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8th component starts */}
      <div className="mb-12">
        <div className="py-4 px-16">
          <h1 className="text-5xl font-bold text-customBlue">Insights</h1>
        </div>
        <div className=" mx-auto mt-8 w-11/12 relative transition-all">
          <div className="overflow-hidden w-full">
            <div
              className="flex   transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentSlideIndex * (100 / 4)}%)`,
              }}
            >
              {carousalimages.map((image, index) => (
                <div
                  key={index}
                  className={` w-full md:w-1/4 w-1/4 flex-shrink-0 ${
                    index % 2 === 0 ? "mt-16" : "mt-2"
                  } ${index !== 0 ? "ml-6" : ""}`}
                >
                  <div className="icon">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="  w-full h-auto"
                  />
                  </div>
                  <div className="py-4 rounded-lg mt-4">
                    <h1 className="text-left text-customBlue font-bold text-lg">
                      {image.heading}
                    </h1>
                    <p className="text-left text-md text-black py-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-14  right-0 flex">
            <button
              onClick={handlePrevSlide}
              className="text-white p-3 rounded-full border border-black hover:bg-gray-300 focus:outline-none mr-2"
            >
              <IoIosArrowRoundBack className="text-2xl text-black" />
            </button>
            <button
              onClick={handleNextSlide}
              className="text-white p-3 rounded-full border border-black hover:bg-gray-300 focus:outline-none"
            >
              <IoIosArrowRoundForward className="text-2xl text-black" />
            </button>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <button className="group relative inline-flex overflow-hidden border border-black border-opacity-50 px-6 py-4 font-medium text-white items-center">
            <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
            <div className="relative flex flex-row items-center ">
              <span className="relative ml-1 -mt-1 text-customBlue group-hover:text-white">
                Read all New
              </span>
              <BsArrowRight className="ml-2 my-auto text-2xl transition duration-300 ease-in-out group-hover:text-green-500 text-green-500" />
            </div>
          </button>
        </div>
      </div>

      {/* 8th component starts */}
      <div className="bg-sky-50 h-auto w-full flex justify-center items-center">
        <div className="w-4/5 h-full flex flex-row py-28">
          <div className="w-1/3 text-5xl font-bold text-customBlue flex justify-center ">
            <h1 className="px-16">Download Zulekha App</h1>
          </div>
          <div className="w-1/3">
            <p className="text-gray-00">
              Zulekha Hospital represents Total Healthcare that's accessible to
              anyone in need of medical attention. A professionally managed
              multi-specialty facility offering modern medical solutions.
            </p>
            <div className="flex felx-row py-6">
              <Link
                href="/"
                className="w-1/2 hover:opacity-75 transition-opacity duration-300"
              >
                <img
                  src="/images/google-play-btn.png"
                  alt="Download from Google Play"
                />
              </Link>
              <Link
                href=""
                className="w-1/2 hover:opacity-75 transition-opacity duration-300"
              >
                <img
                  src="/images/app-store-btn.png "
                  alt="Download from App Store"
                />
              </Link>
            </div>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <img src="/images/phone.webp" alt="img" className="-mt-44 "></img>
          </div>
        </div>
      </div>
    </Layout>
  );
}
