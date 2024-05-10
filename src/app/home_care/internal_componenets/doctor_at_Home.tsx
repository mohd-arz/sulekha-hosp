// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }
interface DoctorAtHomeProps {
  toggleForm: () => void;
}
const DoctorAtHome: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  
  return (
    <div className="p-4">
      <div className="mb-4 space-y-4">
        <p className="text-gray-500 mt-2 text-sm leading-6">
          It's hard to get to the doctor when you don't drive anymore or you're
          struggling with several chronic medical conditions. The result may be
          missed appointments and a lack of needed care.
        </p>
        <p className="text-gray-500 mt-2 text-sm leading-6">
          Zulekha Hospitals Home Care Doctors are well equipped to deal with all
          kinds of ailments including the Common Cold, Ear Infections, Seasonal
          Allergies, Bacterial Infections and much more.
        </p>
        <p className="text-gray-500 mt-2 text-sm leading-6">
          Our Doctors on call service is efficient, reliable, punctual and
          comprehensive. Our vision is to provide safe and quality services to
          our patients throughout Dubai.
        </p>
      </div>

      <div className="">
        <h1 className="font-bold text-xl text-customBlue">
          Our home Doctors can offer prompt and professional care covering a
          wide variety of problems such as:
        </h1>
        <ul className="  mt-4 text-gray-500 text-sm space-y-3">
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
            Providing Consultation and Health Education
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
            Physical examinations
            </p>
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
            Collecting Specimens for Lab tests and analysis
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
            Prescribing medication as necessary
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
            Recommend treatment plan.
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 flex-shrink-0" />
            <p className="text-base  text-sm">
            Refer patients to specialist or consultants for tests and further
            diagnosis if required
            </p>
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

export default DoctorAtHome;
