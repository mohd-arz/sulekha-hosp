import React from "react";
import { BsArrowRight } from "react-icons/bs";
import InnerLayout from "../../innerlayout";
import Homesidebar from "../homesidebar";

const bookingappoinment: React.FC = () => {
  return (
    <InnerLayout>
      <div className="bg-gray-100">
        <div className="flex justify-center items-center">
          <div className="w-10/12 mb-4 flex flex-row bg-white mt-4 shadow-lg">
            <div className="w-1/4  ">
              <Homesidebar />
            </div>
            <div className="flex justify-center  h-auto  items-center w-3/4 ">
               
              <form className=" w-11/12  shadow-2xl px-6   rounded-lg  bg-slate-50 space-y-4 py-12 ">
                <h1 className="text-xl font-bold text-customBlue">Book an appoinment</h1>
                <fieldset>
                  <div className="relative mb-8  ">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      placeholder=" "
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                    />
                    <label
                      htmlFor="first-name"
                      className="absolute left-2 -top-3 text-xs text-gray-500 bg-slate-50 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-customBlue peer-focus:text-xs"
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative mb-8">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      placeholder=" "
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-2 -top-3 text-xs text-gray-500 bg-slate-50 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-customBlue peer-focus:text-xs"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative mb-8">
                    <input
                      type="tel"
                      id="mobile-number"
                      name="mobile-number"
                      required
                      className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      placeholder=" "
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                    />
                    <label
                      htmlFor="mobile-number"
                      className="absolute left-2 -top-3 text-xs text-gray-500 bg-slate-50 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-customBlue peer-focus:text-xs"
                    >
                      Mobile Number<span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative mb-8">
                    <select
                      id="location"
                      name="location"
                      required
                      className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                    >
                      <option value="">
                        Please select your service location
                      </option>
                      <option value="option1">Location 1</option>
                      <option value="option2">Location 2</option>
                      <option value="option3">Location 3</option>
                    </select>
                    <label
                      htmlFor="location"
                      className="absolute left-2 -top-3 text-xs text-gray-500 bg-slate-50 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-customBlue peer-focus:text-xs"
                    >
                      Location<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="relative mb-8">
                    <select
                      id="location"
                      name="location"
                      required
                      className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                    >
                      <option value="">Doctor at Home</option>
                      <option value="option1">Location 1</option>
                      <option value="option2">Location 2</option>
                      <option value="option3">Location 3</option>
                    </select>
                    <label
                      htmlFor="location"
                      className="absolute left-2 -top-3 text-xs text-gray-500 bg-slate-50 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-customBlue peer-focus:text-xs"
                    >
                      Select Your Service
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="relative mb-8">
                    <input
                      type="date"
                      id="preferred-date"
                      name="preferred-date"
                      required
                      className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                      placeholder=" "
                    />
                    <label
                      htmlFor="preferred-date"
                      className="absolute left-2 -top-3 text-xs text-gray-500 bg-slate-50 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-customBlue peer-focus:text-xs"
                    >
                      Preferred Date<span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="flex flex-row gap-4 py-4">
                    <button
                      type="submit"
                      className="w-1/4 bg-customBlue text-white py-2 rounded-full hover:bg-black"
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};
export default bookingappoinment;
