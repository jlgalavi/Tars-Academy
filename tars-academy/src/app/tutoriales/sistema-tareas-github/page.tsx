/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";
import SpaceParticles from "@/components/SpaceParticles";

export default function SistemaTareasGitHub() {
  const handleStartClick = () => {
    const element = document.getElementById('flujo-trabajo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrerequisitesClick = () => {
    const element = document.getElementById('introduccion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tocItems = [
    { id: "introduccion", title: "📋 Introducción", level: 2 },
    { id: "flujo-trabajo", title: "🔄 Flujo de trabajo", level: 2 },
    { id: "estados-tarea", title: "📊 Estados de una tarea", level: 2 },
    { id: "que-es-issue", title: "🎯 ¿Qué es una Issue?", level: 2 },
    { id: "creacion-issue", title: "➕ Creación y asignación", level: 3 },
    { id: "sub-issues", title: "🔗 Sub-issues", level: 3 },
    { id: "recepcion-tarea", title: "📬 Recepción de tareas", level: 3 },
    { id: "comunicacion-issue", title: "💬 Comunicación en Issues", level: 3 },
    { id: "visualizacion-issue", title: "👀 Visualización de Issues", level: 3 },
    { id: "github-projects", title: "📊 GitHub Projects", level: 2 },
    { id: "vistas-proyecto", title: "🗂️ Vistas del proyecto", level: 3 },
    { id: "crear-proyecto", title: "🆕 Crear un proyecto", level: 3 },
    { id: "documentacion", title: "📝 Documentación del trabajo", level: 2 },
    { id: "conclusiones", title: "✅ Conclusiones", level: 2 }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SpaceParticles mode="tutorial" intensity={0.5} showLines={false} />
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 gap-8">
          <main className="lg:col-span-4 xl:col-span-3 max-w-4xl mx-auto lg:mx-0">
            <Breadcrumb 
              items={[
                { label: "Inicio", href: "/" },
                { label: "Tutoriales", href: "/" },
                { label: "Sistema de Tareas" }
              ]} 
            />
            
            <div className="mt-6 flex flex-wrap gap-2 mb-8">
              <TutorialChip label="GitHub" variant="status" icon="🐙" />
              <TutorialChip label="Gestión" variant="status" icon="📋" />
              <TutorialChip label="Esencial" variant="level" icon="⭐" />
            </div>

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                📋 Sistema de Tareas con GitHub
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Aprende a utilizar el nuevo sistema de gestión de tareas del equipo basado en 
                GitHub Issues y GitHub Projects. Este sistema permite un seguimiento efectivo, 
                comunicación centralizada y transparencia total en el trabajo del equipo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="btn-primary" onClick={handleStartClick}>
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary" onClick={handlePrerequisitesClick}>
                  📋 Ver introducción
                </button>
              </div>
            </header>

            <div className="space-y-8">
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📋 Introducción
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    A partir de ahora, las tareas del equipo seguirán un nuevo sistema de organización 
                    y seguimiento. Este cambio se realiza porque el sistema anterior presentaba varios problemas:
                  </p>
                  
                  <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-400 mb-3">❌ Problemas del sistema anterior</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Poco seguimiento real del estado de las tareas</li>
                      <li>• Enfoque excesivamente semanal, sin considerar la duración real de las tareas</li>
                      <li>• Pérdida de información y decisiones tomadas fuera de un espacio centralizado</li>
                    </ul>
                  </div>

                  <p className="text-slate-300">
                    Por todo esto, se presenta un nuevo sistema usando <strong>GitHub Issues</strong> y{' '}
                    <strong>GitHub Projects</strong>. Este sistema resulta especialmente adecuado porque:
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-400 mb-3">✅ Ventajas del nuevo sistema</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Permite que cualquier miembro del equipo vea qué tareas se están realizando</li>
                      <li>• Facilita conocer el estado general del trabajo y detectar dependencias</li>
                      <li>• Centraliza la información y las decisiones en un único lugar</li>
                      <li>• Se apoya en GitHub, una herramienta que el equipo ya utiliza habitualmente</li>
                    </ul>
                  </div>

                  <Callout type="warning">
                    <strong>⚠️ Importante:</strong> A partir de este momento, todas las tareas del equipo se gestionarán 
                    exclusivamente mediante este sistema.
                  </Callout>
                </div>
              </section>

              <section id="flujo-trabajo">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🔄 Flujo de trabajo
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    El sistema mantiene la asignación directa de tareas por parte del coordinador, 
                    pero con un cambio fundamental: la tarea asignada pasa a ser una Issue de GitHub, 
                    que actúa como punto central de seguimiento y comunicación.
                  </p>

                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-4">📝 Proceso paso a paso</h4>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <p className="text-slate-300">
                            El coordinador <strong>crea una Issue</strong> describiendo la tarea y la 
                            asigna a una o varias personas responsables.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <p className="text-slate-300">
                            Las personas asignadas <strong>reciben una notificación automática</strong> por 
                            correo electrónico.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <p className="text-slate-300">
                            Cuando se comienza a trabajar en la tarea, la persona responsable debe cambiar 
                            su estado a <strong>En Progreso</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                        <div>
                          <p className="text-slate-300">
                            Cualquier duda, avance o problema se comunica mediante los <strong>comentarios 
                            de la Issue</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          5
                        </div>
                        <div>
                          <p className="text-slate-300 mb-2">
                            Al finalizar el trabajo:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                            <li>Se crea un documento explicando lo realizado (solo si la tarea lo requiere)</li>
                            <li>El documento se sube al Drive del equipo</li>
                            <li>Se añade el enlace al documento como comentario en la Issue</li>
                            <li>La Issue pasa al estado <strong>En Revisión</strong></li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          6
                        </div>
                        <div>
                          <p className="text-slate-300 mb-2">
                            El coordinador (o una persona asignada) revisa el trabajo y decide si:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                            <li>Cerrar la Issue</li>
                            <li>Solicitar cambios adicionales</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Callout type="info">
                    <strong>📊 Trazabilidad:</strong> Este procedimiento garantiza que toda la información relacionada con una tarea 
                    quede centralizada, accesible y trazable.
                  </Callout>
                </div>
              </section>

              <section id="estados-tarea">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📊 Estados de una tarea
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Las tareas pueden encontrarse en distintos estados, visibles en el tablero de GitHub Projects:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-gray-500">
                      <h4 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        📝 Por Hacer
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Tarea creada y pendiente de comenzar.
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                        ⚙️ En Progreso
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Tarea en desarrollo activo.
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                        🔍 En Revisión
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Tarea finalizada y pendiente de validación.
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                        ✅ Cerrada
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Tarea revisada y aceptada.
                      </p>
                    </div>
                  </div>

                  <Callout type="warning">
                    <div className="space-y-2">
                      <p>
                        <strong>⚠️ Responsabilidad del cambio de estado:</strong> El cambio de estado a <strong>En Progreso</strong> y <strong>En Revisión</strong> lo 
                        realiza la persona responsable de la tarea.
                      </p>
                      <p>
                        El estado <strong>En Revisión</strong> indica que el responsable considera el trabajo 
                        finalizado. Las tareas no deben cerrarse directamente sin pasar por este estado, salvo 
                        indicación expresa del coordinador.
                      </p>
                    </div>
                  </Callout>

                  <Callout type="info">
                    <strong>🔄 Flexibilidad del sistema:</strong> En el futuro podrán añadirse nuevos estados si las necesidades del equipo lo requieren.
                  </Callout>
                </div>
              </section>

              <section id="que-es-issue">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🎯 ¿Qué es una Issue y cómo se utiliza?
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">¿Qué es una Issue en GitHub?</h3>
                  <p className="text-slate-300">
                    Una Issue representa una <strong>tarea o conjunto de acciones relacionadas</strong> que 
                    deben realizarse dentro del equipo. Cada Issue posee un identificador único que permite 
                    referenciarla de forma inequívoca. Las Issues pueden representar tanto tareas complejas 
                    como acciones simples.
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3">💡 Ejemplos de Issues</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Diseñar una pieza mecánica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Implementar una funcionalidad de software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Corregir un error que impide la compilación</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="creacion-issue">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  ➕ Creación y asignación de una Issue
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Inicialmente, las Issues son creadas y asignadas por el coordinador del equipo. 
                    En el futuro, este permiso podrá ampliarse según la madurez del sistema.
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-4">📋 Pasos para crear una Issue</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">1.</span>
                        <span>Acceder al repositorio correspondiente</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">2.</span>
                        <span>Ir a la pestaña <strong>Issues</strong></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">3.</span>
                        <span>Pulsar <strong>New Issue</strong></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">4.</span>
                        <span>Escribir un título claro y descriptivo</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">5.</span>
                        <span>Añadir una descripción con la información necesaria</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">6.</span>
                        <span>Asignar la Issue a la persona responsable (<strong>Assignees</strong>)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">7.</span>
                        <span>Añadir las etiquetas necesarias (<strong>Labels</strong>)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">8.</span>
                        <span>Seleccionar el tipo de Issue (<strong>Type</strong>), normalmente <code>Task</code></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">9.</span>
                        <span>Asociar la Issue al proyecto correspondiente (<strong>Projects</strong>)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">10.</span>
                        <span>Indicar si contribuye a un hito (<strong>Milestone</strong>)</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              <section id="sub-issues">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  🔗 Creación y uso de sub-issues
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    En algunos casos, una tarea puede ser demasiado grande o compleja para gestionarse 
                    mediante una única Issue. En estas situaciones, se podrá dividir la tarea en varias 
                    sub-issues.
                  </p>

                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="bg-slate-800 p-5 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3">🏗️ Estructura de sub-issues</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>La <strong>issue principal</strong> describe el objetivo general de la tarea</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Las <strong>sub-issues</strong> representan tareas más pequeñas y concretas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Cada sub-issue puede asignarse a una persona distinta</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Las sub-issues deben estar enlazadas claramente desde la Issue principal</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Callout type="warning">
                    <strong>⚠️ Completitud de la tarea principal:</strong> La Issue principal no se considerará finalizada hasta que todas sus sub-issues 
                    asociadas estén cerradas o completadas.
                  </Callout>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3">➕ Crear una sub-issue</h4>
                    <p className="text-slate-300">
                      La forma más sencilla de crear una sub-issue es pulsar el botón <strong>Create sub-issue</strong> que 
                      aparece cuando visualizas una issue ya creada. Por lo demás, la creación de la sub-issue es 
                      prácticamente igual que la creación de la issue principal, pero con una interfaz algo diferente.
                    </p>
                  </div>
                </div>
              </section>

              <section id="recepcion-tarea">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  📬 Recepción de una tarea por parte del responsable
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Cuando una persona es asignada a una Issue:
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 text-xl">📧</span>
                        <span>Recibe una <strong>notificación automática por correo electrónico</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 text-xl">🔗</span>
                        <span>Puede acceder a la Issue desde el enlace del correo o mediante el buscador de Issues de GitHub</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 text-xl">💼</span>
                        <span>La Issue se convierte en el <strong>espacio principal de trabajo y comunicación</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="comunicacion-issue">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  💬 Comunicación dentro de una issue
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Se recomienda que <strong>toda la comunicación relacionada con una tarea</strong> se realice 
                    mediante los comentarios de la Issue correspondiente. De esa manera es más sencillo seguir 
                    el hilo de la conversación y no perderse.
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3">💬 Tipos de comunicación</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Dudas técnicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Solicitudes de ayuda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Avisos de bloqueos o retrasos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Actualizaciones de progreso</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="visualizacion-issue">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  👀 Visualización de una issue ya creada
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Como se puede ver en la interfaz de GitHub, una issue posee muchos campos y secciones diferentes:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-slate-800 p-5 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3">📌 Título y detalles</h4>
                      <p className="text-slate-300 text-sm">
                        Incluye el título, el identificador (#ID), el estado, el tipo de tarea y el progreso 
                        de sub-issues (ej. 0/2).
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3">📝 Descripción de la tarea</h4>
                      <p className="text-slate-300 text-sm">
                        Es el recuadro con aquello que se ha colocado como descripción de la tarea, al cual 
                        se puede reaccionar con emojis.
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3">🔗 Sub-issues</h4>
                      <p className="text-slate-300 text-sm">
                        Este recuadro hace referencia a las Issues hijas de la Issue en la que nos encontramos. 
                        No aparecerá en caso de no tener sub-issues (en ese caso aparecerá el botón para crear una nueva). 
                        Si queremos ver las sub-issues más detalladamente, podemos hacer hover sobre esta para ver 
                        contexto o hacer clic directamente sobre el nombre.
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3">📜 Historial de la Issue</h4>
                      <p className="text-slate-300 text-sm">
                        Registra cronológicamente todos los cambios y comentarios (asignaciones, cambios de etiqueta, 
                        movimientos en el proyecto, comentarios de usuarios, etc.).
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg">
                      <h4 className="font-semibold text-slate-200 mb-3">📊 Barra vertical (derecha)</h4>
                      <p className="text-slate-300 text-sm mb-3">
                        Además de las secciones de asignación y etiquetas, encontramos:
                      </p>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span><strong>Relationships:</strong> Permite indicar si la tarea es una sub-issue de otra 
                          tarea padre, o decir si la tarea está siendo bloqueada (o bloquea) a otra.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span><strong>Development:</strong> Permite asignarle una rama o una Pull Request a la issue 
                          (útil para saber el código asignado a una issue).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span><strong>Notifications:</strong> Permite personalizar sobre qué cosas queremos recibir 
                          correos en cuanto a la actividad.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span><strong>Participants:</strong> Muestra qué personas han intervenido en la issue.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="github-projects">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📊 ¿Qué es GitHub Projects y cómo se utiliza?
                </h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">¿Qué es GitHub Projects?</h3>
                  <p className="text-slate-300">
                    GitHub Projects es una herramienta de organización y seguimiento del trabajo que permite 
                    visualizar y gestionar el progreso de un conjunto de Issues (y Pull Requests) dentro de un proyecto.
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <p className="text-slate-300 mb-3">
                      Un Project actúa como una <strong>vista global del estado del trabajo</strong>. A diferencia 
                      de las Issues individuales, un Project no representa una tarea concreta, sino la estructura 
                      que permite coordinar muchas tareas relacionadas.
                    </p>
                    <p className="text-slate-300">
                      Los Projects suelen organizarse mediante columnas o estados (por ejemplo: Pendiente, 
                      En progreso, En revisión, Completado).
                    </p>
                  </div>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3">💡 Ejemplos de uso</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Seguimiento del desarrollo completo de una aplicación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Organización del trabajo de una asignatura o proyecto académico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Planificación de iteraciones o entregas parciales</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="vistas-proyecto">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  🗂️ Vistas de un proyecto
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Un proyecto tiene hasta 3 vistas diferentes personalizables:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                        📋 Table (Tabla)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Una tabla sencilla en donde todas las issues aparecen en una columna y a continuación 
                        se encuentran diferentes columnas con cada una de las propiedades de las issues.
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                        📊 Board (Tablero)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        El equivalente a un tablero Kanban. Posee diferentes columnas que agrupan las tareas 
                        ya sea por estado o cualquier campo single select. Las issues se pueden mover de una 
                        columna a otra para cambiar su estado (drag & drop).
                      </p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        📅 Roadmap (Hoja de ruta)
                      </h4>
                      <p className="text-slate-300 text-sm">
                        El equivalente a un diagrama de Gantt, se usa para organizar las tareas temporalmente.
                      </p>
                    </div>
                  </div>

                  <Callout type="info">
                    <strong>🎨 Personalización:</strong> Cada vista se puede personalizar escogiendo qué campos mostrar, cómo agrupar las issues 
                    y cómo ordenarlas.
                  </Callout>
                </div>
              </section>

              <section id="crear-proyecto">
                <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  🆕 ¿Cómo crear un proyecto?
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Para crear un proyecto, hay que acceder a la pestaña <strong>Projects</strong> (accesible 
                    desde la organización o un repositorio específico). Las issues de un proyecto pueden 
                    pertenecer a múltiples repositorios.
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-4">📋 Pasos para crear un proyecto</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">1.</span>
                        <span>Darle al botón <strong>New Project</strong></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">2.</span>
                        <span>Seleccionar una plantilla (Team planning, Kanban, Bug tracker, etc.) o empezar 
                        desde cero seleccionando una vista (Table, Board, Roadmap)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">3.</span>
                        <span>Nombrar el proyecto</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">4.</span>
                        <span>(Opcional) Usar <strong>Bulk import items</strong> para importar issues 
                        existentes de un repositorio</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              <section id="documentacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📝 Documentación del trabajo
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    No todas las tareas requieren documentación formal. La necesidad de documentar dependerá 
                    del tipo de tarea realizada.
                  </p>

                  <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-400 mb-3">⚠️ Cuándo es obligatoria la documentación</h4>
                    <p className="text-slate-300 mb-3">La documentación es obligatoria en tareas que:</p>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Introduzcan cambios estructurales o de diseño</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Añadan nuevas funcionalidades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Afecten a trabajos futuros del equipo</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-400 mb-3">✅ Tareas sin documentación formal</h4>
                    <p className="text-slate-300">
                      En tareas muy simples o correcciones menores, es suficiente con describir brevemente 
                      la solución en los comentarios de la Issue.
                    </p>
                  </div>

                  <div className="bg-slate-800 p-5 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3">🔗 Enlace de la documentación</h4>
                    <p className="text-slate-300 mb-3">Cuando exista documentación:</p>
                    <ol className="space-y-2 text-slate-300">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">1.</span>
                        <span>Se crea el documento en Google Drive</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">2.</span>
                        <span>Se copia el enlace del documento</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 text-blue-400 font-bold">3.</span>
                        <span>Se añade el enlace como comentario en la Issue correspondiente</span>
                      </li>
                    </ol>
                  </div>

                  <Callout type="info">
                    <strong>💾 ¿Por qué en Drive?</strong> Esto se hace así debido a que los repositorios de GitHub admiten como máximo 1GB de 
                    almacenamiento. Colocar solo un enlace reduce el consumo de almacenamiento, permitiendo 
                    usar ese espacio para código.
                  </Callout>
                </div>
              </section>

              <section id="conclusiones">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  ✅ Conclusiones
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300">
                    El sistema propuesto mejora la organización, la comunicación y la trazabilidad del trabajo 
                    del equipo TARS UPV. Este sistema será revisado y ajustado si el equipo detecta problemas 
                    o posibles mejoras en su uso.
                  </p>

                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/30">
                    <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      🎯 Puntos clave
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>Todas las tareas se gestionan mediante GitHub Issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>La comunicación se centraliza en los comentarios de cada Issue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>GitHub Projects proporciona visibilidad global del trabajo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>Los responsables actualizan el estado de sus tareas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>La documentación se enlaza desde las Issues cuando es necesaria</span>
                      </li>
                    </ul>
                  </div>

                  <Callout type="check">
                    <strong>🔄 Sistema en evolución:</strong> Este sistema está diseñado para evolucionar con las necesidades del equipo. 
                    No dudes en sugerir mejoras basadas en tu experiencia de uso.
                  </Callout>
                </div>
              </section>
            </div>

            <TutorialNavigation 
              previous={{ 
                href: "/tutoriales/issues-y-prs", 
                title: "Trabajo en Equipo" 
              }}
              next={{ 
                href: "/tutoriales/git-github", 
                title: "Git & GitHub" 
              }}
            />
          </main>

          <aside className="hidden lg:block lg:col-span-1 xl:col-span-1">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
