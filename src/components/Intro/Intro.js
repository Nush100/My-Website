import React from "react";
import './Intro.css';
import profile from "./../../assets/me.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm 
          <span className="introName"> Nushara</span>
          <br/>
          FullStack Developer
        </span>
        <p className="introPara">I am a skilled web developer</p>
      </div>  
      <img src={profile} alt="background" className="bg"/> 
    </section>
  );
}

export default Intro;