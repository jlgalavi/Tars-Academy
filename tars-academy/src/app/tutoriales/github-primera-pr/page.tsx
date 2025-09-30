/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';

const tocItems = [
  { id: 'que-es-github', title: '🎯 ¿Qué es y para qué usamos GitHub?', level: 2 },
  { id: 'acceso-organizacion', title: '🚪 Acceso a la organización', level: 2 },
  { id: 'repositorios-actuales', title: '📁 Repositorios actuales (y futuros)', level: 2 },
  { id: 'ramas-proteccion', title: '🔒 Ramas y protección', level: 2 },
  { id: 'configuracion-ssh', title: '🔑 Configuración de claves SSH', level: 2 },
  { id: 'generar-clave-ssh', title: 'Generar clave SSH ed25519', level: 3 },
  { id: 'configurar-github', title: 'Configurar clave en GitHub', level: 3 },
  { id: 'clonar-repositorio', title: 'Clonar repositorio con SSH', level: 3 },
  { id: 'flujo-trabajo', title: '🔄 Flujo de trabajo (paso a paso)', level: 2 },
  { id: 'normas-basicas', title: '📝 Normas básicas (obligatorias)', level: 2 },
  { id: 'convenciones', title: '📈 Convenciones útiles', level: 2 },
  { id: 'pull-requests', title: '🔄 Pull Requests (PR): cómo y cuándo', level: 2 },
  { id: 'roles-responsabilidades', title: '👥 Roles y responsabilidades', level: 2 },
  { id: 'onboarding-rapido', title: '✅ Onboarding rápido (lista de verificación)', level: 2 },
  { id: 'preguntas-frecuentes', title: '❓ Preguntas frecuentes (FAQ)', level: 2 },
  { id: 'estandares-documentacion', title: 'Estándares y documentación', level: 2 },
  { id: 'contacto', title: 'Contacto', level: 2 },
];

