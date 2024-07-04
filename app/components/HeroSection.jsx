"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
  return (
    <section>
      <br />
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="text-[#266631] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6F52] via-green-200 to-[#4F6F52]">
                  Hello, I am{" "}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "MIHIRA",
                    1000, 
                    "Web Developer",
                    1000,
                    "UI/UX Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-[#4F6F52] text-base sm:text-lg mb-6  lg:text-xl">
              I am excited to share my portfolio with you today! It highlights my work, showcasing my skills and experience. I invite you to explore the projects and know my capabilities.
              </p>
              <div>
                <button className="border-[#4F6F52] border-4 px-6 py-1 w-full sm:w-fit rounded-full inline-block mr-4 bg-gradient-to-br from-[#4F6F52] via-green-200 to-[#4F6F52] text-[#010101]">
                <a href={`mailto:vinjamurimihira@gmail.com`}>Hire Me</a>
                </button>
              </div>
            </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#E8DFCA] w-[250px] h-[260px] lg:w-[250px] lg:h-[250px] relative">
            <Image
              src="/images/image.png"
                alt="myself....milli"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
            </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
