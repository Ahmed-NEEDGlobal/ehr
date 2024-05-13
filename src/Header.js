import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between">
      <figure className="w-[350px]">
        <img src="/rsz_2ehr-travel-logo.png" alt="EHR-Travel-Logo" />
      </figure>
      <div className="grid justify-center font-arial space-y-1 text-right">
        <h1 className="">EHR Bangladesh Limited</h1>
        <div className="text-[8px] font-[370] space-y-1">
          <div>
            19A, Level- 3, Plot-Cha 90/A, Premier Shopping Mall,
            <br /> Progoti Shoroni, Dhaka-1212, Bangladesh.
          </div>
          <div className="flex space-x-2">
            <a href="tel:+8801837044788">Phone: +8801837044788;</a>
            <a href="mailto:Info@ehrltd.Com">Email: Info@ehrltd.Com</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