export default function GitHubOrganizacion() {
  const handleStartClick = () => {
    const element = document.getElementById('acceso-organizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChecklistClick = () => {
    const element = document.getElementById('onboarding-rapido');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Contenido principal */}
          <div className="flex-1 max-w-4xl">
            {/* Cabecera */}
            <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Tutoriales', href: '/' },
                  { label: 'GitHub Organizacional UPV-TARS' }
                ]}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                <TutorialChip label="Organización" variant="status" icon="🏢" />
                <TutorialChip label="Git & GitHub" variant="status" icon="📚" />
                <TutorialChip label="Intermedio" variant="level" icon="🎯" />
              </div>
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                🏢 TARS GitHub
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Domina el flujo de trabajo de la organización UPV-TARS en GitHub. Aprende desde el acceso inicial hasta la gestión avanzada de Pull Requests, ramas protegidas y colaboración en proyectos como ERC y Robochallenge.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="45 min" variant="time" icon="⏱️" />
                <TutorialChip label="Actualizado 09/2025" variant="updated" icon="🔄" />
                <TutorialChip label="SSH + Organización" variant="status" icon="�" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary" onClick={handleStartClick}>
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary" onClick={handleChecklistClick}>
                  📋 Ver checklist
                </button>
              </div>
            </div>

            {/* Contenido del tutorial */}
            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="que-es-github">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  � ¿Qué es y para qué usamos GitHub?
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Trabajamos en una organización de GitHub llamada <strong>UPV-TARS</strong> donde centralizamos código, 
                    documentación y coordinación técnica de todos los proyectos del equipo. La organización nos permite 
                    tener permisos coherentes, ramas protegidas, PRs revisadas y un historial limpio.
                  </p>
                  
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3">🎯 Objetivo principal</h4>
                    <p className="text-slate-300 text-sm">
                      Que todos trabajemos de manera ordenada y que lo que llegue a <code>main</code> sea código funcional, 
                      probado y revisado por el equipo.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-slate-200 mb-2">✅ Ventajas de la organización</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Permisos centralizados y coherentes</li>
                        <li>• Ramas protegidas con reglas automáticas</li>
                        <li>• Reviews obligatorios antes de merge</li>
                        <li>• Historial limpio y trazable</li>
                        <li>• Coordinación entre subequipos</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-slate-200 mb-2">🤖 Proyectos actuales</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• <strong>ERC:</strong> European Rover Challenge 2025/26</li>
                        <li>• <strong>Robochallenge:</strong> Proyecto de combate</li>
                        <li>• <strong>Tars Academy:</strong> Documentación y tutoriales</li>
                        <li>• <strong>Futuros proyectos:</strong> según necesidades</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="acceso-organizacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🔑 Acceso a la organización
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Para trabajar en los proyectos de UPV-TARS, necesitas ser invitado oficialmente a la organización. 
                    Este proceso garantiza que solo miembros del equipo tengan acceso a los repositorios.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-slate-200 mb-3">1️⃣ Invitación</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        El coordinador te invita a la organización UPV-TARS con tu usuario de GitHub.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs text-green-400">
                        📧 Recibirás un email de GitHub
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-green-500">
                      <h4 className="font-semibold text-slate-200 mb-3">2️⃣ Aceptación</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        Acepta la invitación desde tu email o en GitHub → Your organizations.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs text-green-400">
                        ✅ Click en "Accept invitation"
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-purple-500">
                      <h4 className="font-semibold text-slate-200 mb-3">3️⃣ Rol asignado</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        Te asignamos rol con permisos de escritura (Write) para contribuir en todos los repositorios activos.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs text-green-400">
                        🛡️ Rol: Write (read + push + PR)
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-orange-500">
                      <h4 className="font-semibold text-slate-200 mb-3">4️⃣ Autenticación</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        Configura claves SSH o PAT para clonar y hacer push sin problemas.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs text-green-400">
                        🔑 Recomendado: SSH ed25519
                      </div>
                    </div>
                  </div>

                  <Callout type="warning">
                    <strong>¿No recibes la invitación?</strong><br/>
                    Si no te llega la invitación o no ves la organización, avisa por el canal interno o contacta 
                    al coordinador directamente.
                  </Callout>
                </div>
              </section>

              <section id="repositorios-actuales">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📚 Repositorios actuales (y futuros)
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Por ahora trabajamos con repositorios principales bien definidos. A medida que surjan nuevos proyectos, 
                    crearemos repos adicionales dentro de la misma organización.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🏆 ERC (European Rover Challenge)
                      </h4>
                      <p className="text-slate-300 text-sm mb-3">
                        Repositorio principal para la competición ERC 2025/26. Incluye software de navegación, 
                        control, visión artificial y documentación técnica.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs">
                        <div className="text-green-400">📁 Estructura por subequipos:</div>
                        <div className="text-slate-400 ml-2">• 🔧 Mecánica → CAD y fabricación</div>
                        <div className="text-slate-400 ml-2">• 💻 Software → ROS2, navegación, IA</div>
                        <div className="text-slate-400 ml-2">• 🔌 Electrónica → PCBs, sensores, control</div>
                        <div className="text-slate-400 ml-2">• 📡 Telecomunicaciones → comunicación, redes</div>
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-yellow-500">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        ⚔️ Robochallenge
                      </h4>
                      <p className="text-slate-300 text-sm mb-3">
                        Proyecto de robots de combate. Desarrollo de estrategias, control de actuadores 
                        y sistemas de combate automatizado.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs">
                        <div className="text-green-400">🎯 Enfoque:</div>
                        <div className="text-slate-400 ml-2">• Control en tiempo real</div>
                        <div className="text-slate-400 ml-2">• Estrategias de combate</div>
                        <div className="text-slate-400 ml-2">• Robustez y supervivencia</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🔮 Repositorios futuros</h4>
                    <p className="text-slate-300 text-sm">
                      La estructura y normas son las mismas para todos los repositorios. Cuando surjan nuevos proyectos 
                      (competiciones, investigación, colaboraciones), seguirán el mismo flujo de trabajo que aprendas aquí.
                    </p>
                  </div>
                </div>
              </section>

              <section id="ramas-proteccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🛡️ Ramas y protección
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Usamos un sistema de dos ramas principales que garantiza estabilidad y permite desarrollo paralelo seguro.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card border-l-4 border-l-green-500">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🌱 develop → Rama de trabajo
                      </h4>
                      <p className="text-slate-300 text-sm mb-3">
                        Aquí contribuimos todos. Es donde se integran features, fixes y pruebas tras una revisión básica de equipo.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs">
                        <div className="text-green-400">✅ Permitido:</div>
                        <div className="text-slate-400 ml-2">• Push directo (cambios pequeños)</div>
                        <div className="text-slate-400 ml-2">• Merge desde feature branches</div>
                        <div className="text-slate-400 ml-2">• Experimentación y pruebas</div>
                        <div className="text-slate-400 ml-2">• Integración de módulos</div>
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                        🔒 main → Rama estable y protegida
                      </h4>
                      <p className="text-slate-300 text-sm mb-3">
                        Solo se actualiza mediante Pull Requests desde develop, tras revisión y aprobación del responsable.
                      </p>
                      <div className="bg-slate-900 p-2 rounded text-xs">
                        <div className="text-red-400">❌ Prohibido:</div>
                        <div className="text-slate-400 ml-2">• Push directo (automáticamente rechazado)</div>
                        <div className="text-slate-400 ml-2">• Merge sin revisión</div>
                        <div className="text-slate-400 ml-2">• Código experimental</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3">📋 Reglas clave (obligatorias)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">🚫 Nunca hagas:</h5>
                        <ul className="space-y-1 text-slate-400 text-sm">
                          <li>• Push directo a main</li>
                          <li>• Force push a ramas compartidas</li>
                          <li>• Merge sin revisar</li>
                          <li>• Commits con mensajes genéricos</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">✅ Siempre haz:</h5>
                        <ul className="space-y-1 text-slate-400 text-sm">
                          <li>• Trabajar sobre develop</li>
                          <li>• Crear feature branches descriptivas</li>
                          <li>• PR de develop → main con revisión</li>
                          <li>• Commits claros y atómicos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="configuracion-ssh">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🔑 Configuración de claves SSH
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Para clonar repositorios de la organización UPV-TARS necesitas configurar autenticación SSH. Es más seguro 
                    que las contraseñas y más cómodo que los tokens de acceso personal.
                  </p>

                  <Callout type="info">
                    <strong>¿Por qué SSH?</strong><br/>
                    Las claves SSH te permiten conectarte de forma segura sin introducir contraseñas constantemente. 
                    Son el estándar para organizaciones profesionales.
                  </Callout>

                  <div id="generar-clave-ssh" className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-200">🔧 Generar clave SSH ed25519</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="card border-l-4 border-l-blue-500">
                        <h4 className="font-semibold text-slate-200 mb-3">🐧 Ubuntu/Linux</h4>
                        <div className="space-y-2">
                          <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                            <div className="text-green-400"># Generar nueva clave SSH ed25519</div>
                            <div className="text-slate-300">ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"</div>
                            <div className="text-green-400 mt-2"># Cuando pregunte ubicación, presiona Enter</div>
                            <div className="text-green-400"># Cuando pida passphrase, usa una segura</div>
                          </div>
                          <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                            <div className="text-green-400"># Iniciar ssh-agent</div>
                            <div className="text-slate-300">eval "$(ssh-agent -s)"</div>
                            <div className="text-green-400"># Añadir clave al agente</div>
                            <div className="text-slate-300">ssh-add ~/.ssh/id_ed25519</div>
                          </div>
                        </div>
                      </div>

                      <div className="card border-l-4 border-l-purple-500">
                        <h4 className="font-semibold text-slate-200 mb-3">🪟 Windows</h4>
                        <div className="space-y-2">
                          <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                            <div className="text-green-400"># En PowerShell o Git Bash</div>
                            <div className="text-slate-300">ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"</div>
                            <div className="text-green-400 mt-2"># Presiona Enter para ubicación por defecto</div>
                            <div className="text-green-400"># Introduce passphrase segura</div>
                          </div>
                          <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                            <div className="text-green-400"># Iniciar ssh-agent (PowerShell como admin)</div>
                            <div className="text-slate-300">Start-Service ssh-agent</div>
                            <div className="text-green-400"># Añadir clave</div>
                            <div className="text-slate-300">ssh-add ~/.ssh/id_ed25519</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="configurar-github" className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-200">⚙️ Configurar clave en GitHub</h3>
                    
                    <div className="space-y-4">
                      <div className="card">
                        <h4 className="font-semibold text-slate-200 mb-3">1️⃣ Copiar clave pública</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-slate-300 text-sm mb-2">Ubuntu/Linux:</p>
                            <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                              cat ~/.ssh/id_ed25519.pub
                            </div>
                          </div>
                          <div>
                            <p className="text-slate-300 text-sm mb-2">Windows:</p>
                            <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                              Get-Content ~/.ssh/id_ed25519.pub
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm mt-2">
                          Copia todo el contenido que aparece (empieza con ssh-ed25519...)
                        </p>
                      </div>

                      <div className="card">
                        <h4 className="font-semibold text-slate-200 mb-3">2️⃣ Añadir en GitHub</h4>
                        <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                          <li>Ve a GitHub.com y haz login</li>
                          <li>Click en tu avatar (esquina superior derecha) → Settings</li>
                          <li>En el sidebar izquierdo: SSH and GPG keys</li>
                          <li>Click en "New SSH key"</li>
                          <li>Title: "Mi laptop UPV-TARS" (o descripción clara)</li>
                          <li>Key type: "Authentication Key"</li>
                          <li>Pega tu clave pública en el campo "Key"</li>
                          <li>Click en "Add SSH key"</li>
                        </ol>
                      </div>

                      <div className="card">
                        <h4 className="font-semibold text-slate-200 mb-3">3️⃣ Verificar conexión</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                          <div className="text-green-400"># Probar conexión SSH</div>
                          <div className="text-slate-300">ssh -T git@github.com</div>
                          <div className="text-slate-400 mt-2"># Debe responder:</div>
                          <div className="text-green-300">Hi tu-usuario! You've successfully authenticated...</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="clonar-repositorio" className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-200">� Clonar repositorio con SSH</h3>
                    
                    <div className="space-y-4">
                      <p className="text-slate-300">
                        Una vez configurado SSH, puedes clonar repositorios de la organización usando URLs SSH:
                      </p>

                      <div className="card">
                        <h4 className="font-semibold text-slate-200 mb-3">Ejemplo: Clonar repositorio ERC</h4>
                        <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                          <div className="text-green-400"># Clonar ERC con SSH</div>
                          <div className="text-slate-300">git clone git@github.com:UPV-TARS/ERC.git</div>
                          <div className="text-slate-300">cd ERC</div>
                          <div className="text-green-400"># Cambiarte inmediatamente a develop</div>
                          <div className="text-slate-300">git checkout develop</div>
                          <div className="text-green-400"># Configurar tu identidad</div>
                          <div className="text-slate-300">git config user.name "Tu Nombre"</div>
                          <div className="text-slate-300">git config user.email "tu-email@upv.es"</div>
                        </div>
                      </div>

                      <Callout type="tip">
                        <strong>URLs SSH vs HTTPS:</strong><br/>
                        • SSH: <code>git@github.com:UPV-TARS/ERC.git</code> (recomendado)<br/>
                        • HTTPS: <code>https://github.com/UPV-TARS/ERC.git</code> (requiere tokens)
                      </Callout>

                      <Callout type="warning">
                        <strong>¡Importante!</strong> Siempre cámbiate a <code>develop</code> después de clonar. 
                        Nunca trabajes directamente en <code>main</code>.
                      </Callout>
                    </div>
                  </div>
                </div>
              </section>

              <section id="flujo-trabajo">
                <h2 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                  🔄 Flujo de trabajo (paso a paso)
                </h2>

                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Este es el flujo estándar que seguirás para cualquier contribución en los proyectos de UPV-TARS, 
                    desde pequeños fixes hasta features complejas.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-2">🔄 Flujo básico</h4>
                      <ol className="space-y-1 text-slate-300 text-sm">
                        <li>1. Cámbiate a develop</li>
                        <li>2. Crea tu feature branch</li>
                        <li>3. Desarrolla y haz commits</li>
                        <li>4. Push a tu feature branch</li>
                        <li>5. Merge a develop (validar)</li>
                        <li>6. PR de develop → main</li>
                        <li>7. Revisión y aprobación</li>
                        <li>8. Merge a main</li>
                      </ol>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-2">✅ Puntos de control</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Confirma rama correcta antes de empezar</li>
                        <li>• Commits descriptivos y atómicos</li>
                        <li>• Todo compila y pasa tests básicos</li>
                        <li>• Merge conflicts resueltos</li>
                        <li>• PR con descripción clara</li>
                        <li>• Revisión aprobada por CODEOWNER</li>
                        <li>• main actualizado correctamente</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-3">📝 Comandos típicos de workflow</h4>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                      <div className="text-green-400"># 1. Partir desde develop actualizado</div>
                      <div className="text-slate-300">git checkout develop</div>
                      <div className="text-slate-300">git pull origin develop</div>
                      <div className="text-green-400 mt-2"># 2. Crear feature branch</div>
                      <div className="text-slate-300">git checkout -b feature/nueva-funcionalidad</div>
                      <div className="text-green-400 mt-2"># 3. Desarrollo y commits</div>
                      <div className="text-slate-300">git add .</div>
                      <div className="text-slate-300">git commit -m "Add nueva funcionalidad"</div>
                      <div className="text-green-400 mt-2"># 4. Push de feature branch</div>
                      <div className="text-slate-300">git push origin feature/nueva-funcionalidad</div>
                      <div className="text-green-400 mt-2"># 5. Merge a develop (después de testing)</div>
                      <div className="text-slate-300">git checkout develop</div>
                      <div className="text-slate-300">git merge feature/nueva-funcionalidad</div>
                      <div className="text-slate-300">git push origin develop</div>
                      <div className="text-green-400 mt-2"># 6. PR develop → main (via GitHub web)</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="normas-basicas">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📋 Normas básicas (obligatorias)
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Estas normas son obligatorias para todos los miembros del equipo y garantizan calidad 
                    y coherencia en todos los proyectos de UPV-TARS.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="card border-l-4 border-l-red-500">
                        <h4 className="font-semibold text-slate-200 mb-2">🚫 Prohibido</h4>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Push directo a main (automáticamente rechazado)</li>
                          <li>• Commits genéricos: "fixes", "updates", "WIP"</li>
                          <li>• Merge sin resolver conversaciones del PR</li>
                          <li>• Force push en ramas compartidas</li>
                          <li>• Código que no compila en develop</li>
                          <li>• Ignorar las Issues y duplicar trabajo</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="card border-l-4 border-l-green-500">
                        <h4 className="font-semibold text-slate-200 mb-2">✅ Obligatorio</h4>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Trabajar siempre desde develop</li>
                          <li>• Feature branches para tareas no triviales</li>
                          <li>• Commits descriptivos y atómicos</li>
                          <li>• main solo mediante PRs revisadas</li>
                          <li>• Resolver conversaciones antes de merge</li>
                          <li>• Mantener carpetas de subequipo ordenadas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">🔍 Antes de empezar cualquier tarea</h4>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                      <li><strong>Revisar Issues:</strong> Comprueba si ya existe la tarea o alguien está trabajándola</li>
                      <li><strong>Revisar Projects:</strong> Mira el tablero del proyecto para entender prioridades</li>
                      <li><strong>Asignarte la Issue:</strong> Si no existe, créala y asígnasela a ti mismo</li>
                      <li><strong>Comentar inicio:</strong> Deja un comentario indicando que empiezas la tarea</li>
                    </ol>
                  </div>

                  <Callout type="warning">
                    <strong>Romper algo = comunicar inmediatamente</strong><br/>
                    Si tu código rompe algo en develop o afecta a otros subequipos, avisa inmediatamente 
                    por el canal interno y abre una Issue con etiqueta "bug" o "urgent".
                  </Callout>
                </div>
              </section>

              <section id="convenciones">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📝 Convenciones útiles
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-slate-200 mb-3">🌿 Nombres de ramas</h4>
                      <div className="space-y-2 text-slate-300 text-sm">
                        <div><strong>feature/</strong> → nuevas funcionalidades</div>
                        <div><strong>fix/</strong> → correcciones de bugs</div>
                        <div><strong>hotfix/</strong> → arreglos urgentes sobre main</div>
                        <div><strong>docs/</strong> → cambios de documentación</div>
                        <div><strong>refactor/</strong> → reestructuración de código</div>
                      </div>
                      <div className="bg-slate-900 p-2 rounded mt-3 font-mono text-xs">
                        <div className="text-green-400"># Ejemplos buenos:</div>
                        <div className="text-slate-300">feature/navegacion-autonoma</div>
                        <div className="text-slate-300">fix/sensor-lidar-timeout</div>
                        <div className="text-slate-300">docs/actualizar-readme-erc</div>
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-purple-500">
                      <h4 className="font-semibold text-slate-200 mb-3">💬 Mensajes de commit</h4>
                      <div className="space-y-2 text-slate-300 text-sm">
                        <div><strong>Formato:</strong> Verbo imperativo + qué cambias</div>
                        <div><strong>Máximo:</strong> 50 caracteres en el título</div>
                        <div><strong>Opcional:</strong> Descripción larga tras línea vacía</div>
                        <div><strong>Referencia:</strong> Issue relacionada si existe</div>
                      </div>
                      <div className="bg-slate-900 p-2 rounded mt-3 font-mono text-xs">
                        <div className="text-green-400"># Ejemplos buenos:</div>
                        <div className="text-slate-300">Add path planning module for autonomous navigation</div>
                        <div className="text-slate-300">Fix LIDAR sensor timeout in rocky terrain</div>
                        <div className="text-slate-300">Refactor camera calibration pipeline</div>
                        <div className="text-slate-300">Update README with setup instructions (closes #42)</div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">🏷️ Convenciones por subequipo</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">💻 Software</h5>
                        <ul className="space-y-1 text-slate-400 text-sm">
                          <li>• Prefijo commits: <code>[SW]</code> si es específico</li>
                          <li>• Tests unitarios obligatorios para algoritmos críticos</li>
                          <li>• Documentar APIs y interfaces públicas</li>
                          <li>• Seguir PEP 8 (Python) y estándares ROS2</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">🔌 Electrónica</h5>
                        <ul className="space-y-1 text-slate-400 text-sm">
                          <li>• Prefijo commits: <code>[HW]</code> para cambios de hardware</li>
                          <li>• Versionar esquemas y layouts de PCB</li>
                          <li>• Documentar pinouts y configuraciones</li>
                          <li>• Bill of Materials (BOM) actualizada</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="pull-requests">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🔄 Pull Requests (PR): cómo y cuándo
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Las Pull Requests son el mecanismo oficial para integrar cambios de develop a main. 
                    Cada PR debe ser revisada y aprobada antes del merge.
                  </p>

                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-3">📋 Cuándo abrir una PR develop → main</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>El bloque de trabajo está estable y funcional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Todas las features relacionadas están integradas en develop</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Los tests básicos pasan (compilación, linting, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>La documentación está actualizada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>Es un milestone lógico del proyecto</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">📝 Descripción de PR</h4>
                      <p className="text-slate-300 text-sm mb-3">
                        Una buena descripción facilita la revisión y documenta el historial del proyecto:
                      </p>
                      <div className="bg-slate-900 p-3 rounded font-mono text-xs">
                        <div className="text-green-400"># Plantilla recomendada:</div>
                        <div className="text-slate-300 mt-2">## ¿Qué incluye esta PR?</div>
                        <div className="text-slate-300">- Lista de cambios principales</div>
                        <div className="text-slate-300">- Nuevas funcionalidades</div>
                        <div className="text-slate-300">- Bugs corregidos</div>
                        <div className="text-slate-300 mt-2">## ¿Cómo probarlo?</div>
                        <div className="text-slate-300">- Pasos para validar</div>
                        <div className="text-slate-300">- Comandos específicos</div>
                        <div className="text-slate-300 mt-2">## Issues relacionadas</div>
                        <div className="text-slate-300">Closes #42, #43</div>
                      </div>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">👥 Proceso de revisión</h4>
                      <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                        <li>Asignar a revisor (CODEOWNER o líder de módulo)</li>
                        <li>Esperar comments/sugerencias del revisor</li>
                        <li>Implementar cambios solicitados si los hay</li>
                        <li>Resolver todas las conversaciones abiertas</li>
                        <li>Obtener aprobación explícita (approve)</li>
                        <li>Merge por parte del revisor o coordinador</li>
                      </ol>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">🏷️ Labels y metadata</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">Tipo</h5>
                        <div className="space-y-1 text-slate-400 text-sm">
                          <div>🟢 feature</div>
                          <div>🔴 bug</div>
                          <div>📚 docs</div>
                          <div>⚡ enhancement</div>
                          <div>🔥 breaking</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">Prioridad</h5>
                        <div className="space-y-1 text-slate-400 text-sm">
                          <div>🚨 urgent</div>
                          <div>🔥 high</div>
                          <div>🟡 medium</div> 
                          <div>🟢 low</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">Subequipo</h5>
                        <div className="space-y-1 text-slate-400 text-sm">
                          <div>💻 software</div>
                          <div>🔌 electronics</div>
                          <div>🔧 mechanical</div>
                          <div>📡 telecom</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="roles-responsabilidades">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  👥 Roles y responsabilidades
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Cada miembro del equipo tiene responsabilidades específicas para mantener la calidad 
                    y coherencia de los proyectos.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-slate-200 mb-3">👑 Coordinador/Owner</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Gestiona permisos de la organización</li>
                        <li>• Configura protección de ramas</li>
                        <li>• Define releases y milestones</li>
                        <li>• Resuelve conflictos organizacionales</li>
                        <li>• Supervisión general del proyecto</li>
                      </ul>
                      <div className="bg-slate-900 p-2 rounded mt-2 text-xs">
                        <span className="text-slate-400">Contacto:</span>
                        <span className="text-green-400 ml-1">Jose Luis Galán Avilés</span>
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-slate-200 mb-3">🔍 Revisores (CODEOWNERS)</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Validan PRs de su ámbito técnico</li>
                        <li>• Revisan calidad de código y arquitectura</li>
                        <li>• Aprueban o solicitan cambios</li>
                        <li>• Mentorizan a nuevos contributors</li>
                        <li>• Mantienen estándares técnicos</li>
                      </ul>
                    </div>

                    <div className="card border-l-4 border-l-green-500">
                      <h4 className="font-semibold text-slate-200 mb-3">💻 Contribuidores (Todos)</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Desarrollan en develop/feature branches</li>
                        <li>• Crean PRs con buen contexto</li>
                        <li>• Siguen convenciones y normas</li>
                        <li>• Documentan cambios relevantes</li>
                        <li>• Colaboran en reviews de otros</li>
                      </ul>
                    </div>

                    <div className="card border-l-4 border-l-yellow-500">
                      <h4 className="font-semibold text-slate-200 mb-3">🎯 Responsabilidades compartidas</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Mantener Issues y Projects al día</li>
                        <li>• Comunicar bloqueos y dependencias</li>
                        <li>• Revisar trabajo de compañeros</li>
                        <li>• Participar en planning y retrospectivas</li>
                        <li>• Reportar bugs y problemas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="onboarding-rapido">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🚀 Onboarding rápido (lista de verificación)
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Sigue esta checklist para integrarte completamente en el flujo de trabajo de UPV-TARS:
                  </p>
                  
                  <div className="card">
                    <div className="space-y-3">
                      {[
                        'Aceptar invitación a UPV-TARS',
                        'Configurar SSH ed25519 y añadir a GitHub',
                        'Clonar repositorio del proyecto asignado',
                        'Cambiar inmediatamente a rama develop',
                        'Ver Issues/Projects para asignarte trabajo',
                        'Crear feature branch para tu primera tarea',
                        'Seguir buenas prácticas (estilo, commits, documentación)',
                        'Abrir PR a main cuando esté estable y listo para revisión',
                        'Participar en al menos una revisión de código',
                        'Documentar tu área de trabajo en el README del subequipo'
                      ].map((item, index) => (
                        <label key={index} className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" className="mt-1 rounded border-slate-600 bg-slate-700 text-space-500 focus:ring-space-500" />
                          <span className="text-slate-300">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Callout type="tip">
                    <strong>Primer objetivo:</strong> Completa tu primera contribución pequeña (actualizar documentación, 
                    corregir typo, añadir comentarios) para familiarizarte con el workflow antes de tareas complejas.
                  </Callout>
                </div>
              </section>

              <section id="preguntas-frecuentes">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  ❓ Preguntas frecuentes (FAQ)
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      pregunta: "¿Por qué no puedo pushear a main?",
                      respuesta: "Porque está protegida por reglas automáticas. Solo se actualiza por PR aprobado. Esto garantiza que todo el código en main esté revisado y sea funcional."
                    },
                    {
                      pregunta: "¿Trabaljo siempre en feature o directamente en develop?",
                      respuesta: "Si el cambio es pequeño y acordado (typos, docs menores), puedes trabajar en develop. Para tareas medianas/grandes, siempre usa feature branches."
                    },
                    {
                      pregunta: "¿Quién aprueba los PRs a main?",
                      respuesta: "El líder/coordinador del proyecto o quien figure en CODEOWNERS del repositorio específico. Cada repo puede tener revisores diferentes según la especialidad."
                    },
                    {
                      pregunta: "¿Qué hago si me da conflicto al mergear?",
                      respuesta: "Resuélvelo en tu branch local, vuelve a probar que todo funciona, y actualiza el PR. GitHub te ayudará a identificar exactamente dónde están los conflictos."
                    },
                    {
                      pregunta: "¿Cómo sé en qué trabajar?",
                      respuesta: "Revisa el tablero de Projects del repositorio y las Issues abiertas. Asígnate Issues que coincidan con tu nivel y área de especialidad. Si no hay Issues claras, pregunta al coordinador."
                    },
                    {
                      pregunta: "Mi SSH no funciona, ¿qué hago?",
                      respuesta: "Verifica con 'ssh -T git@github.com'. Si falla, revisa que la clave esté en GitHub y en tu ssh-agent local. También puedes usar HTTPS temporalmente."
                    }
                  ].map((item, index) => (
                    <div key={index} className="card border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-slate-200 mb-2">Q: {item.pregunta}</h4>
                      <p className="text-slate-300 text-sm">{item.respuesta}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="estandares-documentacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📚 Estándares y documentación
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card border-l-4 border-l-green-500">
                      <h4 className="font-semibold text-slate-200 mb-3">📋 Guías internas</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Buenas prácticas de programación</li>
                        <li>• Estilo de código (linters automáticos)</li>
                        <li>• Convenciones de naming específicas</li>
                        <li>• Tests unitarios y de integración</li>
                        <li>• Documentación de APIs</li>
                      </ul>
                    </div>

                    <div className="card border-l-4 border-l-orange-500">
                      <h4 className="font-semibold text-slate-200 mb-3">📝 Responsabilidades de documentación</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Mantener README de cada módulo actualizado</li>
                        <li>• Documentar instalación y setup</li>
                        <li>• Explicar arquitectura y decisiones técnicas</li>
                        <li>• Proveer ejemplos de uso</li>
                        <li>• Actualizar changelog con releases</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">🎯 Gestión de tareas</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Usamos el ecosistema completo de GitHub para organización:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">📋 Issues</h5>
                        <div className="space-y-1 text-slate-400 text-sm">
                          <div>• Tareas individuales</div>
                          <div>• Bug reports</div>
                          <div>• Feature requests</div>
                          <div>• Discusiones técnicas</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">🗂️ Projects</h5>
                        <div className="space-y-1 text-slate-400 text-sm">
                          <div>• Tableros kanban</div>
                          <div>• Sprints/milestones</div>
                          <div>• Seguimiento de progreso</div>
                          <div>• Coordinación entre equipos</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-slate-300 font-medium mb-2">🏷️ Labels/Milestones</h5>
                        <div className="space-y-1 text-slate-400 text-sm">
                          <div>• Categorización automática</div>
                          <div>• Prioridades y tipos</div>
                          <div>• Releases y versiones</div>
                          <div>• Asignación por subequipo</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contacto">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📞 Contacto
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="card border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-slate-200 mb-3">🏢 Coordinación organizacional</h4>
                      <div className="space-y-2 text-slate-300 text-sm">
                        <div><strong>Organización:</strong> UPV-TARS</div>
                        <div><strong>Responsable Software/Electrónica:</strong></div>
                        <div className="ml-2">Jose Luis Galán Avilés</div>
                        <div className="ml-2">📧 jlgalavi@upv.edu.es</div>
                      </div>
                    </div>

                    <div className="card border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-slate-200 mb-3">💬 Canales de comunicación</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• <strong>Dudas operativas:</strong> Canal interno del equipo</li>
                        <li>• <strong>Problemas de permisos:</strong> Contacto directo</li>
                        <li>• <strong>Incidencias con repos:</strong> Issues en GitHub</li>
                        <li>• <strong>Coordinación técnica:</strong> Canal de desarrollo</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">📋 Nota final</h4>
                    <p className="text-slate-300 text-sm">
                      Esta política aplica a todos los repositorios bajo UPV-TARS. Si un proyecto específico necesita 
                      reglas adicionales (tests obligatorios, pipelines CI, reglas de versionado), se documentarán 
                      en su propio README y en la configuración de CODEOWNERS/branch protection del repositorio correspondiente.
                    </p>
                  </div>

                  <a 
                    href="https://github.com/UPV-TARS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-lg text-center hover:from-red-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">🚀 TARS Robotics</h4>
                    <p className="text-white text-sm mb-1">
                      European Rover Challenge (ERC) 2025/26 | Universitat Politècnica de València
                    </p>
                    <p className="text-white text-xs opacity-80">
                      👆 Click para visitar la organización en GitHub
                    </p>
                  </a>
                </div>
              </section>
            {/* Navegación */}
            <TutorialNavigation 
              previous={{ title: "Git & GitHub", href: "/tutoriales/git-github" }}
              next={{ title: "Issues y PRs", href: "/tutoriales/issues-y-prs" }}
            />
            </div>
          </div>

          {/* Sidebar con TOC */}
          <div className="hidden lg:block w-80">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}