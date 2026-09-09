import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Brain,
  Check,
  Instagram,
  LockKeyhole,
  MessageCircle,
  Video,
} from "lucide-react";
const consultorioPhoto = "/michelle-borges-consultorio.jpg";
const portraitPhoto = "/michelle-borges-retrato.jpg";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5524999405286&text=Oi%25252C+gostaria+de+mais+informa%2525C3%2525A7%2525C3%2525B5es+sobre+o+atendimento+&type=phone_number&app_absent=0&utm_source=site";
const instagramUrl = "https://www.instagram.com/psimichelleborges/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Psicóloga Online em TCC | Michelle Borges" },
      {
        name: "description",
        content:
          "Psicoterapia online em TCC para ansiedade, autonomia e bem-estar emocional com Michelle Borges, CRP 05/76136. Atendimento em todo o Brasil.",
      },
      { property: "og:title", content: "Psicóloga Online em TCC | Michelle Borges" },
      {
        property: "og:description",
        content: "Um espaço seguro para compreender sua história e construir novos caminhos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Michelle Borges Psicóloga Clínica",
          description: "Atendimento psicológico online em Terapia Cognitivo-Comportamental.",
          areaServed: "Brasil",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Volta Redonda",
            addressRegion: "RJ",
            addressCountry: "BR",
          },
          sameAs: [instagramUrl],
        }),
      },
    ],
  }),
});

const struggles = [
  "Sente que a sua paz e felicidade dependem excessivamente de outra pessoa?",
  "É frequentemente paralisado por pensamentos negativos automáticos e ansiedade?",
  "Sente uma enorme dificuldade em dizer “não” por medo de desagradar ou ser abandonado?",
  "Acha difícil relaxar e estar presente no momento atual, sentindo-se sempre em alerta?",
  "Sente que precisa retomar as rédeas da própria vida, mas não sabe por onde começar?",
];

const conditions = [
  "Ansiedade e crises de ansiedade",
  "Síndrome do pânico e fobias",
  "Depressão e desânimo persistente",
  "Estresse, esgotamento e burnout",
  "Pensamentos obsessivos e TOC",
  "Baixa autoestima e autocrítica excessiva",
  "Dependência emocional e relacionamentos difíceis",
  "Conflitos conjugais e terapia de casal",
  "Luto, separações e mudanças de vida",
  "Insônia e dificuldade de relaxar",
];

const steps = [
  {
    number: "01",
    title: "O contato",
    icon: MessageCircle,
    text: "Você clica no botão do WhatsApp e nós agendamos o melhor dia e horário para a sua sessão, de forma rápida e humanizada.",
  },
  {
    number: "02",
    title: "O seu espaço",
    icon: LockKeyhole,
    text: "Minutos antes da consulta, você recebe um link seguro. Tudo o que precisa é de um celular ou computador com internet e um ambiente tranquilo.",
  },
  {
    number: "03",
    title: "A sessão",
    icon: Video,
    text: "No seu tempo, no conforto e na privacidade da sua casa, iniciamos nosso processo de escuta, autoconhecimento e transformação.",
  },
];

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.116-.198.058-.372-.058-.52-.116-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.298-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.99 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488" />
    </svg>
  );
}

