import { Camera, Moon, Stars } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

const Hobby = () => {
  const navigate = useNavigate();
  const dynamicStars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 5 + 3}s`,
      type:
        i % 10 === 0
          ? "star-super"
          : i % 3 === 0
            ? "star-bright"
            : "star-normal",
    }));
  }, []);

  const shootingStars = [
    { top: "-98%", left: "80%", delay: "12s", duration: "3s" },
    { top: "-99%", left: "-1%", delay: "12s", duration: "3s" },
    { top: "-95%", left: "-20%", delay: "14s", duration: "4s" },
    { top: "-98%", left: "20%", delay: "24s", duration: "3s" },
    { top: "-90%", left: "20%", delay: "14s", duration: "1.6s" },
    { top: "-45%", left: "-25%", delay: "15s", duration: "3s" },
    { top: "-75%", left: "-25%", delay: "5s", duration: "3.6s" },
    { top: "-10%", left: "-25%", delay: "10s", duration: "3s" },
    { top: "-30%", left: "-25%", delay: "10s", duration: "2s" },
    { top: "1%", left: "-40%", delay: "40s", duration: "5s" },
    { top: "5%", left: "-20%", delay: "1s", duration: "2.8s" },
    { top: "10%", left: "-80%", delay: "16s", duration: "4s" },
    { top: "15%", left: "-30%", delay: "30s", duration: "3s" },
    { top: "25%", left: "-20%", delay: "20s", duration: "3s" },
    { top: "25%", left: "-90%", delay: "50s", duration: "4s" },
    { top: "40%", left: "-25%", delay: "34s", duration: "2.6s" },
    { top: "60%", left: "-25%", delay: "8s", duration: "5.6s" },
    { top: "50%", left: "-80%", delay: "22s", duration: "3.4s" },
    { top: "85%", left: "-20%", delay: "28s", duration: "5.2s" },
  ];

  return (
    <section
      id="hobby"
      className="relative section-padding bg-background overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="galaxy absolute -top-[10%] -left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-indigo-600/60 via-purple-600/20 to-transparent blur-[120px]"
          style={{ animationDuration: "18s" }}
        />
        <div
          className="galaxy absolute top-1/4 right-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-cyan-500/40 via-blue-600/10 to-transparent blur-[100px]"
          style={{ animationDuration: "12s", animationDelay: "-5s" }}
        />
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
        {dynamicStars.map((s) => (
          <div
            key={s.id}
            className={`star ${s.type}`}
            style={{
              top: s.top,
              left: s.left,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>
      <div className="container-custom relative z-10 overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Hobi
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Things I <span className="gradient-text">Enjoy</span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Selain perkodingan, gw juga suka Fotografi apalagi yang berhubungan
            sama langit malam. Rasanya kayak nemuin keindahan baru di setiap
            jepretan.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { Icon: Camera, label: "Photography" },
            { Icon: Moon, label: "Night Sky" },
            { Icon: Stars, label: "Astrophotography" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <item.Icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px] overflow-hidden">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`${image.span} relative group overflow-hidden rounded-2xl bg-muted`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-sm text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/1rb4dh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
          >
            Lihat lainnya di Instagram
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
