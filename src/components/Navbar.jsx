// import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { IoBriefcaseSharp } from "@react-icons/all-files/io5/IoBriefcaseSharp";
import { IoSchool } from "@react-icons/all-files/io5/IoSchool";
import { FaAddressBook } from "@react-icons/all-files/fa/FaAddressBook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const Navbar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="profil">
          <div className="profilContent">
            <img src="./profil.webp" alt="profil" width="133" height="133" />
            <h3>Jérôme Nivoix</h3>
          </div>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/" aria-label="home page">
                <FaHome />
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/competences" aria-label="knowledges page">
                <IoSchool />
                <span>Compétences</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" aria-label="portfolio page">
                <IoBriefcaseSharp />
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" aria-label="contact page">
                <FaAddressBook />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jérôme-nivoix-78752a259"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="
              visit linkedin account"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nivoix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="
              visit github account"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Jer0me.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="
              visit facebook account"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
          <div className="signature">
            <p>jeromeNivoix - 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
