import {
  Globe,
  Palette,
  Server,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Membuat website yang responsif dan dinamis dengan teknologi web modern",
    technologies: ["HTML5", "CSS", "JavaScript", "Java"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Frontend Development",
    description: "Membangun UI/UX pengguna yang menarik dan interaktif",
    technologies: ["React", "Tailwind CSS", "Next.js", "Vite"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Membangun server dan RestAPI.",
    technologies: ["Laravel", "Node.js"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Mendesain struktur database yang efisien dan aman",
    technologies: ["MySQL", "PostgreSQL", "MariaDB", "SawitDB"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Mengelola kode sumber dengan sistem version control modern",
    technologies: ["Git", "GitHub", "CI/CD"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Terminal,
    title: "Development Tools",
    description:
      "Menggunakan alat pengembangan modern dan lingkungan pengembangan terintegrasi",
    technologies: ["VS Code", "Docker", "Netbeans"],
    color: "from-slate-500 to-zinc-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      {/* FLOATING TECH GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-random" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float-random-slow" />
        <div className="absolute top-1/3 right-10 w-56 h-56 bg-violet-500/20 rounded-2xl blur-2xl animate-float-random rotate-12" />
      </div>

      <div className="container-custom relative z-10 overflow-hidden pb-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
            Keahlian
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies Used
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa teknologi dan alat yang sering gw pake buat
            pengembangan software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative p-6 rounded-xl bg-card/20 border border-border card-hover overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>

                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Skills;
