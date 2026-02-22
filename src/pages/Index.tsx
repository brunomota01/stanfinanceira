import { MessageCircle, Shield, Clock, Users, TrendingDown, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoStan from "@/assets/logo-stan.webp";

const WHATSAPP_URL = "https://wa.me/5511915957140?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20cr%C3%A9dito%20consignado.";

const benefits = [
  {
    icon: TrendingDown,
    title: "Taxas Competitivas",
    description: "As melhores taxas do mercado para o seu crédito consignado.",
  },
  {
    icon: Clock,
    title: "Aprovação Rápida",
    description: "Processo ágil e simplificado. Seu crédito aprovado em poucas horas.",
  },
  {
    icon: Shield,
    title: "Sem Burocracia",
    description: "Documentação mínima e processo 100% digital.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Equipe especializada para encontrar a melhor solução para você.",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aposentada",
    text: "Consegui meu crédito em menos de 24 horas! Atendimento excelente e taxas muito abaixo do que encontrei em outros lugares.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Servidor Público",
    text: "Processo totalmente digital e sem burocracia. A equipe da Stan me ajudou a encontrar a melhor opção para o meu perfil.",
    rating: 5,
  },
  {
    name: "Ana Santos",
    role: "Pensionista",
    text: "Indico para todos! Fui muito bem atendida e as condições foram as melhores que encontrei. Muito obrigada, Stan!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img src={logoStan} alt="Stan Financeira" className="h-10 w-auto" />
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Phone className="h-4 w-4" />
              Fale Conosco
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(213_80%_55%/0.3),transparent_70%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl">
            Crédito Consignado
            <br />
            <span className="text-accent">Simples e Rápido</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Conquiste seus objetivos com as melhores condições do mercado. Taxas reduzidas, aprovação rápida e atendimento humanizado.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="gap-3 bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-lg font-bold shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              Solicitar pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Por que escolher a Stan?
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
            Somos especialistas em crédito consignado e trabalhamos para oferecer a melhor experiência.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <Card
                key={b.title}
                className="group border-border/50 bg-card transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <b.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
            A satisfação dos nossos clientes é o nosso maior orgulho.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/50 bg-card">
                <CardContent className="flex flex-col p-8">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-sm italic text-muted-foreground">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Pronto para conquistar seu crédito?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">
            Fale agora com um de nossos consultores pelo WhatsApp e descubra as condições especiais para você.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="gap-3 bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-lg font-bold shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              Falar no WhatsApp
            </Button>
          </a>
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
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl shadow-accent/40 transition-transform hover:scale-110"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
};

export default Index;
