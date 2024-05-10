// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";
import InnerLayout from "../../innerlayout";
import Homesidebar from "../homesidebar";
import Link from "next/link";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const MedicalEquipment:React.FC = () => {
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
                <p className="text-gray-500 mt-2 text-sm leading-6">
                  We bring modern medical equipment and expertise to your home
                  for continued compassionate care. Rent Medical Equipment so
                  your loved ones can stay in the comfort of home with the best
                  equipment right by their side.
                </p>
              </div>
              <div>
                <h1 className="font-bold text-customBlue">
                  Some of the Equipment we provide for Rent:
                </h1>
                <ul className="mt-3 flex flex-col space-y-3 text-gray-500">
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Oxygen Cylinder</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Oxygen Concentrator</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Cardiac Monitors</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Air Mattress</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Suction Machine</p>
                  </li>
                </ul>
              </div>
              <div className="py-6">
                <h1 className="font-bold text-customBlue">List of Items:</h1>
                <ul className="mt-3 flex flex-col space-y-3 text-gray-500">
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Pulse oximeter</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Patient bed</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Nebulization</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">ECG</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Air/Water Bed</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Syringe pumps</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Physiotherapy Exercise Instruments
                    </p>
                  </li>
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

export default MedicalEquipment;
