import React from "react";
import "./WelcomeScreen.css";
import business from "../components/assets/business.svg"
import individual from "../components/assets/individual.svg"

export default function WelcomeScreen() {
  return (
    <div className="welcome-container">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="welcome-text">
            Welcome<span className="dots">..</span>
          </div>
          <span className="dash">_ _ _ _ _ _ _ _</span>
        </div>

        <div className="right-section">
          <div className="circle top-circle"></div>
          <div className="circle bottom-circle"></div>
          <div className="card">
            <h2 className="card-title">Join Us!</h2>
            <div className="card-content-div">
              <p className="card-description">
                To begin this journey, tell us what type of account you’d be
                opening.
              </p>

              <div className="option-box purple">
                <div className="option-content">
                    <img className="icon-box" src= {individual} alt="individual"/>
                  <div className="option-text">
                    <p className="option-title">Individual</p>
                    <p className="option-description">
                      Personal account to manage all your activities.
                    </p>
                  </div>
                  <div className="arrow">→</div>
                </div>
              </div>

              <div className="option-box blue">
                <div className="option-content">
                  <img className="icon-box" src= {business} alt="business"/>
                  <div className="option-text">
                    <p className="option-title">Business</p>
                    <p className="option-description">
                      Own or belong to a company, this is for you.
                    </p>
                  </div>
                  <div className="arrow">→</div>
                </div>
              </div>
            </div>
            <div className="footer-links">
              <span>Terms & Conditions</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-links">
        <span>Terms of Use</span>|<span>Privacy Policy</span>
      </div>
    </div>
  );
}
