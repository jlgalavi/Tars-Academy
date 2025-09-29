export function Hero() {
  return (
    <section className="hero mb-8 rounded-2xl p-6">
      <h1 className="text-3xl font-bold">Academia TARS</h1>
      <p className="mt-2 text-[15px] text-[color:var(--muted)]">
        Mini-tutoriales claros y prácticos para empezar rápido: Git, GitHub, Ubuntu, ROS y buenas prácticas.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href="#quickstart" className="btn btn-primary">Empezar por aquí</a>
        <a href="#basics" className="btn">Ver básicos</a>
      </div>
    </section>
  );
}
