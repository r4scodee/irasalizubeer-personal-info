import { Camera, Moon, Stars } from "lucide-react";
import { useEffect, useState } from "react";

type Meteor = {
  id: number;
  top: number;
  duration: number;
};

const galleryImages = [
  {
    id: 1,
    src: "/images/sunset-1.jpg",
    alt: "Matahari terbenam",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/moon-1.jpg",
    alt: "Bulan sabit",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/moon-2.jpg",
    alt: "Gerhana bulan",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/milky-1.jpg",
    alt: "Galaksi Bimasakti",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: "/images/milky-2.jpg",
    alt: "Pusat Galaksi",
    span: "col-span-1 row-span-2",
  },
  {
    id: 6,
    src: "/images/lightning-1.jpg",
    alt: "Kilatan petir",
    span: "col-span-2 row-span-1",
  },
];

const stars = [
  { top: "8%", left: "12%", d: "8200s" },
  { top: "15%", left: "30%", d: "7600s" },
  { top: "22%", left: "55%", d: "9000s" },
  { top: "28%", left: "75%", d: "8600s" },
  { top: "35%", left: "18%", d: "9400s" },
  { top: "42%", left: "40%", d: "8000s" },
  { top: "48%", left: "65%", d: "8800s" },
  { top: "55%", left: "25%", d: "9200s" },
  { top: "60%", left: "50%", d: "8400s" },
  { top: "68%", left: "78%", d: "9600s" },
  { top: "72%", left: "35%", d: "10000s" },
  { top: "80%", left: "15%", d: "9000s" },
  { top: "85%", left: "60%", d: "8800s" },
];

const brightStars = [
  { top: "20%", left: "70%", d: "7200s" },
  { top: "38%", left: "30%", d: "8400s" },
  { top: "52%", left: "82%", d: "9000s" },
  { top: "65%", left: "45%", d: "9600s" },
  { top: "78%", left: "20%", d: "8800s" },
];

const shootingStars = [
  { top: "1%", left: "-20%", delay: "40s", duration: "7s" },
  { top: "5%", left: "-20%", delay: "1s", duration: "2.8s" },
  { top: "10%", left: "-20%", delay: "16s", duration: "4s" },
  { top: "25%", left: "-20%", delay: "20s", duration: "3s" },
  { top: "25%", left: "-20%", delay: "50s", duration: "8s" },
  { top: "40%", left: "-25%", delay: "34s", duration: "2.6s" },
  { top: "60%", left: "-25%", delay: "8s", duration: "5.6s" },
  { top: "75%", left: "-20%", delay: "12s", duration: "4s" },
  { top: "85%", left: "-20%", delay: "28s", duration: "5.2s" },
];

const Hobby = () => {
  return (
    <section id="hobby" className="relative section-padding bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="galaxy absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-transparent blur-3xl" />
        <div className="galaxy absolute top-1/3 right-[-260px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-500/15 to-transparent blur-3xl" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {shootingStars.map((s, i) => (
          <span
            key={i}
            className="shooting-star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              animationDuration: s.d,
            }}
          />
        ))}

        {brightStars.map((s, i) => (
          <span
            key={`b-${i}`}
            className="star-bright"
            style={{
              top: s.top,
              left: s.left,
              animationDuration: s.d,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium uppercase">Hobi</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Things I <span className="gradient-text">Enjoy</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Selain perkodingan, gw juga suka Fotografi apalagi yang
              berhubungan sama langit malam. Gw suka banget ngambil foto
              bintang, bulan, dan fenomena langit lainnya. Rasanya kayak nemuin
              keindahan baru di setiap jepretan. kasi understand kingg
            </p>
          </div>
        </div>

        {/* Interest Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors duration-300">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Photography</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors duration-300">
            <Moon className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Night Sky</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors duration-300">
            <Stars className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Astrophotography</span>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[180px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`${image.span} relative group overflow-hidden rounded-2xl cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-foreground font-medium">
                  {image.alt}
                </p>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobby;
