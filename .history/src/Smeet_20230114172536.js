import React, { useState, useEffect } from "react";
import axios from "axios";
const Smeet = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [pcode, setPass] = useState("");
  const [attend, setAttend] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [timezone, setTimezone] = useState("");
  useEffect(() => {
    let config = {
      headers: {
        access_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4NGwybnRwOTcycjF3eHAxOXgybTkyeXYxNjE1OXN5dTY0NTYiLCJqdGkiOiI5MGQyMzFhZjA3OWI4MDQyMjdjOTQwNmZiN2NlYjgxNGVjYmJhY2I4OTUxMGZmMGMxNGQ5ZmQ1OGI0ZWNiMTcyNTFlNzI3OTVhZjhlMWY3OSIsImlhdCI6MTY3MzY4ODYzOS41OTI3NTM4ODcxNzY1MTM2NzE4NzUsIm5iZiI6MTY3MzY4ODYzOS41OTI3NTc5NDAyOTIzNTgzOTg0Mzc1LCJleHAiOjE3MDUyMjQ2MzkuNTY5NDU2MTAwNDYzODY3MTg3NSwic3ViIjoiMTAzNTYiLCJzY29wZXMiOltdfQ.ASEZajDyW92qlnjIHCXyBLkfS9Xz9_hZwLCU0VGY0xk6ur58s_U4k9pMvVN1cM6iabwe6JX2uHgLLNUnWAJlew",
        "Content-Type": "application/json",
      },
    };

    const body = {
      meeting_name: name,
      passcode: pcode,
      meeting_date: date,
      meeting_time: time,
      meeting_meridiem: "AM",
      timezone: timezone,
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
  });
  return (
    <div>
      <form className="p-3">
        <h3 className="text-info">Schedule a New Meeting</h3>

        <p>Meeting Name</p>
        <input
          className="m-2"
          type="text"
          placeholder="Meeting Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <p>Meeting Description</p>
        <input
          className="m-2"
          type="text"
          placeholder="Meeting Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <br />
        <p>Meeting Passcode</p>
        <input
          className="m-2"
          type="text"
          placeholder="Meeting Passcode"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <br />
        <p>Meeting Date</p>
        <label for="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />

        <br />

        <label for="appt">Select a time:</label>
        <input
          type="time"
          id="appt"
          name="appt"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onChange={(e) => {
                setHour(e.target.value);
              }}
            >
              4
            </button>
            <p>hr</p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                1
              </a>
              <a class="dropdown-item" href="#">
                2
              </a>
              <a class="dropdown-item" href="#">
                3
              </a>
            </div>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onChange={(e) => {
                setMinutes(e.target.value);
              }}
            >
              0
            </button>
            <p>min</p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                1
              </a>
              <a class="dropdown-item" href="#">
                2
              </a>
              <a class="dropdown-item" href="#">
                3
              </a>
            </div>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onChange={(e) => {
                setTimezone(e.target.value);
              }}
            >
              GMT (12:00 International Time West)
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                GMT State Minor Outlying Islands
              </a>
              <a class="dropdown-item" href="#">
                GMT (12:00 International Time West)
              </a>
              <a class="dropdown-item" href="#">
                GMT (12:00 International Time West)
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>Meeting Attendees</p>
          <input
            className="m-2"
            type="text"
            placeholder="Meeting Attendees"
            onChange={(e) => {
              setAttend(e.target.value);
            }}
          />
          <button style={{ backgroundColor: "darkorange", border: "none" }}>
            +Add New User
          </button>
        </div>
      </form>
      <br /> <br />
      <br />
      <button
        type="submit"
        style={{ backgroundColor: "darkorange", border: "none" }}
      >
        Schedule Meeting
      </button>
    </div>
  );
};

export default Smeet;
