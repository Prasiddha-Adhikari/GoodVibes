import React from "react";
import NatureVid from "../assets/video/main.mp4";
import Location from "../components/Location/Location";
import student from "../assets/stvisa.png";
import nurse from "../assets/nursing.jpeg";
import arg from "../assets/arg.jpeg";
import food from "../assets/foodservice.jpeg";
import visa from "../assets/choose/superior.png";
import argImg from "../assets/choose/high.png";
import nursingImg from "../assets/choose/ieltstoef.png";
import japan from "../assets/choose/japan.jpg";
import period from "../assets/choose/period.jpg";
import time from "../assets/choose/time.jpg";
import university from "../assets/choose/university.jpg";
import working from "../assets/choose/working.jpg";
import director from "../assets/director.jpg";
import Testimonial from "../components/Testimonial/Testimonial"

const Home = () => {
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
        </div>
        <section>
          <div className="container">
            <div className="row text-center justify-center">
              <div className="md:col-span-10">
                <h2 className="text-2xl">Good Vibes Education Consultancy</h2>
                <p className="text-red-600">
                  Best Education Consultancy in Nepal
                </p>
                <p className="font-light px-16">
                  Good Vibes Education Consultancy is a well-recognized and
                  genuine educational consultancy which is established to
                  encourage ambitious students to fulfill their educational and
                  career objectives in Japan. The facts that set us apart from
                  the rest are: More than 10 years of experience in Japan.
                  Professional N3 passed language teacher for Japanese language
                  classes. The teaching method, office environment, and
                  administration are entirely in the Japanese system.
                  Universities are chosen by directly visiting and observing in
                  Japan. Guidance and support for you also in Japan until you
                  become successful. We are committed to providing honest and
                  accurate information. We will be pleased to share our
                  experience with you.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Services */}
        <section>
          <div className="container">
            <div className="row text-center flex justify-center items-center">
              <div className="md:col-span-10">
                <h2 className="text-2xl pt-14">Our Services</h2>
              </div>
            </div>
            <div className="grid grid-cols-4 md:col-span-3 box-border">
              <div className="flex flex-col items-center">
                <img
                  src={student}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36 "
                />
                <div className="flex justify-center pt-4">Student Visa</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={nurse}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36  "
                />
                <div className="flex justify-center pt-4">
                  Working Visa In Nursing
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={arg}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36  "
                />
                <div className="flex justify-center pt-4">
                  Working Visa In Agriculture
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={food}
                  alt=""
                  className="rounded-[50%] align-middle overflow-clip h-36 w-36  "
                />
                <div className="flex justify-center pt-4">
                  Working Visa In Food Service
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* intro */}
        <section>
          <div className="container pt-10">
            <div className="row text-center flex justify-center items-center">
              <div className="md:col-span-10"></div>
            </div>
            <div className="flex flex-row ">
              <div className="flex flex-col items-center px-16 box-border">
                <img
                  src={director}
                  alt=""
                  className="max-w-56"
                />
                <div className="flex flex-col justify-center pt-4">
                  <h1 className="text-2xl font-bold">Mr. Khem Raj Giri
              </h1>
              <h6 className="flex justify-center">CEO</h6>
                </div>
              </div>
              <div className="flex items-center justify-end">
                Welcome to Good Vibes Education Consultancy Dear Students and
                Parents Studying abroad is a good opportunity, most students who
                travel to foreign countries get impacted in a good way, such as
                their Success, personality, and the way they interact with
                others. Students who study abroad will benefit more than they
                suffer, even though leaving home could be hard, it is the best
                challenge students face to encourage them to get back with
                achievements, personal independence, and open-minded.
              </div>
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
        <Location />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
