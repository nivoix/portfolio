import { useState } from "react";
import { portfolioData } from "../../assets/portfolioData";
import Project from "./Project";

const ProjectList = () => {
  const radios = [
    { id: 1, value: "JavaScript" },
    { id: 2, value: "css" },
    { id: 3, value: "gitHub" },
    { id: 4, value: "Html" },
  ];
  const [selectedRadio, setSelectRadio] = useState("JavaScript");

  const handleRadio = (e) => {
    let radio = e.target.value;
    setSelectRadio(radio);
  };
  return (
    <>
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {portfolioData
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
