import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { IoLogoJavascript } from "@react-icons/all-files/io5/IoLogoJavascript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";

export const portfolioData = [
  {
    id: 1,
    name: "Booki",
    languages: ["Html", "css"],
    languageIcons: [FaHtml5, FaCss3Alt],
    sourceCode: "https://github.com/nivoix/Booki-P2",
    sourceSite: "https://nivoix.github.io/Booki-P2",
    info: `Transformez une maquette en site web avec HTML & CSS.
    Ce projet consiste à créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS.
    La mission principale était d'intégrer l'interface responsive du site.
    En travaillant sur ce projet, j'ai développeré des compétences essentielles en design responsive,
    assurant que la page d'accueil fonctionne bien sur tous les appareils et tailles d'écran.`,
    picture: "./booki.jpg",
  },
  {
    id: 2,
    name: "OhMyFood",
    languages: ["css", "gitHub", "Html"],
    languageIcons: [FaHtml5, FaCss3Alt, FaGithub],
    sourceCode: "https://github.com/nivoix/OhMyFood-P3",
    sourceSite: "https://nivoix.github.io/OhMyFood-P3",
    info: `Dynamisez une page web avec des animations CSS.
    Ce projet m'a amèné à travailler sur l'interface mobile-first du site d’une start-up.
    J'ai implémenté des animations CSS en utilisant SASS et versionné mon projet avec Git et GitHub.
    Cette approche mobile-first m'a permis de comprendre l'importance de concevoir des sites web adaptatifs et réactifs.
    J'ai appris à mettre en œuvre des animations CSS pour enrichir l'expérience utilisateur du site.`,
    picture: "./ohmyfood.jpg",
  },
  {
    id: 3,
    name: "La Panthère",
    languages: ["JavaScript", "Html", "css"],
    languageIcons: [IoLogoJavascript, FaHtml5, FaCss3Alt],
    sourceCode: "https://github.com/nivoix/LaPanthere-P4",
    sourceSite: "https://nivoix.github.io/LaPanthere-P4",
    info: `Optimisez un site web existant.
    Ce projet m'a amèné à travailler sur l'optimisation du référencement d'un site web.
    Pour cela j'ai réalisé une recherche des bonnes pratiques en développement web.
    Ce qui m'a permis d'optimiser la taille et la vitesse de ce site web et également assurer son accessibilité`,
    picture: "./lapanthere.jpg",
  },
  {
    id: 4,
    name: "Kasa",
    languages: ["JavaScript", "React", "css"],
    languageIcons: [IoLogoJavascript, FaReact, FaCss3Alt],
    sourceCode: "https://github.com/nivoix/KasaReact",
    sourceSite: "https://kasa-vite.netlify.app",
    info: `Développez une application Web avec React et React Router.
    Dans ce projet,j'ai travaillé sur la logique de présentation des données et les composants React.
    J'ai utilisé React Router pour configurer la navigation entre les différentes pages de l'application.
    J'ai implémenté ce projet avec Vite, un outil qui simplifie la configuration initiale d'une application React.`,
    picture: "./kasa.jpg",
  },
  {
    id: 5,
    name: "Les Petits Plats",
    languages: ["JavaScript", "css"],
    languageIcons: [IoLogoJavascript, FaCss3Alt],
    sourceCode: "https://github.com/nivoix/Les-Petits-Plats",
    sourceSite: "https://nivoix.github.io/Les-Petits-Plats/",
    info: `Développez un algorithme de recherche en JavaScript.
    Ce projet m'a mis au défi de développer un algorithme de recherche.
    J'ai développé deux versions d'un algorithme de recherche, capables de filtrer efficacement un fichier JSON.
    Durant tout ce projet, j'ai pris en compte les principes du Green Code, afin de développer un algorithme qui soit non seulement performant mais aussi respectueux de l'environnement.`,
    picture: "./lesPetitsPlats.jpg",
  },
  {
    id: 6,
    name: "SportSee",
    languages: ["JavaScript", "css", "React"],
    languageIcons: [IoLogoJavascript, FaReact, FaCss3Alt],
    sourceCode: "https://github.com/nivoix/tableau-de-bord-analytique",
    sourceSite: "https://sportsee-vite.netlify.app",
    info: `Développez un tableau de bord d'analytics avec React.
    Dans ce projet, ma mission était d'intégrer des graphiques et des diagrammes en utilisant React.
    Ma tâche principale consistait à intégrer des éléments graphiques avancés en faisant appel à la bibliothèques Recharts.`,
    picture: "./sportsee.jpg",
  },
  {
    id: 7,
    name: "fisheye",
    languages: ["JavaScript"],
    languageIcons: [IoLogoJavascript],
    sourceCode: "https://github.com/nivoix/Front-End-Fisheye",
    sourceSite: "https://nivoix.github.io/Front-End-Fisheye/",
    info: `Créez un site accessible pour une plateforme de photographes.
    Dans ce projet, j'ai travaillé sur le développement d'un site web pour une plateforme d’artistes.
    Ma tâche consistait à intégrer diverses fonctionnalités telles que 
      -la récupération et l'affichage des données, 
      -la navigation entre les pages des photographes, 
      -une modale de contact,
      -une LightBox pour les médias, 
      et la gestion des likes.`,
    picture: "./fisheyes.jpg",
  },
];
