import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row w-full h-auto">
      {/* Left section */}

      <div className="bg-customGreen md:w-1/3 flex flex-col justify-start items-end ">
        <div className="w-4/5">
          {/* <div className="flex flex-row justify-center  h-auto w-4/5 ml-auto">
            <img
              src="images/doctor-steth.png"
              className="h-28 mt-12"
              alt="Doctor Stethoscope"
            />
            <img
              src="images/greenbg.jpg"
              className=""
              alt="Shape"
            />
          </div> */}

          <div className="flex md:flex-row flex-wrap">
            <img
              src="/images/doctor-steth.png"
              className="h-28 mt-12"
              alt="Doctor Stethoscope"
            />
            <img
              src="/images/greenbg.jpg"
              className=""
              alt="Shape"
            />
            </div>

          <div className="w-11/12 -mt-16">
            <h1 className="text-3xl md:text-5xl  font-bold text-white">
              Get a Second Opinion
            </h1>
            <p className="text-lg md:text-xl py-4 md:py-8 text-white">
              Make the right decision... Your Health Matters
            </p>
            <button className="group relative inline-flex overflow-hidden border border-white border-opacity-50 px-6 py-3 font-medium text-white items-center">
              <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-customBlue opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
              <div className="relative flex flex-row items-center group-hover:text-white">
                <span className="relative ml-1 -mt-1 text-">Click Here</span>
                <BsArrowRight className="ml-2 my-auto text-2xl transition duration-300 ease-in-out group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className=" md:w-2/3 flex flex-col">
        {/* Top section */}
        <div
          className="h-40 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/images/footerbg.png')" }}
        >
          {/* Content of div if needed */}
        </div>

        {/* Bottom section */}
        <div className="bg-customBlue h-full">
          <div className="grid grid-cols-3   md:grid-cols-5 gap-2 py-12 px-8 w-11/12">
            <div>
              <h2 className="text-white font-bold py-2 text-lg">Internal</h2>
              <ul className="text-white space-y-2 text-sm py-3">
                <li>
                  <Link href="/link1" className="hover:text-gray-300">
                    Refer a patient
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    official E-Mails
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    office access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-bold py-2  text-lg">Downloads</h2>
              <ul className="text-white space-y-3 text-sm py-3">
                <li>
                  <Link href="/link1" className="hover:text-gray-300">
                    GRI Report
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Gender Equality
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    corporate profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-bold py-2  text-lg">
                Publication
              </h2>
              <ul className="text-white space-y-3 text-sm py-3">
                <li>
                  <Link href="/link1" className="hover:text-gray-300">
                    Zulekha health care medical journal
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Zulekha Reach
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Zulekha spirit
                  </Link>
                </li>

                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Educational leaflets
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Zulekha success stories
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Daibaties and ramadan practical Guildlines
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-bold py-2  text-lg">
                Connect with us
              </h2>
              <ul className="text-white space-y-3 text-sm py-3">
                <li>
                  <Link href="/link1" className="hover:text-gray-300">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Locate us
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Registration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-bold py-2  text-lg">Policies</h2>
              <ul className="text-white space-y-3 text-sm py-3">
                <li>
                  <Link href="/link1" className="hover:text-gray-300">
                    e-Services Terms and Condition
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Quality and Accrediations
                  </Link>
                </li>
                <li>
                  <Link href="/link2" className="hover:text-gray-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-500 w-full mt-24 " />

          <div className="flex flex-row p-8 bottom-0">
            {/* First <p> element */}
            <p className="text-white text-sm">
              © 2024 Zulekha Healthcare. All rights reserved.
            </p>

            {/* Second <p> element */}
            <p className="text-white text-sm px-6">
              HRCQV8GB-171121 Valid From: 17/11/2021 – 17/11/2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
