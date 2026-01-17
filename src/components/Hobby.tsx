import { Camera, Moon, Stars } from "lucide-react";

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
    alt: "Petir malam",
    span: "col-span-2 row-span-1",
  },
];

const Hobby = () => {
  return (
    <section id="hobby" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-700" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Hobby</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Things I{" "}
            <span className="gradient-text">Enjoy</span>
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Selain perkodingan, gw juga suka Fotografi apalagi yang berhubungan sama langit malam. Gw suka banget ngambil foto bintang, bulan, dan fenomena langit lainnya. Rasanya kayak nemuin keindahan baru di setiap jepretan. kasi understand kingg
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
                <p className="text-sm text-foreground font-medium">{image.alt}</p>
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