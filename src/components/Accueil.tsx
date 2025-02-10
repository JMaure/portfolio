import Image from "next/image";
import portrait from "../assets/portrait.jpg";

const Acceuil = () => {
  return (
    <div
      id="Home"
      className="bg-base-200 flex flex-col-reverse md:flex-row justify-center items-center md:pt-20 md:pb-16 pt-10 pb-5 px-5"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br /> je suis{" "}
          <span className="text-primary">Julien Mauré</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-center md:text-left mt-4">
          Développeur Full Stack
        </h2>
        <p className="my-4 text-md text-center md:text-left md:max-w-lg">
          Diplômé d’une licence APSIO avec un an d’expérience dans une ESN, j’ai
          par la suite développé de nouvelles compétences dans un autre secteur
          d’activé. Avec pour projet de trouver un poste dans le développement
          informatique, j’ai terminé une POE pour mettre à jour mes
          connaissances et en acquérir de nouvelles.{" "}
        </p>
      </div>
      <div className="md:ml-32">
        <Image
          src={portrait}
          alt="portrait image"
          className="w-80 h-80 object-cover border-8 border-accent shadow-xl rounded-full"
        />
      </div>
    </div>
  );
};

export default Acceuil;
