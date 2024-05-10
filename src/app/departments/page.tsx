"use client";
import Layout from "../rootlayout";
import Coming from "../Components/coming";
import InnerLayout from "../innerlayout";
import { BsArrowRight, BsPlus } from "react-icons/bs";
import { HiPlusSm } from "react-icons/hi";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../globals.css";
export default function Home() {
  const [departments, setdepartments] = useState<Department[]>([]);
  interface Department {
    name: string;
    link: string;
  }
  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch("/api/department");
      const data = await response.json();
      setdepartments(data);
    };

    fetchDoctors();
  }, []);
  console.log(departments);

  return (
    <InnerLayout>
      <div className="flex justify-center items-center bg-gray-50 py-6">
        <div className="w-10/12">
          <div className="mt-8">
            <p className="text-[14px] text-gray-500 leading-6">
              The evolution of Zulekha Hospital from a 30-Bed facility to a 32
              department multi-specialty healthcare landmark is a definite sign
              of progressive implementation. Every world-class health facility
              measures growth by the number of facilities offered to the
              community and Zulekha Healthcare Group can take pride in all
              modern facilities available today. Additional to this, multiple
              disciplinary specializations are now being converted into
              super-specialization departments.The global vision of Zulekha
              Healthcare is based on these critical departments as we strive to
              serve you better.
            </p>
          </div>

          <div className="py-6">
            <button className="group relative inline-flex overflow-hidden border border-customBlue border-opacity-50 px-2 py-3  sm-w-full font-medium text-white items-center">
              <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
              <div className="relative flex flex-row items-center group-hover:text-white">
                <span className="relative ml-1 text-customBlue group-hover:text-white text-sm">
                  Make an online Appoinment Now
                </span>
                <BsArrowRight className="ml-4 my-auto  text-xl transition duration-300 ease-in-out text-customGreen group-hover:text-customGreen" />
              </div>
            </button>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">
              e-doctor:{" "}
              <Link
                href="mailto:helpme@zulekhahospitals.com"
                className="text-customBlue hover:text-nxtGreen"
                aria-label="Email e-doctor"
              >
                helpme@zulekhahospitals.com
              </Link>
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-7 gap-4 mb-4">
            {departments.map((department, index) => (
              <Link
                href={department.link}
                key={index}
                className="relative group shadow rounded-lg p-4 flex flex-col justify-center items-center bg-white space-y-2 transition duration-300 ease-in-out overflow-hidden"
              >
                {/* Pseudo-element for vertical sliding background */}
                <span className="absolute inset-0 w-full h-full bg-nxtGreen scale-y-0 transform group-hover:scale-y-100 transition-transform duration-500 ease-out origin-bottom"></span>

                {/* Icon in a circle which also transitions on hover */}
                <div className="relative z-10 text-md p-1 rounded-full bg-customBlue text-white font-bold transition-colors duration-300 ease-in-out group-hover:bg-white">
                  <HiPlusSm className="group-hover:text-green-500" />{" "}
                  {/* Assuming HiPlusSm is an icon component */}
                </div>

                {/* Text that changes color on hover */}
                <span className="relative z-10 text-customBlue font-semibold text-center text-sm transition-colors duration-300 ease-in-out group-hover:text-white">
                  {department.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </InnerLayout>
  );
}
