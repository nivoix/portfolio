/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas !</h3>
        <NavLink to="/">
          <FaHome />
          <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
