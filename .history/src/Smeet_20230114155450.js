import React from "react";
import axios from "axios";
const Smeet = () => {
  const handleClick = () => {
    let config = {
      headers: {
        access_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4NGwybnRwOTcycjF3eHAxOXgybTkyeXYxNjE1OXN5dTY0NTYiLCJqdGkiOiI5MGQyMzFhZjA3OWI4MDQyMjdjOTQwNmZiN2NlYjgxNGVjYmJhY2I4OTUxMGZmMGMxNGQ5ZmQ1OGI0ZWNiMTcyNTFlNzI3OTVhZjhlMWY3OSIsImlhdCI6MTY3MzY4ODYzOS41OTI3NTM4ODcxNzY1MTM2NzE4NzUsIm5iZiI6MTY3MzY4ODYzOS41OTI3NTc5NDAyOTIzNTgzOTg0Mzc1LCJleHAiOjE3MDUyMjQ2MzkuNTY5NDU2MTAwNDYzODY3MTg3NSwic3ViIjoiMTAzNTYiLCJzY29wZXMiOltdfQ.ASEZajDyW92qlnjIHCXyBLkfS9Xz9_hZwLCU0VGY0xk6ur58s_U4k9pMvVN1cM6iabwe6JX2uHgLLNUnWAJlew",
        "Content-Type": "application/json",
      },
    };

    const body = {
      meeting_name: "Schedule Meeting API 4",
      agenda: "Test Schedule Meeting API 4",
      passcode: "passcode",
      meeting_date: "15-01-2022",
      meeting_time: "11:00",
      meeting_meridiem: "AM",
      timezone: "Asia/Kolkata",
    };
    axios
      .post(
        "https://api.meethour.io/api/v1.1/meeting/schedulemeeting",
        config,
        body
      )
      .then((res1) => {
        console.log(res1);
      });
  };
  return <button onClick={handleClick}>get data</button>;
};

export default Smeet;
