import React from "react";
import visa from "../assets/choose/superior.png";
import argImg from "../assets/choose/high.png";
import nursingImg from "../assets/choose/ieltstoef.png";
import japan from "../assets/choose/japan.jpg";
import period from "../assets/choose/period.jpg";
import time from "../assets/choose/time.jpg";
import university from "../assets/choose/university.jpg";
import working from "../assets/choose/working.jpg";
import director from "../assets/director.jpg";
import maniram from "../assets/maniram.jpg";

const About = () => {
  return (
    <div>
      <div className="pt-6"></div>
      <div className="py-10 bg-yellow-100">
        <div className="container">
          <h1 className="pl-2 text-3xl font-bold">About us</h1>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="">
            <h1>Welcome to our Consultancy</h1>
            <p>
              Good Vibes Education Consultancy is a well-recognized and genuine
              educational consultancy which is established to encourage
              ambitious students to fulfill their educational and career
              objectives in Japan. The facts that set us apart from the rest
              are: More than 10 years of experience in Japan. Professional N3
              passed language teacher for Japanese language classes. The
              teaching method, office environment, and administration are
              entirely in the Japanese system. Universities are chosen by
              directly visiting and observing in Japan. Guidance and support for
              you also in Japan until you become successful. We are committed to
              providing honest and accurate information. We will be pleased to
              share our experience with you.
            </p>
          </div>
        </div>
      </section>
       {/* why choose us */}
       <section>
          <div className="container">
            <div className="row text-center flex justify-center items-center">
              <div className="md:col-span-10">
                <h2 className="text-2xl pt-14">Why Choose Us</h2>
              </div>
            </div>
            <div className="grid grid-cols-3 md:col-span-3 box-border">
              <div className="flex flex-col items-center">
                <img
                  src={visa}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">Visa Processing</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={nursingImg}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">
                  Working Visa in Nursing
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={argImg}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">
                  Working Visa in Agriculture
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={university}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">Visa Processing</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={time}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">
                  Working Visa in Nursing
                </div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={working}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">
                  Working visa in Agriculture
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={time}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">Visa Processing</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={period}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">
                  Working Visa in Nursing
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={japan}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36
                "
                />
                <div className="flex justify-center pt-4">
                  Working visa in Agriculture
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MEET THE TEAM */}
        <section>
          <div className="container pt-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-normal text-center">MEET THE TEAM</h1>
              </div>
            </div>
            <div className="grid grid-cols-2 md:col-span-3 box-border">
            <div className="flex flex-col items-center">
                <img
                  src={maniram}
                  alt=""
                  className="max-w-80"
                />
                <p className="flex justify-center pt-4">Mr. Mani Ram Puri
                </p>
                <p className="flex justify-center pt-2">
                LANGUAGE TEACHER AND SENIOR COUNSELOR(JLPT N2 Level Holder)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={director}
                  alt=""
                  className="max-w-72"
                />
                <p className="flex justify-center pt-4">Mr. Khem Raj Giri
                </p>
                <p className="flex justify-center pt-2">
                Managing Director
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;
