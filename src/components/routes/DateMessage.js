import React from "react";

function DateMessage() {
  return (
    <div>
      <h1>Today's date is {new Date().toDateString()}</h1>
    </div>
  );
}

export default DateMessage;