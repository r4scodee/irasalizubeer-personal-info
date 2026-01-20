import { Code2, Lightbulb, Rocket, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "IT Student",
    description:
      "Sekarang lagi belajar di SMK Informatika Al Irsyad Al Islamiyyah Kota Cirebon",
  },
  {
    icon: Code2,
    title: "Developer",
    description:
      "Suka ngoprek kode dan bikin project software sederhana (Dibantuin ChatGPT sih)",
  },
  {
    icon: Lightbulb,
    title: "Learner",
    description:
      "Selalu semangat buat belajar hal baru di dunia teknologi (tapi kalo error, besok ajalah)",
  },
  {
    icon: Rocket,
    title: "Ambitious",
    description:
      "Ingin menjadi programmer handal, namun enggan ngoding awkwoakwokak",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative section-padding bg-card/30"
    >
      {/* ABSURD SHAPES */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float-random" />
        <div className="absolute bottom-20 right-1 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-float-random-slow" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/20 rounded-2xl blur-2xl animate-float-random-fast rotate-12" />
      </div>

      <div className="container-custom relative z-10 overflow-hidden pb-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
            Info
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kenalin! Gw 
              <span className="text-foreground font-semibold">
                Iras Alizubeer
              </span>
              , Seorang siswa IT yang punya passion di dunia teknologi dan
              pengembangan software.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sekarang ini gw fokus belajar pengembangan web modern, mulai dari
              frontend pakai
              <span className="text-primary font-medium"> React</span> dan
              <span className="text-primary font-medium"> Tailwind CSS</span>,
              sampe ke backend pakai
              <span className="text-primary font-medium"> Laravel</span> dan
              <span className="text-primary font-medium"> Node.js</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gw yakin kalo teknologi punya kekuatan untuk mengubah cara kita
              bekerja dan hidup. Makanya gw berkomitmen buat terus belajar dan
              berkembang, mengikuti perkembangan terbaru di industri IT.
            </p>
            <div className="pt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, "", "/contact");
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group cursor-pointer"
              >
                Ayo Kenalan Lebih Lanjut
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card/20 border border-border card-hover group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
