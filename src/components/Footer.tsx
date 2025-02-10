const Footer = () => {
  return (
    <footer className="footer footer-center p-10  bg-base-200">
      <aside>
        <p className="font-bold">
          Julien <span className="text-primary">Mauré</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
    </footer>
  );
};

export default Footer;
