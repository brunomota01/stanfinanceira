import { Shield, Clock, Users, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import logoStan from "@/assets/logo-stan.png";
import TestimonialsSection from "@/components/TestimonialsSection";

const WHATSAPP_URL = "https://wa.me/5511915957140?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20cr%C3%A9dito%20consignado.";


const benefits = [
{
  icon: TrendingDown,
  title: "Taxas Competitivas",
  description: "As melhores taxas do mercado para o seu crédito consignado."
},
{
  icon: Clock,
  title: "Aprovação Rápida",
  description: "Processo ágil e simplificado. Seu crédito aprovado em poucas horas."
},
{
  icon: Shield,
  title: "Sem Burocracia",
  description: "Documentação mínima e processo 100% digital."
},
{
  icon: Users,
  title: "Atendimento Personalizado",
  description: "Equipe especializada para encontrar a melhor solução para você."
}];



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }
  })
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img src={logoStan} alt="Stan Financeira" className="h-10 w-auto" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38_70%_55%/0.15),transparent_70%)] pointer-events-none" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">

            Crédito Consignado
            <br />
            <span className="text-accent">em Crédito Liberado Para CLT</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mx-auto mb-10 max-w-2xl text-lg text-foreground/70 md:text-xl">

            Conquiste seus objetivos com as melhores condições do mercado. Taxas reduzidas, aprovação rápida e atendimento humanizado.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} style={{ pointerEvents: "auto", position: "relative", zIndex: 50 }}>
            <a id="whatsapp-hero" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ pointerEvents: "auto", position: "relative", zIndex: 50 }}>
              <Button
                size="lg"
                className="gap-3 bg-[#25D366] text-white hover:bg-[#20bd5a] px-10 py-6 text-lg font-bold shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 cursor-pointer"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 50 }}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar pelo WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">

            Por que escolher a Stan?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">

            Somos especialistas em crédito consignado e trabalhamos para oferecer a melhor experiência.
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) =>
            <motion.div
              key={b.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}>

                <Card className="group h-full border-border/50 bg-card transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <b.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 text-3xl font-bold text-foreground md:text-4xl">

            Pronto para conquistar seu crédito CLT?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            className="mx-auto mb-8 max-w-lg text-foreground/70">

            Fale agora com um de nossos consultores pelo WhatsApp e descubra as condições especiais para você.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
            style={{ pointerEvents: "auto", position: "relative", zIndex: 50 }}>

            <a id="whatsapp-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ pointerEvents: "auto", position: "relative", zIndex: 50 }}>
              <Button
                size="lg"
                className="gap-3 bg-[#25D366] text-white hover:bg-[#20bd5a] px-10 py-6 text-lg font-bold shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 cursor-pointer"
                style={{ pointerEvents: "auto", position: "relative", zIndex: 50 }}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <img src={logoStan} alt="Stan Financeira" className="mx-auto mb-4 h-8 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stan Financeira. Todos os direitos reservados.
          </p>
          <div className="mt-4 space-y-1 text-xs text-muted-foreground/70">
            <p>STAN FINANCEIRA LTDA — CNPJ: 58.581.292/0001-83</p>
            <p>Av. Graciela Flores de Piteri, 255, Bloco 13 Apt 14 — Aliança, Osasco/SP — CEP 06.236-215</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        id="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
        aria-label="Fale conosco no WhatsApp">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>);

};

export default Index;