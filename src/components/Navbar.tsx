import Link from "next/link";
import Image from "next/image";
import imgGITHUB from "../assets/techno/github.png";
import imgLINKEDIN from "../assets/companies/linkedin.png";

const Navbar = () => {
  return (
    <div className="flex justify-between md:justify-between items-center p-4">
      <h1 className="font-bold text-3xl max-md:text-xl">
        Julien <span className="text-primary">Mauré</span>
      </h1>
      <ul className="hidden md:flex space-x-3">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>
        {/*         <li>
          <a href="#About" className="btn btn-sm btn-ghost">
            A propos
          </a>
        </li> */}
        <li>
          <a href="#Experiences" className="btn btn-sm btn-ghost">
            Expériences
          </a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-sm btn-ghost">
            Projets
          </a>
        </li>
        <li>
          <a href="#Contact" className="btn btn-sm btn-ghost">
            Contacts
          </a>
        </li>
      </ul>
      <div className="flex">
        <Link href="https://github.com/JMaure" className="btn btn-sm btn-ghost">
          <Image
            src={imgGITHUB}
            alt="github"
            className="object-cover w-7 h-7"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/julien-maur%C3%A9-9b0b8b255/"
          className="btn btn-sm btn-ghost"
        >
          <Image
            src={imgLINKEDIN}
            alt="github"
            className="object-cover w-7 h-7"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
