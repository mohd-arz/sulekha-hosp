"use client";
import React, { useState } from "react";
import Link from "next/link";

type ContentItem = {
  title: string;
  content: string;
  url: string;
};

const Homesidebar: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentItem>({
    title: "Home Care",
    content: "",
    url: "",
  });
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const contents: ContentItem[] = [
    {
      title: "Home Care",
      content:
        "We are proud to be part of your world and we make everything possible to ensure your health and happiness. As one of the leading healthcare brands in the region, we seamlessly blend healthcare innovation with human expertise to deliver comprehensive and long-lasting solutions. In the wake of the COVID-19 pandemic and understanding the unique healthcare needs of every individual, we are thrilled to extend our medical expertise and world class care to the patients in the privacy and comfort of their own homes. Our home health care is designed to meet these needs by offering personalized service to ensure improved",
      url: "/home_care",
    },
    {
      title: "Doctor at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/doctor_at_Home",
    },
    {
      title: "physio at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/physio_home",
    },
    {
      title: "Nurse at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/nurse_home",
    },
    {
      title: "Investigation  at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/investigation_at_home",
    },
    {
      title: "Medication Management at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/medication",
    },
    {
      title: "Covid-19 Testing at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/covid_19_test",
    },
    {
      title: "Medical Equipment  at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/medical_equipment",
    },
    {
      title: "Vaccination at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/vaccination",
    },
    {
      title: "Psycology Mental Wellbeing and Counselling",
      content: "Details about doctor at home services.",
      url: "/home_care/psychology",
    },
    {
      title: "Speechtherapy at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/speech_therapy",
    },
    {
      title: "Nutridrip at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/nutridip",
    },
    {
      title: "Postnatal at Home",
      content: "Details about doctor at home services.",
      url: "/home_care/post_natal",
    },
  ];
  const handleLinkClick = (item: ContentItem, index: number) => {
    setActiveContent(item);
    setActiveIndex(index); // Update the active index
  };
  return (
    <div className="flex justify-center items-center">
      <div className="mb-4 flex flex-row bg-white">
        <div className="bg-customBlue w-full h-auto">
          <ul>
            {contents.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-300  px-6 py-4 hover:bg-green-500"
              >
                <Link href={item.url}>
                  <button className="text-left w-full text-white text-xs font-bold">
                    {item.title}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Homesidebar;