function WhatsAppButton({
  children,
  inverted = false,
}: {
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`pressable inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-bold ${inverted ? "bg-background text-primary hover:bg-surface" : "bg-primary text-primary-foreground hover:bg-foreground"}`}
    >
      <WhatsAppIcon aria-hidden="true" className="size-4 shrink-0" />
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 sm:flex sm:justify-between">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3"
          aria-label="Michelle Borges, início"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary font-display text-lg font-bold text-primary">
            MB
          </span>
          <span className="min-w-0 leading-tight">
            <strong className="block truncate font-display text-lg text-primary">
              Michelle Borges
            </strong>
            <span className="block truncate text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
              Psicóloga Clínica · CRP 05/76136
            </span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-7 text-xs font-bold text-foreground md:flex"
          aria-label="Navegação principal"
        >
          <a href="#terapia" className="hover:text-primary">
            Para quem é
          </a>
          <a href="#abordagem" className="hover:text-primary">
            A abordagem
          </a>
          <a href="#sobre" className="hover:text-primary">
            Sobre mim
          </a>
        </nav>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="pressable grid size-10 shrink-0 place-items-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          aria-label="Instagram de Michelle Borges"
        >
          <Instagram className="size-4" />
        </a>
      </header>

      <section
        id="inicio"
        className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-14"
      >
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 flex items-center gap-3 text-primary">
            <span className="h-px w-8 bg-primary" /> Psicoterapia online · TCC
          </p>
          <h1 className="text-[clamp(3rem,6vw,5.7rem)] font-semibold leading-[0.94] text-primary">
            Acolher é compreender a sua história e ajudar a construir novos caminhos.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-foreground sm:text-lg">
            Você não precisa enfrentar suas angústias em silêncio. Atendimento psicológico online
            especializado em Terapia Cognitivo-Comportamental para te guiar rumo à autonomia, alívio
            da ansiedade e bem-estar emocional.
          </p>
          <p className="mt-6 font-display text-2xl font-semibold text-primary sm:text-3xl">
            Dê o primeiro passo hoje: fale comigo agora pelo WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <WhatsAppButton>Agendar minha sessão pelo WhatsApp</WhatsAppButton>
            <a
              href="#queixas"
              className="text-sm font-bold text-primary underline underline-offset-4 hover:text-foreground"
            >
              Ver o que eu atendo
            </a>
          </div>
          <p className="mt-5 text-xs font-semibold text-muted-foreground">
            Atendimento online para todo o Brasil · Resposta rápida no WhatsApp
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[33rem] pb-5 pr-5">
          <img
            src={consultorioPhoto}
            alt="Psicóloga Michelle Borges em seu consultório"
            className="photo-frame aspect-[4/5] w-full rounded-t-[10rem] object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute bottom-0 left-[-1rem] rounded-md bg-surface px-5 py-4 soft-shadow sm:left-[-2.5rem]">
            <p className="font-display text-xl font-semibold text-primary">
              Escuta com acolhimento
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Clareza para seguir no seu tempo</p>
          </div>
        </div>
      </section>

      <section id="queixas" className="border-y border-border bg-surface py-16 sm:py-20">
        <div className="section-shell">
          <p className="eyebrow text-primary">O que eu atendo</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            Queixas e questões tratadas na terapia
          </h2>
          <ul className="mt-9 flex flex-wrap gap-3">
            {conditions.map((item) => (
              <li
                key={item}
                className="rounded-full border border-rose bg-rose-soft px-4 py-2 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-7">
            Não encontrou a sua questão aqui? Me chame no WhatsApp e conversamos sobre o seu caso
            com tranquilidade.
          </p>
          <div className="mt-7">
            <WhatsAppButton>Falar com a psicóloga agora</WhatsAppButton>
          </div>
        </div>
      </section>

      <section id="terapia" className="bg-sage py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-foreground/70">Para quem é a terapia?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Você se identifica com alguma destas situações?
            </h2>
            <p className="mt-7 max-w-md border-l border-foreground/40 pl-5 text-sm leading-7">
              Não existem respostas certas. Apenas um convite para olhar com gentileza para o que
              você tem vivido.
            </p>
          </div>
          <div>
            <ul className="divide-y divide-foreground/20 border-y border-foreground/20">
              {struggles.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] gap-4 py-5 text-sm font-medium leading-6 sm:text-base"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-foreground/40">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7">
              <strong>
                Se você respondeu “sim” para alguma dessas perguntas, saiba que você não está só.
              </strong>{" "}
              A terapia é o espaço seguro para entender esses padrões e reescrever essa história.
            </p>
          </div>
        </div>
      </section>

      <section id="abordagem" className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow text-primary">A abordagem</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-primary sm:text-5xl">
              Como vamos trabalhar juntos?
            </h2>
            <p className="mt-3 font-display text-2xl text-muted-foreground">
              A Terapia Cognitivo-Comportamental
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-rose bg-rose lg:grid-cols-3">
            <article className="bg-background p-8">
              <Brain className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-8 text-2xl font-semibold text-primary">Compreender</h3>
              <p className="mt-4 text-sm leading-7">
                A TCC é uma abordagem prática, baseada em evidências e focada no momento presente.
                Juntos, identificamos como seus pensamentos afetam sentimentos e atitudes.
              </p>
            </article>
            <article className="bg-background p-8">
              <span className="grid size-7 place-items-center rounded-full border border-primary font-display font-bold text-primary">
                ↗
              </span>
              <h3 className="mt-8 text-2xl font-semibold text-primary">Desenvolver</h3>
              <p className="mt-4 text-sm leading-7">
                Ao longo das sessões, você aprende técnicas de relaxamento, ferramentas para
                questionar pensamentos automáticos e estratégias para lidar com a ansiedade.
              </p>
            </article>
            <article className="bg-background p-8">
              <Check className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-8 text-2xl font-semibold text-primary">Transformar</h3>
              <p className="mt-4 text-sm leading-7">
                O foco é trazer clareza mental e resultados práticos para o seu dia a dia,
                promovendo mudanças reais, conscientes e duradouras.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-border bg-surface py-20 sm:py-28">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[27rem]">
            <img
              src={portraitPhoto}
              alt="Retrato profissional da psicóloga Michelle Borges"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-t-[9rem] object-cover object-top"
            />
            <span className="absolute -bottom-5 -right-5 grid size-20 place-items-center rounded-full bg-rose-soft font-display text-2xl font-semibold text-primary">
              Ψ
            </span>
          </div>
          <div>
            <p className="eyebrow text-primary">Sobre a psicóloga</p>
            <h2 className="mt-5 text-4xl font-semibold text-primary sm:text-5xl">
              Muito prazer,
              <br />
              eu sou Michelle Borges.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 sm:text-base">
              <p className="font-semibold">
                Acredito profundamente que cada pessoa carrega dentro de si a força necessária para
                transformar a própria realidade.
              </p>
              <p>
                Como psicóloga, meu papel não é resolver os seus problemas por você, nem entregar
                respostas prontas. Na nossa jornada, eu serei a sua companheira de viagem, mas você
                é o piloto.
              </p>
              <p>
                Minha missão é te fornecer o mapa, as ferramentas e o acolhimento seguro sem
                julgamentos. Juntos, vamos trabalhar para que você desenvolva autonomia para lidar
                com suas emoções, tomar decisões mais saudáveis e construir uma vida com mais
                propósito, leveza e saúde mental.
              </p>
            </div>
            <p className="mt-8 inline-flex border-t border-primary pt-4 text-xs font-bold uppercase tracking-widest text-primary">
              CRP 05/76136 · Volta Redonda, RJ
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="online-title">
        <div className="section-shell">
          <div className="text-center">
            <p className="eyebrow text-primary">Atendimento online</p>
            <h2 id="online-title" className="mt-5 text-4xl font-semibold text-primary sm:text-5xl">
              O seu bem-estar a um clique de distância
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map(({ number, title, icon: Icon, text }) => (
              <article key={number} className="relative border-t border-primary pt-8">
                <span className="font-display text-5xl text-rose">{number}</span>
                <Icon className="absolute right-0 top-8 size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-7 text-2xl font-semibold text-primary">{title}</h3>
                <p className="mt-4 text-sm leading-7">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="section-shell py-20 text-center sm:py-24">
          <p className="mx-auto max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
            “Cuidar da sua saúde mental não é um luxo, é o maior ato de amor-próprio que você pode
            ter.”
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-primary-foreground/80">
            O primeiro passo para a mudança é escolher pedir ajuda. Você não precisa fazer esse
            caminho sozinho.
          </p>
          <div className="mt-9">
            <WhatsAppButton inverted>Quero começar meu acompanhamento</WhatsAppButton>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20">
          <div className="section-shell grid gap-5 py-6 text-xs sm:grid-cols-[1fr_auto] sm:items-center">
            <p>
              <strong>Michelle Borges</strong> · Psicóloga Clínica · CRP 05/76136
              <br />
              TCC · Jovens | Adultos | Casais · Atendimento online
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold hover:underline"
            >
              @psimichelleborges <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-[0_6px_22px_rgba(37,211,102,0.65)] active:scale-95 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </main>
  );
}
