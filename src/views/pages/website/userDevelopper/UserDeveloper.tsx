import React, { useEffect, useState } from "react";
import bg2 from "../../../../assets/bgimg.png";
import bg from "../../../../assets/bg.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "../../PageWrapper";
import { Solution, SolutionProps } from "./elements/Solution";
import { Problem } from "./elements/Problem";
import { Audience } from "../../../Audience";

export interface UserDeveloperProps {
  audience: Audience;
  primaryProblemsSrc: string;
  secondaryProblemsSrc: string;
  solutions: SolutionProps[];
}

export function UserDeveloper(props: UserDeveloperProps) {
  const [bgSize, setBgSize] = useState("70%");
  const [bgSize2, setBgSize2] = useState("60%");
  const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Your Profile");

  const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("In which open source project? (if applicable)");

  // Toggle functions for each dropdown
  const toggleDropdown1 = () => {
    setIsOpenDropdown2(false);
    setIsOpenDropdown1(!isOpenDropdown1);
  };

  const toggleDropdown2 = () => {
    setIsOpenDropdown1(false);
    setIsOpenDropdown2(!isOpenDropdown2);
  };

  // Handle selection for each dropdown
  const handleSelect1 = (option: string) => {
    setSelectedOption1(option);
    setIsOpenDropdown1(false);
  };

  const handleSelect2 = (option: string) => {
    setSelectedOption2(option);
    setIsOpenDropdown2(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 3000 && window.innerWidth <= 7000) {
        setBgSize2("40%");
      } else {
        setBgSize2("60%");
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 2500 && window.innerWidth <= 7000) {
        setBgSize("30%");
      } else {
        setBgSize("60%");
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageWrapper>
      <div className="">
        <div className="flex flex-col lg:my-20 my-8 items-center justify-center text-center px-4 md:px-8 lg:px-16">
          <Problem primaryProblemsSrc={props.primaryProblemsSrc} secondaryProblemsSrc={props.secondaryProblemsSrc} />
        </div>

        <div
          className="bg-no-repeat bg-bottom "
          data-aos="fade-in"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundPositionY: "center",
            backgroundSize: "contain",
          }}
        >
          <div data-aos="fade-in" className="2xl:px-20 lg:px-52 container">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[70px] xl:leading-[75px] leading-4">
              No BS. <br />
              <span className="text-lg md:text-xl lg:text-2xl xl:text-[45px] ">Here’s our solution.</span>
            </h1>
          </div>

          <div>
            <div
              style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "right",
                backgroundSize: bgSize,
              }}
              className=" bg-no-repeat py-5 "
            >
              <div data-aos="fade-in" data-aos-duration="35000" className="px-4 mt-12 flex flex-col justify-center items-center max-w-full">
                {props.solutions.map((solution, index) => (
                  <Solution key={index} {...solution} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:py-96 md:py-16" data-aos="fade-in" data-aos-duration="25000">
            <h1
              data-aos="fade-in"
              data-aos-duration="25000"
              className="text-center lg:text-[29px] lg:leading-[90px] md:text-[19px] xl:text-[65px] text-[17px] "
            >
              The future of open source is here <br /> <span className="lg:text-[20px] md:text-[15px] xl:text-[50px] text-[14px]">JOIN THE MOVEMENT.</span>
            </h1>
            {/*TODO: to refactor*/}
            <h1
              data-aos="fade-in"
              data-aos-duration="25000"
              className="text-center text-3xl md:text-4xl lg:text-6xl lg:mt-32 md:mt-22 xl:mt-96 mt-14"
              style={{
                background: "linear-gradient(90deg, #66319B 0%, #FF518C 50%, #FF7E4B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Register your <br /> interest now.
            </h1>
            <div data-aos="fade-in" className="container mx-auto flex flex-col pt-14 lg:pt-44  lg:px-42 2xl:px-64 md:px-32 sm:px-10">
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your Email*"
                  className="email border-bottom border-[#fff] bg-transparent text-[16px] lg:text-[24px] pb-3 outline-none text-[#fff] w-100"
                />
                <div className="flex align-items-center mt-3 gap-2">
                  <input type="checkbox" name="" id="" />
                  <h2 className="text-[15px] text-[rgba(252,254,253,27%)]">Sign up for news & updates</h2>
                </div>
                <div className="mt-5 relative inline-block text-left w-100">
                  <button
                    onClick={toggleDropdown1}
                    className="flex text-left items-center justify-between  border-bottom border-[#fff] bg-transparent text-[16px] lg:text-[24px] pb-3 outline-none text-[#FCFEFD] w-100"
                  >
                    {selectedOption1}
                    <svg
                      className="w-8 h-8 p-1 ml-2 border border-[#fff] rounded-full text-[#fff]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpenDropdown1 && (
                    <div className="absolute z-[999] top-12 cursor-pointer left-0  mb-2 w-48 bg-[#0e1f35] border border-gray-300 rounded-md shadow-lg">
                      <div className="p-2">
                        <h1 onClick={() => handleSelect1("Profile 1")} className="block px-4 py-2 text-white ">
                          Profile 1
                        </h1>
                        <h1 onClick={() => handleSelect1("Profile 2")} className="block px-4 py-2 text-white ">
                          Profile 2
                        </h1>
                        <h1 onClick={() => handleSelect1("Profile 3")} className="block px-4 py-2 text-white ">
                          Profile 3
                        </h1>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 relative inline-block text-left w-100">
                    <button
                      onClick={toggleDropdown2}
                      className="flex items-center text-left justify-between border-bottom border-[#fff] bg-transparent text-[16px] lg:text-[24px] pb-3 outline-none text-[#FCFEFD] w-100"
                    >
                      {selectedOption2}
                      <svg
                        className="w-8 h-8 p-1 ml-2 border border-[#fff] rounded-full text-[#fff]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {isOpenDropdown2 && (
                    <div className="absolute z-50 cursor-pointer left-0 mt-2 w-48 bg-[#0e1f35]  border border-gray-300 rounded-md shadow-lg">
                      <div className="p-2 ">
                        <h1 onClick={() => handleSelect2("Yes")} className="block px-4 py-2 text-white">
                          Yes
                        </h1>
                        <h1 onClick={() => handleSelect2("No")} className="block px-4 py-2 text-white">
                          No
                        </h1>
                      </div>
                    </div>
                  )}
                </div>
                <div data-aos="fade-in" className="mt-5 ">
                  <h1 className=" text-[23px]">Message</h1>
                  <input
                    placeholder="Share your motivation..."
                    type="text"
                    className="mt-3 message border-bottom border-[#fff] bg-transparent lg:text-[17px] text-[14px] lg:pb-48 pb-20 md:pb-32 outline-none text-[#fff] w-100"
                  />
                </div>
                <div data-aos="fade-in" className="flex items-center justify-center">
                  <button className="px-6 py-3 mt-5 findbutton">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}