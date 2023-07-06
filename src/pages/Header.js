import React from "react";
import Hero from "../images/phillip.png";
import BouncingText from "../components/BouncingText";

function Header() {
  const greeting = "Hi, I'm Phillip.".split("");
  return (
    <div className="header container">
      <div className="header-container">
        <div>
          <img src={Hero} />
        </div>

        <div>
          <h1 className="brand-font">
            {greeting.map((letter, index) => {
              return <BouncingText key={index}>{letter}</BouncingText>;
            })}
          </h1>
          <p>
            As a <span className="webdev">Web Developer</span> specializing in
            Frontend development, my focus lies in crafting captivating and
            user-friendly Websites and Web Applications. I strive to create
            exceptional Frontend experiences that leave a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;