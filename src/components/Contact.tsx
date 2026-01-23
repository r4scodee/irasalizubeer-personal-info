import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  Github,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

    const submissionData = {
      ...formData,
      access_key: ACCESS_KEY,
      subject: `Pesan Baru dari Portfolio: ${formData.user_name}`,
      from_name: "Portfolio Iras Alizubeer",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        toast({
          title: "Meluncur!",
          description:
            "Pesan lo udah masuk ke irbadhb@gmail.com. Tunggu balesan gw ya!",
          duration: 1000,
        });

        setFormData({ user_name: "", user_email: "", message: "" });

        setTimeout(() => setIsSent(false), 3000);
      } else {
        throw new Error("Gagal mengirim");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Waduh!",
        description: "Lagi ada gangguan di angkasa, coba lagi nanti bro.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/r4scodee" },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/1rb4dh",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/6283150773059",
    },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-30 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-float-random opacity-60" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-primary/50 rounded-full blur-[100px] animate-float-random-slow opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
            Kontak
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Jangan cuma liat liat doang, kirim pesan sesuatu ke gw dong!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground font-medium">
                    irbadhb@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">
                    Cirebon, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Follow gw di sosial media
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary/80 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 rounded-2xl bg-card/30 border border-none space-y-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                <div className="space-y-2 group/input">
                  <label
                    htmlFor="user_name"
                    className="text-sm font-medium text-foreground/80 group-focus-within/input:text-primary transition-colors"
                  >
                    Nama
                  </label>
                  <Input
                    name="user_name"
                    placeholder="Nama kamu"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 group/input">
                  <label
                    htmlFor="user_email"
                    className="text-sm font-medium text-foreground/80 group-focus-within/input:text-primary transition-colors"
                  >
                    Email
                  </label>
                  <Input
                    name="user_email"
                    type="email"
                    placeholder="emailkamu@email.com"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 relative z-10 group/input">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/80 group-focus-within/input:text-primary transition-colors"
                >
                  Pesan
                </label>
                <Textarea
                  name="message"
                  placeholder="Tanya apa aja..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/40 border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 resize-none transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSent}
                className={`w-full font-semibold h-12 text-white rounded-xl group overflow-hidden relative shadow-lg transition-all duration-300 ${
                  isSent
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-110%)] group-hover:[transform:skew(-15deg)_translateX(110%)] transition-transform duration-700 pointer-events-none">
                  <div className="relative h-full w-10 bg-white/20 blur-md" />
                </div>

                <AnimatePresence mode="wait">
                  {isSent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 text-white"
                    >
                      <CheckCircle2 size={18} />
                      <span>Terkirim!</span>
                    </motion.div>
                  ) : isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        animate={{ x: [0, 50], y: [0, -50], opacity: [1, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeIn",
                        }}
                      >
                        <Send size={18} />
                      </motion.div>
                      <span>Meluncur...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Send
                        size={18}
                        className="transition-transform group-hover:rotate-[-15deg] group-hover:translate-x-1 group-hover:translate-y-[-1px]"
                      />
                      <span>Kirim Pesan</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
