// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const postnatal:  React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  return (
    <div className="p-4">
      <div className=" ">
        <h1 className="font-bold text-customBlue text-2xl">
          Post Natal Nursing Care at Home Aed : 500/-
        </h1>
      </div>

      <div className="py-6">
        <p className="font-bold mb-4">
          (3 Days of Nursing Care at Home, 2 Hours Daily)
        </p>
        <ul className="mt-3 flex flex-col space-y-3 text-gray-500">
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base  text-sm">Baby Bathing & Clothing</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base  text-sm">Changing Diapers</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base  text-sm">Baby Weight Monitoring</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base  text-sm">Assisting Mother in Bathing</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base  text-sm">Hold/Swaddle Training</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base  text-sm">Diapering Practice</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base  text-sm">Diapering Practice</p>
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

export default postnatal;
