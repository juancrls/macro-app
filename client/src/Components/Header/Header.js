import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo-nobg.svg";
import "./Header.scss";

export default function Header() {
  const links = [
    { url: "/about", label: "ABOUT" },
    { url: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="header">
      <Link to="/">
        <Logo className="header-logo" />
      </Link>
      <nav className="header-nav">
        {links.map((link) => (
          <Link to={link.url} key={link.url}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

