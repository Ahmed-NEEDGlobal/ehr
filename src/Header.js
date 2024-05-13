import React from "react";

const Header = () => {
  return (
    <section className="flex justify-between">
      <figure className="w-[305px]">
        <img src="/rsz_2ehr-travel-logo.png" alt="EHR-Travel-Logo" />
      </figure>
      <div className="flex flex-col justify-self-end text-right text-[8px]">
        <h1 className="font-medium text-sm">EHR Bangladesh Limited</h1>
        <div>
          19A, Level- 3, Plot-Cha 90/A, Premier Shopping Mall,
          <br /> Progoti Shoroni, Dhaka-1212, Bangladesh.
        </div>
        <div className="flex space-x-2">
          <a href="tel:+8801837044788">Phone: +8801837044788;</a>
          <a href="mailto:Info@ehrltd.Com">Email: Info@ehrltd.Com</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
