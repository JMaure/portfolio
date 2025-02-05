import Link from "next/link";
import Image from "next/image";
import imgGITHUB from "../assets/techno/github.png";
import imgLINKEDIN from "../assets/companies/linkedin.png";

const Navbar = () => {
  return (
    <div className="flex justify-between md:justify-between items-center p-4">
      <a href="#" className="font-bold text-3xl max-md:text-xl">
        Julien <span className="text-primary">Mauré</span>
      </a>
      <ul className="hidden md:flex space-x-3">
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            A propos
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Mes expériences
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Mes projets
          </a>
        </li>
      </ul>
      <div className="flex space-x-3">
        <Link href="https://github.com/JMaure">
          <Image
            src={imgGITHUB}
            alt="github"
            className="object-cover w-6 h-6"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/julien-maur%C3%A9-9b0b8b255/">
          <Image
            src={imgLINKEDIN}
            alt="github"
            className="object-cover w-6 h-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
