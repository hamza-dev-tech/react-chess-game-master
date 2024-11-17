import React from "react";
import "./index.css";

function App() {
  return (
    <div className="chess-app">
       <div className="download-section">
        <a href="/chess.apk" className="download-button" download>
          <img src="/a-logo.png" alt="Download" className="download-icon" />
          Download Android App
        </a>
        <video className="app-video" muted autoPlay loop controls>
          <source src="/Chess.mp4"  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


     
    </div>
  );
}

export default App;
