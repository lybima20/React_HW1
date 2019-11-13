import React from "react";
import Follow from "./Follow";
function Pop(props) {
  console.log(props);
  return (
    <div className="pop">
      <p>Vika Zakordonets Profile</p>
      <Follow count="100000" />
      {props.text}
      {props.count}
    </div>
  );
}
export default Pop;
