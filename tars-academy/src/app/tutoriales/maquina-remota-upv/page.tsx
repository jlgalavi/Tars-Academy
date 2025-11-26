'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';
import SpaceParticles from '@/components/SpaceParticles';

const tocItems = [
  { id: 'introduccion', title: '🎯 Introducción', level: 2 },
  { id: 'acceso', title: '🔐 Acceso a la máquina virtual', level: 2 },
  { id: 'advertencia', title: '🔥 Advertencia: La imagen NO persiste', level: 2 },
  { id: 'normas', title: '❗ Normas obligatorias', level: 2 },
  { id: 'estructura', title: '📂 Estructura en /workspace', level: 2 },
  { id: 'persistencia', title: '💾 Mantener cambios persistentes', level: 2 },
  { id: 'consejos', title: '💡 Consejos de uso', level: 2 },
  { id: 'faq', title: '❓ Preguntas frecuentes', level: 2 },
];

export default function MaquinaRemotaUPV() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SpaceParticles mode="tutorial" intensity={0.5} showLines={false} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1 max-w-4xl">
            <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Tutoriales', href: '/' },
                  { label: 'Máquina Remota UPV' }
                ]}
              />
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                🖥️ Acceso y Uso de la Máquina Remota UPV
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Guía completa para acceder y trabajar correctamente en la máquina virtual remota 
                proporcionada por la UPV: 128GB RAM, 20 cores CPU, 2TB disco, 2x GPU NVIDIA.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="Infraestructura" variant="status" icon="🏢" />
                <TutorialChip label="15 min" variant="time" icon="⏱️" />
                <TutorialChip label="Crítico" variant="level" icon="⚠️" />
                <TutorialChip label="Actualizado 11/2024" variant="updated" icon="🔄" />
              </div>

              <Callout type="warning">
                <strong>⚠️ IMPORTANTE:</strong> Esta máquina es compartida por todo el equipo. 
                Seguir las normas es obligatorio para no romper el entorno de trabajo de los demás.
              </Callout>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button 
                  className="btn-primary"
                  onClick={() => document.getElementById('acceso')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🚀 Empezar ahora
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => document.getElementById('normas')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  📋 Ver normas obligatorias
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              
              {/* Introducción */}
              <section id="introduccion">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  🎯 Introducción
                </h2>
                
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">
                    ¿Qué es esta máquina virtual?
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Es un <strong>entorno unificado y potente</strong> proporcionado por la Universidad 
                    Politécnica de Valencia para que todo el equipo TARS Robotics pueda:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-space-400">✓</span>
                      <span>Trabajar con el <strong>mismo entorno</strong> sin problemas de dependencias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-space-400">✓</span>
                      <span>Evitar incompatibilidades entre diferentes equipos locales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-space-400">✓</span>
                      <span>Aprovechar hardware potente (GPUs NVIDIA, 128GB RAM, 20 cores)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-space-400">✓</span>
                      <span>Garantizar reproducibilidad en entrenamientos y simulaciones</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">
                    🎯 Objetivo de este tutorial
                  </h3>
                  <p className="text-slate-300">
                    Que <strong>todos podamos trabajar con el mismo entorno sin romper la imagen 
                    ni crear incompatibilidades.</strong> Seguir el flujo de trabajo correcto es 
                    esencial para mantener la estabilidad del sistema compartido.
                  </p>
                </div>

                <div className="mt-6 bg-slate-800/30 rounded-lg p-5 border border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-100 mb-3">
                    📊 Especificaciones técnicas
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-slate-300">
                    <div>
                      <span className="text-space-400 font-semibold">Memoria RAM:</span>
                      <span className="ml-2">128 GB</span>
                    </div>
                    <div>
                      <span className="text-space-400 font-semibold">CPU:</span>
                      <span className="ml-2">20 cores</span>
                    </div>
                    <div>
                      <span className="text-space-400 font-semibold">Disco:</span>
                      <span className="ml-2">2 TB</span>
                    </div>
                    <div>
                      <span className="text-space-400 font-semibold">GPUs:</span>
                      <span className="ml-2">2x NVIDIA</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acceso */}
              <section id="acceso">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  🔐 Acceso a la Máquina Virtual (Paso a Paso)
                </h2>

                <Callout type="info">
                  <strong>Requisito previo:</strong> Debes estar conectado a la red de la UPV 
                  o tener la VPN de la universidad activada.
                </Callout>

                <div className="space-y-6 mt-6">
                  
                  {/* Paso 1 */}
                  <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-space-500/20 flex items-center justify-center text-space-300 font-bold">
                        1
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        Conectarte a la red UPV o activar la VPN
                      </h3>
                    </div>
                    <p className="text-slate-300">
                      La máquina solo es accesible desde dentro de la red de la universidad. 
                      Si estás fuera del campus, necesitas conectarte a la VPN de la UPV.
                    </p>
                    <div className="mt-4">
                      <Callout type="tip">
                        Si no tienes configurada la VPN, consulta la 
                        <a href="https://www.upv.es/entidades/ASIC/catalogo/463405normalc.html" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-space-300 hover:text-space-200 underline ml-1">
                          guía oficial de la UPV
                        </a>
                      </Callout>
                    </div>
                  </div>

                  {/* Paso 2 - SOLICITAR CREDENCIALES */}
                  <div className="bg-orange-900/20 rounded-xl border border-orange-700/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-300 font-bold">
                        2
                      </div>
                      <h3 className="text-xl font-semibold text-orange-300">
                        Solicitar credenciales de acceso
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Para proteger la seguridad del servidor, las credenciales de acceso <strong>no están públicas</strong>.
                    </p>
                    
                    <div className="bg-slate-900/50 rounded-lg p-5 border border-orange-700/30">
                      <p className="text-orange-200 font-semibold mb-3">
                        📧 Debes solicitar por privado a José Luis:
                      </p>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400">•</span>
                          <span><strong>URL de acceso VNC</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400">•</span>
                          <span><strong>Contraseña del VNC</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400">•</span>
                          <span><strong>Usuario y contraseña del sistema Linux</strong></span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 pt-4 border-t border-orange-700/30">
                        <p className="text-slate-400 text-sm">
                          Contacta con José Luis por Discord, Teams o correo electrónico del equipo.
                        </p>
                      </div>
                    </div>

                    <Callout type="warning">
                      <strong>🔒 No compartas las credenciales públicamente.</strong> 
                      Estas son solo para miembros activos del equipo TARS.
                    </Callout>
                  </div>

                  {/* Paso 3 */}
                  <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-space-500/20 flex items-center justify-center text-space-300 font-bold">
                        3
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        Abrir la URL de acceso en tu navegador
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-3">
                      Una vez tengas la URL, ábrela desde tu navegador web (Chrome, Firefox, Edge, etc.).
                    </p>
                    <p className="text-slate-400 text-sm">
                      La URL será algo como: <code className="text-space-300">http://[dirección-ip]:[puerto]/vnc.html</code>
                    </p>
                  </div>

                  {/* Paso 4 */}
                  <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-space-500/20 flex items-center justify-center text-space-300 font-bold">
                        4
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        Conectar al VNC
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-3">
                      Una vez cargada la página, verás la interfaz de noVNC. Pulsa el botón <strong>Conectar</strong> 
                      e introduce la contraseña del VNC que te proporcionó José Luis.
                    </p>
                  </div>

                  {/* Paso 5 */}
                  <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-space-500/20 flex items-center justify-center text-space-300 font-bold">
                        5
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        Iniciar sesión en el sistema Linux
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Una vez dentro del escritorio remoto, utiliza las credenciales del usuario Linux 
                      que te proporcionó José Luis para autenticarte en el sistema.
                    </p>
                    <div className="bg-slate-900 rounded-lg p-5 border border-slate-700">
                      <p className="text-green-400 font-semibold mb-2">
                        ✓ El usuario tiene permisos <code className="text-space-300">sudo</code>
                      </p>
                      <p className="text-slate-400 text-sm">
                        Podrás ejecutar comandos con privilegios de administrador cuando sea necesario.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* Advertencia crítica */}
              <section id="advertencia">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  🔥 Advertencia Clave: La Imagen NO Persiste
                </h2>

                <Callout type="warning">
                  <div className="space-y-3">
                    <p className="font-bold text-lg">
                      ⚠️ LEE ESTO CON ATENCIÓN - ES CRÍTICO
                    </p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>Esta imagen NO se puede reiniciar</strong></li>
                      <li><strong>Si el pod se cae, todo lo instalado fuera de <code>/workspace</code> se pierde</strong></li>
                      <li><strong>Los únicos datos persistentes son los de <code>/workspace</code></strong></li>
                    </ul>
                  </div>
                </Callout>

                <div className="mt-6 bg-red-900/20 border border-red-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-300 mb-4">
                    🗂️ ¿Qué significa esto en la práctica?
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">❌</span>
                        <div>
                          <p className="font-semibold text-red-300 mb-2">Se PIERDE al reiniciar:</p>
                          <ul className="space-y-1 text-slate-300 text-sm">
                            <li>• Instalaciones con <code>sudo apt install</code></li>
                            <li>• Instalaciones globales de Python (<code>pip install</code> sin venv)</li>
                            <li>• Modificaciones en el home (excepto <code>/workspace</code>)</li>
                            <li>• Configuraciones del sistema</li>
                            <li>• Software instalado fuera de <code>/workspace</code></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/50 rounded-lg p-4 border border-green-700/30">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">✅</span>
                        <div>
                          <p className="font-semibold text-green-300 mb-2">Se MANTIENE siempre:</p>
                          <ul className="space-y-1 text-slate-300 text-sm">
                            <li>• Todo lo que esté dentro de <code>/workspace</code></li>
                            <li>• Repositorios clonados en <code>/workspace</code></li>
                            <li>• Entornos virtuales creados en <code>/workspace</code></li>
                            <li>• Archivos, notebooks, datasets en <code>/workspace</code></li>
                            <li>• Código y proyectos en <code>/workspace</code></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                    <p className="text-yellow-200 font-semibold mb-2">
                      📌 Regla de oro:
                    </p>
                    <p className="text-slate-300 text-lg">
                      <strong>TODO tu trabajo debe estar en <code>/workspace</code></strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* Normas obligatorias */}
              <section id="normas">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  ❗ Normas Obligatorias para Evitar Romper la Imagen
                </h2>

                <Callout type="warning">
                  Estas normas son <strong>obligatorias</strong> y deben seguirse al pie de la letra 
                  para mantener el entorno estable para todo el equipo.
                </Callout>

                <div className="mt-6 space-y-6">
                  
                  {/* Norma 1 */}
                  <div className="bg-slate-800/50 rounded-xl border border-red-700/50 p-6">
                    <h3 className="text-xl font-semibold text-red-300 mb-4 flex items-center gap-2">
                      <span>❌</span>
                      <span>NUNCA instalar paquetes globales</span>
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
                        <p className="text-red-200 font-semibold mb-3">Comandos PROHIBIDOS:</p>
                        <div className="space-y-2">
                          <div className="bg-slate-900 rounded p-3 font-mono text-sm border border-red-700/50">
                            <span className="text-red-400">❌ sudo apt install algo</span>
                          </div>
                          <div className="bg-slate-900 rounded p-3 font-mono text-sm border border-red-700/50">
                            <span className="text-red-400">❌ pip install paquete</span>
                            <span className="text-slate-500 ml-2">(sin entorno virtual)</span>
                          </div>
                          <div className="bg-slate-900 rounded p-3 font-mono text-sm border border-red-700/50">
                            <span className="text-red-400">❌ npm install -g paquete</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <p className="text-slate-300">
                          <strong>¿Por qué?</strong>
                        </p>
                        <ul className="mt-2 space-y-1 text-slate-400 text-sm">
                          <li>• Rompe la imagen para los demás miembros del equipo</li>
                          <li>• Las instalaciones no persisten (se pierden al reiniciar)</li>
                          <li>• Crea conflictos de dependencias entre proyectos</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Norma 2 */}
                  <div className="bg-slate-800/50 rounded-xl border border-green-700/50 p-6">
                    <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center gap-2">
                      <span>✅</span>
                      <span>TODO el trabajo dentro de /workspace</span>
                    </h3>
                    
                    <div className="space-y-3">
                      <p className="text-slate-300 mb-3">
                        <strong>Ubicación obligatoria para:</strong>
                      </p>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span><strong>Archivos del proyecto</strong> (código, configs, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span><strong>Repositorios Git</strong> clonados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span><strong>Entornos virtuales</strong> de Python</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span><strong>Notebooks, datasets, logs</strong> y resultados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span><strong>Modelos entrenados</strong> y checkpoints</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Norma 3 */}
                  <div className="bg-slate-800/50 rounded-xl border border-blue-700/50 p-6">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center gap-2">
                      <span>🐍</span>
                      <span>Cómo instalar dependencias correctamente</span>
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-slate-300 font-semibold">
                        Siempre usando entornos virtuales dentro de <code>/workspace</code>:
                      </p>
                      
                      <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                        <p className="text-slate-400 text-sm mb-3">Paso a paso:</p>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <span className="text-space-400 font-mono text-sm">1.</span>
                            <div className="flex-1">
                              <p className="text-slate-300 text-sm mb-2">Navega a tu carpeta de trabajo:</p>
                              <div className="bg-slate-950 rounded p-3 font-mono text-sm">
                                <span className="text-slate-500">$</span>
                                <span className="text-space-300"> cd /workspace/tu_usuario/tu_proyecto</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="text-space-400 font-mono text-sm">2.</span>
                            <div className="flex-1">
                              <p className="text-slate-300 text-sm mb-2">Crea el entorno virtual:</p>
                              <div className="bg-slate-950 rounded p-3 font-mono text-sm">
                                <span className="text-slate-500">$</span>
                                <span className="text-space-300"> python3 -m venv venv</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="text-space-400 font-mono text-sm">3.</span>
                            <div className="flex-1">
                              <p className="text-slate-300 text-sm mb-2">Activa el entorno:</p>
                              <div className="bg-slate-950 rounded p-3 font-mono text-sm">
                                <span className="text-slate-500">$</span>
                                <span className="text-space-300"> source venv/bin/activate</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="text-space-400 font-mono text-sm">4.</span>
                            <div className="flex-1">
                              <p className="text-slate-300 text-sm mb-2">Instala dependencias:</p>
                              <div className="bg-slate-950 rounded p-3 font-mono text-sm">
                                <span className="text-slate-500">$</span>
                                <span className="text-space-300"> pip install -r requirements.txt</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Callout type="warning">
                        <strong>NUNCA hagas esto fuera de <code>/workspace</code></strong>. 
                        Se perderá todo al reiniciar el contenedor.
                      </Callout>
                    </div>
                  </div>

                </div>
              </section>

              {/* Estructura recomendada */}
              <section id="estructura">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  📂 Estructura Recomendada dentro de /workspace
                </h2>

                <p className="text-slate-300 mb-6">
                  Para evitar conflictos entre diferentes personas y proyectos, 
                  organiza tu trabajo siguiendo esta estructura:
                </p>

                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 font-mono text-sm">
                  <div className="space-y-1 text-slate-300">
                    <div className="text-space-400">/workspace/</div>
                    <div className="pl-4">
                      <div className="text-blue-300">├── usuario1/</div>
                      <div className="pl-4">
                        <div className="text-slate-400">│   ├── venv/</div>
                        <div className="text-slate-400">│   ├── proyecto1/</div>
                        <div className="text-slate-400">│   │   ├── requirements.txt</div>
                        <div className="text-slate-400">│   │   ├── src/</div>
                        <div className="text-slate-400">│   │   └── data/</div>
                        <div className="text-slate-400">│   └── proyecto2/</div>
                      </div>
                      <div className="text-blue-300">├── usuario2/</div>
                      <div className="pl-4">
                        <div className="text-slate-400">│   ├── venv/</div>
                        <div className="text-slate-400">│   └── proyectoX/</div>
                      </div>
                      <div className="text-blue-300">└── compartido/</div>
                      <div className="pl-4">
                        <div className="text-slate-400">    ├── datasets/</div>
                        <div className="text-slate-400">    ├── modelos_base/</div>
                        <div className="text-slate-400">    └── documentacion/</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <h4 className="text-lg font-semibold text-space-300 mb-3">
                      📁 Carpetas personales
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Cada miembro del equipo tiene su propia carpeta con sus proyectos 
                      y entornos virtuales aislados.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <h4 className="text-lg font-semibold text-space-300 mb-3">
                      🤝 Carpeta compartida
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Recursos comunes como datasets grandes, modelos pre-entrenados 
                      o documentación compartida.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Callout type="tip">
                    <strong>Pro tip:</strong> Crea un script de inicialización en tu carpeta personal 
                    que active automáticamente tu entorno virtual y configure variables de entorno necesarias.
                  </Callout>
                </div>
              </section>

              {/* Persistencia */}
              <section id="persistencia">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  💾 Cómo Mantener tus Cambios Persistentes
                </h2>

                <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">
                    Persistencia del PVC
                  </h3>
                  <p className="text-slate-300 mb-3">
                    Solo tiene persistencia real el <strong>Persistent Volume Claim (PVC)</strong> 
                    montado en <code>/workspace</code>.
                  </p>
                  <p className="text-slate-300">
                    Esto significa que mientras tu trabajo esté en <code>/workspace</code>, 
                    estará a salvo incluso si el pod se reinicia o se cae.
                  </p>
                </div>

                <div className="bg-orange-900/20 border border-orange-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-orange-300 mb-4 flex items-center gap-2">
                    <span>📦</span>
                    <span>Modificaciones a nivel de imagen</span>
                  </h3>
                  
                  <p className="text-slate-300 mb-4">
                    Si necesitas instalar algo a <strong>nivel de sistema</strong> que realmente 
                    requiera modificar la imagen base del contenedor:
                  </p>

                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 mb-4">
                    <p className="text-yellow-300 font-semibold mb-2">
                      ⚠️ Procedimiento obligatorio:
                    </p>
                    <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                      <li>Contacta con <strong>José Luis (coordinador de software)</strong></li>
                      <li>Explica qué necesitas instalar y por qué es necesario a nivel de imagen</li>
                      <li>José Luis evaluará la solicitud y gestionará los cambios necesarios</li>
                      <li>Si es aprobado, se actualizará el deployment con la nueva imagen</li>
                    </ol>
                  </div>

                  <Callout type="warning">
                    <strong>⛔ NO podemos modificar la imagen base por nuestra cuenta.</strong> 
                    Cualquier instalación profunda debe solicitarse al coordinador.
                  </Callout>
                </div>

                <div className="mt-6 bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                  <p className="text-slate-300 text-center text-lg font-semibold">
                    📌 Recuerda: <span className="text-space-300">
                      Esta VM es desechable. <code>/workspace</code> es el único sitio real donde tus datos viven.
                    </span>
                  </p>
                </div>
              </section>

              {/* Consejos de uso */}
              <section id="consejos">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  💡 Consejos de Uso para Evitar Problemas
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  
                  <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🌐</span>
                      <h3 className="text-lg font-semibold text-slate-100">
                        Usa el navegador con moderación
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      La conexión VNC puede ser lenta. No abras 40 pestañas de Firefox. 
                      Usa el navegador solo para lo necesario.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🔌</span>
                      <h3 className="text-lg font-semibold text-slate-100">
                        Cierra programas al terminar
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Cierra aplicaciones que no estés usando para liberar recursos. 
                      La máquina es compartida por todo el equipo.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💾</span>
                      <h3 className="text-lg font-semibold text-slate-100">
                        Guarda TODO en /workspace
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      No te cansas de leerlo porque es crítico: cualquier cosa fuera 
                      de <code>/workspace</code> puede perderse.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🐍</span>
                      <h3 className="text-lg font-semibold text-slate-100">
                        Activa tu venv siempre
                      </h3>
                    </div>
                    <div className="text-slate-300 text-sm space-y-2">
                      <p>Cada vez que abras un terminal:</p>
                      <div className="bg-slate-900 rounded p-2 font-mono text-xs">
                        source /workspace/tu_usuario/venv/bin/activate
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">⚡</span>
                      <h3 className="text-lg font-semibold text-slate-100">
                        Rendimiento
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Si la VM va lenta, no abras herramientas pesadas innecesarias. 
                      Usa VS Code en modo remoto cuando sea posible.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">📊</span>
                      <h3 className="text-lg font-semibold text-slate-100">
                        Monitoriza recursos
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Usa <code>htop</code> o <code>nvidia-smi</code> para ver 
                      el uso de CPU/GPU y evitar saturar la máquina.
                    </p>
                  </div>

                </div>

                <div className="mt-6">
                  <Callout type="tip">
                    <strong>Pro tip:</strong> Considera usar VS Code con Remote-SSH para 
                    conectarte directamente a la máquina y trabajar con mejor rendimiento 
                    que a través del VNC.
                  </Callout>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-3xl font-semibold text-slate-100 mb-4">
                  ❓ Preguntas Frecuentes (FAQ)
                </h2>

                <div className="space-y-4">
                  
                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        ¿Cómo solicito las credenciales de acceso?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <p className="text-slate-300 mb-3">
                        Contacta con <strong>José Luis Galán Avilés</strong> (coordinador de software) 
                        por cualquiera de estos medios:
                      </p>
                      <ul className="space-y-1 text-slate-300 text-sm list-disc list-inside">
                        <li>Discord del equipo TARS</li>
                        <li>Microsoft Teams</li>
                        <li>Correo electrónico del equipo</li>
                      </ul>
                      <p className="text-slate-400 text-sm mt-3">
                        Te proporcionará la URL de acceso VNC y todas las credenciales necesarias.
                      </p>
                    </div>
                  </details>

                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        ¿Puedo instalar VS Code en la máquina virtual?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <p className="text-slate-300">
                        Solo si lo instalas en tu carpeta <code>/workspace</code> como una versión portable. 
                        <strong>No lo instales con apt</strong> porque se perderá al reiniciar. 
                        Una mejor opción es usar VS Code Remote-SSH desde tu equipo local.
                      </p>
                    </div>
                  </details>

                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        ¿Puedo usar Docker dentro del contenedor?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <p className="text-slate-300 mb-2">
                        <strong>No.</strong> No es posible ejecutar Docker-in-Docker en este entorno. 
                      </p>
                      <p className="text-slate-300">
                        Si necesitas contenedores adicionales, consulta con José Luis.
                      </p>
                    </div>
                  </details>

                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        ¿Qué pasa si hago <code>sudo apt install algo</code>?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <div className="space-y-3 text-slate-300">
                        <p>
                          <span className="text-red-400 font-semibold">Consecuencias:</span>
                        </p>
                        <ul className="space-y-1 list-disc list-inside">
                          <li>Rompes la imagen para todos los miembros del equipo</li>
                          <li>La instalación se perderá cuando el pod muera</li>
                          <li>Pueden aparecer conflictos de dependencias inesperados</li>
                        </ul>
                        <p className="font-semibold text-orange-300">
                          ⚠️ Si es absolutamente necesario, contacta primero con José Luis.
                        </p>
                      </div>
                    </div>
                  </details>

                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        ¿Cómo instalo librerías de Python?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <p className="text-slate-300 mb-3">
                        <strong>Siempre con tu entorno virtual en <code>/workspace</code>:</strong>
                      </p>
                      <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm border border-slate-700">
                        <div className="space-y-2">
                          <div><span className="text-slate-500">$</span> <span className="text-space-300">cd /workspace/tu_usuario/tu_proyecto</span></div>
                          <div><span className="text-slate-500">$</span> <span className="text-space-300">source venv/bin/activate</span></div>
                          <div><span className="text-slate-500">$</span> <span className="text-space-300">pip install nombre_libreria</span></div>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        ¿Puedo acceder por SSH en lugar de VNC?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <p className="text-slate-300">
                        Actualmente el acceso está configurado solo por VNC. Si necesitas acceso SSH 
                        para trabajar con mejor rendimiento, consulta con José Luis sobre 
                        la posibilidad de habilitar un puerto SSH.
                      </p>
                    </div>
                  </details>

                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        ¿Cómo uso las GPUs NVIDIA?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <p className="text-slate-300 mb-3">
                        Las GPUs están disponibles automáticamente. Para verificar y monitorizar:
                      </p>
                      <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm border border-slate-700 space-y-2">
                        <div>
                          <span className="text-slate-500">$</span>
                          <span className="text-space-300"> nvidia-smi</span>
                          <span className="text-slate-500 ml-2"># Ver estado GPUs</span>
                        </div>
                        <div>
                          <span className="text-slate-500">$</span>
                          <span className="text-space-300"> watch -n 1 nvidia-smi</span>
                          <span className="text-slate-500 ml-2"># Monitor en tiempo real</span>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                    <summary className="p-5 cursor-pointer hover:bg-slate-800/70 transition-colors">
                      <span className="text-lg font-semibold text-slate-100">
                        El contenedor murió y perdí mi trabajo, ¿qué hago?
                      </span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-slate-700">
                      <div className="space-y-3 text-slate-300">
                        <p>
                          Si tu trabajo estaba en <code>/workspace</code>: 
                          <span className="text-green-400 font-semibold ml-2">✅ Está a salvo</span>
                        </p>
                        <p>
                          Simplemente reconecta al VNC y tu carpeta <code>/workspace</code> 
                          seguirá intacta con todos tus archivos.
                        </p>
                        <p className="text-orange-300 font-semibold">
                          ⚠️ Si estaba fuera de <code>/workspace</code>: Se perdió permanentemente.
                        </p>
                      </div>
                    </div>
                  </details>

                </div>
              </section>

              {/* Cierre */}
              <div className="mt-12 bg-gradient-to-r from-space-900/50 to-blue-900/50 rounded-xl p-8 border border-space-700">
                <h3 className="text-2xl font-bold text-slate-100 mb-4 text-center">
                  🎯 Recordatorio Final
                </h3>
                <p className="text-slate-300 text-center text-lg mb-6">
                  <strong>Piensa que esta VM es desechable.</strong>
                </p>
                <p className="text-slate-300 text-center text-xl font-semibold">
                  <code className="text-space-300">/workspace</code> es el único sitio real donde tus datos viven. 🌟
                </p>
                
                <div className="mt-8 text-center">
                  <p className="text-slate-400 mb-4">
                    ¿Necesitas las credenciales o tienes dudas?
                  </p>
                  <p className="text-slate-300 font-semibold">
                    📧 Contacta con José Luis Galán Avilés
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    Coordinador de Software – TARS Robotics
                  </p>
                </div>
              </div>

            </div>

            <TutorialNavigation 
              previous={{
                title: "🐧 Instalar Ubuntu 24.04 LTS (Guía Completa)",
                href: "/tutoriales/instalar-ubuntu-vm"
              }}
              next={{
                title: "🤖 Instalar ROS 2 Jazzy + Primer Nodo",
                href: "/tutoriales/instalar-ros-primer-nodo"
              }}
            />
          </div>

          <div className="hidden xl:block xl:w-64">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
