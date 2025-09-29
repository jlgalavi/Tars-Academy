import { Hero } from "@/components/hero";
import { Card } from "@/components/cards";
import { quickStarts, basics } from "./_data/home";

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl p-6">
      <Hero />

      <section id="quickstart" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Rutas rápidas (onboarding)</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {quickStarts.map((q) => (
            <Card key={q.id} title={q.title} href={q.href} meta={`${q.minutes} min`} disabled={q.disabled} />
          ))}
        </div>
      </section>

      <section id="basics" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Lo básico</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {basics.map((b) => (
            <Card key={b.id} title={b.title} href={b.href} disabled={b.disabled}>
              {b.desc}
            </Card>
          ))}
        </div>
      </section>

      <footer className="mt-10 text-sm text-neutral-500">
        Última actualización: {new Date().toLocaleDateString()}
      </footer>
    </main>
  );
}
