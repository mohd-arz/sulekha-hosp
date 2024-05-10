// Importing React and useState for state management
"use client";
import React, { useState } from "react";
import InnerLayout from "../innerlayout";
import Homesidebar from "./homesidebar";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";

// Define the types for content
type ContentItem = {
  title: string;
  content: string;
};

// Homecare component definition
const Homecare: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentItem>({
    title: "Home Care",
    content: "",
  });
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const contents: ContentItem[] = [
    {
      title: "Home Care",
      content:
        "We are proud to be part of your world and we make everything possible to ensure your health and happiness. As one of the leading healthcare brands in the region, we seamlessly blend healthcare innovation with human expertise to deliver comprehensive and long-lasting solutions. In the wake of the COVID-19 pandemic and understanding the unique healthcare needs of every individual, we are thrilled to extend our medical expertise and world class care to the patients in the privacy and comfort of their own homes. Our home health care is designed to meet these needs by offering personalized service to ensure improved",
    },
    {
      title: "Doctor at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "physio at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Nurse at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Investigation  at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Medication Management at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Covid-19 Testing at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Medical Equipment  at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Vaccination at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Psycology Mental Wellbeing and Counselling",
      content: "Details about doctor at home services.",
    },
    {
      title: "Speechtherapy at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Nutridrip at Home",
      content: "Details about doctor at home services.",
    },
    {
      title: "Postnatal at Home",
      content: "Details about doctor at home services.",
    },
  ];

  const handleLinkClick = (item: ContentItem, index: number) => {
    setActiveContent(item);
    setActiveIndex(index); // Update the active index
    // setFormVisibleFrom(null); // Hide any open forms when switching sections
  };

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
                  We are proud to be part of your world and we make everything
                  possible to ensure your health and happiness. As one of the
                  leading healthcare brands in the region, we seamlessly blend
                  healthcare innovation with human expertise to deliver
                  comprehensive and long-lasting solutions.
                </p>
                <p className="text-gray-500 mt-2 text-sm leading-6">
                  In the wake of the COVID-19 pandemic and understanding the
                  unique healthcare needs of every individual, we are thrilled
                  to extend our medical expertise and world class care to the
                  patients in the privacy and comfort of their own homes. Our
                  home health care is designed to meet these needs by offering
                  personalized service to ensure improved health and quality of
                  every life we touch.
                </p>
              </div>

              <div className="">
                <h1 className="font-bold text-xl text-customBlue">
                  Primary benefits of home health care include:
                </h1>
                <ul className="  mt-4 text-gray-500 text-sm space-y-3">
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Delivered in the comfort of the patient's home
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Easier for family and friends to visit
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Promotes healing and provides more safety from infections
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Allows more freedom and independence
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Tailored to the needs of each individual patient
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
                    <p className="text-base  text-sm">
                      Reduces re-hospitalizations
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default Homecare;
