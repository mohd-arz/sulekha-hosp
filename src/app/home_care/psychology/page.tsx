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

const psycology:React.FC = () => {
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
                  Home-based therapy has helped many people improve their mental
                  wellbeing in the comfort of their homes. Zulekha Home Care
                  Services provide a comprehensive range of psychology services
                  in a comfortable environment for the patient as well as the
                  therapists, to be able to work on the treatment plan in an
                  effective manner. Diagnosis and treatment of mental disorders
                  is done using various psycho-pharmacological and
                  psycho-therapeutic methods. The experts address a range of
                  mental, emotional and behavioral problems including the
                  following conditions:
                </p>
              </div>

              <div className="py-6">
                <ul className="mt-3 flex flex-col space-y-3 text-gray-500">
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Schizophrenia and other psychotic disorders
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Mood disorders (Depression, Mania etc.)
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Anxiety disorders (Obsession, Phobia, PTSD etc.)
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Relationship and Sexual problems
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Common childhood and adolescent mental disorders including
                      Depression, Anxiety, ADHD, poor scholastic performance
                      etc.
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Couples Therapy</p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">Anger management</p>
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

export default psycology;
