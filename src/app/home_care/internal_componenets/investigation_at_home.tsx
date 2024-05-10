// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const Investigation:  React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  return (
    <div className="p-4">
      <div className="mb-4 space-y-4">
        <p className="text-gray-500 mt-2 text-sm leading-6">
          Zulekha HomeCare is equipped to send home health care providers,
          healthcare specialists and technicians to conduct investigations and
          collect lab samples from patients from within the comfort of their
          homes.
        </p>
      </div>

      <div className="">
        <h1 className="font-bold text-customBlue text-lg">
          Below are some of the common investigations done at home
        </h1>
        {/* <ul className=" marker:text-green-500 list-disc pl-5 mt-4 text-gray-500 text-sm space-y-2">
          <li>Complete Blood Count</li>
          <li>Blood Sugar levels</li>
          <li>HbA1C levels</li>
          <li>Prothrombin time & INR</li>
          <li>Liver function tests</li>
          <li>Kidney function tests</li>
          <li>Thyroid function tests</li>
          <li>Serum electrolytes</li>
          <li>ECG</li>
          <li> Urine analysis</li>
        </ul> */}

        <div>
          <ul className="mt-3 flex flex-col space-y-3 text-gray-500">
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Complete Blood Count</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Blood Sugar levels</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">HbA1C levels</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Prothrombin time & INR</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Liver function tests</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Kidney function tests</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Thyroid function tests</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Serum electrolytes</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">ECG</p>
            </li>
            <li className="flex">
              <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
              <p className="text-base  text-sm">Urine analysis</p>
            </li>
          </ul>
        </div>
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

export default Investigation;
