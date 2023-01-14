import axios from "axios";
import React from "react";

const Joinmeet = () => {
  const [id, setId] = useState("");
  const handledata = () => {
    axios
      .post(
        "https://github.com/v-empower/MeetHour-Web-MobileSDKs/tree/master/Web/Web-ReactSDK"
      )
      .then((item) => {
        console.log(res);
      });
  };
  return <button onClick={handledata}>get details</button>;
};

export default Joinmeet;
