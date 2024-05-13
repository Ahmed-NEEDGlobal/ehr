import React from "react";

const Footer = () => {
  return (
    <footer className="grid">
      <div className="space-y-2">
        <h1 className="bg-box-color bg-cover mb-2 flex justify-self-auto">Announcement for Passengers</h1>
        <div className="text-[8px] font-[370]">
          <h5 className="font-bold">E-Ticket Notice:</h5>
          <p>
            Carriage and other services provided by the carrier are subject to
            conditions of carriage which are hereby incorporated by reference.
            These conditions may be obtained from the issuing carrier.
          </p>

          <h5 className="font-bold">Passport/Visa/Health :</h5>
          <p>
            Please ensure that you have all the required travel documents for
            your entire journey - i.e. valid passport &necessary visas - and
            that you have had the recommended inoculations for your
            destination(s).
          </p>

          <h5 className="font-bold">Reporting Time:</h5>
          <p>
            Domestic Flight: Passengers are requested to arrive minimum 1.5
            hours before scheduled departure time and must need to complete
            check-in 30 minutes before the scheduled departure time .
            International Flight: Passengers are requested to arrive minimum 3
            hours before scheduled departure time and must need to complete
            check-in 1 hour before the scheduled departure time.
          </p>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1 className="mb-2 font-font-bookAntiqua">Thank You!</h1>
        <div>
          <div className="border-b-2"></div>
          <div className="text-[6px] font-[370]">
            EHR Bangladesh Limited, 19A, Level- 3, Plot-Cha 90/A,Premier
            Shopping Mall, Progoti Shoroni, Dhaka – 1212, Bangladesh<br/>
            Email: info@ehrltd.com Phone: +880 9678221292 Website:
            https://www.ehrtravels.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
