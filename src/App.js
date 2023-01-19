import React from "react";
import "./style.css";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="flex-container">
          <div className="title">Druber</div>
          <div>
            <ul class="druber-list">
              <li>Company</li>
              <li>Safety</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </header>
      <div className="phrase">Get in the pilot's seat and get paid</div>
      <div className="container">
        <div className="info-card">
          <div class="text">
            <div className="card-title"> Start your journey now.</div>
            <div className="image">
              <img src={require("./airplane.jpg")} alt="test"></img>
            </div>
            <p> Visit our website for more contents </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
