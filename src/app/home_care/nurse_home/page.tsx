// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Homesidebar from "../homesidebar";
import InnerLayout from "../../innerlayout";
import Link from "next/link";
// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const Nurse: React.FC = () => {
  return (
    <InnerLayout>
      <div className="bg-gray-100">
        <div className="flex justify-center items-center">
          <div className="w-10/12 mb-4 flex flex-row bg-white mt-4">
            <div className="w-1/4 ">
              <Homesidebar />
            </div>
            <div className="custom-scrollbar  w-3/4 p-6 h-screen overflow-y-auto">
              <div className="mb-4 space-y-4">
                <p className="text-gray-500 mt-2 text-sm">
                  When tasks like medication management, glucose checks or wound
                  care start to feel overwhelming, get personalized attention
                  from the professionals to stay healthy.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Zulekha Hospital has a team of highly qualified nurses who can
                  be made available to our patients to provide a home nursing
                  service. Our nurses are specialized in various medical
                  specialties to provide you with nursing care for very specific
                  medical conditions or requirements. They are trained to care
                  for gravely ill patients, elderly patients, and patients who
                  need medical assistance or monitoring on a continuous basis.
                </p>
              </div>

              <div className="">
                <h1 className="font-bold text-customBlue text-xl">
                  Our Physiotherapists Specialize In
                </h1>
                <ul className=" marker:text-green-500 list-disc pl-5 mt-4 text-gray-500 text-sm space-y-2">
                  <li>
                    Neuro-muscular pain syndrome for Back, Neck, Shoulder, Knee
                  </li>
                  <li>Stroke rehabilitation</li>
                  <li>Pediatric Care/ Children’s Health Management</li>
                  <li>Protocol based program for Post TKR & CABG patients</li>
                  <li>Relaxation and relief care plan for COPD patients</li>
                  <li>Pre and post-natal care</li>
                  <li>Elderly care</li>
                </ul>
              </div>
              <div className="py-6">
                <Link
                href="/home_care/booking_appoinment"
              
                  className="group relative inline-flex overflow-hidden border border-customBlue border-opacity-50 px-2 py-3  sm-w-full font-medium text-white items-center"
                >
                  <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <div className="relative flex flex-row items-center group-hover:text-white">
                    <span className="relative ml-1 text-customBlue group-hover:text-white text-sm">
                      Book Your Home Care Services
                    </span>
                    <BsArrowRight className="ml-4 my-auto  text-xl transition duration-300 ease-in-out text-customGreen group-hover:text-customGreen" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default Nurse;
