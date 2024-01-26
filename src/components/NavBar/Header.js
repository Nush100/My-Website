import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import './Header.css';
import me from "./../../assets/me.jpg"

const Header = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img src={me} className="logo" alt="me"/>
        <h2>Nushara Kavindi</h2>
      </div>
      <ul>
        <li>About</li>
        <li>Education</li>
        <li>Projects</li>
      </ul>
      <button className="contact">
        <FaRegMessage className="icon"/>Contact me
      </button>
    </div>
  );
}

export default Header;