import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="font-mono text-xs tracking-wider text-accent-text uppercase">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">The page you are looking for does not exist or has moved.</p>
      <ButtonLink href="/" variant="secondary" className="mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to home
      </ButtonLink>
    </Container>
  );
}
