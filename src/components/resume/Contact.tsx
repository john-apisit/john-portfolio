import React from "react";
import { BsEnvelope, BsFiles, BsGeoAlt, BsPhoneVibrate } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center gap-2">
        <BsGeoAlt size={14} />
        <a
          target={"_blank"}
          href="https://www.google.com/maps/place/Bang+Wa/@13.7205323,100.4578581,17.75z/data=!4m12!1m6!3m5!1s0x0:0x9ad1fd768e5ef7bf!2sBang+Wa!8m2!3d13.7203785!4d100.4571807!3m4!1s0x30e2983eb5296269:0xdb976254b0a6fef9!8m2!3d13.72059!4d100.45776"
        >
          Bang Wa, Bangkok Thailand
        </a>
      </div>
      <div className="flex flex-row items-center gap-2">
        <BsPhoneVibrate size={14} />
        <a
          href="https://www.linkedin.com/in/apisit-sianglert"
          target={"_blank"}
        >
          www.linkedin.com/in/apisit-sianglert
        </a>
      </div>
      <div className="flex flex-row items-center gap-2">
        <BsEnvelope size={14} />
        <span
          onClick={() => {
            navigator.clipboard.writeText("john.apisits@gmail.com");
          }}
        >
          john.apisits@gmail.com
        </span>
        <BsFiles
          size={16}
          className="text-gray-400 cursor-pointer hover:scale-125"
          onClick={() => {
            navigator.clipboard.writeText("john.apisits@gmail.com");
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
