"use client";
import Layout from "../rootlayout";
import Coming from "../Components/coming";
import InnerLayout from "../innerlayout";
import { useState, useEffect } from "react";
import { GoArrowDown } from "react-icons/go";
import { TbReport } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "../globals.css";
export default function about() {
  const [depisOpen, setdepIsOpen] = useState(false);

  const [locisOpen, setlocIsOpen] = useState(false);

  const deptoggleDropdown = () => setdepIsOpen(!depisOpen);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  interface Doctor {
    id: number;
    src: string;
    alt: string;
    name: string;
    designation: string;
    place: string;
    workExperience: string[];
    languagesSpoken: string[];
    specialInterests: string[];
    researchPublications: string[];
  }
  const loctoggleDropdown = () => setlocIsOpen(!locisOpen);
  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch("/api/doctors");
      const data = await response.json();
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const fetchDoctorDetails = async (doctorId: number) => {
    const response = await fetch(`/api/doctors?id=${doctorId}`);
    const data = await response.json();
    setSelectedDoctor(data);
  };

  const cardsPerPage = 8;
  const [visibleCardCount, setVisibleCardCount] = useState(cardsPerPage);

  const showMoreCards = () => {
    setVisibleCardCount((prevCount) =>
      Math.min(prevCount + cardsPerPage, doctors.length)
    );
  };
  const [loaded, setLoaded] = useState(false);
  const hasMoreCards = visibleCardCount < doctors.length;
  interface Locations {
    id: number | string; // using number|string to accommodate 'all' id
    label: string;
    value: string;
  }
  const locations = [
    {
      id: 1,
      label: "Zulekha Hospital Dubai",
      value: "",
      // "https://www.zulekhahospitals.com/dubai/best-doctors/zh-dubai/department/alphabet",
    },
    {
      id: 2,
      label: "Zulekha Hospital Sharjah",
      value: "",
      // "https://www.zulekhahospitals.com/dubai/best-doctors/zh-sharjah/department/alphabet",
    },
    {
      id: 33,
      label: "ZMC Quasis",
      value: "",
      // "https://www.zulekhahospitals.com/dubai/best-doctors/zmc/department/alphabet",
    },
    {
      id: 36,
      label: "ZMC Al Khan",
      value: "",
      // "https://www.zulekhahospitals.com/dubai/best-doctors/zmc-al-khan/department/alphabet",
    },
    {
      id: "all",
      label: "View all Doctors",
      value: "",
      // "https://www.zulekhahospitals.com/best-doctors-in-uae",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0].value);
  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    window.location.href = value;
  };
  const images = [
    {
      src: "/images/Dr Abderezak Hadrouf.png",
      alt: "Burger",
      name: "Dr.Abderezak Hadrouf",
      designation: "ENT",
      place: "ZH Dubai",
    },
    {
      src: "/images/Dr.-Ahmed-Fawwaz.png",
      alt: "Burger",
      name: "Dr.Ahmed Fawwaz",
      designation: "Orthopedics",
      place: "ZH Dubai",
    },
    {
      src: "/images/DR_AALA_SALIM_AHMED.webp",
      alt: "Burger",
      name: "Dr. AALA SALIM AHMED",
      designation: "Psychiatry",
      place: "ZH Dubai",
    },
    {
      src: "/images/DR_MOHAMMED_MOINUDDIN.webp",
      alt: "Burger",
      name: "Dr. MOHAMMED MOINUDDIN",
      designation: "Nephrology",
      place: "ZH Dubai",
    },
    {
      src: "/images/Dr-Ajay-Raj-Gupta-Anesthilogy.webp",
      alt: "Burger",
      name: "Dr. Ajay Raj Gupta",
      designation: "Anesthesiology",
      place: "ZH Dubai",
    },
    {
      src: "/images/Dr.Amarendra-Prasad.webp",
      alt: "Burger",
      name: "Dr.Amarendra Prasad",
      designation: "Paediatrics",
      place: "ZH Dubai",
    },
    {
      src: "/images/dr-anuja-anna-varghese.webp",
      alt: "Burger",
      name: "Dr Anuja Anna Varghese",
      designation: "Dermatology",
      place: "ZH Dubai",
    },
    {
      src: "/images/Dr-Ahmed-Javid.webp",
      alt: "Burger",
      name: "Dr.Ahmed Javid",
      designation: "Internal Medicine",
      place: "ZH Dubai",
    },
    {
      src: "/images/Dr-Lamya-Ibrahim.webp",
      alt: "Burger",
      name: "Dr.Lamya Ibrahim",
      designation: "Laboratory",
      place: "ZH Dubai",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalDuration = 3000; // Change this value to adjust the sliding interval

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(doctors.length / 4)-4 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(doctors.length / 4)-4 : prevIndex - 1
    );
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

  return (
    <InnerLayout>
      <div className="" style={{ backgroundImage: "url('/images/bg2.jpg')" }}>
        <div className="flex justify-center h-auto mb-4  ">
          <div className=" w-10/12 mt-12  shadow-lg rounded-lg  ">
            <div className=" h-32 flex flex-row justify-center bg-white  rounded-lg  ">
              <div className=" w-1/3 h-full flex  items-center">
                <p className="text-2xl text-customBlue font-bold px-4">
                  Find a Doctor
                </p>
              </div>

              <div className=" w-1/2   h-full flex justify-center items-center p-2">
                <div className="relative w-full">
                  <label className="text-customBlue text-sm">
                    Doctor's Name & Department{" "}
                  </label>
                  <select
                    className=" mt-2 block  w-full bg-white border border-gray-400 rounded-md text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline "
                    required
                  >
                    <option value="" disabled>
                      Search here
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>

              <div className=" w-1/2 h-full flex justify-center items-center p-2">
                <div className="relative w-full">
                  <label className="text-customBlue text-sm">Location </label>
                  <select
                    className=" mt-2 block appearance-none w-full bg-white border border-gray-400 rounded-md text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    onClick={loctoggleDropdown}
                    onBlur={() => setlocIsOpen(false)}
                  >
                    <option value="option1">Zulekha Hospital Dubai</option>
                    <option value="option2">Zulekha Hospital Sharja</option>
                    <option value="option3">ZMC Quasis</option>
                    <option value="option3">ZMC Al-Khan</option>
                  </select>
                  <div
                    className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 text-2xl transform top-6 ${
                      locisOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-200 ease-in-out`}
                  >
                    <GoArrowDown />
                  </div>
                </div>
              </div>
              <div className="w-1/5 h-ful flex justify-center items-center ">
                <button className="bg-customBlue text-white hover:bg-green-500 rounded-full px-8 py-3 font-bold ">
                  search
                </button>
              </div>
            </div>

            <div className=" h-32 flex flex-row justify-cente bg-sky-200  ">
              <div className=" w-1/3 h-full flex  items-center">
                <p className="text-2xl text-gray-500 font-bold px-4">
                  Advanced Search
                </p>
              </div>
              <div className="w-1/2 h-full flex justify-center items-center p-2">
                <div className="relative w-full">
                  <label className="text-customBlue text-sm block mb-2">
                    By Location
                  </label>
                  <div className="flex flex-wrap gap-x-2 gap-y-4">
                    {locations.map((location) => (
                      <div key={location.id} className="flex items-center ">
                        <input
                          type="radio"
                          className="locationRadio"
                          aria-label="Select location"
                          name="locationRadio"
                          id={`location-${location.id}`}
                          value={location.value}
                          onChange={() => handleLocationChange(location.value)}
                          checked={selectedLocation === location.value}
                        />
                        <label
                          htmlFor={`location-${location.id}`}
                          className="ml-2 text-xs text-gray-600"
                        >
                          {location.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" w-1/2 h-full flex justify-center items-center p-2">
                <div className="relative w-full">
                  <label className="text-customBlue text-sm">
                    By Departments
                  </label>
                  <select
                    className="mt-2 block appearance-none w-full bg-white border border-gray-400 rounded-md  text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    onClick={deptoggleDropdown}
                    onBlur={() => setdepIsOpen(false)}
                  >
                    <option value="">-Departments-</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <div
                    className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 text-2xl transform top-8 ${
                      depisOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-200 ease-in-out`}
                  >
                    <GoArrowDown />
                  </div>
                </div>
              </div>
              <div className="w-1/5 h-ful flex justify-center items-center "></div>
            </div>
          </div>
        </div>

        <div className="">
          {selectedDoctor ? (
            <>
              <div className=" details w-10/12 mx-auto h-auto ">
                <div className="w-full flex flex-row  ">
                  <div className=" w-1/3 flex flex-col ">
                    <div className="icon mb-6">
                      <img src={selectedDoctor.src} alt={selectedDoctor.alt} />
                      <hr className=" " />
                    </div>
                    <div className="flex items-center justify-center">
                      <button className="flex items-center justify-center w-2/3 hover:bg-green-500 bg-transparent">
                        <div className="bg-customBlue text-lg flex flex-1 items-center justify-center h-14 text-white hover:bg-green-500">
                          Book an Appointment
                        </div>
                        <div className="bg-green-500 flex items-center justify-center px-4 h-14">
                          <TbReport className="text-white text-2xl" />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="text-black text-lg px-4 py-4 max-h-[600px] overflow-y-auto custom-scroll">
                      <p className="text-2xl font-bold text-gray-400">
                        {selectedDoctor.name}
                      </p>
                      <p className="mb-4 text-sm">
                        {selectedDoctor.designation}
                      </p>
                      <p className="text-sm">{selectedDoctor.place}</p>

                      <p className="text-xl mt-4 mb-2 font-bold text-customBlue">
                        Work Experience
                      </p>
                      <hr className="mb-4 bg-gray-300 h-[1px] border-0" />

                      <ul className="list-none space-y-4">
                        {selectedDoctor.workExperience.map((item) => (
                          <li
                            key={item}
                            className="green-bullet relative pl-4 text-sm  text-coolGray "
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xl mt-4 mb-2 font-bold text-customBlue">
                        Languages Spoken
                      </p>
                      <hr className="mb-4 bg-gray-300 h-[1px] border-0" />
                      <ul className="list-none space-y-2  text-coolGray">
                        {selectedDoctor.languagesSpoken.map((language) => (
                          <li
                            key={language}
                            className="green-bullet relative pl-4 text-sm "
                          >
                            {language}
                          </li>
                        ))}
                      </ul>

                      <p className="text-xl mt-4 mb-2 font-bold text-customBlue">
                        Special Interests
                      </p>
                      <hr className="mb-4 bg-gray-300 h-[1px] border-0" />
                      <ul className="list-none space-y-2  text-coolGray">
                        {selectedDoctor.specialInterests.map((interest) => (
                          <li
                            key={interest}
                            className="green-bullet relative pl-4 text-sm "
                          >
                            {interest}
                          </li>
                        ))}
                      </ul>

                      <p className="text-xl mt-4 mb-2 font-bold text-customBlue">
                        Research / Publications
                      </p>

                      <ul className="list-none space-y-2 text-coolGray">
                        {selectedDoctor.researchPublications.map(
                          (publication) => (
                            <li
                              key={publication}
                              className="green-bullet relative pl-4 text-sm "
                            >
                              {publication}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <hr className=" mt-12 border border border-gray-300 " />
              </div>
              {/* other doctors*/}

              <div className=" mx-auto  w-10/12 mx-auto mt-8 md:mt-16 relative transition-all">
                <h1 className="text-3xl text-coolGray">Other Doctors</h1>
                <div className="overflow-hidden w-full">
                  <div
                    className="flex transition-transform duration-2000 ease-in-out"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                    }}
                  >
                    {images.map((doctor, index) => (
                      <div
                        key={index}
                        className="w-full md:w-1/4 flex-shrink-0 px-2 "
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
                          <p className="text-center text-sm text-black font-semibold mb-4">
                            {doctor.designation}
                          </p>
                          <button className="group relative inline-flex overflow-hidden border border-black border-opacity-50 px-6 py-2 font-medium text-white items-center justify-center hover:bg-customBlue">
                            <div className="relative flex flex-row items-center ">
                              <span className="relative ml-1 -mt-1 text-customBlue group-hover:text-white text-sm">
                                View all testimonials
                              </span>
                              <BsArrowRight className="ml-2 my-auto text-2xl transition duration-300 ease-in-out group-hover:text-green-500 text-green-500" />
                            </div>
                          </button>
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
            </>
          ) : (
            // Display the list of all doctors
            <div className="w-10/12 mx-auto ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {doctors.slice(0, visibleCardCount).map((doctor) => (
                  <div
                    key={doctor.id}
                    className="max-w-sm overflow-hidden shadow-lg border border-gray-400 bg-white"
                  >
                    <div className="icon w-full h-64 overflow-hidden">
                      <img
                        className="w-full object-cover"
                        src={doctor.src}
                        alt={doctor.alt}
                      />
                    </div>
                    <div className="px-6 py-4 h-32">
                      <div className="font-bold text-lg mb-2 text-center flex items-center justify-center text-customBlue">
                        {doctor.name}
                      </div>
                      <p className="text-black text-xs font-bold text-center">
                        {doctor.designation}
                      </p>
                      <p className="text-black text-xs font-bold text-center">
                        {doctor.place}
                      </p>
                    </div>
                    <div className="w-full flex">
                      <button
                        className="bg-customBlue hover:bg-black text-white text-xs font-semibold py-4 w-1/2"
                        onClick={() => fetchDoctorDetails(doctor.id)}
                      >
                        Know More
                      </button>
                      <button className="bg-customGreen hover:bg-black text-xs text-white font-semibold py-4 w-1/2">
                        Book now
                      </button>
                    </div>
                  </div>
                ))}
                {hasMoreCards && (
                  <div className="text-center my-4 col-span-1 sm:col-span-2 md:col-span-4 flex flex-col items-center ">
                    <button
                      className="bg-customBlue text-white text-sm font-bold py-4 px-12 hover:bg-customGreen"
                      onClick={showMoreCards}
                    >
                      View More Doctors
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-center mt-4 ">
            {selectedDoctor && (
              <div className="text-center my-4 col-span-1 sm:col-span-2 md:col-span-4 flex flex-col items-center ">
                <button
                  className="bg-customBlue text-white text-sm font-bold py-4 px-12 hover:bg-customGreen"
                  onClick={() => setSelectedDoctor(null)}
                >
                  View all doctors
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </InnerLayout>
  );
}
