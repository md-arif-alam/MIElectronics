import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/MaishaLogo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>MIElectronics</h1>
        <img src={logo} alt="logo" />
        <p>Best product with affordable prices</p>

        <p>Copyrights 2024 &copy; Md Arif Alam</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="a">Instagram</a>
        <a href="a">Youtube</a>
        <a href="a">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
