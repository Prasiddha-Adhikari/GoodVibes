import React from "react";
import service from "../assets/services.png";
import service2 from "../assets/service2.png";

const Services = () => {
  return (
    <div className="pt-5">
      <div className="py-5 bg-yellow-100">
        <div className="container">
          <h1 className="pl-2 text-2xl font-normal">Services</h1>
        </div>
      </div>
      <div className="container pt-5">
        <img src={service} alt="" />
        <div className="pt-10 pb-5">
          <div className="">
            <h1 className="pl-2 text-2xl">Student Visa</h1>
          </div>
        </div>
        <p>
          um is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of um is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of
        </p>
        <img src={service2} alt="" className="pt-5"/>
        <div className="py-5">
          <div className="">
            <h1 className="pl-2 text-2xl">Working Visa</h1>
          </div>
        </div>
        <p>
          um is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of um is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of
        </p>
        <div className="pt-5">
          <div className="">
            <h1 className="pl-2 text-2xl">Different Working Visa</h1>
          </div>
        </div>
        <p className="pl-5">
        <ul style={{ listStyleType: 'disc' }}>
                    <li>Nursing</li>
                    <li>Agriculture</li>
                    <li>Food Service</li>
                </ul>
        </p>
      </div>
    </div>
  );
};

export default Services;
