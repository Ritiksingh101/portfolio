import React from "react";

function Skill() {
  return (
    <div className="flex flex-col items-center p-6 sm:p-8 md:p-12 ritik" id="skill">
      {/* Section Header */}
      <h2 className="text-gray-500 text-[14px] sm:text-[16px] mb-2">
        Explore My
      </h2>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Skill</h1>

      {/* Competencies Wrapper */}
      <div className="flex flex-col justify-center lg:flex-row gap-6 w-full lg:w-[80%]">
        {/* Full-Stack Development */}
        <div className="border border-gray-300 rounded-[20px] p-6 lg:w-[40%] w-full shadow-md">
          <h3 className="text-center font-semibold text-2xl mb-4">
            Full-stack Development
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-3 gap-y-4">
            {/* Skill Items */}
            <Skilllavel title="HTML" level="Experienced" />
            <Skilllavel title="CSS" level="Experienced" />
            <Skilllavel title="JavaScript" level="Skilled" />
            <Skilllavel title="Tailwind" level="Skilled" />
            <Skilllavel title="React JS" level="Skilled" />
            <Skilllavel title="API's" level="Profocient" />
          </div>
        </div>

        {/* Other Creative Skills */}
        <div className="border border-gray-300 rounded-[20px] p-6 w-full lg:w-[40%] shadow-md">
          <h3 className="text-center font-semibold text-2xl mb-4">
            Other Creative Skills
          </h3>
          <div className="grid grid-cols-2 gap-y-4">
            {/* Skill Items */}
            <Skilllavel title="Git, GitHub" level="Expert" />
            <Skilllavel title="UI/UX" level="Skilled" />
            <Skilllavel title="Postman" level="Skilled" />
          </div>
        </div>
      </div>
    </div>
  );
}

// SkillItem Component for Reusability
function Skilllavel({ title, level }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-2xl">
        <i class="fa fa-star-o text-red-400" aria-hidden="true"></i>
      </span>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-500">{level}</p>
      </div>
    </div>
  );
}

export default Skill;
