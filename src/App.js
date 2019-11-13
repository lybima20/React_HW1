import React from "react";
import "./App.css";
import Pop from "./Popup";
import avatar from "./avatar.jpg";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header text="Vika Zakordonets" />
      <Pop text="text" count="2" />
      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default App;
