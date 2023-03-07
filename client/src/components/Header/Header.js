import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo-nobg.svg";
import Button from "../Button/Button";
import "./Header.scss";

export default function Header({logout}) {
  // const links = [
  //   { url: "/about", label: "ABOUT" },
  //   { url: "/contact", label: "CONTACT" },
  // ];

  return (
    <header className="header">
      <Link to="/">
        <Logo className="header-logo" />
      </Link>
      <nav className="header-nav">
        {/* {links.map((link) => (
          <Link to={link.url} key={link.url}>
            {link.label}
          </Link>
        ))} */}
        <Button 
          onClick={logout}
          iconLeft={{ name: "log-out", width: 24, height: 24 }}
          content="LOG OUT"
          theme="logout-button"
        />
      </nav>
    </header>
  );
}

