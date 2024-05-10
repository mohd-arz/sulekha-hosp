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

const Nutridip: React.FC = () => {
  return (
    <InnerLayout>
      <div className="bg-gray-100">
        <div className="flex justify-center items-center">
          <div className="w-10/12 mb-4 flex flex-row bg-white mt-4">
            <div className="w-1/4 ">
              <Homesidebar />
            </div>
            <div className="custom-scrollbar  w-3/4 p-6 h-screen overflow-y-auto">
              <div className="mb-6 space-y-4">
                <p className="text-gray-500 mt-2 text-sm ">
                  Our current lifestyle is incredibly fast-paced, making it hard
                  for us to keep track of our health and wellness. In order to
                  ensure that all the essential nutrients and vitamins are going
                  into our bodies at all times, it is imperative for us to
                  follow a nutritious and healthy diet and lifestyle. However,
                  this often proves to be a seemingly arduous task to maintain,
                  in today’s day and age. NutriDrip Therapy is a treatment that
                  has gained popularity in the recent past, specifically for its
                  ability to help keep our health on track in the midst of this
                  fast-paced lifestyle. Through a Zulekha customized infusion of
                  vitamins and minerals, this treatment is designed to allow the
                  concentrated mix to directly be absorbed by the body. As
                  opposed to taking vitamins via your mouth, where the vitamins
                  get broken down by our digestive tract leaving only partial
                  amounts to be absorbed. NutriDrip Therapy ensures that high
                  concentrations of vitamins are directly and wholly absorbed
                  into your bloodstream.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  IV infusions are a unique blend of vitamins, minerals, and
                  amino acids; all classified as ‘essential nutrients’ vital for
                  the body. It has been brilliantly formulated to support with
                  hydration, detox, enhancing energy levels, strengthening the
                  immune system.
                </p>

                <p className="text-gray-500 mt-2 text-sm">
                  The NutriDrip Therapy at Zulekha Hospital delivers the fluids
                  directly into the veins. It is the fastest way to give your
                  body the ingredients it needs. This enables the results to be
                  much more effective than oral intakes.
                </p>

                <p className="text-gray-500 mt-2 text-sm">
                  We present a bouquet of Infusion Therapies to rejuvenate and
                  recharge your body. These are clinically proven to boost and
                  enhance your health.
                </p>
              </div>

              <div className="mb-6 space-y-4 ">
                <h1 className="font-bold text-customBlue text-2xl">
                  DOES IT REALLY WORK?
                </h1>
                <p className="text-gray-500 mt-2 text-sm">
                  When our bodies suffer from vitamin deficiencies, we often
                  resort to supplementation to compensate. The human body
                  absorbs 10 - 30% of the vitamins contained in oral pills,
                  hence making IV vitamin therapy more effective as it goes
                  directly into the bloodstream with 100% absorption rates
                  compared to supplements or directly from food sources.
                </p>
              </div>

              <div className="mb-6 space-y-4 ">
                <h1 className="font-bold text-customBlue text-2xl">
                  HOW LONG DOES IT TAKE TO FEEL A DIFFERENCE?
                </h1>
                <p className="text-gray-500 mt-2 text-sm">
                  Results vary with each patient but most tend to feel effects
                  during the infusion while others feel various effects directly
                  after or the following day. Most common feedback we receive
                  from our clients: energetic, better performance in the gym,
                  relaxed, undisturbed deep sleep, refreshed and hydrated skin,
                  better mood.
                </p>
              </div>

              <div className="mb-6 space-y-4 ">
                <h1 className="font-bold text-customBlue text-2xl uppercase">
                  What is NutriDrip Therapy and how is it administered?
                </h1>
                <p className="text-gray-500 mt-2 text-sm">
                  NutriDrip Therapy is a delivery method for fluids and
                  medication. “IV” stands for intravenous, which means it is
                  administered through the veins. As the fluid that contains
                  vitamins and minerals or medication is delivered via an IV
                  drip or injection into the vein, which allows the therapy to
                  move quickly through your bloodstream.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  The IV procedure is very straight forward, and painless.
                  <span className="font-bold text-customBlue">
                    All Zulekha Hospital Homecare Nurses
                  </span>{" "}
                  have extensive cannulation experience. Our nurse administering
                  the therapy will talk you through the procedure. Generally,
                  you will be seated somewhere comfortable for the duration of
                  the therapy. Our nurse will disinfect the injection site and
                  place a needle directly in a vein. The IV will typically be
                  placed in the arm, but it is possible to be placed elsewhere.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Once the IV is inserted it drips through the catheter and
                  enters your body the fluid from the IV bag is absorbed
                  directly into the bloodstream. This method typically delivers
                  medication faster than oral administration. During IV therapy,
                  you need to keep still, so you do not disturb or dislodge the
                  catheter and most importantly to relax.
                </p>
              </div>

              <div className="mb-6 space-y-4 ">
                <h1 className="font-bold text-customBlue text-2xl uppercase">
                  Are there any side effects?
                </h1>
                <p className="text-gray-500 mt-2 text-sm">
                  Almost all IV are very well tolerated, with just a few
                  reported side effects. You are likely to feel pain or swelling
                  at the puncture site.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  It is necessary to notify the specialist about medications or
                  specific ingredient allergies to avoid future side reactions.
                </p>
              </div>

              <div className="mb-6 space-y-4 ">
                <h1 className="font-bold text-customBlue text-2xl uppercase">
                  Why choose NutriDrip Therapy?
                </h1>
                <p className="text-gray-500 mt-2 text-sm">
                  It is a highly effective treatment that treats and prevents
                  many diseases. With the industrialization advance, more and
                  more people suffer from irritability and distress, which
                  almost always leads to deficient nutrients and supplements
                  absorption taken by mouth.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Not only this, when smoking and drinking alcohol becomes a
                  habit, it deteriorates on a large scale our purifying organs
                  such as the liver and kidney. But how can we revert or help
                  our body to regain the lost nutrients? Thanks to intravenous
                  infusion therapy, the nutrients reach the cells without loss
                  through the digestive system. Also, they get the organs
                  immediately, so you don’t have to wait to feel better.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  NutriDrip Therapy is a 30-40 minute procedure. No anesthesia
                  or hospitalization is required. Our IVs are 100% absorbed,
                  have passed all scientific tests, and are recommended and
                  administered by trained doctors and nurses.
                </p>
              </div>
              <div className="mb-6 space-y-4 ">
                <h1 className="font-bold text-customBlue text-2xl uppercase">
                  Our Team:
                </h1>
                <p className="text-gray-500 mt-2 text-sm">
                  Our team consists of some of the smartest, caring, positive
                  and most cutting-edge practitioners, who have helped many
                  patients, treat the root cause of their illnesses
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Our team consists of experts in disease treatment, prevention
                  and health management, meeting the highest international
                  standards of medical care.
                </p>
              </div>

              <div className="py-6">
                <h1 className="font-bold text-customBlue text-2xl uppercase">
                  Benefits:
                </h1>
                <p className="text-gray-500 mt-2 text-sm mb-4">
                  There are a variety of benefits of undergoing a NutriDrip
                  Therapy. It is a fast and efficient way to get your nutrients
                  in and the results are felt almost instantly. The best part is
                  that you can Zulekha customize the vitamins and trace elements
                  according to your needs and concerns. Here are a few of the
                  most important benefits of this IV infusion:
                </p>
                <ul className="mt-3 flex flex-col space-y-3 text-gray-500 ">
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 w-4 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        Hydration:
                      </span>{" "}
                      The drip therapy helps combat issues related to extreme
                      dehydration, medication side-effects, and sickness. It
                      enables the body to be fully hydrated and restores and
                      revives it in the process.
                    </p>
                  </li>
                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 w-4 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        Detoxify
                      </span>{" "}
                      By infusing essential nutrients and trace elements into
                      the bloodstream, the treatment helps flush out toxins in a
                      much more efficient manner thereby detoxifying and
                      purifying our blood.
                    </p>
                  </li>

                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 w-4 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        Immune support and wellness infusion:{" "}
                      </span>
                      The treatment supports and protects the immune system
                      seasonally, that helps minimize risks of cold, flu, and
                      other infections. By boosting immunity, the therapy also
                      helps get rid of fatigue and low energy levels.
                    </p>
                  </li>

                  <li className="flex">
                    <LuCheckCircle2 className="mr-2 w-4 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-base  text-sm">
                      <span className="font-bold text-customBlue">
                        Stress relief:
                      </span>
                      This wellness infusion helps minimize stress and anxiety,
                      and increases serotonin and dopamine levels.
                    </p>
                  </li>
                </ul>
                <div className="mb-4 space-y-4">
                  <p className="text-gray-500 mt-2 text-sm">
                    Maintain and improve skin health: By allowing hydration
                    levels to be at an optimum, the therapy hydrates the skin as
                    well leading to a natural glow from within. This also helps
                    combat acne, flare-ups, and other skin concerns that occur
                    as a result of dehydration.
                  </p>
                  <p className="text-gray-500 mt-2 text-sm">
                    Jet lag revival: By infusing the body with hydration and
                    vitamins, the therapy helps alleviate common symptoms of jet
                    lag such as fogginess, aches, fatigue, and dehydration.
                  </p>
                  <p className="text-gray-500 mt-2 text-sm">
                    Faster results than supplements: The therapy is designed in
                    a way that ensures that the nutrients can start working
                    immediately as they are directly pumped into your
                    bloodstream, as opposed to oral supplements. As such,
                    results are also visible in a few hours if not instantly.
                  </p>
                  <p className="text-gray-500 mt-2 text-sm">
                    The NutriDrip Therapy has multiple benefits with instant
                    results. The individual tailoring of the therapy allows each
                    person to get the maximum advantage out of it in accordance
                    with their concerns and needs. However, it is important to
                    do your research and only undergo the therapy in a reputable
                    clinic with an experienced and qualified medical
                    professional to ensure best results.
                  </p>
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
      </div>
    </InnerLayout>
  );
};

export default Nutridip;
