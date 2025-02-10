/* import About from "@/components/About"; */
import Accueil from "@/components/Accueil";
import Experiences from "@/components/Experiences";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-base-100">
      <div className="p-5 md:px-[7%]">
        <Navbar />
      </div>
      <Accueil />
      {/* <About /> */}
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
