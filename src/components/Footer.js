import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <WhatsAppIcon onClick={() => window.open("https://wa.me/7358654127")} />
        <FacebookIcon />
        <LinkedInIcon
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/magesh-kumar-2389421a4",
              "_self"
            )
          }
        />
      </div>
      <p> &copy; 2023 mageshkumar.vercel.app</p>
    </div>
  );
}

export default Footer;
