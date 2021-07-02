import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./header.css";
import IconButton from "@material-ui/core/IconButton";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="largee" className="header_icon" />
      </IconButton>
      <svg
        className="header_logo"
        viewBox="0 -0.06 35 40.3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient id="a" cx=".5" cy="1" r="1" spreadMethod="pad">
          <stop offset="0" stop-color="#ff7854"></stop>
          <stop offset="1" stop-color="#fd267d"></stop>
        </radialGradient>
        <path
          d="M10.5 16.25c-.06 0-.1 0-.14-.04-1.36-1.8-1.7-4.9-1.78-6.08-.02-.23-.28-.35-.48-.24C3.9 12.24 0 17.82 0 23.2c0 9.27 6.43 17.04 17.5 17.04 10.37 0 17.5-8 17.5-17.03C35 11.4 26.57 3.58 19.06.04c-.2-.1-.42.07-.4.28.98 6.37-.36 13.28-8.17 15.95z"
          fill="url(#a)"
        ></path>
      </svg>
      <IconButton>
        <ForumIcon fontSize="largee" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
