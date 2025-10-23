import Link from 'next/link';
import Image from 'next/image';
import { Card, CourseCard } from "@/components/cards";
import { basics, programasIntensivos } from "./_data/home";
import SpaceParticles from "@/components/SpaceParticles";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Partículas espaciales de fondo */}
      <SpaceParticles mode="landing" intensity={1} showLines={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center z-10">
        
        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-16">
          {/* Título principal */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              🌍 Academia TARS
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-medium">
              Aprende lo esencial para crear nuestro rover
            </p>
          </div>

          {/* Tarjetas principales con progresión */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16">
            {/* Tarjeta GitHub */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 w-full max-w-sm text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4">🐙</div>
              <h3 className="text-2xl font-bold text-white mb-4">GitHub</h3>
              <p className="text-slate-300 mb-6">Control de versiones y colaboración en equipo</p>
              <Link href="/tutoriales/github-primera-pr" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Empezar
              </Link>
            </div>

            {/* Flecha 1 */}
            <div className="text-4xl text-slate-400 rotate-90 lg:rotate-0">→</div>

            {/* Tarjeta Ubuntu */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 w-full max-w-sm text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4">🟠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ubuntu</h3>
              <p className="text-slate-300 mb-6">Instalación y entorno de trabajo en Linux</p>
              <Link href="/tutoriales/instalar-ubuntu-vm" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Empezar
              </Link>
            </div>

            {/* Flecha 2 */}
            <div className="text-4xl text-slate-400 rotate-90 lg:rotate-0">→</div>

            {/* Tarjeta ROS2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 w-full max-w-sm text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">ROS2</h3>
              <p className="text-slate-300 mb-6">Framework base para el software de robótica</p>
              <Link href="/tutoriales/instalar-ros-primer-nodo" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Empezar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Programas Intensivos */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            🚀 Programas Intensivos
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Formación especializada y en profundidad para equipos específicos. Cursos completos de varias semanas con proyectos prácticos y entregas semanales.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {programasIntensivos.map((curso) => (
              <CourseCard 
                key={curso.id}
                title={curso.title}
                href={curso.href}
                description={curso.desc}
                duration={curso.duration}
                modules={curso.modules}
                level={curso.level}
                team={curso.team}
                icon={curso.icon}
                disabled={curso.disabled}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección imagen + texto de presentación */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Imagen */}
            <div className="text-center">
              <div className="bg-slate-800 rounded-2xl p-8 inline-block">
                <div className="text-8xl">🤖</div>
                <p className="text-slate-400 mt-4 text-sm">Rover TARS ERC 2025</p>
              </div>
            </div>
            
            {/* Columna derecha - Texto */}
            <div className="text-lg text-slate-300 leading-relaxed">
              <p className="mb-6">
                🤖 <strong className="text-white">Academia TARS</strong> es tu guía interna de formación.
              </p>
              <p className="mb-6">
                Desde tutoriales básicos hasta programas intensivos especializados, todo lo necesario para 
                que cualquier miembro del equipo pueda contribuir al proyecto ERC.
              </p>
              <p className="text-slate-400">
                Formación práctica en control de versiones, configuración de entornos, diseño de hardware 
                y todas las habilidades técnicas que necesitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de tutoriales básicos */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            🧩 Amplía tu aprendizaje
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Tutoriales adicionales para profundizar en herramientas específicas y mejores prácticas
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {basics.map((tutorial) => (
              <Card 
                key={tutorial.id} 
                title={tutorial.title} 
                href={tutorial.href} 
                disabled={tutorial.disabled}
              >
                {tutorial.desc}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección del desarrollador */}
      <section className="relative py-16 z-10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          {/* Foto de perfil */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-space-500/40 shadow-lg">
                <Image
                  src="/jose-luis-profile.png"
                  alt="José Luis Galán Avilés"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 35%' }}
                  priority
                />
              </div>
              {/* Sutil glow effect */}
              <div className="absolute inset-0 rounded-full bg-space-500/10 blur-lg -z-10"></div>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 mb-2">
            ⚡ Desarrollado por <strong className="text-white">José Luis Galán Avilés</strong>
          </p>
          <p className="text-space-300 font-medium mb-6">
            Coordinador de Software – TARS Robotics (UPV)
          </p>
          
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/jlgalavi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500"
            >
              <span className="text-xl">🐙</span>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jose-luis-galán-avilés" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500"
            >
              <span className="text-xl">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer institucional */}
      <footer className="relative py-12 z-10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          {/* Logos */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-4xl">🤖</div>
            <div className="text-2xl text-slate-500">•</div>
            <div className="text-4xl">🏛️</div>
            <div className="text-2xl text-slate-500">•</div>
            <div className="text-4xl">💻</div>
          </div>
          
          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © 2025 Academia TARS – Universitat Politècnica de València
          </p>
        </div>
      </footer>
    </main>
  );
}
