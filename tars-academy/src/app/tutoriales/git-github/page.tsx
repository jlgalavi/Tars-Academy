import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";

export default function GitGitHub() {
  const tocItems = [
    { id: "introduccion", title: "¿Por qué Git?", level: 2 },
    { id: "prerequisitos", title: "Prerequisitos", level: 2 },
    { id: "conceptos", title: "Conceptos fundamentales", level: 2 },
    { id: "instalacion", title: "Instalación y configuración", level: 2 },
    { id: "primer-repositorio", title: "Primer repositorio", level: 2 },
    { id: "flujo-basico", title: "Flujo básico Git", level: 2 },
    { id: "ramas", title: "Branches (ramas)", level: 2 },
    { id: "github-basico", title: "GitHub básico", level: 2 },
    { id: "colaboracion", title: "Colaboración básica", level: 2 },
    { id: "comandos-esenciales", title: "Comandos esenciales", level: 2 },
    { id: "validacion", title: "Validación final", level: 2 },
    { id: "recursos", title: "Recursos", level: 2 }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto max-w-7xl px-6 py-8">
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
                <button className="btn-primary">
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary">
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
                  <strong>Analogía:</strong> Git es como un "checkpoint system" en videojuegos - 
                  puedes experimentar y siempre volver a un punto conocido que funciona.
                </Callout>
              </div>
            </section>

            <section id="prerequisitos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📋 Prerequisitos
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
                      Como una "cápsula del tiempo" de tu código.
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Commit</h4>
                    <p className="text-slate-300 text-sm">
                      Una "fotografía" de tu código en un momento específico. Incluye 
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
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Ubuntu/Debian</div>
                      <div>sudo apt update</div>
                      <div>sudo apt install git -y</div>
                      <div className="mt-2"># Verificar instalación</div>
                      <div>git --version</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configuración inicial</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Configura tu identidad (úsala en TODOS tus repos):</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Tu nombre real</div>
                      <div>git config --global user.name "Tu Nombre"</div>
                      <div className="mt-2"># Email de GitHub</div>
                      <div>git config --global user.email "tu@email.com"</div>
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
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Crear carpeta del proyecto</div>
                      <div>mkdir mi_primer_repo</div>
                      <div>cd mi_primer_repo</div>
                      <div className="mt-2"># Inicializar Git</div>
                      <div>git init</div>
                      <div className="mt-2"># Verificar estado</div>
                      <div>git status</div>
                    </div>
                    <p className="text-slate-300 mt-3 text-sm">
                      <strong>git init</strong> crea una carpeta oculta <code>.git</code> donde se guarda todo el historial.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Crear primer archivo</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Crear archivo README</div>
                      <div>echo "# Mi Primer Proyecto" &gt; README.md</div>
                      <div>echo "Este es mi primer repositorio Git" &gt;&gt; README.md</div>
                      <div className="mt-2"># Ver estado</div>
                      <div>git status</div>
                    </div>
                    <div className="mt-3 bg-slate-700 p-2 rounded text-sm text-slate-300">
                      <strong>Resultado esperado:</strong> Git detecta un archivo "untracked" (sin seguimiento)
                    </div>
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
                      <div>git commit -m "Añadir README inicial"</div>
                    </div>
                    <p className="text-slate-300 mt-3 text-sm">
                      <strong>¡Felicitaciones!</strong> Has creado tu primer commit. Es una "fotografía" 
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
                      <span className="text-slate-300"><code>git commit</code> - guardas "fotografía" con mensaje</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <span className="text-slate-300"><code>git push</code> - subes a GitHub (opcional)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Practica el flujo</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Crear archivo Python</div>
                      <div>echo 'print("Hola mundo desde Git!")' &gt; hola.py</div>
                      <div className="mt-2"># Ver cambios</div>
                      <div>git status</div>
                      <div>git diff  # Muestra diferencias específicas</div>
                      <div className="mt-2"># Preparar y commitear</div>
                      <div>git add hola.py</div>
                      <div>git commit -m "Añadir script hola mundo"</div>
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
                      el código principal. Como tener "universos paralelos" de tu proyecto.
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
                        <span>Click "New repository" (botón verde)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">3</span>
                        <span>Nombre: <code>mi-primer-repo</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">4</span>
                        <span>Descripción: "Mi primer repositorio Git"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">5</span>
                        <span>Public (para que otros puedan verlo)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">6</span>
                        <span>NO marcar "Initialize with README" (ya tienes uno)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">7</span>
                        <span>Click "Create repository"</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Conectar repo local con GitHub</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">GitHub te mostrará estos comandos después de crear el repo:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Añadir remote origin</div>
                      <div>git remote add origin https://github.com/TU_USUARIO/mi-primer-repo.git</div>
                      <div className="mt-2"># Renombrar branch principal (si es necesario)</div>
                      <div>git branch -M main</div>
                      <div className="mt-2"># Primera subida</div>
                      <div>git push -u origin main</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Flujo push/pull</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Subir cambios locales a GitHub</div>
                      <div>git push origin main</div>
                      <div className="mt-2"># Descargar cambios de GitHub</div>
                      <div>git pull origin main</div>
                      <div className="mt-2"># Ver remotes configurados</div>
                      <div>git remote -v</div>
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
                          <li>• Click "Fork" (esquina superior derecha)</li>
                          <li>• Ahora tienes tu propia copia</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Clone (a tu PC)</h5>
                        <p className="text-slate-300 text-sm mb-2">
                          Descarga una copia local para trabajar.
                        </p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                          <div>git clone https://github.com/</div>
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
                      <div>git config --global user.name "Nombre"</div>
                      <div>git config --global user.email "email"</div>
                      <div>git clone URL</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Flujo básico</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git status</div>
                      <div>git add archivo.py</div>
                      <div>git add .  # todos los archivos</div>
                      <div>git commit -m "mensaje"</div>
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
                    <h4 className="font-semibold text-slate-200 mb-3">Remote/GitHub</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>git remote add origin URL</div>
                      <div>git push origin main</div>
                      <div>git pull origin main</div>
                      <div>git remote -v</div>
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
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  );
}