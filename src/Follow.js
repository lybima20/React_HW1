import React from "react";
function Followers(props) {
  return (
    <div className="follower">
      <p>followers</p>
      {props.count}
    </div>
  );
}
export default Followers;
