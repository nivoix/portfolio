/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle";

const Project = (props) => {
  let { name, languageIcons, info, sourceCode, sourceSite, picture } =
    props.item;
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="project">
      <div className="icons">
        {languageIcons.map((Icon, i) => (
          <span key={i}>
            <Icon />
          </span>
        ))}
      </div>
      <h3>{name}</h3>
      <NavLink
        to={sourceSite}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
        aria-label="Voir le site du projet"
      >
        <img src={picture} alt="" />
      </NavLink>
      <span className="infos" onClick={handleInfo}>
        <FaPlusCircle /> d'infos
      </span>
      <div className={showInfo ? "showInfos visible" : "showInfos hide"}>
        <div className="infoContent">
          <div className="head">
            <h2>{name}</h2>
            <div className="linkContent">
              <NavLink
                to={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Code Source
              </NavLink>
              <NavLink
                to={sourceSite}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Site Web
              </NavLink>
            </div>
          </div>
          <p>{info}</p>
          <div className="button return" onClick={handleInfo}>
            Retourner sur la page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
