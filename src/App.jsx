import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Work/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
