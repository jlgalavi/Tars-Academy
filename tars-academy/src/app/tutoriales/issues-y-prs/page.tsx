import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";

export default function IssuesPRs() {
  const tocItems = [
    { id: "introduccion", title: "Colaboración avanzada", level: 2 },
    { id: "prerequisitos", title: "Prerequisitos", level: 2 },
    { id: "issues", title: "GitHub Issues", level: 2 },
    { id: "fork-workflow", title: "Fork y Pull Requests", level: 2 },
    { id: "crear-pr", title: "Crear Pull Request", level: 2 },
    { id: "code-review", title: "Code Review", level: 2 },
    { id: "merge-strategies", title: "Estrategias de merge", level: 2 },
    { id: "project-management", title: "Project management", level: 2 },
    { id: "mejores-practicas", title: "Mejores prácticas", level: 2 },
    { id: "validacion", title: "Validación final", level: 2 },
    { id: "recursos", title: "Recursos", level: 2 }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 gap-8">
          <main className="lg:col-span-4 xl:col-span-3 max-w-4xl mx-auto lg:mx-0">
            <Breadcrumb 
              items={[
                { label: "Inicio", href: "/" },
                { label: "Tutoriales", href: "/" },
                { label: "Issues y PRs" }
              ]} 
            />
            
            <div className="mt-6 flex flex-wrap gap-2 mb-8">
              <TutorialChip label="Colaboración" variant="status" icon="🤝" />
              <TutorialChip label="Workflows" variant="status" icon="⚡" />
              <TutorialChip label="Intermedio" variant="level" icon="📈" />
            </div>

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                🚀 Issues y Pull Requests
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Domina la colaboración avanzada en GitHub: gestiona Issues para tracking de bugs y features, 
                crea Pull Requests profesionales, participa en code reviews y contribuye a proyectos open source. 
                El siguiente nivel después de Git básico.
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
                🌟 Colaboración avanzada
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Issues y Pull Requests son el corazón de la colaboración en GitHub. Te permiten 
                  gestionar proyectos, reportar bugs, proponer features, y contribuir a cualquier 
                  proyecto open source del mundo.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🎯 Issues (Gestión)</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Reportar bugs y problemas</li>
                      <li>• Solicitar nuevas features</li>
                      <li>• Hacer preguntas técnicas</li>
                      <li>• Documentar tareas pendientes</li>
                      <li>• Organizar roadmap del proyecto</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🔄 Pull Requests (Código)</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Proponer cambios al código</li>
                      <li>• Review de código colaborativo</li>
                      <li>• Integración controlada de features</li>
                      <li>• Discusión técnica específica</li>
                      <li>• Testing automático (CI/CD)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-2">En robótica, esto significa:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Reportar bugs en algoritmos de navegación</li>
                      <li>• Contribuir a ROS packages</li>
                      <li>• Revisar código de compañeros de equipo</li>
                    </ul>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Participar en proyectos open source</li>
                      <li>• Gestionar desarrollo en equipo</li>
                      <li>• Documentar mejoras y optimizaciones</li>
                    </ul>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Flujo profesional:</strong> Issue (problema/idea) → Branch → Commits → 
                  Pull Request → Code Review → Merge. Así trabajan equipos en Google, Tesla, etc.
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
                      <span><strong>Git & GitHub básico</strong> - Tutorial anterior completado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Cuenta GitHub activa</strong> - con al menos un repositorio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Conocimiento de branches</strong> - crear, cambiar, merge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">○</span>
                      <span><strong>Opcional:</strong> Inglés básico (muchos proyectos están en inglés)</span>
                    </li>
                  </ul>
                </div>

                <Callout type="info">
                  <strong>Tiempo estimado:</strong> 90 minutos para teoría + práctica con Issues y PRs reales.
                </Callout>
              </div>
            </section>

            <section id="issues">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🎯 GitHub Issues
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">¿Qué son los Issues?</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Los Issues son "tickets" para gestionar trabajo en un proyecto. Cada Issue 
                      tiene un número único (#123) y se puede referenciar desde commits y PRs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          🐛
                        </div>
                        <h5 className="font-semibold text-slate-200">Bug Reports</h5>
                        <p className="text-slate-300 text-sm">Problemas que hay que arreglar</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          ✨
                        </div>
                        <h5 className="font-semibold text-slate-200">Feature Requests</h5>
                        <p className="text-slate-300 text-sm">Nuevas funcionalidades</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          ❓
                        </div>
                        <h5 className="font-semibold text-slate-200">Questions</h5>
                        <p className="text-slate-300 text-sm">Dudas y discusiones</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Crear un Issue efectivo</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">📝 Título descriptivo</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-red-400 text-sm mb-1">❌ Malo:</p>
                            <div className="bg-slate-900 p-2 rounded text-sm">
                              "No funciona"
                            </div>
                          </div>
                          <div>
                            <p className="text-green-400 text-sm mb-1">✅ Bueno:</p>
                            <div className="bg-slate-900 p-2 rounded text-sm">
                              "Robot no gira: error en controlador PID"
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">📋 Template de Issue</h5>
                        <div className="bg-slate-900 p-3 rounded text-sm text-slate-300">
                          <div className="text-green-400">## Descripción</div>
                          <div>Breve descripción del problema o feature</div>
                          <div className="mt-2 text-green-400">## Pasos para reproducir</div>
                          <div>1. Ejecutar `rosrun mi_paquete nodo.py`</div>
                          <div>2. Enviar comando de giro</div>
                          <div>3. Observar que no gira</div>
                          <div className="mt-2 text-green-400">## Comportamiento esperado</div>
                          <div>El robot debería girar 90 grados</div>
                          <div className="mt-2 text-green-400">## Comportamiento actual</div>
                          <div>Se queda inmóvil, sin errores en consola</div>
                          <div className="mt-2 text-green-400">## Entorno</div>
                          <div>- ROS 2 Humble</div>
                          <div>- Ubuntu 22.04</div>
                          <div>- Robot: TurtleBot3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Labels y Milestones</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">🏷️ Labels comunes</h5>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-red-600 text-white text-xs rounded">bug</span>
                            <span className="text-slate-300 text-sm">Algo está roto</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">enhancement</span>
                            <span className="text-slate-300 text-sm">Nueva feature</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">good first issue</span>
                            <span className="text-slate-300 text-sm">Para principiantes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded">documentation</span>
                            <span className="text-slate-300 text-sm">Mejoras de docs</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">🎯 Milestones</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• <strong>v1.0:</strong> Release principal</li>
                          <li>• <strong>Sprint 3:</strong> Ciclo de desarrollo</li>
                          <li>• <strong>Bug fixes:</strong> Correcciones urgentes</li>
                          <li>• <strong>Future:</strong> Ideas para después</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Tip profesional:</strong> Siempre busca Issues existentes antes de crear uno nuevo. 
                  Muchos problemas ya están reportados o se están trabajando.
                </Callout>
              </div>
            </section>

            <section id="fork-workflow">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🍴 Fork y Pull Requests
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Fork Workflow completo</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <div>
                          <h5 className="font-semibold text-slate-200">Fork el repositorio</h5>
                          <p className="text-slate-300 text-sm">Click "Fork" en GitHub → Crea copia en tu cuenta</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <div>
                          <h5 className="font-semibold text-slate-200">Clone tu fork</h5>
                          <p className="text-slate-300 text-sm">git clone https://github.com/TU_USUARIO/proyecto.git</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <div>
                          <h5 className="font-semibold text-slate-200">Agregar upstream</h5>
                          <p className="text-slate-300 text-sm">git remote add upstream https://github.com/ORIGINAL/proyecto.git</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                        <div>
                          <h5 className="font-semibold text-slate-200">Crear feature branch</h5>
                          <p className="text-slate-300 text-sm">git checkout -b fix/issue-123-navigation-bug</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                        <div>
                          <h5 className="font-semibold text-slate-200">Hacer cambios y commits</h5>
                          <p className="text-slate-300 text-sm">Desarrollar, commitear con mensajes claros</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">6</div>
                        <div>
                          <h5 className="font-semibold text-slate-200">Push y crear PR</h5>
                          <p className="text-slate-300 text-sm">git push origin feature-branch → GitHub sugiere crear PR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Mantener fork actualizado</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Cambiar a main</div>
                      <div>git checkout main</div>
                      <div className="mt-2"># Traer cambios del repo original</div>
                      <div>git fetch upstream</div>
                      <div>git merge upstream/main</div>
                      <div className="mt-2"># Actualizar tu fork en GitHub</div>
                      <div>git push origin main</div>
                      <div className="mt-2"># Actualizar tu feature branch</div>
                      <div>git checkout feature-branch</div>
                      <div>git rebase main</div>
                    </div>
                    <p className="text-slate-300 mt-3 text-sm">
                      <strong>Importante:</strong> Siempre mantén tu fork sincronizado antes de crear nuevas branches.
                    </p>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Remote names:</strong><br/>
                  • <code>origin</code> = tu fork en GitHub<br/>
                  • <code>upstream</code> = repositorio original<br/>
                  No los confundas al hacer push/pull.
                </Callout>
              </div>
            </section>

            <section id="crear-pr">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📝 Crear Pull Request
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Anatomía de un PR profesional</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">🎯 Título claro y específico</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-red-400 text-sm mb-1">❌ Malo:</p>
                            <div className="bg-slate-900 p-2 rounded text-sm">
                              "Fix bug"
                            </div>
                          </div>
                          <div>
                            <p className="text-green-400 text-sm mb-1">✅ Bueno:</p>
                            <div className="bg-slate-900 p-2 rounded text-sm">
                              "Fix navigation PID controller oscillation (closes #123)"
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">📋 Template de PR</h5>
                        <div className="bg-slate-900 p-3 rounded text-sm text-slate-300">
                          <div className="text-green-400">## Descripción</div>
                          <div>Fixes oscillation in PID controller when robot navigates near obstacles.</div>
                          <div>The issue was caused by too aggressive derivative gain.</div>
                          <div className="mt-2 text-green-400">## Cambios realizados</div>
                          <div>- Reduced derivative gain from 0.1 to 0.05</div>
                          <div>- Added low-pass filter for derivative term</div>
                          <div>- Updated unit tests for PID class</div>
                          <div className="mt-2 text-green-400">## Testing</div>
                          <div>- [x] Unit tests pass</div>
                          <div>- [x] Tested on TurtleBot3 in simulation</div>
                          <div>- [x] Tested with real robot</div>
                          <div className="mt-2 text-green-400">## Closes</div>
                          <div>Closes #123</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Tipos de PR</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="card border-l-4 border-l-red-500">
                      <h5 className="font-semibold text-slate-200 mb-2">🚨 Hotfix</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Bug crítico en producción</li>
                        <li>• Se mergea directo a main</li>
                        <li>• Requiere testing inmediato</li>
                        <li>• Documentación después</li>
                      </ul>
                    </div>
                    <div className="card border-l-4 border-l-blue-500">
                      <h5 className="font-semibold text-slate-200 mb-2">✨ Feature</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Nueva funcionalidad completa</li>
                        <li>• Testing exhaustivo</li>
                        <li>• Documentación incluida</li>
                        <li>• Backward compatibility</li>
                      </ul>
                    </div>
                    <div className="card border-l-4 border-l-green-500">
                      <h5 className="font-semibold text-slate-200 mb-2">🔧 Refactor</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Mejora código existente</li>
                        <li>• Sin cambios funcionales</li>
                        <li>• Performance o legibilidad</li>
                        <li>• Tests existentes siguen pasando</li>
                      </ul>
                    </div>
                    <div className="card border-l-4 border-l-purple-500">
                      <h5 className="font-semibold text-slate-200 mb-2">📚 Docs</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Actualizar documentación</li>
                        <li>• Ejemplos de uso</li>
                        <li>• Corregir typos</li>
                        <li>• Traducir contenido</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Draft PRs</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Los Draft PRs te permiten mostrar work-in-progress y recibir feedback temprano.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Cuándo usar Draft:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Feature grande en desarrollo</li>
                          <li>• Quieres feedback de diseño</li>
                          <li>• Trabajo colaborativo</li>
                          <li>• Experimentación de ideas</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Cómo marcar como Draft:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• En GitHub: "Create draft pull request"</li>
                          <li>• Título: "[WIP] Feature navigation"</li>
                          <li>• Convertir a ready cuando termine</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Keywords mágicas:</strong><br/>
                  • <code>Closes #123</code> - cierra el issue automáticamente<br/>
                  • <code>Fixes #123</code> - igual que closes<br/>
                  • <code>Related to #123</code> - solo referencia, no cierra
                </Callout>
              </div>
            </section>

            <section id="code-review">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                👀 Code Review
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">¿Qué es Code Review?</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Es el proceso donde otros desarrolladores revisan tu código antes de que se 
                      integre al proyecto. Mejora calidad, detecta bugs, y comparte conocimiento.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          ✅
                        </div>
                        <h5 className="font-semibold text-slate-200">Approve</h5>
                        <p className="text-slate-300 text-sm">Todo perfecto, listo para merge</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          💬
                        </div>
                        <h5 className="font-semibold text-slate-200">Comment</h5>
                        <p className="text-slate-300 text-sm">Feedback sin bloquear merge</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          🔄
                        </div>
                        <h5 className="font-semibold text-slate-200">Request Changes</h5>
                        <p className="text-slate-300 text-sm">Cambios necesarios antes de merge</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Hacer un buen review</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">✅ Buenas prácticas</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Sé constructivo y específico</li>
                          <li>• Pregunta "¿por qué?" antes de criticar</li>
                          <li>• Reconoce código bien escrito</li>
                          <li>• Enfócate en el código, no la persona</li>
                          <li>• Sugiere alternativas específicas</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">❌ Evitar</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• "Esto está mal" (sin explicar por qué)</li>
                          <li>• Comentarios personales</li>
                          <li>• Nitpicking excesivo sobre estilo</li>
                          <li>• Reviews de 200+ líneas de una vez</li>
                          <li>• Asumir intenciones maliciosas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Ejemplos de comentarios</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">💬 Sugerencia de mejora</h5>
                        <div className="bg-slate-900 p-3 rounded text-sm text-slate-300">
                          <p className="text-blue-400 mb-1">Comentario en línea 45:</p>
                          <p>¿Has considerado usar un diccionario aquí en lugar de múltiples if/elif? 
                          Sería más legible y fácil de mantener:</p>
                          <div className="bg-slate-800 p-2 rounded mt-2 font-mono text-xs">
                            <div>actions = {'{'}robot_name: action_function{'}'}</div>
                            <div>return actions.get(name, default_action)()</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">🐛 Posible bug</h5>
                        <div className="bg-slate-900 p-3 rounded text-sm text-slate-300">
                          <p className="text-red-400 mb-1">Comentario en línea 78:</p>
                          <p>Potential division by zero here if <code>sensor_readings</code> is empty. 
                          Maybe add a check or use <code>numpy.mean()</code> with a default value?</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">✅ Reconocimiento positivo</h5>
                        <div className="bg-slate-900 p-3 rounded text-sm text-slate-300">
                          <p className="text-green-400 mb-1">Comentario general:</p>
                          <p>Great job implementing the PID controller! The code is clean and well-documented. 
                          I especially like how you handled the anti-windup mechanism.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Responder a reviews</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 text-sm font-bold">✓</span>
                        <div>
                          <strong className="text-slate-200">Agradece el feedback:</strong>
                          <p className="text-slate-300 text-sm">"Thanks for catching that! Fixed in commit abc123."</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 text-sm font-bold">✓</span>
                        <div>
                          <strong className="text-slate-200">Explica tus decisiones:</strong>
                          <p className="text-slate-300 text-sm">"I used this approach because it's more memory efficient for large sensor arrays."</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 text-sm font-bold">✓</span>
                        <div>
                          <strong className="text-slate-200">Pide clarificación:</strong>
                          <p className="text-slate-300 text-sm">"Could you elaborate on the performance concern? I'm not seeing the bottleneck."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Reviews automáticos:</strong> Muchos proyectos usan CI/CD que automáticamente 
                  ejecuta tests, linters, y security scans. ¡Aprovecha estas herramientas!
                </Callout>
              </div>
            </section>

            <section id="merge-strategies">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔄 Estrategias de merge
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Tipos de merge</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="card border-l-4 border-l-blue-500">
                      <h5 className="font-semibold text-slate-200 mb-2">🔀 Merge Commit</h5>
                      <p className="text-slate-300 text-sm mb-2">
                        Crea un commit especial que combina ambas branches.
                      </p>
                      <ul className="space-y-1 text-slate-300 text-xs">
                        <li>• Preserva historial completo</li>
                        <li>• Fácil de revertir el PR completo</li>
                        <li>• Historial puede ser "ruidoso"</li>
                      </ul>
                    </div>
                    <div className="card border-l-4 border-l-green-500">
                      <h5 className="font-semibold text-slate-200 mb-2">⚡ Squash and Merge</h5>
                      <p className="text-slate-300 text-sm mb-2">
                        Combina todos los commits del PR en uno solo.
                      </p>
                      <ul className="space-y-1 text-slate-300 text-xs">
                        <li>• Historial limpio y linear</li>
                        <li>• Un commit = una feature</li>
                        <li>• Pierde detalle de desarrollo</li>
                      </ul>
                    </div>
                    <div className="card border-l-4 border-l-purple-500">
                      <h5 className="font-semibold text-slate-200 mb-2">🎯 Rebase and Merge</h5>
                      <p className="text-slate-300 text-sm mb-2">
                        Aplica commits uno por uno sobre main.
                      </p>
                      <ul className="space-y-1 text-slate-300 text-xs">
                        <li>• Historial completamente linear</li>
                        <li>• Preserva commits individuales</li>
                        <li>• Requiere commits limpios</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">¿Cuál usar?</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">🏢 Proyectos corporativos</h5>
                        <p className="text-slate-300 text-sm">
                          <strong>Squash and Merge:</strong> Historial limpio, cada PR es una unidad de trabajo clara.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">🔬 Proyectos de investigación</h5>
                        <p className="text-slate-300 text-sm">
                          <strong>Merge Commit:</strong> Preserva el proceso completo de experimentación y desarrollo.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">📚 Librerías open source</h5>
                        <p className="text-slate-300 text-sm">
                          <strong>Rebase and Merge:</strong> Historial perfecto para debugging y bisecting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Preparar commits para merge</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Interactive rebase para limpiar historial</div>
                      <div>git rebase -i HEAD~3</div>
                      <div className="mt-2"># En el editor que se abre:</div>
                      <div># pick = mantener commit</div>
                      <div># squash = combinar con anterior</div>
                      <div># reword = cambiar mensaje</div>
                      <div># drop = eliminar commit</div>
                    </div>
                    <p className="text-slate-300 mt-3 text-sm">
                      <strong>Tip:</strong> Haz esto ANTES de crear el PR para evitar reescribir historial público.
                    </p>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Regla de oro:</strong> Nunca reescribas historial que ya está en GitHub (pushed). 
                  Solo haz rebase/squash en commits locales.
                </Callout>
              </div>
            </section>

            <section id="project-management">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📊 Project management
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">GitHub Projects</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      GitHub Projects es como Trello integrado con tu repositorio. Perfecto para 
                      gestionar desarrollo de features complejas y coordinación de equipo.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          📋
                        </div>
                        <h5 className="font-semibold text-slate-200">Backlog</h5>
                        <p className="text-slate-300 text-sm">Ideas y tareas futuras</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          🚧
                        </div>
                        <h5 className="font-semibold text-slate-200">In Progress</h5>
                        <p className="text-slate-300 text-sm">Trabajo activo</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          ✅
                        </div>
                        <h5 className="font-semibold text-slate-200">Done</h5>
                        <p className="text-slate-300 text-sm">Completado y mergeado</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Workflow con Projects</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <ol className="space-y-2 text-slate-300 text-sm">
                      <li><strong>1. Planning:</strong> Crear Issues para todas las tareas del sprint</li>
                      <li><strong>2. Organizar:</strong> Asignar Issues a columnas y personas</li>
                      <li><strong>3. Desarrollo:</strong> Mover cards cuando empiezas a trabajar</li>
                      <li><strong>4. Review:</strong> PRs se linked automáticamente con Issues</li>
                      <li><strong>5. Delivery:</strong> Al mergear PR, Issue se mueve a "Done" automáticamente</li>
                    </ol>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Templates para Issues</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Crea templates para estandarizar cómo el equipo reporta bugs y solicita features.
                    </p>
                    <div className="bg-slate-900 p-3 rounded text-sm text-slate-300">
                      <div className="text-green-400"># .github/ISSUE_TEMPLATE/bug_report.yml</div>
                      <div>name: Bug Report</div>
                      <div>description: File a bug report</div>
                      <div>body:</div>
                      <div>&nbsp;&nbsp;- type: textarea</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;id: what-happened</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;attributes:</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: What happened?</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: A clear description of the bug</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Automation con Actions</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Automaciones útiles:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Auto-assign PRs al autor</li>
                          <li>• Etiquetar PRs por archivos cambiados</li>
                          <li>• Cerrar Issues stalé automáticamente</li>
                          <li>• Notify team en Slack sobre releases</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">CI/CD básico:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Ejecutar tests en cada PR</li>
                          <li>• Lint code style automáticamente</li>
                          <li>• Build y deploy en merge a main</li>
                          <li>• Security scan de dependencias</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Escalabilidad:</strong> GitHub Projects funciona desde proyectos personales 
                  hasta equipos de 100+ personas. Empieza simple y añade complejidad según necesites.
                </Callout>
              </div>
            </section>

            <section id="mejores-practicas">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🏆 Mejores prácticas
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-3">✅ Do (Hacer)</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Escribir Issues descriptivos y reproducibles</li>
                      <li>• PRs pequeños (&lt; 400 líneas de código)</li>
                      <li>• Revisar PRs en &lt; 24 horas</li>
                      <li>• Tests automáticos siempre pasando</li>
                      <li>• Commits atómicos con mensajes claros</li>
                      <li>• Documentar decisiones importantes</li>
                      <li>• Usar templates para consistencia</li>
                    </ul>
                  </div>

                  <div className="card border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-slate-200 mb-3">❌ Don't (No hacer)</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• PRs gigantes (1000+ líneas)</li>
                      <li>• Commits tipo "fix", "update", "changes"</li>
                      <li>• Mergear sin review (excepto hotfixes)</li>
                      <li>• Ignorar failing tests</li>
                      <li>• Reviews personales o agresivos</li>
                      <li>• Force push a branches públicas</li>
                      <li>• Dejar PRs "colgados" sin feedback</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Comunicación efectiva</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">En Issues:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• Contexto: ¿qué estabas haciendo?</li>
                          <li>• Pasos para reproducir el problema</li>
                          <li>• Comportamiento esperado vs actual</li>
                          <li>• Screenshots/logs cuando sea relevante</li>
                          <li>• Entorno: OS, versiones, hardware</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">En PRs:</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li>• ¿Por qué se necesita este cambio?</li>
                          <li>• ¿Qué alternativas consideraste?</li>
                          <li>• ¿Cómo lo probaste?</li>
                          <li>• ¿Hay breaking changes?</li>
                          <li>• ¿Qué debería revisar especialmente?</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Mantener repositorio limpio</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Limpiar branches mergeadas</div>
                      <div>git branch --merged | grep -v main | xargs git branch -d</div>
                      <div className="mt-2"># Actualizar referencias remotas</div>
                      <div>git remote prune origin</div>
                      <div className="mt-2"># Limpiar tags locales no existentes en remoto</div>
                      <div>git tag -l | xargs git tag -d && git fetch --tags</div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Regla 24/48:</strong> Revisar PRs en 24h, responder a reviews en 48h. 
                  Mantiene flujo productivo y evita context switching excesivo.
                </Callout>
              </div>
            </section>

            <section id="validacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ✅ Validación final
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Verifica que dominas la colaboración avanzada en GitHub:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Crear Issues detallados y bien estructurados',
                    'Hacer fork y mantenerlo sincronizado',
                    'Crear PRs profesionales con descripción completa',
                    'Realizar code reviews constructivos',
                    'Entender diferentes estrategias de merge',
                    'Usar Projects para gestión de tareas',
                    'Aplicar mejores prácticas de colaboración',
                    'Contribuir a proyectos open source'
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
                  <h4 className="font-semibold text-slate-200 mb-2">Proyecto práctico avanzado</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Demuestra tu dominio colaborando en un proyecto real:
                  </p>
                  <ol className="space-y-1 text-slate-300 text-sm">
                    <li>1. <strong>Fork</strong> un proyecto ROS open source que te interese</li>
                    <li>2. <strong>Encuentra</strong> un Issue etiquetado como "good first issue"</li>
                    <li>3. <strong>Crea</strong> una branch específica para esa tarea</li>
                    <li>4. <strong>Implementa</strong> la solución con commits bien documentados</li>
                    <li>5. <strong>Push</strong> y crea un PR siguiendo el template del proyecto</li>
                    <li>6. <strong>Responde</strong> a feedback del maintainer profesionalmente</li>
                    <li>7. <strong>Celebra</strong> tu primera contribución open source! 🎉</li>
                  </ol>
                </div>

                <Callout type="check">
                  <strong>¡Excelente!</strong> Ahora tienes las habilidades para colaborar profesionalmente 
                  en cualquier proyecto. Estás listo para contribuir a ROS, participar en hackathons, 
                  y trabajar en equipos de desarrollo de robótica.
                </Callout>
              </div>
            </section>

            <section id="recursos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔗 Recursos y referencias
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">GitHub oficial</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <a href="https://docs.github.com/en/pull-requests" className="text-blue-400 hover:underline">Pull Request docs</a></li>
                    <li>• <a href="https://docs.github.com/en/issues" className="text-blue-400 hover:underline">Issues docs</a></li>
                    <li>• <a href="https://github.com/features/project-management" className="text-blue-400 hover:underline">GitHub Projects</a></li>
                    <li>• <a href="https://github.com/skills" className="text-blue-400 hover:underline">GitHub Skills (practice)</a></li>
                  </ul>
                </div>
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">Proyectos para practicar</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <a href="https://github.com/ros" className="text-blue-400 hover:underline">ROS Organization</a></li>
                    <li>• <a href="https://github.com/osrf" className="text-blue-400 hover:underline">Open Source Robotics Foundation</a></li>
                    <li>• <a href="https://github.com/nasa" className="text-blue-400 hover:underline">NASA Open Source</a></li>
                    <li>• <a href="https://goodfirstissue.dev" className="text-blue-400 hover:underline">Good First Issue</a></li>
                  </ul>
                </div>
              </div>
            </section>
            </div>

            <TutorialNavigation 
              previous={{ title: "Git & GitHub básico", href: "/tutoriales/git-github" }}
              next={{ title: "Inicio", href: "/" }}
            />
          </main>

          <aside className="lg:col-span-1">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  );
}