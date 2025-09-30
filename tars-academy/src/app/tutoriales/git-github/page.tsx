/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";
import SpaceParticles from "@/components/SpaceParticles";

export default function GitGitHub() {
  const handleStartClick = () => {
    const element = document.getElementById('instalacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrerequisitesClick = () => {
    const element = document.getElementById('prerequisitos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tocItems = [
    { id: "introduccion", title: "🎯 ¿Por qué Git?", level: 2 },
    { id: "prerequisitos", title: "📋 Prerrequisitos", level: 2 },
    { id: "conceptos", title: "🧠 Conceptos fundamentales", level: 2 },
    { id: "instalacion", title: "📥 Instalación y configuración", level: 2 },
    { id: "primer-repositorio", title: "🎆 Primer repositorio", level: 2 },
    { id: "flujo-basico", title: "🔄 Flujo básico Git", level: 2 },
    { id: "ramas", title: "🌳 Branches (ramas)", level: 2 },
    { id: "github-basico", title: "🐙 GitHub básico", level: 2 },
    { id: "push-pull-detallado", title: "🔄 Push y Pull detallado", level: 2 },
    { id: "ssh-ed25519", title: "🔑 SSH ed25519 para Git", level: 2 },
    { id: "colaboracion", title: "Colaboración básica", level: 2 },
    { id: "comandos-esenciales", title: "Comandos esenciales", level: 2 },
    { id: "validacion", title: "Validación final", level: 2 },
    { id: "recursos", title: "Recursos", level: 2 }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SpaceParticles mode="tutorial" intensity={0.5} showLines={false} />
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 gap-8">
          <main className="lg:col-span-4 xl:col-span-3 max-w-5xl mx-auto lg:mx-0">
            <Breadcrumb 
              items={[
                { label: "Inicio", href: "/" },
                { label: "Tutoriales", href: "/" },
                { label: "Git & GitHub" }
              ]} 
            />
            
            <div className="mt-6 flex flex-wrap gap-2 mb-8">
              <TutorialChip label="Conceptos" variant="status" icon="🧠" />
              <TutorialChip label="Control de versiones" variant="status" icon="📚" />
              <TutorialChip label="Principiante" variant="level" icon="🌱" />
            </div>

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                📚 Git & GitHub Básico
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Aprende los conceptos fundamentales de Git y GitHub para control de versiones. 
                Dominarás el flujo básico de trabajo, branches, y colaboración en equipo. 
                Esencial para cualquier desarrollador en robótica.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="btn-primary" onClick={handleStartClick}>
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary" onClick={handlePrerequisitesClick}>
                  📋 Ver requisitos
                </button>
              </div>
            </header>

            <div className="space-y-8">
            <section id="introduccion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🎯 ¿Por qué Git?
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Git es el sistema de control de versiones más usado en el mundo. En robótica 
                  es esencial para gestionar código, colaborar en equipo, y mantener historial 
                  de cambios en proyectos complejos.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🚀 Sin Git (caos)</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <code>proyecto_final.py</code></li>
                      <li>• <code>proyecto_final_v2.py</code></li>
                      <li>• <code>proyecto_final_DEFINITIVO.py</code></li>
                      <li>• <code>proyecto_final_AHORA_SI.py</code></li>
                      <li>• ¿Cuál funciona? 🤷‍♂️</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">✅ Con Git (orden)</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Un archivo: <code>proyecto.py</code></li>
                      <li>• Historial completo de cambios</li>
                      <li>• Branches para experimentos</li>
                      <li>• Colaboración sin conflictos</li>
                      <li>• Backup automático en GitHub</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-2">En robótica, Git te permite:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Versionar algoritmos de navegación</li>
                      <li>• Colaborar en proyectos ROS</li>
                      <li>• Hacer rollback si algo falla</li>
                    </ul>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Experimentar sin miedo</li>
                      <li>• Compartir código entre robots</li>
                      <li>• Documentar cambios importantes</li>
                    </ul>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Analogía:</strong> Git es como un &quot;checkpoint system&quot; en videojuegos - 
                  puedes experimentar y siempre volver a un punto conocido que funciona.
                </Callout>
              </div>
            </section>

            <section id="prerequisitos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📋 Prerrequisitos
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">Antes de comenzar necesitas:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Terminal básica</strong> - conocer cd, ls, mkdir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Cuenta GitHub</strong> (gratuita) - <a href="https://github.com" className="text-blue-400 hover:underline">github.com</a></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Editor de texto</strong> - nano, vim, o VS Code</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">○</span>
                      <span><strong>Opcional:</strong> Haber completado "Terminal Básica"</span>
                    </li>
                  </ul>
                </div>

                <Callout type="info">
                  <strong>Tiempo estimado:</strong> 60 minutos para conceptos + configuración + práctica.
                </Callout>
              </div>
            </section>

            <section id="conceptos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🧠 Conceptos fundamentales
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Repository (Repo)</h4>
                    <p className="text-slate-300 text-sm">
                      Una carpeta que contiene tu proyecto + historial completo de cambios. 
                      Como una &quot;cápsula del tiempo&quot; de tu código.
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Commit</h4>
                    <p className="text-slate-300 text-sm">
                      Una &quot;fotografía&quot; de tu código en un momento específico. Incluye 
                      mensaje explicando qué cambió.
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Branch (Rama)</h4>
                    <p className="text-slate-300 text-sm">
                      Una línea de desarrollo paralela. Te permite experimentar sin 
                      afectar el código principal (main/master).
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Remote (Remoto)</h4>
                    <p className="text-slate-300 text-sm">
                      Copia de tu repositorio en otro lugar (GitHub). Permite colaboración 
                      y backup automático.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">Estados de archivos en Git</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong>Untracked:</strong> Git no lo conoce</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong>Modified:</strong> Cambios sin preparar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong>Staged:</strong> Preparado para commit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong>Committed:</strong> Guardado en historial</span>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Flujo mental:</strong> 
                  Trabajas → Preparas cambios (stage) → Fotografías (commit) → Subes a GitHub (push)
                </Callout>
              </div>
            </section>

            <section id="instalacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ⚙️ Instalación y configuración
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Instalar Git</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🐧 Ubuntu/Linux
                      </h4>
                      <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                        <div># Actualizar paquetes</div>
                        <div>sudo apt update</div>
                        <div className="mt-2"># Instalar Git</div>
                        <div>sudo apt install git -y</div>
                        <div className="mt-2"># Verificar instalación</div>
                        <div>git --version</div>
                      </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🪟 Windows
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Opción 1: Winget (recomendado)</div>
                          <div>winget install --id Git.Git -e --source winget</div>
                          <div className="mt-2"># Verificar instalación</div>
                          <div>git --version</div>
                        </div>
                        <div className="text-slate-300 text-sm">
                          <strong>Opción 2:</strong> Descargar desde <a href="https://git-scm.com/download/win" className="text-blue-400 hover:underline">git-scm.com</a>
                          <br />
                          <strong>Opción 3:</strong> Chocolatey: <code className="bg-slate-700 px-1 rounded">choco install git</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Callout type="info">
                    <strong>Nota Windows:</strong> Después de instalar Git, reinicia tu terminal (PowerShell/CMD) 
                    para que los comandos estén disponibles.
                  </Callout>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configuración inicial</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Configura tu identidad (úsala en TODOS tus repos):</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Tu nombre real</div>
                      <div>git config --global user.name &quot;Tu Nombre&quot;</div>
                      <div className="mt-2"># Email de GitHub</div>
                      <div>git config --global user.email &quot;tu@email.com&quot;</div>
                      <div className="mt-2"># Editor preferido</div>
                      <div>git config --global core.editor nano</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Verificar configuración</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Ver toda la configuración</div>
                      <div>git config --list</div>
                      <div className="mt-2"># Ver configuración específica</div>
                      <div>git config user.name</div>
                      <div>git config user.email</div>
                    </div>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Importante:</strong> Usa el mismo email que tienes en GitHub, 
                  sino tus commits no aparecerán vinculados a tu perfil.
                </Callout>
              </div>
            </section>

            <section id="primer-repositorio">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📁 Primer repositorio
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Crear repositorio local</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🐧 Ubuntu/Linux (Bash)
                      </h4>
                      <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                        <div># Crear carpeta del proyecto</div>
                        <div>mkdir mi_primer_repo</div>
                        <div>cd mi_primer_repo</div>
                        <div className="mt-2"># Inicializar Git</div>
                        <div>git init</div>
                        <div className="mt-2"># Verificar estado</div>
                        <div>git status</div>
                      </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🪟 Windows (PowerShell)
                      </h4>
                      <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                        <div># Crear carpeta del proyecto</div>
                        <div>mkdir mi_primer_repo</div>
                        <div>cd mi_primer_repo</div>
                        <div className="mt-2"># Inicializar Git</div>
                        <div>git init</div>
                        <div className="mt-2"># Verificar estado</div>
                        <div>git status</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm">
                    <strong>git init</strong> crea una carpeta oculta <code>.git</code> donde se guarda todo el historial.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Crear primer archivo</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🐧 Ubuntu/Linux (Bash)
                      </h4>
                      <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                        <div># Crear archivo README</div>
                        <div>echo &quot;# Mi Primer Proyecto&quot; &gt; README.md</div>
                        <div>echo &quot;Este es mi primer repositorio Git&quot; &gt;&gt; README.md</div>
                        <div className="mt-2"># Ver estado</div>
                        <div>git status</div>
                      </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🪟 Windows (PowerShell)
                      </h4>
                      <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                        <div># Crear archivo README</div>
                        <div>&quot;# Mi Primer Proyecto&quot; | Out-File README.md</div>
                        <div>&quot;Este es mi primer repositorio Git&quot; | Add-Content README.md</div>
                        <div className="mt-2"># Ver estado</div>
                        <div>git status</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-slate-700 p-2 rounded text-sm text-slate-300">
                    <strong>Resultado esperado:</strong> Git detecta un archivo &quot;untracked&quot; (sin seguimiento)
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Primer commit</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Añadir archivo al staging area</div>
                      <div>git add README.md</div>
                      <div className="mt-2"># Verificar que está staged</div>
                      <div>git status</div>
                      <div className="mt-2"># Hacer commit</div>
                      <div>git commit -m &quot;Añadir README inicial&quot;</div>
                    </div>
                    <p className="text-slate-300 mt-3 text-sm">
                      <strong>¡Felicitaciones!</strong> Has creado tu primer commit. Es una &quot;fotografía&quot; 
                      permanente de tu código en este momento.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="flujo-basico">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔄 Flujo básico Git
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">El ciclo de trabajo diario</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <span className="text-slate-300">Editas archivos (código, docs, etc.)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <span className="text-slate-300"><code>git add</code> - preparas cambios para commit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <span className="text-slate-300"><code>git commit</code> - guardas &quot;fotografía&quot; con mensaje</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <span className="text-slate-300"><code>git push</code> - subes a GitHub (opcional)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Practica el flujo</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🐧 Ubuntu/Linux (Bash)
                      </h4>
                      <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                        <div># Crear archivo Python</div>
                        <div>echo &apos;print(&quot;Hola mundo desde Git!&quot;)&apos; &gt; hola.py</div>
                        <div className="mt-2"># Ver cambios</div>
                        <div>git status</div>
                        <div>git diff  # Diferencias específicas</div>
                        <div className="mt-2"># Preparar y commitear</div>
                        <div>git add hola.py</div>
                        <div>git commit -m &quot;Añadir script hola mundo&quot;</div>
                      </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🪟 Windows (PowerShell)
                      </h4>
                      <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                        <div># Crear archivo Python</div>
                        <div>&apos;print(&quot;Hola mundo desde Git!&quot;)&apos; | Out-File hola.py</div>
                        <div className="mt-2"># Ver cambios</div>
                        <div>git status</div>
                        <div>git diff  # Diferencias específicas</div>
                        <div className="mt-2"># Preparar y commitear</div>
                        <div>git add hola.py</div>
                        <div>git commit -m &quot;Añadir script hola mundo&quot;</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Ver historial</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Historial básico</div>
                      <div>git log</div>
                      <div className="mt-2"># Historial compacto</div>
                      <div>git log --oneline</div>
                      <div className="mt-2"># Historial gráfico</div>
                      <div>git log --graph --oneline --all</div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Comandos de estado útiles:</strong><br/>
                  • <code>git status</code> - ¿qué está pasando?<br/>
                  • <code>git diff</code> - ¿qué cambió exactamente?<br/>
                  • <code>git log --oneline</code> - historial resumido
                </Callout>
              </div>
            </section>

            <section id="ramas">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🌲 Branches (ramas)
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">¿Por qué usar branches?</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Las ramas te permiten desarrollar features, experimentos o fixes sin tocar 
                      el código principal. Como tener &quot;universos paralelos&quot; de tu proyecto.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Casos de uso:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Desarrollar nueva feature</li>
                          <li>• Experimentar con algoritmos</li>
                          <li>• Arreglar bugs específicos</li>
                          <li>• Probar configuraciones</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Nombres típicos:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• <code>feature/navegacion-autonoma</code></li>
                          <li>• <code>fix/sensor-lidar</code></li>
                          <li>• <code>experiment/pid-tuning</code></li>
                          <li>• <code>hotfix/emergency-stop</code></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Comandos básicos de branches</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Ver branches existentes</div>
                      <div>git branch</div>
                      <div className="mt-2"># Crear nueva branch</div>
                      <div>git branch feature/nueva-funcionalidad</div>
                      <div className="mt-2"># Cambiar a la nueva branch</div>
                      <div>git checkout feature/nueva-funcionalidad</div>
                      <div className="mt-2"># O crear y cambiar en un comando</div>
                      <div>git checkout -b feature/otra-funcionalidad</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Merge (fusionar branches)</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Volver a main</div>
                      <div>git checkout main</div>
                      <div className="mt-2"># Fusionar la feature branch</div>
                      <div>git merge feature/nueva-funcionalidad</div>
                      <div className="mt-2"># Eliminar branch ya fusionada</div>
                      <div>git branch -d feature/nueva-funcionalidad</div>
                    </div>
                    <p className="text-slate-300 mt-3 text-sm">
                      <strong>Tip:</strong> Solo hacer merge cuando la feature esté completa y probada.
                    </p>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Flujo recomendado:</strong><br/>
                  1. Crear branch para cada feature/fix<br/>
                  2. Desarrollar y commitear en esa branch<br/>
                  3. Cambiar a main y hacer merge<br/>
                  4. Eliminar branch antigua
                </Callout>
              </div>
            </section>

            <section id="github-basico">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🐙 GitHub básico
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Crear repositorio en GitHub</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <ol className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">1</span>
                        <span>Ve a <a href="https://github.com" className="text-blue-400 hover:underline">github.com</a> y haz login</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">2</span>
                        <span>Click &quot;New repository&quot; (botón verde)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">3</span>
                        <span>Nombre: <code>mi-primer-repo</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">4</span>
                        <span>Descripción: &quot;Mi primer repositorio Git&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">5</span>
                        <span>Public (para que otros puedan verlo)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">6</span>
                        <span>NO marcar &quot;Initialize with README&quot; (ya tienes uno)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">7</span>
                        <span>Click &quot;Create repository&quot;</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Conectar repo local con GitHub</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Después de crear el repo, conecta con SSH (recomendado) o HTTPS:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                          ✅ SSH (Recomendado)
                        </h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Añadir remote origin (SSH)</div>
                          <div>git remote add origin git@github.com:TU_USUARIO/mi-primer-repo.git</div>
                          <div className="mt-2"># Renombrar branch principal</div>
                          <div>git branch -M main</div>
                          <div className="mt-2"># Primera subida</div>
                          <div>git push -u origin main</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                          ⚠️ HTTPS (Si no tienes SSH)
                        </h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-slate-400">
                          <div># Añadir remote origin (HTTPS)</div>
                          <div>git remote add origin https://github.com/TU_USUARIO/mi-primer-repo.git</div>
                          <div className="mt-2"># Necesitarás Personal Access Token</div>
                          <div>git push -u origin main</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Autenticación:</strong> GitHub ya no acepta passwords desde 2021. 
                  Necesitarás configurar SSH keys o Personal Access Tokens. 
                  Ver tutorial "GitHub Desktop + PR" para método visual más fácil.
                </Callout>
              </div>
            </section>

            <section id="push-pull-detallado">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔄 Push y Pull: Sincronización con GitHub
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Git Push - Subir cambios</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-4">
                      <strong>git push</strong> sube tus commits locales al repositorio remoto (GitHub). 
                      Es como &quot;publicar&quot; tus cambios para que otros los vean.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Comandos básicos de push</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Push básico (primera vez)</div>
                          <div>git push -u origin main</div>
                          <div className="mt-2"># Push después del primer setup</div>
                          <div>git push</div>
                          <div className="mt-2"># Push de una branch específica</div>
                          <div>git push origin nombre-branch</div>
                          <div className="mt-2"># Push forzado (cuidado!)</div>
                          <div>git push --force-with-lease</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-slate-200 mb-2">¿Qué hace -u origin main?</h5>
                          <ul className="space-y-1 text-slate-300 text-sm">
                            <li>• <code>-u</code>: establece tracking branch</li>
                            <li>• <code>origin</code>: nombre del remote</li>
                            <li>• <code>main</code>: nombre de la branch</li>
                            <li>• Solo necesario la primera vez</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-200 mb-2">Casos de error común</h5>
                          <ul className="space-y-1 text-slate-300 text-sm">
                            <li>• <strong>Rejected:</strong> hay cambios remotos</li>
                            <li>• <strong>Solution:</strong> hacer git pull primero</li>
                            <li>• <strong>Auth failed:</strong> configurar credenciales</li>
                            <li>• <strong>No upstream:</strong> usar -u la primera vez</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Git Pull - Descargar cambios</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-4">
                      <strong>git pull</strong> descarga y fusiona cambios del repositorio remoto. 
                      Combina <code>git fetch</code> + <code>git merge</code> en un solo comando.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Comandos básicos de pull</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Pull básico</div>
                          <div>git pull origin main</div>
                          <div className="mt-2"># Pull con tracking configurado</div>
                          <div>git pull</div>
                          <div className="mt-2"># Pull con rebase (lineal)</div>
                          <div>git pull --rebase</div>
                          <div className="mt-2"># Solo descargar, no fusionar</div>
                          <div>git fetch origin</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-slate-200 mb-2">Pull vs Fetch</h5>
                          <ul className="space-y-1 text-slate-300 text-sm">
                            <li>• <strong>git pull:</strong> descarga + fusiona</li>
                            <li>• <strong>git fetch:</strong> solo descarga</li>
                            <li>• <strong>Recomendado:</strong> fetch primero para revisar</li>
                            <li>• <strong>Luego:</strong> merge manual si es necesario</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-200 mb-2">Merge vs Rebase</h5>
                          <ul className="space-y-1 text-slate-300 text-sm">
                            <li>• <strong>Merge:</strong> mantiene historial branches</li>
                            <li>• <strong>Rebase:</strong> historial lineal y limpio</li>
                            <li>• <strong>Para equipos:</strong> generalmente merge</li>
                            <li>• <strong>Personal:</strong> rebase para limpieza</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Resolución de conflictos</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Los conflictos ocurren cuando Git no puede fusionar automáticamente los cambios. 
                      Esto es normal en colaboración.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Proceso de resolución</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># 1. Pull genera conflicto</div>
                          <div>git pull origin main</div>
                          <div className="text-red-400"># CONFLICT (content): Merge conflict in archivo.py</div>
                          <div className="mt-2"># 2. Ver archivos con conflicto</div>
                          <div>git status</div>
                          <div className="mt-2"># 3. Editar archivos manualmente</div>
                          <div>nano archivo.py  # o tu editor preferido</div>
                          <div className="mt-2"># 4. Marcar como resuelto</div>
                          <div>git add archivo.py</div>
                          <div className="mt-2"># 5. Completar merge</div>
                          <div>git commit -m &quot;Resolver conflicto en archivo.py&quot;</div>
                        </div>
                      </div>

                      <div className="bg-slate-700 p-3 rounded">
                        <h4 className="font-semibold text-slate-200 mb-2">Marcadores de conflicto</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                          <div className="text-green-400">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</div>
                          <div>Tu código local</div>
                          <div className="text-blue-400">=======</div>
                          <div>Código del remote</div>
                          <div className="text-red-400">&gt;&gt;&gt;&gt;&gt;&gt;&gt; commit-hash</div>
                        </div>
                        <p className="text-slate-300 text-sm mt-2">
                          Elimina los marcadores y mantén el código que quieres.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Flujo de trabajo recomendado</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <span className="text-slate-300"><strong>Antes de trabajar:</strong> <code>git pull</code> para tener lo último</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <span className="text-slate-300"><strong>Trabajar:</strong> editar, <code>git add</code>, <code>git commit</code></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <span className="text-slate-300"><strong>Antes de push:</strong> <code>git pull</code> por si hay cambios nuevos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                        <span className="text-slate-300"><strong>Subir:</strong> <code>git push</code> para compartir cambios</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Regla de oro:</strong> Siempre hacer <code>git pull</code> antes de <code>git push</code> 
                  para evitar conflictos y mantener sincronizado el repositorio.
                </Callout>

                <Callout type="tip">
                  <strong>Comandos de emergencia:</strong><br/>
                  • <code>git status</code> - ¿qué está pasando?<br/>
                  • <code>git log --oneline --graph</code> - ver historial visual<br/>
                  • <code>git reset --hard HEAD</code> - deshacer cambios locales (cuidado!)
                </Callout>
              </div>
            </section>

            <section id="ssh-ed25519">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔐 SSH ed25519 para Git
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">¿Por qué SSH ed25519?</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-4">
                      SSH ed25519 es el estándar moderno para autenticación segura con Git. 
                      Es más rápido, seguro y eficiente que RSA tradicional, y elimina la necesidad 
                      de Personal Access Tokens que expiran.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Ventajas de ed25519</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Más seguro que RSA 2048-bit</li>
                          <li>• Claves más pequeñas (32 bytes)</li>
                          <li>• Verificación más rápida</li>
                          <li>• Resistente a timing attacks</li>
                          <li>• Recomendado por GitHub</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">HTTPS vs SSH</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• <strong>HTTPS:</strong> tokens que expiran</li>
                          <li>• <strong>HTTPS:</strong> passwords no aceptados</li>
                          <li>• <strong>SSH:</strong> claves públicas/privadas</li>
                          <li>• <strong>SSH:</strong> no expira automáticamente</li>
                          <li>• <strong>SSH:</strong> más conveniente para desarrollo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Generar clave SSH ed25519</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">1. Generar la clave</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                              🐧 Ubuntu/Linux
                            </h5>
                            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                              <div># Genera clave ed25519</div>
                              <div>ssh-keygen -t ed25519 -C &quot;tu-email@ejemplo.com&quot;</div>
                              <div className="mt-2"># Presiona Enter para ubicación por defecto</div>
                              <div># Passphrase opcional pero recomendada</div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                              🪟 Windows
                            </h5>
                            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                              <div># En PowerShell o Git Bash</div>
                              <div>ssh-keygen -t ed25519 -C &quot;tu-email@ejemplo.com&quot;</div>
                              <div className="mt-2"># Presiona Enter para ubicación por defecto</div>
                              <div># Passphrase opcional pero recomendada</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">2. Iniciar SSH agent</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                              🐧 Ubuntu/Linux
                            </h5>
                            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                              <div># Iniciar SSH agent</div>
                              <div>eval "$(ssh-agent -s)"</div>
                              <div className="mt-2"># Añadir clave al agent</div>
                              <div>ssh-add ~/.ssh/id_ed25519</div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                              🪟 Windows
                            </h5>
                            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                              <div># En PowerShell</div>
                              <div>Start-Service ssh-agent</div>
                              <div>ssh-add $env:USERPROFILE\.ssh\id_ed25519</div>
                              <div className="mt-2"># O en Git Bash</div>
                              <div>eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">3. Obtener clave pública</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                              🐧 Ubuntu/Linux
                            </h5>
                            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                              <div># Mostrar clave pública</div>
                              <div>cat ~/.ssh/id_ed25519.pub</div>
                              <div className="mt-2"># Copiar al clipboard</div>
                              <div>cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard</div>
                            </div>
                            <p className="text-slate-300 text-sm mt-2">
                              Si no tienes xclip: <code>sudo apt install xclip</code>
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                              🪟 Windows
                            </h5>
                            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                              <div># Mostrar clave pública</div>
                              <div>Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub</div>
                              <div className="mt-2"># Copiar al clipboard</div>
                              <div>Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | clip</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configurar en GitHub</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <span className="text-slate-300">Ve a GitHub → Settings → SSH and GPG keys</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <span className="text-slate-300">Click &quot;New SSH key&quot;</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <span className="text-slate-300">Title: &quot;Ubuntu - TARS Robotics&quot; o &quot;Windows - Mi PC&quot;</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                        <span className="text-slate-300">Key type: &quot;Authentication Key&quot;</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                        <span className="text-slate-300">Pega la clave pública completa (empieza con ssh-ed25519)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">6</div>
                        <span className="text-slate-300">Click &quot;Add SSH key&quot;</span>
                      </div>
                    </div>

                    <div className="mt-4 bg-slate-700 p-3 rounded">
                      <h4 className="font-semibold text-slate-200 mb-2">Verificar conexión</h4>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        <div># Probar conexión SSH a GitHub</div>
                        <div>ssh -T git@github.com</div>
                        <div className="mt-2 text-slate-400"># Debería responder:</div>
                        <div className="text-slate-400"># Hi usuario! You&apos;ve successfully authenticated...</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Clonar y trabajar con SSH</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">URLs SSH vs HTTPS</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-slate-300 mb-2">❌ HTTPS (evitar)</h5>
                            <div className="bg-slate-900 p-2 rounded font-mono text-xs text-slate-400">
                              <div>https://github.com/usuario/repo.git</div>
                            </div>
                            <p className="text-slate-300 text-xs mt-1">Requiere tokens, passwords, expira</p>
                          </div>
                          <div>
                            <h5 className="text-slate-300 mb-2">✅ SSH (usar siempre)</h5>
                            <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                              <div>git@github.com:usuario/repo.git</div>
                            </div>
                            <p className="text-slate-300 text-xs mt-1">Seguro, conveniente, no expira</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Comandos esenciales con SSH</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Clonar repositorio con SSH</div>
                          <div>git clone git@github.com:usuario/mi-proyecto.git</div>
                          <div className="mt-2"># Clonar en directorio específico</div>
                          <div>git clone git@github.com:usuario/mi-proyecto.git ~/ros2_ws/src/mi-proyecto</div>
                          <div className="mt-2"># Clonar branch específica</div>
                          <div>git clone -b develop git@github.com:usuario/mi-proyecto.git</div>
                          <div className="mt-2"># Trabajar normalmente</div>
                          <div>git add .</div>
                          <div>git commit -m &quot;Mi cambio&quot;</div>
                          <div>git push origin main</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Cambiar repo existente a SSH</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Ver remote actual</div>
                          <div>git remote -v</div>
                          <div className="mt-2"># Cambiar de HTTPS a SSH</div>
                          <div>git remote set-url origin git@github.com:usuario/repo.git</div>
                          <div className="mt-2"># Verificar cambio</div>
                          <div>git remote -v</div>
                          <div className="mt-2"># Ahora push funciona sin tokens</div>
                          <div>git push origin main</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configuración avanzada</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Archivo ~/.ssh/config</h4>
                        <p className="text-slate-300 text-sm mb-3">
                          Para configuraciones específicas:
                        </p>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Crear/editar archivo config</div>
                          <div>nano ~/.ssh/config</div>
                          <div className="mt-2"># Contenido:</div>
                          <div>Host github.com</div>
                          <div>    HostName github.com</div>
                          <div>    User git</div>
                          <div>    IdentityFile ~/.ssh/id_ed25519</div>
                          <div>    IdentitiesOnly yes</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2">Auto-start SSH agent</h4>
                        <p className="text-slate-300 text-sm mb-3">
                          Añadir a ~/.bashrc (Ubuntu) o perfil (Windows):
                        </p>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                          <div># Ubuntu: ~/.bashrc</div>
                          <div>if [ -z &quot;$SSH_AUTH_SOCK&quot; ]; then</div>
                          <div>    eval $(ssh-agent -s)</div>
                          <div>    ssh-add ~/.ssh/id_ed25519</div>
                          <div>fi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Seguridad SSH:</strong><br/>
                  • Nunca compartas tu clave privada (~/.ssh/id_ed25519)<br/>
                  • Solo comparte la clave pública (.pub)<br/>
                  • Usa passphrase para mayor seguridad<br/>
                  • Si comprometes la clave, genera una nueva inmediatamente
                </Callout>

                <Callout type="tip">
                  <strong>Recomendación:</strong> Configura SSH una vez y olvídate de Personal Access Tokens, 
                  passwords y fechas de expiración. Tu flujo de Git será mucho más fluido.
                </Callout>
              </div>
            </section>

            <section id="colaboracion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                👥 Colaboración básica
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Fork y Clone</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Fork (en GitHub)</h5>
                        <p className="text-slate-300 text-sm mb-2">
                          Crea una copia del proyecto de alguien más en tu cuenta GitHub.
                        </p>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Ve al repo que te interesa</li>
                          <li>• Click &quot;Fork&quot; (esquina superior derecha)</li>
                          <li>• Ahora tienes tu propia copia</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Clone (a tu PC)</h5>
                        <p className="text-slate-300 text-sm mb-2">
                          Descarga una copia local para trabajar (usa SSH).
                        </p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                          <div>git clone git@github.com:</div>
                          <div>TU_USUARIO/proyecto.git</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Contribuir a proyectos</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <ol className="space-y-2 text-slate-300 text-sm">
                      <li><strong>1. Fork</strong> el proyecto en GitHub</li>
                      <li><strong>2. Clone</strong> tu fork a tu PC</li>
                      <li><strong>3. Crear branch</strong> para tu contribución</li>
                      <li><strong>4. Hacer cambios</strong> y commits</li>
                      <li><strong>5. Push</strong> tu branch a tu fork</li>
                      <li><strong>6. Crear Pull Request</strong> desde GitHub</li>
                      <li><strong>7. Esperar review</strong> del maintainer</li>
                    </ol>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Issues y Discussions</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Issues</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Reportar bugs</li>
                          <li>• Solicitar features</li>
                          <li>• Hacer preguntas técnicas</li>
                          <li>• Documentar tareas pendientes</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Discussions</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Conversaciones generales</li>
                          <li>• Compartir ideas</li>
                          <li>• Q&A comunidad</li>
                          <li>• Anuncios del proyecto</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="comandos-esenciales">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📝 Comandos esenciales
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Setup y configuración</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git init</div>
                      <div>git config --global user.name &quot;Nombre&quot;</div>
                      <div>git config --global user.email &quot;email&quot;</div>
                      <div>git clone URL</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Flujo básico</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git status</div>
                      <div>git add archivo.py</div>
                      <div>git add .  # todos los archivos</div>
                      <div>git commit -m &quot;mensaje&quot;</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Branches</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git branch</div>
                      <div>git branch nombre-branch</div>
                      <div>git checkout nombre-branch</div>
                      <div>git checkout -b nueva-branch</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Remote/GitHub (SSH)</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git clone git@github.com:user/repo.git</div>
                      <div>git remote add origin git@github.com:user/repo.git</div>
                      <div>git push -u origin main  # primera vez</div>
                      <div>git push  # después del setup</div>
                      <div>git pull  # descargar + fusionar</div>
                      <div>git fetch  # solo descargar</div>
                      <div>git remote -v  # ver remotes</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Información y historial</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git log --oneline</div>
                      <div>git diff</div>
                      <div>git show commit-hash</div>
                      <div>git blame archivo.py</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-yellow-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Emergencia/Deshacer</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git reset HEAD archivo.py</div>
                      <div>git checkout -- archivo.py</div>
                      <div>git reset --hard HEAD~1</div>
                      <div>git revert commit-hash</div>
                    </div>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Comandos destructivos:</strong> Ten cuidado con <code>git reset --hard</code> 
                  y <code>git checkout --</code> - pueden eliminar cambios permanentemente.
                </Callout>
              </div>
            </section>

            <section id="validacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ✅ Validación final
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Verifica que dominas los conceptos básicos:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Crear repositorio local con git init',
                    'Hacer commits con mensajes descriptivos',
                    'Crear y cambiar entre branches',
                    'Conectar repo local con GitHub',
                    'Hacer push y pull correctamente',
                    'Entender el flujo fork → clone → PR'
                  ].map((item, index) => (
                    <div key={index} className="card">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-2">Proyecto práctico</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Crea un repositorio con estas características:
                  </p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• README.md con descripción del proyecto</li>
                    <li>• Script Python simple (ej: calculadora)</li>
                    <li>• Al menos 3 commits con mensajes claros</li>
                    <li>• Una branch feature que luego fusiones</li>
                    <li>• Subido a GitHub y visible públicamente</li>
                  </ul>
                </div>

                <Callout type="check">
                  <strong>¡Excelente!</strong> Ahora tienes las bases de Git y GitHub. 
                  Practica constantemente - estos comandos se vuelven naturales con el uso diario.
                </Callout>
              </div>
            </section>

            <section id="recursos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔗 Recursos y referencias
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">Documentación oficial</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <a href="https://git-scm.com/doc" className="text-blue-400 hover:underline">Git Documentation</a></li>
                    <li>• <a href="https://docs.github.com/" className="text-blue-400 hover:underline">GitHub Docs</a></li>
                    <li>• <a href="https://learngitbranching.js.org/" className="text-blue-400 hover:underline">Interactive Git Tutorial</a></li>
                  </ul>
                </div>
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">Herramientas visuales</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <strong>GitHub Desktop:</strong> interfaz gráfica</li>
                    <li>• <strong>VS Code:</strong> integración Git nativa</li>
                    <li>• <strong>gitk:</strong> visualizador de historial</li>
                    <li>• <strong>tig:</strong> interfaz terminal mejorada</li>
                  </ul>
                </div>
              </div>
            </section>

            <TutorialNavigation 
              previous={{ title: "Terminal Básica", href: "/tutoriales/terminal-basica" }}
              next={{ title: "Issues y PRs", href: "/tutoriales/issues-y-prs" }}
            />
            </div>
          </main>

          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}