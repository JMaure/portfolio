import Title from "./Title";

import gamebox from "../assets/projects/gamebox.png";
import alumni from "../assets/projects/alumni.png";
import portfolio from "../assets/projects/portfolio.png";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Site de mini jeux classiques",
    description:
      "Un site pour jouer  des jeux classiques tels que le morpion, le démineur et le snake. Un premier site créé en React pour mettre en pratique la découverte de ce framework",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    demoLink: "https://game-box-one.vercel.app/",
    repoLink: "https://github.com/JMaure/game-box",
    image: gamebox,
  },
  {
    id: 2,
    title: "Application d'un réeau social d'anciens élèves",
    description:
      "Projet de formation POE développeur d'application mobile. Créer un réseau social privé, à l’attention des anciens des promos POE et Alternance ainsi que des nouveaux arrivants. L’idée étant de profiter de ce réseau pour promouvoir des carrières, offrir des postes, partager des expériences.",
    technologies: ["Angular", "Nest.js", "MariaDB", "MongoDB"],
    demoLink: "#",
    repoLink: "https://github.com/CoderRangers/alumni-rangers/",
    image: alumni,
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Mon portfolio personnel, pour présenter mes projets et mes compétences. Un site créé en React pour mettre en pratique ce framework. (Vous y êtes actuellement)",
    technologies: ["React", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "https://github.com/JMaure/portfolio",
    image: portfolio,
  },
];

const Projects = () => {
  return (
    <div className="bg-base-200  md:pt-20 md:pb-16 pt-10 pb-5 px-5">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold text-primary">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((techno, index) => (
                <span key={index} className="badge badge-accent badge-sm">
                  {techno}
                </span>
              ))}
            </div>
            <div className="flex">
              {project.demoLink === "#" ? (
                <button className="btn btn-sm btn-disabled w-2/3">Lien</button>
              ) : (
                <Link
                  href={project.demoLink}
                  className="btn btn-sm btn-secondary w-2/3"
                >
                  Lien
                </Link>
              )}

              <Link
                href={project.repoLink}
                className="btn btn-sm btn-accent w-1/3 ml-2"
              >
                <Github />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
