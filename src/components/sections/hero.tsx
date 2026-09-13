import { ArrowRight, FileText, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/layout/social-links";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="bg-grid mask-fade-b pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-32">
        <div className="animate-fade-in">
          <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-muted uppercase">
            <span className="text-accent-text">{profile.title}</span>
            <span aria-hidden className="hidden h-px w-6 bg-border-strong sm:block" />
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" aria-hidden />
              {profile.location}
            </span>
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.02em] text-fg sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {profile.headline}
          </h1>
          <p className="text-pretty mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="/#projects" size="lg" className="w-full sm:w-auto">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="secondary" size="lg" external className="w-full sm:w-auto">
              <FileText className="h-4 w-4" aria-hidden />
              View Resume
            </ButtonLink>
            <ButtonLink href="/#contact" variant="ghost" size="lg" className="hidden sm:inline-flex">
              Contact
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <SocialLinks />
            <span className="text-sm text-muted">{profile.availability}</span>
          </div>
        </div>

        <div className="animate-fade-in mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rounded-2xl border border-border bg-surface p-3 shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-2">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 384px, 90vw"
                className="object-cover object-top"
              />
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {profile.facts.map((fact) => (
                <div key={fact.label} className="bg-surface px-3 py-2.5">
                  <dt className="font-mono text-[10px] tracking-wider text-muted uppercase">{fact.label}</dt>
                  <dd className="mt-0.5 text-[13px] font-medium leading-snug text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
