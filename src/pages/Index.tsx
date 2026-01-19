import { useEffect } from "react"; 
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hobby from "@/components/Hobby";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (path) {
      requestAnimationFrame(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: "auto" }); 
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="hobby"><Hobby /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;