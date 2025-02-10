import { Mail } from "lucide-react";
import Image from "next/image";
import Title from "./Title";

import imgGITHUB from "../assets/techno/github.png";
import imgLINKEDIN from "../assets/companies/linkedin.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="Contact" className="md:pt-20 md:pb-16 pt-10 pb-5 px-5">
      <Title title="Me Contacter" />
      <div className="grid lg:grid-cols-3 gap-4">
        <Link
          href="https://www.linkedin.com/in/julien-maur%C3%A9-9b0b8b255/"
          className="flex gap-2 bg-base-300 rounded-xl p-4 justify-center hover:bg-base-300/40"
        >
          <Image
            src={imgLINKEDIN}
            alt="linkedin"
            className="object-cover w-7 h-7"
          />
          <span className="font-bold">Julien Mauré</span>
        </Link>
        <Link
          href="https://github.com/JMaure"
          className="flex gap-2 bg-base-300 rounded-xl p-4 justify-center hover:bg-base-300/40"
        >
          <Image
            src={imgGITHUB}
            alt="github"
            className="object-cover w-7 h-7"
          />
          <span className="font-bold">JMaure</span>
        </Link>
        <div className="flex gap-2 bg-base-300 rounded-xl p-4 justify-center">
          <Mail /> <span className="font-bold">julienmaure.pro@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
