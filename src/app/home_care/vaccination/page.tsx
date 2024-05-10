// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";
import InnerLayout from "../../innerlayout";
import Link from "next/link";
import Homesidebar from "../homesidebar";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const Vaccination: React.FC = () => {
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
                  We believe prevention is always better than cure. Basic
                  immunizations for children and adults, and comprehensive
                  vaccinations can be administered by Zulekha Home Care
                  specialists in the comfort of your home. Vaccinations at home
                  ensure lower infection rates and can be taken at your
                  convenience.
                </p>
                <p className="text-gray-500 mt-2 text-sm leading-6">
                  Vaccination is a means of acquiring immunity. Immunity
                  provides long-lasting protection against specific antigens
                  that means against diseases. Small doses of antigen are given
                  to activate the immune system. “Memory” (specialized white
                  blood cells that are capable of recognizing the antigen and
                  responding to its presence) allow the body to react quickly
                  and efficiently to future exposure of micro-organisms before
                  they can cause dangerous diseases.
                </p>
              </div>
              <div className="py-6">
                <ul className="mt-3 flex flex-col space-y-3 text-gray-500">
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">MMR</span>{" "}
                      vaccine provides protection against measles, mumps, and
                      rubella (German measles).
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">Polio</span>{" "}
                      vaccination provides protection against polio
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        DaPT (DPT)
                      </span>{" "}
                      vaccine provides protection against diphtheria, tetanus
                      and pertussis (whooping cough)
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">HIB</span>{" "}
                      vaccine provides protection against hameophilus influenza
                      Type B (major cause of spinal meningitis)
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        Hepatitis B{" "}
                      </span>{" "}
                      vaccine provides protection against hepatitis B virus that
                      causes liver diseases.
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        Varicella{" "}
                      </span>{" "}
                      vaccine provides protection against chicken pox.
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-5 text-green-600 " />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        Hepatitis A
                      </span>{" "}
                      vaccine provides protection against hepatitis (commonly
                      known as jaundice, caused due to intake of unhygienic
                      food) which leads to liver damage, usually reversible.
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

export default Vaccination;
