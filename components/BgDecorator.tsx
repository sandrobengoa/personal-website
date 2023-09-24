import React from "react";

export default function BgDecorator() {
  return (
    <>
      <div className="bg-[#c8a2c8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[5rem] dark:bg-[#95b7c8]"></div>
      <div className="bg-[#95b7c8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[5rem] dark:bg-[#c8a2c8] "></div>
    </>
  );
}
