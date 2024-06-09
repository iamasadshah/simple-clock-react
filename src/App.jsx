import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import bgvideo from "./Components/bg-video.mp4";

const App = () => {
  const time = new Date();

  const [currentTime, setCurrenttime] = useState(time);

  const UpdateTime = () => {
    const time = new Date();
    setCurrenttime(time);
  };

  setInterval(UpdateTime, 1000);

  

  return (
    <>
      <video autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <center>
        <h1 className="fs-1 fw-bold">Created with ❤ by ibnerafi</h1>

        <div className="para">
               

          <h2>
            {currentTime.toLocaleTimeString()} <br />
            {currentTime.toLocaleDateString()}
          </h2>
          <p id="quote">The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.</p>
        </div>
      </center>
    </>
  );
};

export default App;
