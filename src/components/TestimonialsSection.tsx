import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import testimonial1 from "@/assets/testimonial-1.jpeg";
import testimonial2 from "@/assets/testimonial-2.jpeg";
import testimonial3 from "@/assets/testimonial-3.jpeg";
import testimonial4 from "@/assets/testimonial-4.jpeg";
import testimonial5 from "@/assets/testimonial-5.jpeg";
import testimonial6 from "@/assets/testimonial-6.jpeg";
import testimonial7 from "@/assets/testimonial-7.jpeg";
import testimonial8 from "@/assets/testimonial-8.jpeg";
import testimonialVideo from "@/assets/testimonial-video.mp4";

const testimonials = [
  {
    name: "Cintia",
    role: "Cliente",
    text: "Pode confirmar se já caiu na conta? — Sim!",
    rating: 5,
    image: testimonial2,
  },
  {
    name: "Amanda",
    role: "Cliente",
    text: "Pagamento feito em até 2h, como prometido. Confirmou que caiu!",
    rating: 5,
    image: testimonial3,
  },
  {
    name: "Luciano",
    role: "Cliente",
    text: "Contrato com pagamento em andamento, em breve já caiu na conta!",
    rating: 5,
    image: testimonial4,
  },
  {
    name: "Bruno",
    role: "Cliente",
    text: "O contrato consta como pago. Pode confirmar? — Caiu!",
    rating: 5,
    image: testimonial5,
  },
  {
    name: "Marcos",
    role: "Cliente",
    text: "Consegue confirmar se já caiu na conta? — Sim!",
    rating: 5,
    image: testimonial6,
  },
  {
    name: "Socorro",
    role: "Cliente",
    text: "A proposta consta como paga, pode confirmar? — Sim!",
    rating: 5,
    image: testimonial7,
  },
  {
    name: "Luciene",
    role: "Cliente",
    text: "Pode confirmar se o valor já caiu na sua conta? — Sim!",
    rating: 5,
    image: testimonial8,
  },
  {
    name: "Jeferson",
    role: "Aprovação rápida",
    text: "Documentos enviados e crédito liberado sem burocracia!",
    rating: 5,
    image: testimonial1,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          O que nossos clientes dizem
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          className="mx-auto mb-14 max-w-xl text-center text-muted-foreground"
        >
          A satisfação dos nossos clientes é o nosso maior orgulho. Veja provas reais!
        </motion.p>

        {/* Video */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mb-14 max-w-lg"
        >
          <Card className="overflow-hidden border-border/50 bg-card">
            <video
              src={testimonialVideo}
              controls
              className="w-full rounded-t-lg"
              preload="metadata"
              playsInline
            />
            <CardContent className="p-4 text-center">
              <p className="text-sm font-semibold text-foreground">
                Depoimento em vídeo de cliente satisfeito
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Screenshot testimonials */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              <Card className="h-full border-border/50 bg-card overflow-hidden">
                <img
                  src={t.image}
                  alt={`Depoimento de ${t.name}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <CardContent className="flex flex-col p-5">
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-3 text-sm italic text-muted-foreground">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
