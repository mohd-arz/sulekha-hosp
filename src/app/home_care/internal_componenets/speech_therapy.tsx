// DoctorAtHome.tsx
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";

// interface DoctorAtHomeProps {
//   onBookAppointment: () => void; // Function to handle booking an appointment
// }

const speechtherapy:  React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  return (
    <div className="p-4">
      <div className="mb-4 space-y-4">
        <p className="text-gray-500 mt-2 text-sm leading-6">
          Our experts in Speech Language Pathology specialize in the
          comprehensive evaluations, diagnosis and treatment of various speech,
          language, social communication, cognitive-communication and swallowing
          disorders in children and adults. When required our multi-disciplinary
          rehabilitative team comes together to support our patrons. Our expert
          Speech Language Pathologist offers appropriate treatment protocols for
          various speech and language disorders listed below in the comfort of
          your homes.
        </p>
      </div>

      <div className="py-6">
        <h1 className="font-bold text-customBlue text-lg">Children</h1>
        <ul className="mt-3 flex flex-col space-y-3 text-gray-500">
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Developmental delay</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Autism Spectrum Disorder</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Speech Sound Disorder/Misarticulation
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Stuttering / stammering</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Voice disorders</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Dysphagia</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Specific Learning Disability</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Cleft lip and palate</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Intellectual Disability</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Children with Cochlear implant/Hearing aids
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Childhood Apraxia of Speech</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              High functioning autism/ Pragmatic impairment
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Syndromic conditions like Down's syndrome etc.
            </p>
          </li>
        </ul>
      </div>

      <div className="py-6">
        <h1 className="font-bold text-customBlue text-lg">Adults</h1>
        <ul className="mt-3 flex flex-col space-y-2 text-gray-500">
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Aphasia (Stroke, Dementia, Traumatic Brain Injury Etc.)
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Motor Speech Disorders (Dysarthria, Multiple Sclerosis,
              Parkinson's Disease)
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Apraxia of Speech</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Stuttering / Stammering</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Voice Disorders</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Dysphagia</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Adults With Cochlear Implant/Hearing Aids
            </p>
          </li>
        </ul>
      </div>
      <div className="py-6">
        <h1 className="font-bold text-customBlue text-lg">
          Speech and Language Evaluation
        </h1>
        <ul className="mt-3 flex flex-col space-y-2 text-gray-500">
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Screening and counseling</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Screening or bedside evaluation (for adult in patients)
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Comprehensive/formal/standardized speech and language evaluation
              and counseling
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Instrumental evaluation of voice and swallowing disorders
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Classroom consultation</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Evaluation of auditory rehabilitation status
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Speech and Language Intervention
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Individual therapy</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Group intervention program</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Auditory verbal therapy</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">
              Augmentative Alternative Communication/ tool/ computer assisted
              therapy
            </p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Voice therapy</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Swallowing therapy</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Teletherapy</p>
          </li>
          <li className="flex">
            <LuCheckCircle2 className="mr-2 h-auto w-4 text-green-600 " />
            <p className="text-base text-sm">Parent training</p>
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

export default speechtherapy;
