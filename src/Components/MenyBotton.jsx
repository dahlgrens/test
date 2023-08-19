import React from "react";

export default function MenyBotton({ toggleNavbar, isNavbarVisible }) {
  const handleClick = () => {
    toggleNavbar();
  };

  return (
    <div className="MenyBotton">
      <button className="menu-button" onClick={handleClick}>
        {isNavbarVisible ? "Stäng" : "Meny"}
      </button>
    </div>
  );
}
