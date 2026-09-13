import Link from "next/link";
import { navItems } from "@/config/site";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.label}
            </Link>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            Resume
          </a>
        </nav>
        <SocialLinks />
      </Container>
    </footer>
  );
}
