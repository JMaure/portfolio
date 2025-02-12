import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "./Projects";
import { Github } from "lucide-react";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  return (
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
        {project.technologies.map((techno: string, index: number) => (
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
  );
};

export default Project;
