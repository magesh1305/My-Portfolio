import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { IconButton } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Magesh Kumar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/magesh-kumar-2389421a4",
                "_self"
              )
            }
          />
          <EmailIcon
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=muthumageshkumar@gmail.com",
                "_self"
              )
            }
          />
          <GithubIcon
            onClick={() =>
              window.open("https://github.com/magesh1305", "_self")
            }
          />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
