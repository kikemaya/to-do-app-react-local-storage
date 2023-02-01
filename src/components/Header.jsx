import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Header({ showCompleted, hiddeCompleted }) {
  const toggleCompleted = () => {
    hiddeCompleted(!showCompleted);
  };

  return (
    <header className="header">
      <h1 className="header__title">Things to do</h1>
      {showCompleted ? (
        <button className="header__button" onClick={() => toggleCompleted()}>
          Don't show completed
          <FontAwesomeIcon icon={faEyeSlash} className="header__icon-button" />
        </button>
      ) : (
        <button className="header__button" onClick={() => toggleCompleted()}>
          Show completed
          <FontAwesomeIcon icon={faEye} className="header__icon-button" />
        </button>
      )}
    </header>
  );
}

export default Header;
