import Accueil from "@/components/Accueil";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="p-5 md:px-[7%]">
        <Navbar />
      </div>
      <Accueil />
      <button className="btn">test</button>
    </main>
  );
}
