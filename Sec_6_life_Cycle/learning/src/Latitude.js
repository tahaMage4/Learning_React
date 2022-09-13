import React from "react";

// 2 way work better way
const SeasonConfig = {
  summer: {
    text: "lets mit thye beeach ",
    iconName: "sun",
  },

  winter: {
    text: "its chilly baby",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Latitude = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];
  return (
    <div>
      <h1>
        {/* 1 way work  */}
        {/* {season === "winter" ? "its chilly baby" : "lets mit thye beeach"} */}
        {text}
      </h1>
    </div>
  );
};

export default Latitude;
