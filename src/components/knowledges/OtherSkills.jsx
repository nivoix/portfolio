import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { FaMobile } from "@react-icons/all-files/fa/FaMobile";
import { CgArrowsExchangeAlt } from "@react-icons/all-files/cg/CgArrowsExchangeAlt";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { BsKanban } from "@react-icons/all-files/bs/BsKanban";
import { FaProjectDiagram } from "@react-icons/all-files/fa/FaProjectDiagram";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaSass } from "@react-icons/all-files/fa/FaSass";
import { FaChartBar } from "@react-icons/all-files/fa/FaChartBar";
import { FaUniversalAccess } from "@react-icons/all-files/fa/FaUniversalAccess";

const OtherSkills = () => {
  // console.log(axios);
  return (
    <div className="otherSkills">
      <h3>Autres Compétences</h3>
      <div className="listContent">
        <ul className="list1">
          <li>
            <SiMongodb />
            <span>MongoDB</span>
          </li>
          <li>
            <FaSass />
            <span>Saas</span>
          </li>
          <li>
            <CgArrowsExchangeAlt />
            <span>Axios</span>
          </li>
          <li>
            <FaSearch />
            <span>SEO</span>
          </li>
          <li>
            <FaUniversalAccess />
            <span>Accessibilité</span>
          </li>
        </ul>
        <ul className="list2">
          <li>
            <FaChartBar />
            <span>Recharts</span>
          </li>
          <li>
            <FaMobile />
            <span>Responsive</span>
          </li>
          <li>
            <FaCode />
            <span>Green Code</span>
          </li>
          <li>
            <BsKanban />
            <span>Kanban</span>
          </li>
          <li>
            <FaProjectDiagram />
            <span>UserStories</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
