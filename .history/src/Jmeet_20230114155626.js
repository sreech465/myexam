import React, { useState } from "react";
import axios from "axios";
const Jmeet = () => {
  const handleClick = () => {
    const [id, setId] = useState("");
    let config = {
      headers: {
        access_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4NGwybnRwOTcycjF3eHAxOXgybTkyeXYxNjE1OXN5dTY0NTYiLCJqdGkiOiI5MGQyMzFhZjA3OWI4MDQyMjdjOTQwNmZiN2NlYjgxNGVjYmJhY2I4OTUxMGZmMGMxNGQ5ZmQ1OGI0ZWNiMTcyNTFlNzI3OTVhZjhlMWY3OSIsImlhdCI6MTY3MzY4ODYzOS41OTI3NTM4ODcxNzY1MTM2NzE4NzUsIm5iZiI6MTY3MzY4ODYzOS41OTI3NTc5NDAyOTIzNTgzOTg0Mzc1LCJleHAiOjE3MDUyMjQ2MzkuNTY5NDU2MTAwNDYzODY3MTg3NSwic3ViIjoiMTAzNTYiLCJzY29wZXMiOltdfQ.ASEZajDyW92qlnjIHCXyBLkfS9Xz9_hZwLCU0VGY0xk6ur58s_U4k9pMvVN1cM6iabwe6JX2uHgLLNUnWAJlew",
        "Content-Type": "application/json",
      },
    };

    const body = {
      meeting_id: "vmp22010691",
    };

    axios
      .post("https://api.meethour.io/api/v1.1/getjwt", config, body)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div>
        <form className="p-3">
          <h3 className="text-info">Join A Meeting</h3>
          <input
            className="m-2"
            type="text"
            placeholder="enter meeting ID or Link"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </form>
        <button>JOIN A MEETING</button>
      </div>
      <button onClick={handleClick}>get data</button>
    </div>
  );
};

export default Jmeet;
