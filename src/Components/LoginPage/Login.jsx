import React, { useEffect, useState } from "react";
import "./Login.css";

import InstaLogo from "./insta_logo.png";
import FbLogo from "./fb_icon.png";
import Ifream from "./ifream.png";
import Screenshot1 from "./screenshot1.png";
import Screenshot2 from "./screenshot2.png";
import Screenshot3 from "./screenshot3.png";
import Screenshot4 from "./screenshot4.png";

function LoginPage() {

const [screenShot, setScreenshot] = useState({
  ani: 'fade-inOut 5s infinite alternate',
  img: Screenshot1
});


useEffect(()=>{

const screenShotArray = [Screenshot1, Screenshot2, Screenshot3, Screenshot4];
let index = 0;
  const timeId = setInterval(() => {
   index = index >= screenShotArray.length - 1 ? 0 : index + 1;
    setScreenshot({
      ani: `fade-inOut 5s infinite alternate`,
      img: screenShotArray[index]
    });
  }, 10000);
  

}, []);

  return (
    <div>
      <div className="loginParentDiv">
        <div className="horinzontal_div">
          <div className="phoneFream">
            {/* <img className="freamImg" src={Ifream} />
            <img className="screenshots" src= {Screenshot2}/> */}
            <div className="freamImg">
              <div className="cont">
                <img style={{animation: screenShot.ani}} className="screenshots" src={screenShot.img} />
              </div>
            </div>
          </div>
          <div className="loginDetailsDiv">
            <div className="enterLoginDetailsDiv">
              <img className="instaLogo" src={InstaLogo} />
              <div className="inputsDiv">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <button type="button">Log in</button>
              </div>
              <div className="line">
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div className="loginWithFaceBook">
                <img src={FbLogo} />
                <span>Log in with Facebook</span>
              </div>

              <div className="forgotPasswordDiv">
                <span>Forgot password?</span>
              </div>
            </div>

            <div className="signupLblDiv">
              <p>
                Don't have an account? <span>Sign up</span>
              </p>
            </div>

            <div className="getTheAppLbl">
              <p>Get the app.</p>
            </div>

            <div className="downloadAppLayout">
              <div className="playstoreDownload"></div>
              <div className="microsoftDownload"></div>
            </div>
          </div>
        </div>

        <div className="mainFooterDiv">
          <div className="footerDiv">
            <span>Meta</span>
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Top Account</span>
            <span>Location</span>
            <span>Instagram Lite</span>
            <span>Contact Uploading & Non-Users</span>
          </div>
          <div className="languageDiv">
            <select>
              <option>English</option>
            </select>
            <span>© 2023 Instagram from Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
