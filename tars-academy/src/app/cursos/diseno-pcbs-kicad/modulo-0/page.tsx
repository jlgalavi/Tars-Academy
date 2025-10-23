/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';
import SpaceParticles from '@/components/SpaceParticles';
import VideoResource from '@/components/tutorial/VideoResource';
import DiagramBox from '@/components/tutorial/DiagramBox';

const tocItems = [
  { id: 'introduccion', title: '📋 Introducción', level: 2 },
  { id: 'objetivos', title: '🎯 Objetivos del módulo', level: 2 },
  { id: 'descargar-kicad', title: '📥 Paso 1: Descargar KiCad', level: 2 },
  { id: 'instalar-kicad', title: '🔧 Paso 2: Instalar KiCad', level: 2 },
  { id: 'configurar-proyecto', title: '⚙️ Paso 3: Configurar tu proyecto', level: 2 },
  { id: 'explorar-interfaz', title: '🖥️ Paso 4: Explorar la interfaz', level: 2 },
  { id: 'proyecto-ejemplo', title: '📂 Paso 5: Proyecto de ejemplo', level: 2 },
  { id: 'entrega', title: '📤 Entrega del módulo', level: 2 },
  { id: 'recursos', title: '🔗 Recursos adicionales', level: 2 },
];

export default function Modulo0() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SpaceParticles mode="tutorial" intensity={0.5} showLines={false} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Contenido principal */}
          <div className="flex-1 max-w-4xl">
            {/* Cabecera */}
            <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Programas Intensivos', href: '/#programas-intensivos' },
                  { label: 'Diseño de PCBs con KiCad', href: '/cursos/diseno-pcbs-kicad' },
                  { label: 'Módulo 0' }
                ]}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                <TutorialChip label="Módulo 0" variant="status" icon="🛠️" />
                <TutorialChip label="Preparatorio" variant="level" icon="📅" />
                <TutorialChip label="2-3 días" variant="time" icon="⏱️" />
              </div>
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Módulo 0: Instalación y entorno
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Prepara tu entorno de trabajo instalando KiCad 8, configurando tu primer proyecto y familiarizándote 
                con la interfaz del software.
              </p>
            </div>

            {/* Contenido */}
            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📋 Introducción</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Antes de diseñar tu primera PCB, necesitas preparar tu entorno de trabajo. Este módulo preparatorio 
                    te guiará a través de la <strong>instalación de KiCad 8</strong>, la <strong>configuración de un proyecto</strong> 
                    y la <strong>exploración de la interfaz</strong>.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Aunque este módulo es breve (2-3 días), es fundamental para familiarizarte con las herramientas antes 
                    de comenzar con el diseño real en los siguientes módulos.
                  </p>
                </div>
              </section>

              <section id="objetivos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🎯 Objetivos del módulo</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">Al completar este módulo, serás capaz de:</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Descargar e instalar KiCad 8 en tu sistema operativo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Crear y configurar un nuevo proyecto de KiCad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Navegar entre los diferentes editores (esquema, PCB, visor 3D)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Reconocer los archivos principales del proyecto (.kicad_pro, .kicad_sch, .kicad_pcb)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Explorar proyectos de ejemplo incluidos en KiCad</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="descargar-kicad">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📥 Paso 1: Descargar KiCad</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    KiCad es gratuito y multiplataforma. Está disponible para Windows, macOS y Linux.
                  </p>
                  
                  <Callout type="info">
                    <strong>Versión recomendada:</strong> Descarga la última versión estable de <strong>KiCad 8.x</strong>. 
                    Evita las versiones nightly (desarrollo) a menos que sepas lo que haces.
                  </Callout>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Instrucciones de descarga</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <div>
                          Visita la página oficial de descargas: 
                          <a href="https://www.kicad.org/download/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                            kicad.org/download
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                        <div>
                          Selecciona tu sistema operativo (Windows, macOS o Linux)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                        <div>
                          Descarga el instalador correspondiente a tu arquitectura (64-bit recomendado)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                        <div>
                          Espera a que se complete la descarga (el archivo puede pesar entre 500 MB y 1 GB)
                        </div>
                      </li>
                    </ol>
                  </div>

                  <Callout type="tip">
                    <strong>Para usuarios de Linux:</strong> Muchas distribuciones ofrecen KiCad en sus repositorios oficiales, 
                    pero pueden estar desactualizados. Usa el PPA oficial o Flatpak para obtener la última versión.
                  </Callout>
                </div>
              </section>

              <section id="instalar-kicad">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🔧 Paso 2: Instalar KiCad</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Una vez descargado el instalador, procede con la instalación según tu sistema operativo:
                  </p>

                  {/* Windows */}
                  <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-5">
                    <h4 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                      <span>🪟</span> Windows
                    </h4>
                    <ol className="space-y-2 text-slate-300 text-sm">
                      <li>1. Ejecuta el instalador <code className="text-blue-300">.exe</code></li>
                      <li>2. Acepta el acuerdo de licencia (GPL)</li>
                      <li>3. Selecciona la ruta de instalación (por defecto: <code className="text-blue-300">C:\Program Files\KiCad\</code>)</li>
                      <li>4. Asegúrate de instalar las librerías de símbolos y footprints (marcadas por defecto)</li>
                      <li>5. Completa la instalación y lanza KiCad desde el menú de inicio</li>
                    </ol>
                  </div>

                  {/* macOS */}
                  <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-5">
                    <h4 className="text-purple-300 font-semibold mb-3 flex items-center gap-2">
                      <span>🍎</span> macOS
                    </h4>
                    <ol className="space-y-2 text-slate-300 text-sm">
                      <li>1. Abre el archivo <code className="text-purple-300">.dmg</code> descargado</li>
                      <li>2. Arrastra el icono de KiCad a la carpeta Aplicaciones</li>
                      <li>3. Si aparece una advertencia de seguridad, ve a Preferencias del Sistema → Seguridad y privacidad</li>
                      <li>4. Haz clic en "Abrir de todos modos"</li>
                      <li>5. Lanza KiCad desde Aplicaciones</li>
                    </ol>
                  </div>

                  {/* Linux */}
                  <div className="bg-slate-800/50 border border-orange-500/30 rounded-lg p-5">
                    <h4 className="text-orange-300 font-semibold mb-3 flex items-center gap-2">
                      <span>🐧</span> Linux
                    </h4>
                    <p className="text-slate-300 text-sm mb-2">Opción recomendada (PPA para Ubuntu/Debian):</p>
                    <pre className="bg-slate-900 text-green-300 p-3 rounded text-sm overflow-x-auto">
{`sudo add-apt-repository ppa:kicad/kicad-8.0-releases
sudo apt update
sudo apt install kicad`}
                    </pre>
                    <p className="text-slate-300 text-sm mt-2">O instala desde Flatpak:</p>
                    <pre className="bg-slate-900 text-green-300 p-3 rounded text-sm overflow-x-auto">
{`flatpak install flathub org.kicad.KiCad`}
                    </pre>
                  </div>

                  <Callout type="check">
                    <strong>Verifica la instalación:</strong> Abre KiCad y verifica que la versión sea 8.x. Debería aparecer 
                    en la pantalla de bienvenida o en Ayuda → Acerca de KiCad.
                  </Callout>
                </div>
              </section>

              <section id="configurar-proyecto">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">⚙️ Paso 3: Configurar tu proyecto</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    KiCad organiza el trabajo en <strong>proyectos</strong>. Cada proyecto contiene esquemas, PCBs, 
                    librerías y configuraciones.
                  </p>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Crear un nuevo proyecto</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <div>
                          Abre KiCad y haz clic en <strong>File → New Project</strong> (o Ctrl+N / Cmd+N)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                        <div>
                          Elige una carpeta donde guardar tu proyecto (recomendado: crear una carpeta específica para KiCad)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                        <div>
                          Dale un nombre al proyecto, por ejemplo: <code className="text-purple-300">mi-primer-proyecto</code>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                        <div>
                          KiCad creará automáticamente los siguientes archivos:
                          <ul className="mt-2 space-y-1 text-sm">
                            <li><code className="text-purple-300">.kicad_pro</code> - Archivo de configuración del proyecto</li>
                            <li><code className="text-purple-300">.kicad_sch</code> - Archivo del esquema eléctrico</li>
                            <li><code className="text-purple-300">.kicad_pcb</code> - Archivo del diseño de la PCB</li>
                          </ul>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <Callout type="info">
                    <strong>Primera vez:</strong> Si es la primera vez que abres KiCad, puede aparecer un diálogo para 
                    configurar las tablas de librerías. Acepta las opciones por defecto para continuar.
                  </Callout>
                </div>
              </section>

              <section id="explorar-interfaz">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🖥️ Paso 4: Explorar la interfaz</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    KiCad está compuesto por varios editores especializados. Es importante conocerlos:
                  </p>

                  <DiagramBox title="🗺️ Estructura de KiCad: Flujo de trabajo" variant="schematic">
                    <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-center mb-4">
                        <div className="inline-block bg-blue-600/20 border border-blue-500/50 rounded-lg px-4 py-2 text-blue-300">
                          📁 Gestor de Proyectos
                        </div>
                      </div>
                      
                      <div className="flex justify-center gap-4 mb-4">
                        <div className="text-slate-400">↓</div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-purple-600/20 border border-purple-500/50 rounded-lg p-3">
                          <div className="text-purple-300 font-semibold mb-1">📐 Esquemas</div>
                          <div className="text-xs text-slate-400">.kicad_sch</div>
                        </div>
                        <div className="bg-green-600/20 border border-green-500/50 rounded-lg p-3">
                          <div className="text-green-300 font-semibold mb-1">🖥️ PCB</div>
                          <div className="text-xs text-slate-400">.kicad_pcb</div>
                        </div>
                        <div className="bg-orange-600/20 border border-orange-500/50 rounded-lg p-3">
                          <div className="text-orange-300 font-semibold mb-1">🎨 Visor 3D</div>
                          <div className="text-xs text-slate-400">Visualización</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center gap-4 my-4">
                        <div className="text-slate-400">↓</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="inline-block bg-yellow-600/20 border border-yellow-500/50 rounded-lg px-4 py-2 text-yellow-300">
                          📦 Archivos Gerber (fabricación)
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mt-4">
                      Este diagrama muestra el flujo típico: empiezas en el gestor de proyectos, diseñas el esquema, 
                      luego la PCB, verificas en 3D y finalmente generas los Gerbers para fabricación.
                    </p>
                  </DiagramBox>

                  <div className="space-y-4">
                    {/* Gestor de proyectos */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-5">
                      <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-2xl">📁</span> Gestor de Proyectos (Project Manager)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Ventana principal donde se organizan todos los archivos del proyecto. Desde aquí puedes abrir 
                        los diferentes editores haciendo clic en sus iconos.
                      </p>
                    </div>

                    {/* Editor de esquemas */}
                    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-5">
                      <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-2xl">📐</span> Editor de Esquemas (Schematic Editor)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Donde dibujas el circuito eléctrico usando símbolos de componentes y cables. Este es el punto de 
                        partida de cualquier diseño de PCB.
                      </p>
                    </div>

                    {/* Editor de PCB */}
                    <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-5">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-2xl">🖥️</span> Editor de PCB (PCB Editor)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Donde colocas los componentes físicos (footprints) y trazas las pistas de cobre. Es la representación 
                        física de tu esquema eléctrico.
                      </p>
                    </div>

                    {/* Visor 3D */}
                    <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-5">
                      <h4 className="text-orange-300 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-2xl">🎨</span> Visor 3D (3D Viewer)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Visualización tridimensional de tu PCB con los modelos 3D de los componentes. Útil para verificar 
                        colisiones y presentaciones.
                      </p>
                    </div>
                  </div>

                  <Callout type="tip">
                    <strong>Ejercicio rápido:</strong> Abre cada editor desde el gestor de proyectos para familiarizarte 
                    con su interfaz. No te preocupes si están vacíos, los llenaremos en los próximos módulos.
                  </Callout>
                </div>
              </section>

              <section id="proyecto-ejemplo">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📂 Paso 5: Proyecto de ejemplo</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    KiCad incluye varios proyectos de ejemplo que puedes explorar para ver cómo se ven diseños completos.
                  </p>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Abrir un proyecto de ejemplo</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-orange-500/20 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <div>
                          En el gestor de proyectos, ve a <strong>File → Open Project</strong>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-orange-500/20 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                        <div>
                          Navega a la carpeta de ejemplos de KiCad (ubicación típica):
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>Windows: <code className="text-orange-300">C:\Program Files\KiCad\share\kicad\demos\</code></li>
                            <li>macOS: <code className="text-orange-300">/Applications/KiCad/KiCad.app/Contents/SharedSupport/demos/</code></li>
                            <li>Linux: <code className="text-orange-300">/usr/share/kicad/demos/</code></li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-orange-500/20 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                        <div>
                          Abre uno de los proyectos, por ejemplo <code className="text-orange-300">pic_programmer</code> o <code className="text-orange-300">video</code>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-orange-500/20 text-orange-300 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                        <div>
                          Abre el esquema, luego la PCB y finalmente el visor 3D para ver el diseño completo
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-5">
                    <h4 className="text-purple-300 font-semibold mb-3">🔍 Qué observar en los ejemplos</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Cómo están organizados los componentes en el esquema</li>
                      <li>• La disposición física de los componentes en la PCB</li>
                      <li>• Las diferentes capas de cobre (Top, Bottom)</li>
                      <li>• La serigrafía (texto y referencias en la placa)</li>
                      <li>• Los modelos 3D de los componentes en el visor 3D</li>
                    </ul>
                  </div>

                  <Callout type="warning">
                    <strong>No modifiques los ejemplos:</strong> Si quieres experimentar, haz una copia del proyecto 
                    de ejemplo en otra carpeta antes de realizar cambios.
                  </Callout>
                </div>
              </section>

              <section id="entrega">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📤 Entrega del módulo</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Para completar este módulo preparatorio, deberás realizar lo siguiente:
                  </p>

                  <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-xl p-6">
                    <h4 className="text-yellow-300 font-semibold mb-4 flex items-center gap-2">
                      <span className="text-2xl">📋</span> Checklist de entrega
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">KiCad instalado:</strong> Verifica que KiCad 8.x esté instalado 
                          y funcional en tu sistema.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Proyecto creado:</strong> Crea un proyecto llamado 
                          <code className="text-yellow-300 mx-1">mi-primer-proyecto</code> y guárdalo en una carpeta organizada.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Exploraste la interfaz:</strong> Abriste cada editor 
                          (esquema, PCB, visor 3D) al menos una vez.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Proyecto de ejemplo:</strong> Abriste y exploraste al menos 
                          un proyecto de ejemplo incluido en KiCad.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Captura de pantalla:</strong> Realiza una captura o vídeo 
                          corto mostrando KiCad abierto con tu proyecto y explicando brevemente las partes principales de 
                          la interfaz.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Callout type="info">
                    <strong>Formato de entrega:</strong> Comparte tu captura de pantalla o vídeo en el canal del equipo. 
                    No es necesario crear ningún diseño aún, esto es solo para verificar que tienes el entorno configurado.
                  </Callout>
                </div>
              </section>

              <section id="recursos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🔗 Recursos adicionales</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-200 mb-3">📹 Videos recomendados</h3>
                  <div className="grid gap-4">
                    <VideoResource
                      title="Instalación de KiCad en Windows/Linux/Mac"
                      url="https://www.youtube.com/watch?v=tMs9MtY9kH4"
                      description="Guía completa para instalar KiCad en cualquier sistema operativo"
                      duration="12:30"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="KiCad 8 en macOS, Windows y Linux (comparativa y consejos de instalación)"
                      url="https://www.youtube.com/watch?v=Cw4o9JJJ-Wo"
                      description="Comparativa de instalación entre sistemas operativos y mejores prácticas"
                      duration="15:20"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Cómo descargar e instalar KiCad paso a paso (Windows)"
                      url="https://www.youtube.com/watch?v=FX3HR4ub0C4"
                      description="Tutorial detallado de instalación específico para Windows"
                      duration="10:45"
                      language="ES"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-200 mb-3 mt-6">📚 Documentación oficial</h3>
                  <div className="grid gap-4">
                    <a 
                      href="https://www.kicad.org/download/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📥</span>
                        <div>
                          <h4 className="text-blue-300 font-semibold mb-1">Descargas oficiales de KiCad</h4>
                          <p className="text-slate-400 text-sm">
                            Página oficial de descargas con instaladores para todos los sistemas operativos.
                          </p>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://docs.kicad.org/8.0/en/getting_started_in_kicad/getting_started_in_kicad.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📘</span>
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-1">Documentación oficial de KiCad</h4>
                          <p className="text-slate-400 text-sm">
                            Guía completa para comenzar con KiCad, desde la instalación hasta proyectos avanzados.
                          </p>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://forum.kicad.info/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-green-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💬</span>
                        <div>
                          <h4 className="text-green-300 font-semibold mb-1">Foro oficial de KiCad</h4>
                          <p className="text-slate-400 text-sm">
                            Comunidad activa donde resolver dudas y compartir proyectos.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

            </div>

            {/* Navegación */}
            <TutorialNavigation 
              previous={undefined}
              next={{
                title: 'Módulo 1: Fundamentos de circuitos y esquemas',
                href: '/cursos/diseno-pcbs-kicad/modulo-1'
              }}
            />
          </div>

          {/* Tabla de contenidos lateral */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
