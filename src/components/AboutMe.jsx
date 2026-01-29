import React from "react";
import "../styles/AboutMe.css";
import collageImage from "../assets/collage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  const aboutLines = [
    "Engineer by profession.",
    "Footballer by passion.",
    "Biryani enthusiast by lifestyle.",
    "",
    "I’m an engineer who builds things that work as smoothly as",
    "a perfectly timed counter-attack, focusing on clean code,",
    "performance, and user experience.",
    "Football taught me teamwork, discipline, and how to recover",
    "quickly after mistakes — the same mindset I bring to debugging",
    "and shipping features.",
    "When I’m not coding or playing football, I’m probably hunting",
    "for good biryani and thinking about my next project.",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* LEFT — Image */}
        <div className="about-image tv-frame">
          <img src={collageImage} alt="Azmat collage" />
        </div>

        {/* RIGHT — Heading + Terminal */}
        <div className="about-right">
          <h2 className="about-heading pixel-heading">
            About <span>Me</span>
          </h2>

          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <div className="terminal-body terminal-text">
              {aboutLines.map((line, index) => (
                <div key={index} className="terminal-line">
                  {line}
                </div>
              ))}

              {/* Social Medias */}
              <div className="terminal-line social-line">
                <span className="prompt"> ~~ $</span>
                <a
                  href="https://github.com/Azmat2003"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/azmat28/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
              </div>

              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="cursor">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
