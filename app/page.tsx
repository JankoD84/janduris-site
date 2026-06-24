"use client";

import Link from "next/link";
import { type CSSProperties } from "react";

import { featuredProof, profile, signalBar } from "./content";
import { Card, ContactIconGroup, ReleaseSignalCard, SiteShell } from "./components";

const previewPages = [
  { title: "About", href: "/about", description: "Professional story, positioning and the human side behind the work." },
  { title: "Work", href: "/work", description: "QA experience timeline, education and practical testing background." },
  { title: "Proof", href: "/proof", description: "Shareable proof for QA, automation direction and product building." },
  { title: "Projects", href: "/projects", description: "Dulvarn, internal systems, AI workflow experiments and automation portfolio." },
  { title: "Websites", href: "/websites", description: "Live public work and web properties connected to the builder profile." },
  { title: "Skills", href: "/skills", description: "QA, automation, business systems, engineering tools and languages." },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:min-h-[88vh] md:px-8 lg:px-10 lg:pt-28">
        <div className="absolute inset-x-4 top-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:inset-x-6 sm:top-24" />
        <HeroWallRevealAnimation />
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80 sm:text-sm sm:tracking-[0.28em]">{profile.name}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight text-ink sm:mt-5 sm:text-5xl lg:text-7xl">{profile.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">{profile.message}</p>
            <div className="mt-7 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-3">
              <Link href="/proof" className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:min-h-12 sm:w-auto">View Proof of Work</Link>
              <Link href="/projects" className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/16 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:min-h-12 sm:w-auto">Explore Projects</Link>
              <div className="mt-1 flex justify-center sm:ml-2 sm:mt-0"><ContactIconGroup /></div>
            </div>
          </div>
          <ReleaseSignalCard />
        </div>
        <div className="mt-8 grid gap-3 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {signalBar.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-slate-950/45 p-3 text-sm text-slate-200 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/25 hover:bg-white/[0.055] sm:p-4">
              <h2 className="font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10">
        <div className="mb-6 max-w-3xl sm:mb-9">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80 sm:text-sm sm:tracking-[0.22em]">Overview</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">Proof, projects and experience at a glance.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProof.map((item) => (
            <Card key={item.title} className="min-h-0">
              <h2 className="text-lg font-semibold text-ink sm:text-xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10">
        <div className="mb-6 max-w-3xl sm:mb-9">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80 sm:text-sm sm:tracking-[0.22em]">Explore</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">Focused pages instead of one overloaded scroll.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {previewPages.map((page) => (
            <Link key={page.href} href={page.href} className="rounded-lg border border-white/[0.065] bg-slate-950/34 p-4 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/18 hover:bg-white/[0.045] focus:outline-none focus:ring-2 focus:ring-sky-300/45 sm:p-6">
              <h3 className="text-lg font-semibold text-ink">{page.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{page.description}</p>
              <span className="mt-5 inline-flex text-sm font-medium text-sky-200">Open {page.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function HeroWallRevealAnimation() {
  const columns = 30;
  const rows = 5;
  const shots = [27, 34, 41, 48, 55, 62, 69, 76];
  const fireTimes = [0.72, 1.3, 1.88, 2.46, 3.04, 3.62, 4.2, 4.78];
  const impactOffset = 0.48;
  const brickCount = columns * rows;
  const bricks = Array.from({ length: brickCount }, (_, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const columnCenter = ((column + 0.5) / columns) * 100;
    const shot = shots.reduce((nearest, left, shotIndex) => {
      const currentDistance = Math.abs(left - columnCenter);
      const nearestDistance = Math.abs(shots[nearest] - columnCenter);

      return currentDistance < nearestDistance ? shotIndex : nearest;
    }, 0);
    const distance = Math.abs(shots[shot] - columnCenter);
    const rowCenterBias = Math.abs(row - (rows - 1) / 2);

    return {
      id: index,
      shot,
      delay: fireTimes[shot] + impactOffset + distance * 0.012 + rowCenterBias * 0.035 + (row % 2) * 0.018,
      fracture: (column % 5) - 2,
      lift: row - 2,
    };
  });

  return (
    <div aria-hidden="true" className="hero-wall-reveal mx-auto w-full max-w-5xl overflow-hidden py-1 sm:py-2">
      <div className="hero-wall-reveal__stage">
        <p className="hero-wall-reveal__message">Where others shift-left, we shift-right.</p>

        <div className="hero-wall-reveal__wall" style={{ "--brick-columns": columns } as CSSProperties}>
          {bricks.map((brick) => (
            <span
              key={brick.id}
              className="hero-wall-reveal__brick"
              style={
                {
                  "--break-delay": `${brick.delay}s`,
                  "--break-x": `${brick.fracture * 0.055 + (brick.shot - 3.5) * 0.045}rem`,
                  "--break-y": `${-0.18 - Math.abs(brick.lift) * 0.05}rem`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="hero-wall-reveal__shots">
          {shots.map((left, index) => {
            const impactDelay = fireTimes[index] + impactOffset;

            return (
              <span key={left} className="hero-wall-reveal__shot-group">
                <span
                  className="hero-wall-reveal__shot"
                  style={
                    {
                      "--shot-left": `${left}%`,
                      "--shot-delay": `${fireTimes[index]}s`,
                    } as CSSProperties
                  }
                />
                <span
                  className="hero-wall-reveal__impact"
                  style={
                    {
                      "--shot-left": `${left}%`,
                      "--impact-delay": `${impactDelay}s`,
                    } as CSSProperties
                  }
                />
                <span
                  className="hero-wall-reveal__fragments"
                  style={
                    {
                      "--shot-left": `${left}%`,
                      "--impact-delay": `${impactDelay}s`,
                    } as CSSProperties
                  }
                />
              </span>
            );
          })}
        </div>

        <div className="hero-wall-reveal__shooter">
          <span className="hero-wall-reveal__barrel" />
          <span className="hero-wall-reveal__base" />
        </div>
      </div>
    </div>
  );
}
