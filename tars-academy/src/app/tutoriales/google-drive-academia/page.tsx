/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';

const tocItems = [
  { id: 'objetivo', title: '🎯 Objetivo', level: 2 },
  { id: 'contexto', title: '🧭 Contexto', level: 2 },
  { id: 'requisitos', title: '✅ Requisitos previos', level: 2 },
  { id: 'pasos', title: '🛠️ Pasos guiados', level: 2 },
  { id: 'paso-1', title: '1. Crear estructura de carpetas', level: 3 },
  { id: 'paso-2', title: '2. Configurar permisos', level: 3 },
  { id: 'paso-3', title: '3. Compartir con equipo', level: 3 },
  { id: 'paso-4', title: '4. Nomenclatura de archivos', level: 3 },
  { id: 'paso-5', title: '5. Control de versiones', level: 3 },
  { id: 'validacion', title: '🧪 Validación final', level: 2 },
  { id: 'problemas', title: '🚑 Problemas frecuentes', level: 2 },
  { id: 'recursos', title: '🔗 Recursos', level: 2 },
  { id: 'siguientes', title: '➡️ Siguientes pasos', level: 2 },
];

export default function GoogleDriveAcademia() {
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
                  { label: 'Herramientas', href: '/herramientas' },
                  { label: 'Google Drive para Academia' }
                ]}
              />
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Google Drive para Academia (organización y colaboración)
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Configura tu Google Drive con la estructura y permisos correctos para trabajar en equipo en proyectos de robótica.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="Intermedio" variant="level" icon="📚" />
                <TutorialChip label="20 min" variant="time" icon="⏱️" />
                <TutorialChip label="Actualizado 09/2025" variant="updated" icon="🔄" />
                <TutorialChip label="Verificado con Drive v2025" variant="status" icon="✅" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary">
                  📋 Ver requisitos
                </button>
              </div>
            </div>

            {/* Contenido del tutorial */}
            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="objetivo">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🎯 Objetivo
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Al finalizar este tutorial, tendrás un Google Drive correctamente organizado con carpetas estructuradas, 
                  permisos adecuados para colaboración en equipo, y un sistema de nomenclatura que facilitará encontrar 
                  y versionar todos los documentos de tus proyectos de robótica.
                </p>
              </section>

              <section id="contexto">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🧭 Contexto
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Este tutorial es parte de las <strong>herramientas esenciales</strong> de Tars Academy. 
                  Google Drive será tu centro de colaboración para documentos, presentaciones, hojas de cálculo 
                  y archivos compartidos con tu equipo de robótica.
                </p>
                <Callout type="info">
                  Aunque usarás Git para el código, Google Drive es perfecto para documentación, 
                  planificación de proyectos, y archivos que necesitan edición colaborativa en tiempo real.
                </Callout>
              </section>

              <section id="requisitos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  ✅ Requisitos previos
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Cuenta de Google</strong> (Gmail o Google Workspace)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Navegador web actualizado</strong> (Chrome, Firefox, Edge)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>15 GB de espacio disponible</strong> en Google Drive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">○</span>
                    <span><strong>Opcional:</strong> Aplicación Google Drive para escritorio</span>
                  </li>
                </ul>
              </section>

              <section id="pasos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                  🛠️ Pasos guiados
                </h2>

                <div className="space-y-8">
                  <div id="paso-1" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Crear estructura de carpetas base
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Crearemos una estructura organizada que facilite encontrar documentos y mantener el orden en equipo.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4 border-l-4 border-space-500">
                      <p className="text-sm text-slate-400 mb-3">📁 Estructura recomendada:</p>
                      <div className="font-mono text-xs text-slate-300 space-y-1">
                        <div>📁 <strong>TARS-Academia/</strong></div>
                        <div className="ml-4">├── 📁 <strong>01-Onboarding/</strong></div>
                        <div className="ml-8">│   ├── 📄 Checklist-Onboarding.gdoc</div>
                        <div className="ml-8">│   └── 📄 Recursos-Iniciales.gdoc</div>
                        <div className="ml-4">├── 📁 <strong>02-Proyectos/</strong></div>
                        <div className="ml-8">│   ├── 📁 Proyecto-Robot-Explorador/</div>
                        <div className="ml-8">│   └── 📁 Proyecto-Brazo-Robotico/</div>
                        <div className="ml-4">├── 📁 <strong>03-Documentacion/</strong></div>
                        <div className="ml-8">│   ├── 📄 Guias-ROS2.gdoc</div>
                        <div className="ml-8">│   └── 📄 Buenas-Practicas.gdoc</div>
                        <div className="ml-4">├── 📁 <strong>04-Planificacion/</strong></div>
                        <div className="ml-8">│   ├── 📊 Cronograma-General.gsheet</div>
                        <div className="ml-8">│   └── 📊 Seguimiento-Tareas.gsheet</div>
                        <div className="ml-4">└── 📁 <strong>05-Recursos/</strong></div>
                        <div className="ml-8">├── 📁 Imagenes/</div>
                        <div className="ml-8">└── 📁 Archivos-CAD/</div>
                      </div>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Pasos para crear:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Ve a <a href="https://drive.google.com" className="text-space-400 hover:text-space-300">drive.google.com</a></li>
                        <li>Haz clic en "Nuevo" → "Carpeta"</li>
                        <li>Crea la carpeta principal "TARS-Academia"</li>
                        <li>Entra en la carpeta y crea las subcarpetas numeradas</li>
                        <li>Repite para todas las carpetas de la estructura</li>
                      </ol>
                    </div>

                    <Callout type="tip">
                      Los números (01, 02, 03...) mantienen el orden alfabético y hacen más fácil 
                      encontrar las carpetas principales.
                    </Callout>

                    <Callout type="check">
                      <strong>Cómo verificar:</strong> Tienes la carpeta "TARS-Academia" con las 5 subcarpetas 
                      principales numeradas y organizadas.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 5-8 minutos</p>
                  </div>

                  <div id="paso-2" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Configurar permisos de carpetas
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Configuraremos los permisos adecuados para que tu equipo pueda colaborar eficientemente.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Niveles de permisos recomendados:</p>
                      <div className="space-y-2 text-slate-300 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-green-400">👥</span>
                          <div>
                            <strong>TARS-Academia (raíz):</strong> Solo tú como propietario
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400">✏️</span>
                          <div>
                            <strong>02-Proyectos:</strong> Editor para compañeros de equipo
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-400">👁️</span>
                          <div>
                            <strong>03-Documentacion:</strong> Comentario para todo el grupo
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400">✏️</span>
                          <div>
                            <strong>04-Planificacion:</strong> Editor para coordinadores
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Cómo configurar permisos:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Haz clic derecho en la carpeta → "Compartir"</li>
                        <li>Añade emails de compañeros en "Personas"</li>
                        <li>Selecciona nivel: "Visor", "Comentador" o "Editor"</li>
                        <li>Marca "Notificar a las personas" si es necesario</li>
                        <li>Haz clic en "Enviar"</li>
                      </ol>
                    </div>

                    <Callout type="warning">
                      No compartas la carpeta raíz con permisos de "Editor" - mejor comparte 
                      subcarpetas específicas según el rol de cada persona.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 5-7 minutos</p>
                  </div>

                  <div id="paso-3" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Compartir con el equipo de trabajo
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Crearemos enlaces de acceso directo y configuraremos notificaciones para el equipo.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Estrategia de compartición:</p>
                      <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                        <li>
                          <strong>Enlaces directos:</strong> Crea enlaces para cada carpeta principal
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-slate-400">
                            <li>Haz clic derecho → "Obtener enlace"</li>
                            <li>Cambia a "Cualquiera con el enlace"</li>
                            <li>Ajusta permisos según necesidad</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Invitaciones directas:</strong> Para carpetas sensibles
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-slate-400">
                            <li>Solo por email específico</li>
                            <li>Con permisos limitados</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Documento de enlaces:</strong> Crea un documento con todos los links importantes
                        </li>
                      </ol>
                    </div>

                    <Callout type="tip">
                      Crea un documento "🔗 Enlaces-Rapidos.gdoc" en la carpeta raíz con todos los 
                      enlaces importantes para que el equipo los tenga siempre a mano.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 3-5 minutos</p>
                  </div>

                  <div id="paso-4" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      Establecer nomenclatura de archivos
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Definiremos un sistema de nombres consistente para que todos encuentren fácilmente los archivos.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4 border-l-4 border-energy-500">
                      <p className="text-sm text-slate-400 mb-3">📝 Convenciones de nomenclatura:</p>
                      <div className="space-y-3 text-slate-300 text-sm">
                        <div>
                          <strong>Documentos de proyecto:</strong>
                          <code className="block bg-slate-900 p-2 mt-1 rounded text-xs">
                            [Proyecto]-[Tipo]-[Descripcion]-[Version]<br/>
                            Ej: RobotExplorador-Diseno-SistemaSensores-v2.1
                          </code>
                        </div>
                        <div>
                          <strong>Reuniones y actas:</strong>
                          <code className="block bg-slate-900 p-2 mt-1 rounded text-xs">
                            [YYYY-MM-DD]-[Tipo]-[Tema]<br/>
                            Ej: 2025-09-15-Reunion-PlanificacionSprint
                          </code>
                        </div>
                        <div>
                          <strong>Documentación técnica:</strong>
                          <code className="block bg-slate-900 p-2 mt-1 rounded text-xs">
                            [Categoria]-[Subtema]-[Version]<br/>
                            Ej: ROS2-ConfiguracionNodos-v1.3
                          </code>
                        </div>
                      </div>
                    </div>

                    <Callout type="info">
                      Evita espacios, acentos y caracteres especiales en nombres de archivos. 
                      Usa guiones (-) para separar palabras y puntos (.) solo antes de la extensión.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 2-3 minutos</p>
                  </div>

                  <div id="paso-5" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      Configurar control de versiones
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Aprovecharemos las herramientas de Google Drive para mantener un historial de cambios y versiones.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Estrategias de versionado:</p>
                      <div className="space-y-3 text-slate-300 text-sm">
                        <div>
                          <strong>1. Historial automático de Google:</strong>
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>Google Docs/Sheets guarda automáticamente cada cambio</li>
                            <li>Accede con: Archivo → Historial de versiones</li>
                            <li>Puedes restaurar versiones anteriores</li>
                          </ul>
                        </div>
                        <div>
                          <strong>2. Versiones nombradas:</strong>
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>En hitos importantes: Archivo → Historial → "Asignar nombre a la versión actual"</li>
                            <li>Usa nombres descriptivos: "v1.0-Revision-Final", "v2.0-Cambios-Equipo"</li>
                          </ul>
                        </div>
                        <div>
                          <strong>3. Archivos importantes:</strong>
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>Para documentos críticos, haz copias manuales ocasionalmente</li>
                            <li>Nombra: "Documento-BACKUP-[fecha]"</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Callout type="tip">
                      Configura notificaciones de cambios: Haz clic derecho en archivos importantes 
                      → "Obtener notificaciones" para saber cuándo alguien los modifica.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 3-5 minutos</p>
                  </div>
                </div>
              </section>

              <section id="validacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🧪 Validación final
                </h2>
                <div className="card">
                  <p className="text-slate-300 mb-4">
                    Verifica que tu configuración de Google Drive está lista para el trabajo en equipo:
                  </p>
                  <div className="space-y-3">
                    {[
                      'La carpeta "TARS-Academia" está creada con las 5 subcarpetas numeradas',
                      'Al menos una carpeta está compartida con un compañero de equipo',
                      'Puedes acceder al historial de versiones de un documento de Google',
                      'Has creado un documento con enlaces rápidos a las carpetas principales',
                      'Los nombres de archivos siguen la convención establecida'
                    ].map((item, index) => (
                      <label key={index} className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 rounded border-slate-600 bg-slate-700 text-space-500 focus:ring-space-500" />
                        <span className="text-slate-300">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </section>

              <section id="problemas">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🚑 Problemas frecuentes y solución
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      problema: "No puedo compartir carpetas - aparece 'Sin permisos'",
                      causa: "Cuenta de Google Workspace con restricciones de administrador",
                      solucion: "Contacta al administrador de tu organización o usa una cuenta personal de Gmail para proyectos de la academia"
                    },
                    {
                      problema: "Los compañeros no reciben las invitaciones por email",
                      causa: "Emails en spam o direcciones incorrectas", 
                      solucion: "Verifica las direcciones de email y pide que revisen la carpeta de spam. Usa enlaces directos como alternativa"
                    },
                    {
                      problema: "Se crearon muchas versiones duplicadas de un documento",
                      causa: "Varias personas editando simultáneamente sin coordinación",
                      solucion: "Usa comentarios en lugar de editar directamente cuando sea posible. Coordina quién edita y cuándo"
                    },
                    {
                      problema: "No encuentro archivos en la estructura de carpetas",
                      causa: "Nomenclatura inconsistente o archivos mal ubicados",
                      solucion: "Usa la función de búsqueda de Drive. Reorganiza archivos siguiendo la nomenclatura establecida"
                    },
                    {
                      problema: "Se alcanzó el límite de 15GB de Google Drive",
                      causa: "Muchos archivos grandes o duplicados",
                      solucion: "Limpia archivos duplicados, usa Google Photos para imágenes, considera Google Workspace o almacena archivos CAD en GitHub LFS"
                    }
                  ].map((item, index) => (
                    <div key={index} className="card border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-slate-200 mb-2">P-{String(index + 1).padStart(2, '0')}: {item.problema}</h4>
                      <p className="text-slate-400 text-sm mb-2"><strong>Causa probable:</strong> {item.causa}</p>
                      <p className="text-slate-300 text-sm"><strong>Solución:</strong> {item.solucion}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="recursos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🔗 Recursos y referencias
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Documentación oficial</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="https://support.google.com/drive" className="text-space-400 hover:text-space-300">Centro de ayuda Google Drive</a></li>
                      <li><a href="https://support.google.com/docs/answer/190843" className="text-space-400 hover:text-space-300">Compartir archivos en Drive</a></li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Herramientas adicionales</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="/tutoriales/google-workspace-avanzado" className="text-space-400 hover:text-space-300">Google Workspace avanzado</a></li>
                      <li><a href="/tutoriales/backup-archivos" className="text-space-400 hover:text-space-300">Estrategias de backup</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="siguientes">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  ➡️ Siguientes pasos
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card border-l-4 border-l-space-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Domina las herramientas</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Aprende a usar Google Docs, Sheets y Slides para documentación técnica.
                    </p>
                    <a href="/tutoriales/google-docs-tecnico" className="btn-primary inline-block">
                      Google Docs técnico →
                    </a>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Complementa con Git</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <a href="/tutoriales/git-github-desktop" className="text-space-400 hover:text-space-300">Git y GitHub Desktop</a></li>
                      <li>• <a href="/tutoriales/integracion-drive-git" className="text-space-400 hover:text-space-300">Integrar Drive con Git</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="border-t border-slate-700 pt-6">
                <h2 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  🤝 ¿Mejorar este tutorial?
                </h2>
                <p className="text-slate-300 text-sm">
                  Si tienes sugerencias para mejorar la organización o encontraste algún problema, 
                  <a href="https://github.com/tars-academy/tutoriales/issues" className="text-space-400 hover:text-space-300 ml-1">compártelo en GitHub</a> 
                  o déjanos un comentario. ¡Tu experiencia ayuda a otros estudiantes! 💙
                </p>
              </section>
            </div>

            {/* Navegación */}
            <TutorialNavigation 
              previous={{
                title: "VS Code configuración básica",
                href: "/tutoriales/vscode-setup"
              }}
              next={{
                title: "Documentación técnica con Google Docs",
                href: "/tutoriales/google-docs-tecnico"
              }}
            />
          </div>

          {/* Sidebar con TOC */}
          <div className="hidden lg:block w-80">
            <TableOfContents items={tocItems} />
          </div>
        </div>

        {/* TOC móvil */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>
      </div>
    </div>
  );
}
