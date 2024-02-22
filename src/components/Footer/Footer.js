import React from "react";
import './Footer.css';
import { FaYoutube, FaHackerrank } from "react-icons/fa";
import { FaStackOverflow, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { YT, HR, LC, LI, GH, SO } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="links">
            <a href={GH} className="link"><FaGithub /></a>
            <a href={SO} className="link"><FaStackOverflow /></a>
            <a href={HR} className="link"><FaHackerrank /></a>
            <a href={LC} className="link"><SiLeetcode /></a>
            <a href={LI} className="link"><FaLinkedin /></a>
            <a href={YT} className="link"><FaYoutube /></a>
        </div>
        <span>Copyright; All rights reserved</span>
    </footer>
  );
}

export default Footer;