// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const physio: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  return (
    <div className="p-4">
      <div className="mb-4 space-y-4">
        <p className="text-gray-500 mt-2 text-sm leading-6">
          Physiotherapy is a vital component for your recovery. With an
          effective treatment of injury, illness, or disability through movement
          and exercise, manual therapy and education you will be able to recover
          faster and get back to the activities you enjoy. From pediatric to
          elderly care including people of determination, Physiotherapy helps
          patients of all ages to maintain their health, manage pain and prevent
          injury. Our qualified physiotherapists can help you at your place of
          choice by providing a therapy plan tailored to your individual
          condition and needs.
        </p>
      </div>

      <div className="">
        <h1 className="font-bold text-xl text-customBlue ">
          Our Physiotherapists Specialize In
        </h1>
        <ul className="  mt-4 text-gray-500 text-sm space-y-3">
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
              Neuro-muscular pain syndrome for Back, Neck, Shoulder, Knee
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">Stroke rehabilitation</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
              Pediatric Care/ Children’s Health Management
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
              Protocol based program for Post TKR & CABG patients
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
              Relaxation and relief care plan for COPD patients
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">Pre and post-natal care</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">Elderly care</p>
          </li>
        </ul>
      </div>
      <div className="py-6">
      <button onClick={toggleForm}  className="group relative inline-flex overflow-hidden border border-customBlue border-opacity-50 px-2 py-3  sm-w-full font-medium text-white items-center">
        <span  className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
        <div className="relative flex flex-row items-center group-hover:text-white">
          <span className="relative ml-1 text-customBlue group-hover:text-white text-sm">
        Book Your Home Care Services
          </span>
          <BsArrowRight className="ml-4 my-auto  text-xl transition duration-300 ease-in-out text-customGreen group-hover:text-customGreen" />
        </div>
      </button>
      </div>
    </div>
  );
};

export default physio;
