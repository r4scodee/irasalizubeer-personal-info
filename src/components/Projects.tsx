import { ExternalLink, Github, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectStatus = "completed" | "ongoing";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Coffee S1ke Web",
    description: "Website company profile untuk Coffee S1ke, kedai kopi.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "Javascript"],
    status: "completed",
    githubUrl: "https://github.com/r4scodee/Game-space",
    liveUrl: "https://r4scodee.github.io/s1ke-coffee/",
  },
  {
    id: 2,
    title: "Mini Games",
    description:
      "Mini Games untuk hiburan dan mengasah logika. simple tapi seru!",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    status: "completed",
    githubUrl: "https://github.com/r4scodee/Game-space",
    liveUrl: " https://r4scodee.github.io/Game-space/",
  },
  {
    id: 3,
    title: "Lomba UCIC Web Design",
    description: "Web design untuk event BitFest 2025 UCIC.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    status: "completed",
    githubUrl: "https://github.com/r4scodee/SkinfaDev_Alirsyad_BitFest2025",
    liveUrl: "https://r4scodee.github.io/SkinfaDev_Alirsyad_BitFest2025/",
  },
  {
    id: 4,
    title: "MyKareem Quran Reader",
    description:
      "Aplikasi baca Quran digital dengan fitur lengkap untuk pengalaman membaca yang nyaman.",
    technologies: ["Flutter", "Dart", "Firebase API"],
    status: "ongoing",
    githubUrl: "https://github.com/r4scodee/app_mykareem",
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle,
    className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  ongoing: {
    label: "On Going",
    icon: Clock,
    className: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative section-padding bg-card/30 overflow-hidden"
    >
      {/* FLOATING SHOWCASE GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float-random" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-float-random-slow" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary/15 rounded-2xl blur-2xl animate-float-random rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-y-70 w-[400px] h-[400px] bg-emerald-500/30 rounded-full blur-[120px] pointer-events-none" />
      </div>
      <div className="container-custom relative z-10 overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
            Hasil Ngoding
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Things I’ve <span className="gradient-text">Built</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Beberapa project yang pernah gw kerjain, baik secara individu maupun
            tim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            const StatusIcon = status.icon;

            return (
              <article
                key={project.id}
                className="group relative p-6 lg:p-8 rounded-2xl bg-card/30 border border-border card-hover overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:left-full transition-all duration-700" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant="outline"
                    className={`${status.className} flex items-center gap-1.5`}
                  >
                    <StatusIcon size={12} />
                    {status.label}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group relative overflow-hidden gap-2 border-border text-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* Efek Kilat Soft buat Outline */}
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-115%)] group-hover:[transform:skew(-15deg)_translateX(115%)] transition-transform duration-700">
                          <div className="relative h-full w-6 bg-primary/10 blur-sm" />
                        </div>

                        <Github size={16} className="relative z-10" />
                        <span className="relative z-10">Code</span>
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      size="sm"
                      asChild
                      className="group relative overflow-hidden gap-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* Efek Kilat Terang buat Solid Button */}
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-115%)] group-hover:[transform:skew(-15deg)_translateX(115%)] transition-transform duration-700">
                          <div className="relative h-full w-6 bg-white/30 blur-sm" />
                        </div>

                        <ExternalLink size={16} className="relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/r4scodee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
          >
            Lihat lainnya di GitHub
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
