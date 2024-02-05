import React from "react";
import { useState } from "react";
import './Header.css';
import me from "./../../assets/me.jpg"
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
	const [isBarVisible, setIsBarVisible] = useState(true);
	const [isClicked, setIsClicked] = useState(false);

	const handleIconClick = () => {
		setIsBarVisible(!isBarVisible);
		setIsClicked(!isClicked);
	};

	return (
		<>
			<nav>
				<img src={me} className="logo" alt="me"/>
				<div className="nav-icons">
					<ul id="navbar" className={isClicked ? "#navbar active" : "#navbar"}>
						<li><a href="#">About</a></li>
						<li><a href="#">Projects</a></li>
						<li><a href="#">Education</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
					<div id="icons"> 
						{isBarVisible ? <FaBars onClick={handleIconClick} /> : <FaTimes onClick={handleIconClick} />}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;