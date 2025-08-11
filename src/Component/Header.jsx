import React, { useState } from "react";
import "./Header.css";

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const [show, setShow] = useState(false);

  return (
    <div className="header bg-slate-100">
      <div className="head1">
        <label>Ritik Singh</label>
      </div>
      <div className="header-component">
        <label
          className="home cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About
        </label>
        <label
          className="home cursor-pointer"
          onClick={() => scrollToSection("skill")}
        >
          Experience
        </label>
        <label
          className="home cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          Projects
        </label>
        <label
          className="home cursor-pointer"
          onClick={() => scrollToSection("contect")}
        >
          Contact
        </label>
      </div>

      {/*------------------------------------  responsive nav bar degine ------------------------------- */}

      <div
        onClick={() => setShow(true)}
        className="flex lg:hidden  text-[30px]"
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>

      <>
        {show === true ? (
          <div className="w-[100%] h-[100vh] fixed top-0 left-0 z-10">
            <div
              onClick={() => setShow(false)}
              className="bg-black w-full h-[100vh] opacity-60 fixed cursor-pointer left-0 top-0 "
            ></div>
            <div onClick={()=>setShow(false)} className="bg-white sidebar-popup  text-[30px] h-[40vh] lg:w-[30%] w-[100%] absolute right-0 z-[11]">
              <button
                className="w-[100%] h-[10vh]  text-[35px] text-start pl-10"
                onClick={() => setShow(false)}
              >
                X
              </button>
              <div className="w-[90%] h-[25vh] flex gap-[40%] pl-10  ">
                <div className="flex flex-col gap-[8%] w-full text-center   ">
                  <label className="bg-slate-100" onClick={() => scrollToSection("about")}>About</label>
                  <label className="bg-slate-100" onClick={() => scrollToSection("skill")} >Experience</label>
                  <label className="bg-slate-100" onClick={() => scrollToSection("about")}>Projects</label>
                  <label className="bg-slate-100" onClick={() => scrollToSection("contect")}>Contact</label>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
}

export default Header;
