import React from "react";

const Joinmeet = () => {
  const [id, setId] = useState("");
  return (
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
  );
};

export default Joinmeet;
