// Import React and InnerLayout component
import React from "react";
import InnerLayout from "../innerlayout";
import {
  FaFax,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaTrain,
  FaUserTie,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";

const Contact: React.FC = () => {
  return (
    <InnerLayout>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="w-10/12 mb-4">
          <div className="relative w-full flex justify-center items-center h-96">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3815893773503!2d55.381684915011434!3d25.291380483852446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c145cf0f37b%3A0xa7f71ad6baa30304!2sZulekha+Hospital+Dubai!5e0!3m2!1sen!2sae!4v1508823772791"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
          <div className="py-12">
            <a href="images/Dubai_Location_Map.pdf" download="LocationMap.pdf">
              <button className="bg-customBlue text-white hover:bg-green-500 rounded-full px-8 py-3 font-bold">
                Download Location Map
              </button>
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between w-full">
            <div className="md:w-1/3 lg:w-1/4 p-4  shadow-lg rounded-xl overflow-hidden bg-white">
              <div className=" h-full flex flex-col items">
                <h1 className="text-customBlue text-lg font-bold p-4">
                  GPS COORDINATES
                </h1>
                <div className="flex-grow p-4 space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-customBlue text-2xl">
                      <TbWorldLatitude />
                    </span>
                    <p className="text-customBlue text-sm">
                      LATITUDE{" "}
                      <span className="font-semibold">N 25.291352</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-customBlue text-2xl">
                      <TbWorldLongitude />
                    </span>
                    <p className="text-customBlue text-sm">
                      LONGITUDE{" "}
                      <span className="font-semibold">E 55.364709</span>
                    </p>
                  </div>
                </div>
                <p className="p-4 text-xs text-white bg-yellow-500">
                  For Navigation Applications
                </p>
              </div>
            </div>

            <div className="md:w-1/2 p-4  mx-auto">
              <h1 className="text-customBlue text-2xl font-bold mb-6">
                ZULEKHA HOSPITAL LLC - DUBAI
              </h1>
              <div className="space-y-4 text-sm">
                <p className="text-gray-500 flex items-center">
                  <FaEnvelope className="mr-2 text-customBlue text-lg" />
                  <span>P.O.Box 48577</span>
                </p>
                <p className="text-gray-500 flex items-center">
                  <IoLocationSharp className="mr-2 text-customBlue text-xl" />
                  Doha Street, Al Nadha 2, Al Qusais, Dubai, U.A.E.
                </p>
                <p className="text-gray-500 flex items-center">
                  <FaFax className="mr-2 text-customBlue text-lg" />
                  Fax No:{" "}
                  <span className="text-customBlue ml-1 text-md font-semibold">
                    +9714 - 267 8855
                  </span>
                </p>
                <p className="text-gray-500 flex items-center">
                  <FaPhone className="mr-2 text-customBlue text-lg" />
                  For Appointments:{" "}
                  <span className="text-customBlue ml-1 text-md font-semibold">
                    600 52 4442
                  </span>
                </p>
                <p className="text-gray-500 flex items-center">
                  <IoLogoWhatsapp className="mr-2 text-customBlue text-lg" />
                  Make Appointments via Whatsapp:{" "}
                  <span className="text-customBlue ml-1 text-md font-semibold">
                    +971 600524442
                  </span>
                </p>
                <p className="text-gray-500 flex items-center">
                  <FaEnvelope className="mr-2 text-customBlue text-lg" />
                  Information:{" "}
                  <span className="text-customBlue ml-1 text-md font-semibold">
                    info@zulekhahospitals.com
                  </span>
                </p>
                <p className="text-gray-500 flex items-center">
                  <FaUserTie className="mr-2 text-customBlue text-lg" />
                  Send resume to:{" "}
                  <span className="text-customBlue ml-1 text-md font-semibold">
                    hr@zulekhahospitals.com
                  </span>
                </p>
                <p className="text-gray-500 flex items-center">
                  <FaTrain className="mr-2 text-customBlue text-lg" />
                  Nearest Metro Station: Al Nahda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default Contact;
