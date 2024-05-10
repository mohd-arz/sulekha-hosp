// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const Medication:  React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  return (
    <div className="p-4">
      <div className="mb-4 space-y-4">
        <p className="text-gray-500 mt-2 text-sm leading-6">
          As we age, our medication intake surges. Aging can also affect the way
          we process prescriptions and over-the-counter drugs. Because of the
          number of medications and body changes, older adults are at a higher
          risk of medication errors. In addition, cognitive changes can make it
          difficult for someone to take their medication as prescribed.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Let us help your loved one with medication management.
        </p>
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

export default Medication;
