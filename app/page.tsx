'use client';

import { ArrowUpRight, Orbit, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const highlights = [
  {
    title: "Adaptive Cinematic Lighting",
    description: "Prism auto-enhances every share with context-aware lighting, shadow sculpting, and skin-tone fidelity in real time.",
    icon: Sparkles
  },
  {
    title: "Quantum-Secure Vault",
    description: "Face ID and liveness detection gateway your inner circle with biometric keys and per-session encryption layers.",
    icon: ShieldCheck
  },
  {
    title: "Neural Storyboard",
    description: "Collaborative AI narratives thread each drop, weaving timelines, captions, and moodboards into a living gallery.",
    icon: Orbit
  }
];

const stats = [
  { label: "Latency", value: "38ms" },
  { label: "Trust", value: "AES-512" },
  { label: "Creators", value: "48k+" }
];

function OrbitalGlow() {
  const radius = useMotionValue(120);
  const opacity = useTransform(radius, [80, 220], [0.4, 0.65]);
  const background = useMotionTemplate`radial-gradient(circle, rgba(74, 242, 234, ${opacity}) 0%, transparent 65%)`;

  useEffect(() => {
    const handle = window.setInterval(() => {
      const next = 100 + Math.random() * 120;
      radius.set(next);
    }, 2600);

    return () => window.clearInterval(handle);
  }, [radius]);

  return (
    <motion.div
      aria-hidden
      className="absolute -inset-x-24 -top-48 h-[540px] w-[calc(100%+12rem)]"
      style={{ background, filter: "blur(60px)" }}
      animate={{ opacity: [0.3, 0.55, 0.3] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="-translate-x-1/2 -translate-y-1/2 rotate-12 scale-150 transform opacity-60" style={{ left: "15%", top: "15%" }}>
          <div className="h-96 w-96 rounded-full border border-white/10" />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 opacity-70">
          <div className="h-[620px] w-[620px] rounded-[320px] border border-white/5" />
        </div>
      </div>
    </div>
  );
}

function NeonPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-zinc-400/80">
      <span className="h-1.5 w-1.5 rounded-full bg-prism-yellow shadow-glow" />
      {label}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-5">
      <NeonPill label={eyebrow} />
      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="text-base text-zinc-400 md:text-lg">{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-32 pt-32 sm:px-10 lg:px-16">
        <GridBackground />
        <OrbitalGlow />
        <div className="noise-layer relative flex w-full max-w-6xl flex-col items-center gap-14 rounded-[32px] border border-white/5 bg-white/[0.02] p-10 text-center shadow-[0_30px_120px_rgba(0,0,0,0.4)] lg:p-16">
          <NeonPill label="Prism Intelligence" />
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Illuminate Every Moment with AI-driven Presence
            </h1>
            <p className="text-lg text-zinc-400 md:text-xl">
              Prism is the tech-noir vault for creators who live in light and shadow. Streamline your drops with living galleries, biometric trust, and cinematic rendering.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              className="group inline-flex items-center justify-center rounded-full bg-prism-yellow px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
              href="#waitlist"
            >
              Join the waitlist
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:border-white/40">
              Watch the ritual
            </button>
          </div>
          <div className="grid w-full gap-3 rounded-3xl border border-white/5 bg-white/[0.02] px-6 py-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-sm uppercase tracking-[0.35em] text-zinc-500">
                <span className="text-2xl font-semibold text-white tracking-tight">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-24 flex max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-neon">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-60" />
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-prism-yellow">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 flex max-w-6xl flex-col gap-16 px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Neural Workflow"
              title="From Capture to Ceremony in Three Pulses"
              description="Prism bends the timeline for modern storytellers. Every interaction is orchestrated by AI ensembles tuned to your vibe, your circle, and your safety footprint."
            />
            <div className="space-y-6 border-l border-white/5 pl-6">
              {[
                {
                  name: "Capture",
                  accent: "bg-prism-cyan",
                  body: "Upload raw frames or let Prism sync from your devices. Scene detection, spatial tagging, and mood profiling happen in the background — no prompts required."
                },
                {
                  name: "Transmute",
                  accent: "bg-prism-yellow",
                  body: "Contrast tuning, dynamic range sculpting, and neon-grade color grading converge. Our diffusion renderers rebalance each pixel to feel cinematic yet authentic."
                },
                {
                  name: "Reveal",
                  accent: "bg-prism-pink",
                  body: "Gate your drops with Face ID rituals, host live co-edits, and archive every reveal in a quantum-locked vault that only your crew can unlock."
                }
              ].map((step, index) => (
                <div key={step.name} className="relative pl-10">
                  <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center">
                    <div className={`h-2 w-6 rounded-full ${step.accent}`}></div>
                  </div>
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-zinc-500">
                    <span className="text-xs text-white/80">Pulse {index + 1}</span>
                    <span>{step.name}</span>
                  </div>
                  <p className="mt-3 text-base text-zinc-400">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[32px] border border-white/5 bg-gradient-to-br from-prism-cyan/10 via-transparent to-prism-pink/10 blur-3xl" />
            <div className="relative w-full max-w-sm rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_40px_160px_rgba(0,0,0,0.6)]">
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-zinc-500">
                <span>Face ID Ritual</span>
                <span className="inline-flex items-center gap-2 text-prism-pink">
                  <Zap className="h-3 w-3" /> Live
                </span>
              </div>
              <div className="space-y-4 rounded-[28px] border border-white/10 bg-black/40 p-6" role="presentation">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Recognition</span>
                  <span className="text-white">99.8%</span>
                </div>
                <div className="relative h-2 rounded-full bg-white/5">
                  <div className="absolute inset-y-0 left-0 w-[85%] rounded-full bg-gradient-to-r from-prism-pink to-prism-yellow" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Vault Sync</span>
                  <span className="text-white">Active</span>
                </div>
                <div className="relative h-2 rounded-full bg-white/5">
                  <div className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-gradient-to-r from-prism-cyan to-prism-yellow" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">Authorized arrivals</p>
                  <div className="mt-3 space-y-2 text-sm text-white/80">
                    <div className="flex items-center justify-between opacity-90">
                      <span>Nova</span>
                      <span className="text-prism-pink">Biometric sync</span>
                    </div>
                    <div className="flex items-center justify-between opacity-70">
                      <span>Kaio</span>
                      <span className="text-prism-yellow">Encrypted drop</span>
                    </div>
                    <div className="flex items-center justify-between opacity-50">
                      <span>Rhea</span>
                      <span className="text-prism-cyan">Awaiting aura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Prism sequences every revelation with biometric poetry and quantum-grade defense layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="noise-layer overflow-hidden rounded-[36px] border border-white/5 bg-white/[0.03] p-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Signal Frequencies"
                title="A living stream of signal-rich experiences"
                description="Your timeline pulses with cinematic previews, reactive captions, and mood-driven playlists — all orchestrated by Prism's ensembles."
              />
              <div className="grid gap-4 text-sm text-zinc-400">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-prism-cyan">Sense</p>
                  <p className="mt-3 text-base text-white">
                    Ambient AI listens to light, texture, and motion to personalize each reveal for every member of your orbit.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-prism-pink">Secure</p>
                  <p className="mt-3 text-base text-white">
                    Biometric rituals seal access while quantum-derived hashes document provenance, keeping your circle intact.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-prism-yellow">Share</p>
                  <p className="mt-3 text-base text-white">
                    Broadcast drops to Discord, Threads, and Prism Capsules with one tap, tuned to each platform's aura.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-prism-yellow/20 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-prism-cyan/20 blur-3xl" />
              <div className="relative flex flex-col gap-4 rounded-[32px] border border-white/10 bg-black/60 p-6">
                {["Prism // Drop-39", "Real-time Render", "Aura Sync", "Encrypted Relay"].map((tag) => (
                  <span key={tag} className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-zinc-400">
                    {tag}
                  </span>
                ))}
                <div className="grid gap-4 rounded-[24px] border border-white/10 bg-white/5 p-6 text-sm text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Render Engine</span>
                    <span>Photon Ridge v8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Frame Rate</span>
                    <span>144 FPS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Sync Mode</span>
                    <span className="text-prism-cyan">Multi-crew</span>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-6 text-zinc-400">
                  <p className="text-xs uppercase tracking-[0.35em] text-prism-yellow">Intel</p>
                  <p className="mt-3 text-base text-white">
                    "Prism turns drops into rituals. It's the only platform where my inner circle feels cinematic and safe." — LYRA, Cyber Visualist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-12 rounded-[36px] border border-white/10 bg-white/[0.02] p-10 text-center">
          <NeonPill label="Waitlist Signal" />
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Upload your aura. Prism invites the daring first.
            </h3>
            <p className="text-base text-zinc-400 md:text-lg">
              We open capsules in pulses. Drop your signal, secure your crew, and be the first to wield the tech-noir vault.
            </p>
          </div>
          <form id="waitlist" className="mx-auto flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              required
              placeholder="yourname@signal.net"
              className="w-full rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-prism-yellow focus:outline-none"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-prism-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:shadow-glow">
              Signal Prism
            </button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.35em] text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-prism-yellow" /> End-to-end encrypted
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-prism-cyan" /> AI-crafted reveals
            </span>
            <span className="inline-flex items-center gap-2">
              <Orbit className="h-4 w-4 text-prism-pink" /> Inner circle first
            </span>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto mt-24 max-w-6xl px-6 pb-10 pt-16 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.4em] text-prism-yellow">Prism</span>
            <p className="mt-2 text-xs text-zinc-500">© {new Date().getFullYear()} Prism Labs. Crafted in the tech-noir frontier.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
            <a href="#" className="transition hover:text-white">
              Manifesto
            </a>
            <a href="#" className="transition hover:text-white">
              Rituals
            </a>
            <a href="#" className="transition hover:text-white">
              Security
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
