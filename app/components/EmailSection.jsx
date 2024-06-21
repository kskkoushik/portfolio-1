"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 md:my-12 py-24 gap-4 relative">
      {/*<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>*/}
        <div>
            {/*<h2 className="text-lg font-bold text-[#5297cb] my-2 text-center">Contact Me!!</h2>*/}
            <h2 className="text-4xl font-bold text-[#5297cb] mt-4 mb-5 lg:pl-28">
              Reach Me!!
            </h2>
            <p className="text-[#294457] text-lg md-4 max-w-md lg:pl-28">
                {" "}
                I am always interested in collaborating on new projects and exploring exciting opportunities. Feel free to reach out to me via email or connect with me on LinkedIn...
            </p>
            <div className="socials flex flex-rw mt-2 lg:pl-28">
              <Link href="https://github.com/Vmihira">
              <Image src="/github-icon.svg" alt="Linkedin Icon" height={32} width={32} style={{ marginRight: 30 }}/>
              </Link>
              <Link href="https://www.linkedin.com/in/vinjamuri-mihira-96243725b/">
                <Image src="/linkedin-icon.svg" alt="Linkedin Icon" height={32} width={32} style={{ marginRight: 30 }}/>
              </Link>
              <Link href={`mailto:vinjamurimihira@gmail.com`}>
                <Image src="/envelope-regular.svg" alt="Linkedin Icon" height={32} width={35} />
              </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col gap-6 lg:pr-36">
              <div className="mb-4">
                <label htmlFor="email" type="email" className="text-[#5297cb] block mb-2 text-sm font-medium">Your email</label>
                <input type="email" id="email" required placeholder="abc@gmail.com" className="bg-[#b2dcd4] border border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="text-[#5297cb] block mb-2 text-sm font-medium">Subject</label>
                <textarea name="message" id="message" required placeholder="Text me!!" className="bg-[#b2dcd4] border border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
              </div> 

              <button type="button" className="border-black border-2 bg-gradient-to-br from-[#199df5] via-blue-100 to-[#199df5] text-[#010101] font-bold py-2.5 px-5 rounded-lg w-full">
                <a href={`mailto:vinjamurimihira@gmail.com`}>Message Me!!</a>
              </button>

            </form>
        </div>
    </section>
  );
};

export default EmailSection; 
