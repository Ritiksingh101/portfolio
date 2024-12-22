import React from "react";
import ritik from "../Photo/ritk.jpeg";
import resume from "../Photo/pdf.jpg"
import Typedcomponent from '../Component/Autotype.jsx'


function First() {
  function myFunction() {
    window.open(resume);
  }

  return (
    <div className="h-[80vh] flex justify-center items-center p-4 ritik">
      <div className="flex flex-col sm:flex-row gap-10 w-full sm:w-[90%] md:w-[80%] justify-center items-center">
        {/* Image Section */}
        <div className="w-full sm:w-[40%] md:w-[30%] flex justify-center">
          <div className="rounded-full h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden flex justify-center items-center back-show">
            <img
              src={ritik}
              alt="Ritik Singh"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>

        {/* Text and Buttons */}
        <div className="w-full sm:w-[50%] md:w-[30%] h-auto flex flex-col justify-center items-center gap-4 text-center">
          <label className="text-[14px] sm:text-[16px] font-sans font-semibold text-gray-400">
            Hello, I'M
          </label>
          <label className="text-[28px] sm:text-[36px] md:text-[48px] font-bold font-serif">
            Ritik Singh
          </label>
          <label className="text-[16px] sm:text-[20px] md:text-[28px] text-gray-400">
            <Typedcomponent
             strings={["Frontend Devloper", "Web Designing", "UI/UX"]}
             typeSpeed={80}
             backSpeed={50}
             loop={true}
            />
          </label>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[80%] justify-center">
            <button
              onClick={myFunction}
              className="h-[7vh] w-full sm:w-[50%] rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all hover:ease-in-out"
            >
              Download CV
            </button>
            <button className="h-[7vh] w-full sm:w-[40%] bg-gray-500 rounded-full hover:text-black hover:bg-gray-300 transition-all">
              More...
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <i className="fa fa-facebook text-2xl text-gray-700 cursor-pointer hover:text-blue-600"></i>
            <i className="fa fa-linkedin text-2xl text-gray-700 cursor-pointer hover:text-blue-500"></i>
            <i className="fa fa-github text-2xl text-gray-700 cursor-pointer hover:text-blue-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
