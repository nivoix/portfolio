import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContent">
        <div className="content">
          <h1>Jérôme Nivoix</h1>
          <h2>Développeur web /</h2>
          <h2>Intégrateur Web</h2>
          <div className="pdf">
            <a href="./CV.pdf" target="_blank" download>
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
