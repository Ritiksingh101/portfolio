import React from "react";

function Contect() {
  return (
    <div id="contect">
      <div className="md:h-[40vh]  flex justify-center items-center flex-col ritik">
        <label className="text-[20px]">Get in touch</label>
        <div className="flex border-2 border-white m-6 p-10 rounded-[20px] justify-center items-center gap-3">
          <label className="text-[30px]">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
          </label>
          <label className=" md:text-[30px]">ritiksingh.dx@gmail.com</label>
        </div>
      </div>

      <div className=" h-[8vh] flex items-center justify-center text-[20px]m ritik">
        <label>Copyright © 2024. All Rights are Reserved By Ritik Singh ❤️.....</label>
      </div>
    </div>
  );
}

export default Contect;
