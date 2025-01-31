const Acceuil = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
          Bonjour, <br /> je suis{" "}
          <span className="text-accent">Julien Mauré</span>
        </h1>
      </div>
      <div>Ici c est la photo</div>
    </div>
  );
};

export default Acceuil;
