"use client";
import { useState, useEffect } from "react";
import InnerLayout from "../innerlayout";
import { GoArrowDown } from "react-icons/go";
export default function bookappoinment() {
  const [depisOpen, setdepIsOpen] = useState(false);
  const [locisOpen, setlocIsOpen] = useState(false);
  const [showUnregisteredForm, setShowUnregisteredForm] = useState(true);
  const [showRegisteredForm, setShowRegisteredForm] = useState(false);

  const deptoggleDropdown = () => setdepIsOpen(!depisOpen);
  const loctoggleDropdown = () => setlocIsOpen(!locisOpen);

  const handleUnregisteredClick = () => {
    setShowUnregisteredForm(true);
    setShowRegisteredForm(false);
  };

  const handleRegisteredClick = () => {
    setShowRegisteredForm(true);
    setShowUnregisteredForm(false);
  };

  // Unregistered patient form component
  interface BaseField {
    label: string;
    required: boolean;
    type: "input" | "select";
  }

  interface InputField extends BaseField {
    type: "input";
  }

  interface SelectField extends BaseField {
    type: "select";
    options: string[];
  }

  type FormField = InputField | SelectField;

  const UnregisteredPatientForm = () => {
    const fields: FormField[] = [
      { label: "First Name", required: true, type: "input" },
      { label: "Last Name", required: true, type: "input" },
      { label: "Email", required: true, type: "input" },
      { label: "Phone Number", required: false, type: "input" },
      { label: "Address", required: false, type: "input" },
      { label: "City", required: false, type: "input" },
      {
        label: "State",
        required: false,
        type: "select",
        options: ["Select State", "New York", "California", "Texas"],
      },
      { label: "Zip Code", required: false, type: "input" },
      {
        label: "Country",
        required: false,
        type: "select",
        options: [
          "Select Country",
          "United States",
          "Canada",
          "United Kingdom",
        ],
      },
    ];

    return (
      <div className="bg-white">
        <div className="w-full mx-auto p-4 bg-white px-14">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {fields.map((field, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <div className="relative bg-inherit">
                  {field.type === "input" ? (
                    <input
                      type="text"
                      id={`input-${index}`}
                      name={`input-${index}`}
                      required={field.required}
                      className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      placeholder=" "
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                    />
                  ) : (
                    <select
                      id={`input-${index}`}
                      name={`input-${index}`}
                      required={field.required}
                      className="bg-transparent h-12 w-11/12 rounded-lg text-gray-500 ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                      style={{
                        paddingLeft: "calc(1rem + 4px)",
                        borderLeftColor: "#003f82",
                        borderLeftWidth: "2px",
                      }}
                    >
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  <label
                    htmlFor={`input-${index}`}
                    className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <div className="w-11/12 border-t-2 border-gray-300"></div>
        </div>

        <div>
          <p className="py-3 px-14 text-customBlue text-lg font-bold">
            {" "}
            Please provide correct Contact number and Email Id as we will revert
            to confirm.
          </p>
          <div className="flex justify-center mt-2 mb-6">
            <div className="w-11/12 border-t-2 border-gray-300"></div>
          </div>
          <div className="h-auto flex justify-center">
            <div className="w-full flex flex-row">
              <div className="w-1/2  h-full p-4 flex flex-col justify-between px-14">
                <div>
                  <h2 className=" text-md text-customBlue font-bold mb-3">
                    Patient Type <span className="text-red-500">*</span>
                  </h2>

                  <div className="flex">
                    <div className="flex items-center me-4">
                      <input
                        id="Self-Paying-Patient"
                        type="radio"
                        value=""
                        name="Patient-type"
                        className="w-4 h-4 text-blue-600 "
                      />
                      <label className="ms-2 text-sm  text-gray-500 dark:text-gray-300">
                        Self Paying Patient
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="Insurance - Patient"
                        type="radio"
                        value=""
                        name="Patient-type"
                        className="w-4 h-4 text-blue-600 "
                      />
                      <label className="ms-2 text-sm  text-gray-500 dark:text-gray-300">
                        Insurance - Patient
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="  text-customBlue text-md mb-3  font-semibold">
                    {" "}
                    Do you want to stay ahead from the rest ?
                  </p>
                  {/* <div className=" mb-2">
                    <div className="w-11/12 border-t-2 border-gray-300"></div>
                  </div> */}

                  <div className="flex">
                    <div className="flex items-center me-4">
                      <input
                        id="stay-yes-radio"
                        type="radio"
                        value="yes"
                        name="stay-choice"
                        className="w-4 h-4 text-blue-600 "
                      />
                      <label
                        htmlFor="stay-yes-radio"
                        className="ms-2 text-sm text-black font-bold dark:text-gray-300"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="stay-no-radio"
                        type="radio"
                        value="no"
                        name="stay-choice"
                        className="w-4 h-4 text-blue-600 "
                      />
                      <label
                        htmlFor="stay-no-radio"
                        className="ms-2 text-sm text-black font-bold dark:text-gray-300"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-customBlue text-md font-bold mb-3  ">
                    Choose *Fast Track Clinic for:
                  </h3>
                  <ul className=" marker:text-green-500 text-gray-500 text-sm list-disc ml-5 space-y-2 ">
                    <li>No waiting time</li>
                    <li>One-on-one assistance</li>
                    <li>Free Refreshment</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-customBlue font-bold text-md mb-3 ">
                    Do you want Teleconsultation ?
                  </h2>
                  <div className="flex">
                    <div className="flex items-center me-4">
                      <input
                        id="Teleconsultation-yes-radio"
                        type="radio"
                        value=""
                        name="Teleconsultation"
                        className="w-4 h-4 text-blue-600"
                      />
                      <label className="ms-2 text-sm  text-black font-bold ">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="Teleconsultation-No-radio"
                        type="radio"
                        value=""
                        name="Teleconsultation"
                        className="w-4 h-4 text-blue-600"
                      />
                      <label className="ms-2 text-sm  text-black font-bold">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2 bg-white h-full p-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg  ">
                    <div className="relative bg-inherit">
                      <select
                        id="input-0"
                        name="input-0"
                        required={true} // Set to true or false based on requirement
                        className="bg-transparent h-12 w-11/12 rounded-lg text-gray-500 ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                        style={{
                          paddingLeft: "calc(1rem + 4px)",
                          borderLeftColor: "#003f82",
                          borderLeftWidth: "2px",
                        }}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        {/* Add or remove options as needed */}
                      </select>
                      <label
                        htmlFor="input-0"
                        className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Your Label Here<span className="text-red-500">*</span>{" "}
                        {/* Use '*' only if required */}
                      </label>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="relative bg-inherit">
                      <select
                        id="input-0"
                        name="input-0"
                        required={true} // Set to true or false based on requirement
                        className="bg-transparent h-12 w-11/12 rounded-lg text-gray-500 ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                        style={{
                          paddingLeft: "calc(1rem + 4px)",
                          borderLeftColor: "#003f82",
                          borderLeftWidth: "2px",
                        }}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        {/* Add or remove options as needed */}
                      </select>
                      <label
                        htmlFor="input-0"
                        className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Your Label Here<span className="text-red-500">*</span>{" "}
                        {/* Use '*' only if required */}
                      </label>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="relative bg-inherit">
                      <select
                        id="input-0"
                        name="input-0"
                        required={true} // Set to true or false based on requirement
                        className="bg-transparent h-12 w-11/12 rounded-lg text-gray-500 ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                        style={{
                          paddingLeft: "calc(1rem + 4px)",
                          borderLeftColor: "#003f82",
                          borderLeftWidth: "2px",
                        }}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        {/* Add or remove options as needed */}
                      </select>
                      <label
                        htmlFor="input-0"
                        className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Your Label Here<span className="text-red-500">*</span>{" "}
                        {/* Use '*' only if required */}
                      </label>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="relative bg-inherit">
                      <input
                        type="date"
                        id="input-0"
                        name="input-0"
                        required={true} // Set to true or false based on requirement
                        className="peer bg-transparent h-12 w-11/12 rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                        placeholder=" "
                        style={{
                          paddingLeft: "calc(1rem + 4px)",
                          borderLeftColor: "#003f82",
                          borderLeftWidth: "2px",
                        }}
                      />
                      <label
                        htmlFor="input-0"
                        className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Your Label Here<span className="text-red-500">*</span>{" "}
                        {/* Use '*' only if required */}
                      </label>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="relative bg-inherit">
                      <select
                        id="input-0"
                        name="input-0"
                        required={true} // Set to true or false based on requirement
                        className="bg-transparent h-12 w-11/12 rounded-lg text-gray-500 ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                        style={{
                          paddingLeft: "calc(1rem + 4px)",
                          borderLeftColor: "#003f82",
                          borderLeftWidth: "2px",
                        }}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        {/* Add or remove options as needed */}
                      </select>
                      <label
                        htmlFor="input-0"
                        className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Your Label Here<span className="text-red-500">*</span>{" "}
                        {/* Use '*' only if required */}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2 mb-6">
          <div className="w-11/12 border-t-2 border-gray-300"></div>
        </div>

        <div className="flex flex-row px-10 gap-x-4 py-4 ">
          <button className="bg-customBlue text-white hover:bg-green-500 rounded-full px-8 py-3 font-bold ">
            Submit
          </button>
          <button className="bg-customBlue text-white hover:bg-green-500 rounded-full px-8 py-3 font-bold ">
            Reset
          </button>
        </div>
      </div>
    );
  };

  // Registered patient form component
  const RegisteredPatientForm = () => (
    <>
      <div className="shadow-lg rounded-lg mb-8 bg-white h-auto md:h-52 flex flex-col md:flex-row items-center p-4">
        <div className="flex flex-col md:flex-row justify-center rounded-lg w-full md:w-3/4 gap-4">
          <div className="bg-white p-4 rounded-lg flex-grow">
            <div className="relative bg-inherit">
              <input
                type="text"
                id="pin"
                name="pin"
                className="peer bg-transparent h-14 w-full rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                placeholder="Type inside me"
                style={{
                  paddingLeft: "calc(1rem + 4px)",
                  borderLeftColor: "#003f82",
                  borderLeftWidth: "2px",
                }}
              />
              <label className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all">
                Pin<span className="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg flex-grow">
            <div className="relative bg-inherit">
              <input
                type="text"
                id="phone"
                name="phone"
                className="peer bg-transparent h-14 w-full rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-400 focus:ring-customBlue focus:outline-none focus:border-customBlue"
                placeholder="Type inside me"
                style={{
                  paddingLeft: "calc(1rem + 4px)",
                  borderLeftColor: "#003f82",
                  borderLeftWidth: "2px",
                }}
              />
              <label className="absolute cursor-text left-2 -top-3 text-xs text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all">
                Phone<span className="text-red-500">*</span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 h-full flex justify-center items-center mt-4 md:mt-0">
          <button className="bg-customBlue text-white hover:bg-black rounded-full px-8 py-3 font-bold w-full md:w-auto">
            Submit
          </button>
        </div>
      </div>

      {/* <div className="   shadow-lg rounded-lg mb-8  bg-white  h-52  flex flex-row  items-center ">
        <div className=" flex flex-row justify-center rounded-lg w-3/4  gap-x-4  ">
          <div className=" w-1/2   h-full flex justify-center items-center p-2 pl-12  ">
            <div className="relative w-full">
              <label className="text-gray-500 text-sm">
                Pin <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className=" mt-1 block text-red-500 w-full bg-white border border-gray-400 rounded-md text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline "
                style={{
                  paddingLeft: "calc(1rem + 4px)",
                  borderLeftColor: "#003f82",
                  borderLeftWidth: "2px",
                }}
                required
              />
            </div>
          </div>

          <div className=" w-1/2 h-full flex justify-center items-center p-2">
            <div className="relative w-full">
              <label className="text-gray-500 text-sm">
                {" "}
                Phone <span className="text-red-500">*</span>{" "}
              </label>
              <input
                type="text"
                placeholder=""
                className=" mt-1 block  w-full bg-white border border-gray-400 rounded-md text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline "
                style={{
                  paddingLeft: "calc(1rem + 4px)",
                  borderLeftColor: "#003f82",
                  borderLeftWidth: "2px",
                }}
                required
              />
            </div>
          </div>

          <div className="w-1/5 h-ful flex justify-center items-center  ">
            <button className="bg-customBlue text-white hover:bg-black rounded-full px-8 py-3 font-bold  ">
              Submit
            </button>
          </div>
        </div>
      </div> */}
    </>
  );

  return (
    <InnerLayout>
      <div
        className="flex justify-center h-auto"
        style={{ backgroundImage: "url('/images/bg2.jpg')" }}
      >
        <div className="  w-10/12  mb-4  ">
          <div className=" mt-12  shadow-lg rounded-lg mb-8  ">
            <div className=" h-32 flex flex-row justify-center bg-white  rounded-lg  ">
              <div className=" w-1/3 h-full flex  items-center">
                <p className="text-2xl text-customBlue font-bold px-4">
                  Find a Doctor
                </p>
              </div>

              <div className=" w-1/2   h-full flex justify-center items-center p-2">
                <div className="relative w-full">
                  <label className="text-customBlue text-sm">
                    Doctor's Name & Department{" "}
                  </label>
                  <select
                    className=" mt-2 block  w-full bg-white border border-gray-400 rounded-md text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline "
                    required
                  >
                    <option value="" disabled>
                      Search here
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>

              <div className=" w-1/2 h-full flex justify-center items-center p-2">
                <div className="relative w-full">
                  <label className="text-customBlue text-sm">Location </label>
                  <select
                    className=" mt-2 block appearance-none w-full bg-white border border-gray-400 rounded-md text-sm text-gray-500 px-4 py-4 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    onClick={loctoggleDropdown}
                    onBlur={() => setlocIsOpen(false)}
                  >
                    <option value="option1">Zulekha Hospital Dubai</option>
                    <option value="option2">Zulekha Hospital Sharja</option>
                    <option value="option3">ZMC Quasis</option>
                    <option value="option3">ZMC Al-Khan</option>
                  </select>
                  <div
                    className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 text-2xl transform top-6 ${
                      locisOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-200 ease-in-out`}
                  >
                    <GoArrowDown />
                  </div>
                </div>
              </div>
              <div className="w-1/5 h-ful flex justify-center items-center ">
                <button className="bg-customBlue text-white hover:bg-green-500 rounded-full px-8 py-3 font-bold ">
                  search
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className=" w-4/6 flex flex-row mt-12 ">
              <button
                onClick={handleUnregisteredClick}
                className={`w-1/2 py-5 px-12 text-white text-sm ${
                  showUnregisteredForm ? "bg-green-600" : "bg-customBlue"
                } hover:bg-green-600`}
              >
                UNREGISTERED PATIENT
              </button>
              <button
                onClick={handleRegisteredClick}
                className={`w-1/2 py-5 px-12 text-white text-sm ${
                  showRegisteredForm ? "bg-green-600" : "bg-customBlue"
                } hover:bg-green-600`}
              >
                REGISTERED PATIENT
              </button>
            </div>
          </div>
          {showUnregisteredForm && <UnregisteredPatientForm />}
          {showRegisteredForm && <RegisteredPatientForm />}
        </div>
      </div>
    </InnerLayout>
  );
}
