import Navbar from "../components/Navbar";
import Experience from "../components/knowledges/Experience";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";

const Knowledge = () => {
  return (
    <div className="knowledges">
      <Navbar />
      <div className="knowledgesContent">
        <div className="content">
          <Languages />
          <Experience />
          <OtherSkills />
          <Hobbies />
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
