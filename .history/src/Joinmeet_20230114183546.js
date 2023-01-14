import axios from "axios";
import React, { useEffect } from "react";

const Joinmeet = (res) => {
  useEffect(() => {
    axios
      .post(
        "https://github.com/v-empower/MeetHour-Web-MobileSDKs/tree/master/Web/Web-ReactSDK",
        { headers: "${res.webtoken}" }
      )
      .then((item) => {
        console.log(item);
      });
  });

  return <></>;
};

export default Joinmeet;
