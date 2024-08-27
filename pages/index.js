import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import Education from "../components/Education";
import Work from "../components/Work";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Me />
      <Education />
      <Experience />
      <Portfolio />
      <Work />
      <Contact />
    </div>
  );
}
