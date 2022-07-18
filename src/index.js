//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
const day = new Date();
const hr = day.getHours();
let wish;
let timeOfDay = {
  color: ""
};
if (hr >= 0 && hr < 12) {
  wish = "Good Morning!";
  timeOfDay.color = "red";
} else if (hr >= 12 && hr <= 18) {
  wish = "Good Afternoon!";
  timeOfDay.color = "green";
} else {
  wish = "Good Evening!";
  timeOfDay.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={timeOfDay}>{wish}</h1>
  </div>,

  document.getElementById("root")
);
