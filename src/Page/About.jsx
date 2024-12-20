import React from "react";
import ritik from "../Photo/ritk.jpeg";
import Typed from "typed.js";

function About() {
   
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>BCA</i> ','Acropolis Institute of ManagementStudies & Research, Indore (2021-2024)','MCA','Patel Group Of Institue Indore(2024-2026)'],
      typeSpeed: 50,
      backSpeed:50,
      loop :true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
    

  return (
    <div className="flex flex-col items-center p-4 sm:p-8 md:p-12 ritik">
      {/* About Me Header */}
      <h2 className="text-center text-gray-400 text-[14px] sm:text-[16px]">
        Get To Know More
      </h2>
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8">
        About Me
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full">
        {/* Image Section */}
        <div className="w-full sm:w-[60%] lg:w-[30%] flex justify-center">
          <img
            src={ritik}
            alt="Ritik Singh"
            className="rounded-lg shadow-lg object-cover h-[300px] sm:h-[350px] md:h-[400px]"
          />
        </div>

        {/* Experience and Education */}
        <div className="flex flex-col gap-6 sm:flex-row w-full lg:w-[60%] justify-center items-center">
          {/* Experience Card */}
          <div className="border border-gray-300 rounded-lg p-6 w-full sm:w-[45%] text-center box">
            <div className="flex justify-center items-center mb-4">
              <span className="text-2xl">🏅</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Experience</h3>
            <p className="text-gray-600">
              4+ month Internship <br />
              Frontend Development
            </p>
          </div>

          {/* Education Card */}
          <div className="border border-gray-300 rounded-lg p-6 w-full sm:w-[45%] text-center box">
            <div className="flex justify-center items-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Education</h3>
            <p className="text-gray-600 sliding">
            
              <span ref={el} />            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 text-center text-gray-700 px-4 md:px-8 lg:px-24 leading-relaxed">
        <p>
          I Am A passionate And Tech-savvy Fresher with A strong Interest In The
          IT industry. I Am A recent 3rd Year student with A BCA (Bachelor Of
          Computer Application) And I Am Eager To kickstart My career In IT
          field. I Am A Great Team Player and Thrive In collaborative
          Environments where I can contribute My skills And Learn From Others. I
          Am Also A Quick Learner And Adopt Easily To New Technologies And
          Framework. Thankyou!!
        </p>
      </div>







      
    </div>
  );
}

export default About;