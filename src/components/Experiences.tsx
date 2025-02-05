import Title from "./Title";
import Image from "next/image";

import imgCSS from "../assets/techno/css.png";
import imgANGULAR from "../assets/techno/icon_angular.svg";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNEST from "../assets/techno/nestjs.svg";
import imgGITHUB from "../assets/techno/github.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgDOCKER from "../assets/techno/docker.png";
import imgSCRUM from "../assets/techno/scrum.png";

import aelion from "../assets/companies/logo-aelion.png";
import mcdo from "../assets/companies/mcdo.png";
import capgemini from "../assets/companies/capgemini.png";
import impetus from "../assets/companies/impetus.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "Angular", image: imgANGULAR },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Nest.js", image: imgNEST },
  { id: 6, name: "Next.js", image: imgNEXT },
  { id: 7, name: "GitHub", image: imgGITHUB },
  { id: 8, name: "SRCUM", image: imgSCRUM },
  { id: 9, name: "Docker", image: imgDOCKER },
  { id: 10, name: "Tailwind CSS", image: imgTAILWIND },
];

const experiences = [
  {
    id: 1,
    role: "Stagiaire Développeur d'application mobile",
    company: "Aélion",
    period: "Juin 2024 - Sept 2024",
    description: [
      "Création d'un réseau social pour les stagiaires des formations.",
      "Architecture Microservices et REST.",
      "Développement en agile avec Scrum et Github.",
    ],
    image: aelion,
  },
  {
    id: 2,
    role: "Directeur Adjoint, Manager, Equipier",
    company: "McDonald's",
    period: "Sept 2015 - Jan 2023",
    description: [
      "Gestion des planings et des stocks.",
      "Formation des managers.",
      "Gestion de terrain et des caisses.",
    ],
    image: mcdo,
  },
  {
    id: 3,
    role: "Apprenti Analyste Programmeur",
    company: "CapGemini",
    period: "Sept 2012 - Août 2013",
    description: [
      "Développement d'un logiciel pour le CNES.",
      "Travail sur l'UI en java.",
      "Transfert des téléactions en C.",
    ],
    image: capgemini,
  },
  {
    id: 4,
    role: "Analyste Programmeur",
    company: "Impetus Afea",
    period: "Avril 2012 - Août 2013",
    description: [
      "Portage multiGPU d'un code de calcul scientifique de modélisation 3D d'écoulement de fluides.",
      "Transposition du code sur CPU pour comparaison des performances.",
    ],
    image: impetus,
  },
];

const Experiences = () => {
  return (
    <div className="bg-base-200 p-10 mb-10 md:mb-20">
      <Title title="Expériences" />
      <div className="md:my-20 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 botder-accent">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full w-full h-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col bg-base-300 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <Image
                  src={experience.image}
                  alt={experience.company}
                  className="objet-cover h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-primary font-bold">
                    {experience.role}, {experience.company}
                  </h1>
                  <span className="text-sms">{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
