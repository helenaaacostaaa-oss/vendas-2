
import * as React from "react";
import { z } from "zod";
import { ShoppingBag, ShieldCheck, Truck, CreditCard, Star, ArrowRight, Timer, Mail } from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { NavLink } from "../components/NavLink";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";

const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Informe seu melhor e-mail" })
    .email({ message: "Digite um e-mail válido" })
    .max(255, { message: "O e-mail deve ter no máximo 255 caracteres" }),
});

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Placeholders for the assets using picsum for dynamic generation
  const headphonesImg = "https://picsum.photos/400/400?random=1";
  const watchImg = "https://picsum.photos/400/400?random=2";
  const laptopImg = "https://picsum.photos/400/400?random=3";
  const backpackImg = "https://picsum.photos/400/400?random=4";
  const avatarWoman1 = "https://picsum.photos/100/100?random=10";
  const avatarMan1 = "https://picsum.photos/100/100?random=11";
  const avatarWoman2 = "https://picsum.photos/100/100?random=12";

  const benefits = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Receba em até 3 dias úteis em todo o Brasil.",
    },
    {
      icon: ShieldCheck,
      title: "Compra Segura",
      description: "Pagamentos 100% protegidos e garantidos.",
    },
    {
      icon: CreditCard,
      title: "Parcelamos",
      description: "Até 12x sem juros nos principais cartões.",
    },
    {
      icon: Star,
      title: "Qualidade",
      description: "Produtos selecionados com curadoria especial.",
    },
  ];

  const products = [
    {
      id: 1,
      label: "Mais vendido",
      badgeColor: "bg-primary text-primary-foreground",
      discount: "-40%",
      type: "Produto físico",
      name: "Fones Bluetooth Pro X",
      rating: 4.9,
      reviews: 2841,
      price: "R$ 299,90",
      oldPrice: "R$ 499,90",
      image: headphonesImg,
      highlightBg: "bg-[hsl(48,100%,50%)]",
    },
    {
      id: 2,
      label: "Promoção",
      badgeColor: "bg-[hsl(27,100%,55%)] text-white",
      discount: "-36%",
      type: "Produto físico",
      name: "Smartwatch Ultra Fitness",
      rating: 4.8,
      reviews: 1323,
      price: "R$ 449,90",
      oldPrice: "R$ 699,90",
      image: watchImg,
      highlightBg: "bg-[hsl(0,0%,96%)]",
    },
    {
      id: 3,
      label: "Mais vendido",
      badgeColor: "bg-primary text-primary-foreground",
      discount: "-67%",
      type: "Produto digital",
      name: "Curso Completo de Marketing Digital",
      rating: 4.9,
      reviews: 4201,
      price: "R$ 97,00",
      oldPrice: "R$ 297,00",
      image: laptopImg,
      highlightBg: "bg-[hsl(210,40%,96%)]",
    },
    {
      id: 4,
      label: "Novo",
      badgeColor: "bg-[hsl(145,63%,47%)] text-white",
      discount: "-34%",
      type: "Produto físico",
      name: "Mochila Tech Urbana",
      rating: 4.7,
      reviews: 7834,
      price: "R$ 189,90",
      oldPrice: "R$ 289,90",
      image: backpackImg,
      highlightBg: "bg-[hsl(210,40%,98%)]",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Cliente desde 2022",
      avatar: avatarWoman1,
      quote:
        "Produtos incríveis! Chegou antes do prazo e a qualidade superou minhas expectativas.",
    },
    {
      id: 2,
      name: "João Santos",
      role: "Empreendedor digital",
      avatar: avatarMan1,
      quote:
        "Melhor loja online que já comprei. Preços imbatíveis e atendimento excelente!",
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Cliente fiel",
      avatar: avatarWoman2,
      quote:
        "Os produtos digitais são de altíssima qualidade. Recomendo demais!",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-[#111111]/95 backdrop-blur">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary shadow-[var(--shadow-glow-red)]">
              <ShoppingBag className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">MegaStore</span>
              <span className="text-sm font-semibold text-white/90 [text-shadow:0_1px_0_rgba(0,0,0,0.35)]">
                Red Hot Deals
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
            <NavLink
              to="/"
              className="transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              Início
            </NavLink>
            <button className="transition-colors hover:text-primary">Loja</button>
            <button className="transition-colors hover:text-primary">Ofertas</button>
            <button className="transition-colors hover:text-primary">Lançamentos</button>
            <button className="transition-colors hover:text-primary">Contato</button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" className="hidden md:inline-flex">
              <span>Comprar agora</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          aria-labelledby="mega-ofertas"
          className="relative border-b border-border/60 bg-[radial-gradient(circle_at_top,#991b1b,#111111)] text-primary-foreground"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_10%_20%,#fbbf2450,transparent_60%),radial-gradient(circle_at_80%_0%,#ef444480,transparent_55%)]" />
          <div className="relative container mx-auto px-4 flex flex-col items-center gap-10 pb-20 pt-16 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a]/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fef3c7] shadow-[var(--shadow-strong)]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-black">
                  %
                </span>
                <span>Ofertas exclusivas de hoje</span>
              </div>

              <h1
                id="mega-ofertas"
                className="text-balance text-4xl font-black leading-tight tracking-[0.05em] text-white md:text-5xl lg:text-6xl"
              >
                DESCONTOS DE ATÉ
                <span className="block text-[#fffbeb]">70% OFF</span>
              </h1>

              <p className="max-w-xl text-sm text-[#fffbeb] md:text-base">
                Produtos físicos e digitais de alta qualidade com os melhores preços do mercado. Aproveite antes que
                acabe!
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  <span>Ver ofertas agora</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="heroGhost"
                  size="lg"
                  className="w-full bg-white/5 text-white hover:bg-white hover:text-black sm:w-auto"
                >
                  Explorar loja
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#fffbeb]/90">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
                  <span>4.9/5 média de satisfação</span>
                </div>
                <span className="h-4 w-px bg-white/20" aria-hidden="true" />
                <span>Mais de 10.000 pedidos entregues</span>
              </div>
            </div>

            <div className="mt-10 w-full max-w-md md:mt-0">
              <div className="relative rounded-[1.75rem] border border-[#333333] bg-[#0a0a0a]/70 p-4 shadow-[var(--shadow-strong)]">
                <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold uppercase tracking-[0.25em] text-[#fef3c7]">Hot Deals</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Atualizado em tempo real
                  </span>
                </div>

                <div className="space-y-3">
                  {products.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      className="group flex items-center gap-3 rounded-xl bg-[#141414]/90 p-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                    >
                      <div className="relative h-16 w-20 overflow-hidden rounded-lg bg-secondary">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute left-1 top-1 rounded-full bg-black/70 px-1.5 text-[10px] font-semibold text-white">
                          {product.discount}
                        </span>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                          {product.type}
                        </p>
                        <p className="line-clamp-1 text-sm font-semibold text-white">{product.name}</p>
                        <div className="flex items-baseline gap-1 text-xs">
                          <span className="font-extrabold text-[#fffbeb]">{product.price}</span>
                          <span className="text-[10px] text-gray-500 line-through">{product.oldPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl bg-[#1a1a1a] px-4 py-3 text-xs text-[#fffbeb]">
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Oferta relâmpago
                      </span>
                      <span className="text-sm font-semibold">Termina em 23:52:00</span>
                    </div>
                  </div>
                  <Button variant="heroGhost" size="sm" className="border-none bg-primary/10 text-white">
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="border-b border-border/60 bg-[var(--gradient-section-soft)] py-10">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mb-1 text-sm font-extrabold uppercase tracking-[0.22em] text-foreground">
                    {benefit.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos em destaque */}
        <section className="border-b border-border/60 bg-background py-12">
          <div className="container mx-auto px-4 space-y-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-black tracking-[0.12em] text-foreground">PRODUTOS EM DESTAQUE</h2>
                <p className="text-sm text-muted-foreground">Os mais vendidos da nossa loja</p>
              </div>
              <button className="flex items-center gap-1 text-sm font-semibold text-primary">
                Ver todos
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group flex h-full flex-col overflow-hidden border-none bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
                >
                  <div className={`${product.highlightBg} relative p-3 pb-0`}> 
                    <div className="flex items-start justify-between">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] ${product.badgeColor}`}
                      >
                        {product.label}
                      </span>
                      <span className="rounded-full bg-black/80 px-2 py-1 text-[10px] font-semibold text-white">
                        {product.discount}
                      </span>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-2xl bg-card">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <CardContent className="flex flex-1 flex-col gap-3 pt-4 px-4">
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p className="font-semibold uppercase tracking-[0.18em] text-gray-500">
                        {product.type}
                      </p>
                      <p className="line-clamp-2 text-sm font-semibold text-foreground">{product.name}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-0.5 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-3 w-3 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        {product.rating.toFixed(1)} ({product.reviews.toLocaleString("pt-BR")})
                      </span>
                    </div>

                    <div className="mt-auto flex items-baseline justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-sm font-extrabold text-primary">{product.price}</span>
                        <span className="text-[11px] text-muted-foreground line-through">{product.oldPrice}</span>
                      </div>
                      <Button size="sm" variant="default" className="rounded-full px-4 text-xs font-bold">
                        Ver oferta
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Oferta relâmpago + repetição de produtos */}
        <section className="border-b border-border/60 bg-[var(--gradient-section-strong)] py-12 text-primary-foreground">
          <div className="container mx-auto px-4 space-y-8">
            <div className="text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
                <span>3º Oferta relâmpago</span>
              </div>
              <h2 className="mb-1 text-2xl font-black tracking-[0.16em]">
                CORRE QUE ACABA LOGO!
              </h2>
              <p className="text-sm text-[#fffbeb]">
                Ofertas por tempo limitado. Não perca essa oportunidade!
              </p>
            </div>

            <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl bg-black/20 px-6 py-4 text-center text-xs font-semibold tracking-[0.18em]">
              <Timer className="h-4 w-4" />
              <div className="flex gap-3">
                {[
                  { label: "Horas", value: "23" },
                  { label: "Min", value: "52" },
                  { label: "Seg", value: "00" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <span className="rounded-xl bg-black/70 px-3 py-1 text-sm font-black">
                      {item.value}
                    </span>
                    <span className="mt-1 text-[10px] uppercase text-[#fffbeb]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {products.map((product) => (
                <Card
                  key={`lightning-${product.id}`}
                  className="group flex h-full flex-col overflow-hidden border-none bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
                >
                  <div className={`${product.highlightBg} relative p-3 pb-0`}>
                    <div className="flex items-start justify-between">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] ${product.badgeColor}`}
                      >
                        {product.label}
                      </span>
                      <span className="rounded-full bg-black/80 px-2 py-1 text-[10px] font-semibold text-white">
                        {product.discount}
                      </span>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-2xl bg-card">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <CardContent className="flex flex-1 flex-col gap-3 pt-4 px-4">
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p className="font-semibold uppercase tracking-[0.18em] text-gray-500">
                        {product.type}
                      </p>
                      <p className="line-clamp-2 text-sm font-semibold text-foreground">{product.name}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-0.5 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-3 w-3 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        {product.rating.toFixed(1)} ({product.reviews.toLocaleString("pt-BR")})
                      </span>
                    </div>

                    <div className="mt-auto flex items-baseline justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-sm font-extrabold text-primary">{product.price}</span>
                        <span className="text-[11px] text-muted-foreground line-through">{product.oldPrice}</span>
                      </div>
                      <Button size="sm" variant="hero" className="rounded-full px-4 text-xs font-bold">
                        Ver todas as ofertas
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="border-b border-border/60 bg-background py-12">
          <div className="container mx-auto px-4 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-black tracking-[0.16em] text-foreground">
                O QUE NOSSOS CLIENTES DIZEM
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Milhares de clientes satisfeitos em todo o Brasil.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="flex h-full flex-col border-border/70 bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-full border border-border/80">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-4">
                    <p className="text-sm text-muted-foreground italic">“{testimonial.quote}”</p>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter de ofertas */}
        <section className="border-t border-border/60 bg-[var(--gradient-section-soft)] py-12">
          <div className="container mx-auto px-4 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary-foreground">
                <Mail className="h-3 w-3" aria-hidden="true" />
                <span>Newsletter de ofertas</span>
              </div>
              <h2 className="text-xl font-black tracking-[0.14em] text-foreground md:text-2xl">
                RECEBA OFERTAS EXCLUSIVAS NO SEU E-MAIL
              </h2>
              <p className="max-w-xl text-xs text-muted-foreground md:text-sm">
                Cadastre-se para receber alertas antecipados de promoções, cupons secretos e novidades da MegaStore.
                Nada de spam, apenas oportunidades reais de economizar.
              </p>
            </div>

            <form
              className="space-y-3 md:space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setError(null);

                const formData = new FormData(event.currentTarget);
                const value = formData.get("email");

                const result = newsletterSchema.safeParse({ email: typeof value === "string" ? value : "" });

                if (!result.success) {
                  const firstError = result.error.issues[0]?.message ?? "E-mail inválido";
                  setError(firstError);

                  return;
                }

                setIsSubmitting(true);

                setTimeout(() => {
                  setIsSubmitting(false);
                  setEmail("");
                  (event.target as HTMLFormElement).reset();

                  toast({
                    title: "Inscrição confirmada!",
                    description: "Você começará a receber nossas melhores ofertas em breve.",
                  });
                }, 800);
              }}
              noValidate
            >
              <div className="space-y-2">
                <label htmlFor="newsletter-email" className="block text-xs font-semibold tracking-[0.16em] text-muted-foreground">
                  SEU MELHOR E-MAIL
                </label>
                <Input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="exemplo@seuemail.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(null);
                  }}
                  className={`h-11 bg-card text-sm placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring ${
                    error ? "border-destructive focus-visible:ring-destructive" : ""
                  }`}
                  aria-invalid={!!error}
                  aria-describedby={error ? "newsletter-email-error" : undefined}
                />
                {error && (
                  <p
                    id="newsletter-email-error"
                    className="text-xs font-medium text-destructive"
                  >
                    {error}
                  </p>
                )}
                <p className="text-[10px] text-muted-foreground">
                  Ao se cadastrar, você concorda em receber comunicações da MegaStore. Você pode se descadastrar quando quiser.
                </p>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Cadastrando..." : "Quero receber ofertas"}
              </Button>
            </form>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-border/70 bg-[#111111] py-12 text-primary-foreground">
          <div className="container mx-auto px-4 flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-black tracking-[0.16em] text-white">
              PRONTO PARA <span className="text-primary">ECONOMIZAR?</span>
            </h2>
            <p className="max-w-2xl text-sm text-[#fffbeb]">
              Não perca mais tempo! Aproveite as melhores ofertas e transforme sua vida com nossos produtos
              selecionados.
            </p>
            <Button variant="hero" size="lg" className="group">
              <span>Comprar agora</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/80 bg-[#0a0a0a] py-10 text-[#fffbeb]">
        <div className="container mx-auto px-4 space-y-8">
          <div className="grid gap-8 md:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary shadow-[var(--shadow-glow-red)]">
                  <ShoppingBag className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">MegaStore</span>
                  <span className="text-sm font-semibold text-white">Red Hot Deals</span>
                </div>
              </div>
              <p className="max-w-sm text-xs text-gray-500">
                Sua loja online de produtos incríveis com os melhores preços e ofertas exclusivas todos os dias.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <h3 className="text-sm font-semibold text-white">Loja</h3>
              <ul className="space-y-1 text-gray-500">
                <li>Todos os produtos</li>
                <li>Ofertas</li>
                <li>Lançamentos</li>
                <li>Mais vendidos</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs">
              <h3 className="text-sm font-semibold text-white">Suporte</h3>
              <ul className="space-y-1 text-gray-500">
                <li>Central de ajuda</li>
                <li>Política de troca</li>
                <li>Rastrear pedido</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs">
              <h3 className="text-sm font-semibold text-white">Contato</h3>
              <ul className="space-y-1 text-gray-500">
                <li>contato@megastore.com</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 border-t border-[#333333] pt-4 text-[10px] text-gray-500 md:flex-row">
            <p>© 2024 MegaStore. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <button className="hover:text-white transition-colors">Termos de uso</button>
              <button className="hover:text-white transition-colors">Política de privacidade</button>
              <button className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
