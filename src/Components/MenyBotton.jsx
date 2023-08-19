import React, { useState } from "react";

export default function MenyBotton({ toggleNavbar }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    toggleNavbar();
    setIsOpen(!isOpen);
  };

  return (
    <div className="MenyBotton">
      <button className="menu-button" onClick={handleClick}>
        {isOpen ? "Stäng" : "Meny"}
      </button>
    </div>
  );
}
