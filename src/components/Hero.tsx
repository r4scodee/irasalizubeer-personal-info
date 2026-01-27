import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <StarsBackground
        className="absolute inset-0 z-0"
      />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b overflow-hidden from-blue-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute top-1/4 left-1/4 overflow-hidden w-[28rem] h-[28rem] rounded-full bg-blue-500/25 blur-3xl animate-glow-1" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 overflow-hidden w-[22rem] h-[22rem] rounded-full bg-indigo-400/25 blur-3xl animate-glow-2" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 opacity-0 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm text-blue-400 font-medium">
              Welcome to Personal Info
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in animation-delay-200">
            Hai, Gw <span className="gradient-text">Iras Alizubeer</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-400">
            Developer cupu yang suka bikin web keren dan modern.
          </p>

          <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-400">
            Hobi ngulik web modern dan kepo sama teknologi terbaru di dunia
            software development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in animation-delay-600">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold glow transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, "", "/projects");
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {/* Animasi Kilat ke Kanan */}
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-110%)] group-hover:[transform:skew(-15deg)_translateX(110%)] transition-transform duration-700">
                <div className="relative h-full w-10 bg-white/30 blur-md" />
              </div>

              <span className="relative text-white z-10">Lihat Project</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-border hover:bg-secondary hover:text-foreground px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, "", "/about");
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-110%)] group-hover:[transform:skew(-15deg)_translateX(110%)] transition-transform duration-700">
                <div className="relative h-full w-10 bg-primary/10 blur-md" />
              </div>

              <span className="relative z-10">Personal Info</span>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom--0 inset-x-0 flex justify-center opacity-0 animate-fade-in animation-delay-600">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", "/about");
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="text-xs font-medium">Scroll Kebawah</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
