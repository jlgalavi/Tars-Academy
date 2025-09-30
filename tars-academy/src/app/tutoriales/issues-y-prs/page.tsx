/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";
import SpaceParticles from "@/components/SpaceParticles";

export default function TrabajoEnEquipo() {
  const handleStartClick = () => {
    const element = document.getElementById('comunicacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrerequisitesClick = () => {
    const element = document.getElementById('fundamentos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tocItems = [
    { id: "introduccion", title: "🤝 ¿Por qué las soft skills?", level: 2 },
    { id: "fundamentos", title: "🏗️ Fundamentos del trabajo en equipo", level: 2 },
    { id: "comunicacion", title: "💬 Comunicación efectiva", level: 2 },
    { id: "colaboracion", title: "🤝 Colaboración práctica", level: 2 },
    { id: "resolucion-conflictos", title: "🔧 Resolución de conflictos", level: 2 },
    { id: "liderazgo", title: "👑 Liderazgo y responsabilidad", level: 2 },
    { id: "gestion-tiempo", title: "⏰ Gestión del tiempo en equipo", level: 2 },
    { id: "ambiente-positivo", title: "🌟 Crear ambiente positivo", level: 2 },
    { id: "feedback", title: "📝 Dar y recibir feedback", level: 2 },
    { id: "herramientas", title: "🛠️ Herramientas de colaboración", level: 2 },
    { id: "casos-practicos", title: "💡 Casos prácticos TARS", level: 2 },
    { id: "recursos", title: "📚 Recursos adicionales", level: 2 }
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
                { label: "Trabajo en Equipo" }
              ]} 
            />
            
            <div className="mt-6 flex flex-wrap gap-2 mb-8">
              <TutorialChip label="Soft Skills" variant="status" icon="🧠" />
              <TutorialChip label="Colaboración" variant="status" icon="🤝" />
              <TutorialChip label="Esencial" variant="level" icon="⭐" />
            </div>

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                🤝 Trabajo en Equipo y Soft Skills
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Desarrolla las habilidades blandas esenciales para el éxito en TARS Robotics. 
                Aprende comunicación efectiva, colaboración, resolución de conflictos y cómo crear 
                un ambiente de trabajo positivo y productivo en proyectos técnicos complejos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="btn-primary" onClick={handleStartClick}>
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary" onClick={handlePrerequisitesClick}>
                  🏗️ Ver fundamentos
                </button>
              </div>
            </header>

            <div className="space-y-8">
            <section id="introduccion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🤝 ¿Por qué las soft skills?
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  En TARS Robotics, el éxito no depende solo de dominar ROS 2 o programar algoritmos perfectos. 
                  Las soft skills son el 70% del éxito en proyectos técnicos complejos como el European Rover Challenge. 
                  Un equipo con excelente comunicación supera siempre a individuos brillantes trabajando aislados.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">❌ Sin Soft Skills</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Malentendidos constantes</li>
                      <li>• Duplicación de trabajo</li>
                      <li>• Conflictos no resueltos</li>
                      <li>• Deadlines perdidos</li>
                      <li>• Estrés y ambiente tóxico</li>
                      <li>• Miembros que abandonan</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">✅ Con Soft Skills</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Comunicación clara y efectiva</li>
                      <li>• Colaboración fluida</li>
                      <li>• Resolución rápida de problemas</li>
                      <li>• Cumplimiento de objetivos</li>
                      <li>• Ambiente positivo y motivador</li>
                      <li>• Crecimiento personal y profesional</li>
                    </ul>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Realidad TARS:</strong> El 90% de los problemas en proyectos técnicos son problemas de comunicación, 
                  no problemas técnicos. Un bug se arregla en horas, pero un malentendido puede costar semanas.
                </Callout>
              </div>
            </section>

            <section id="fundamentos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🏗️ Fundamentos del trabajo en equipo
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Un equipo exitoso en robótica necesita bases sólidas. No es solo juntar personas inteligentes - 
                  es crear un sistema que funcione como una máquina bien engrasada.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🎯 Objetivos comunes</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Visión compartida del proyecto</li>
                      <li>• Metas claras y medibles</li>
                      <li>• Prioridades alineadas</li>
                      <li>• Comprensión del "por qué"</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🤝 Roles definidos</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Responsabilidades claras</li>
                      <li>• Sin solapamientos confusos</li>
                      <li>• Autoridad para decidir</li>
                      <li>• Accountability mutua</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🔄 Procesos claros</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Cómo tomar decisiones</li>
                      <li>• Flujo de información</li>
                      <li>• Protocolos de reunión</li>
                      <li>• Gestión de cambios</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-200 mb-2">💡 Ejemplo TARS: Integración Hardware-Software</h4>
                  <p className="text-blue-100 text-sm mb-2">
                    Problema típico: Hardware entrega un sensor que software no puede usar porque las especificaciones cambiaron.
                  </p>
                  <p className="text-blue-100 text-sm">
                    <strong>Solución con soft skills:</strong> Comunicación proactiva, reuniones de sincronización semanales, 
                    documentación actualizada en tiempo real, y testing conjunto desde el día 1.
                  </p>
                </div>
              </div>
            </section>

            <section id="comunicacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                💬 Comunicación efectiva
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  La comunicación es el 80% del trabajo en equipo. En TARS necesitamos transmitir ideas complejas 
                  de forma clara, escuchar activamente y adaptar nuestro mensaje a diferentes audiencias.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">📢 Comunicación clara</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li><strong>Estructura:</strong> Contexto → Problema → Solución → Acción</li>
                      <li><strong>Ejemplos concretos:</strong> "El motor se para" vs "Motor overheating at 2.3A"</li>
                      <li><strong>Confirmation:</strong> "¿Entendiste que...?"</li>
                      <li><strong>Documentación:</strong> Todo por escrito + oral</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">👂 Escucha activa</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li><strong>Atención completa:</strong> Sin distracciones</li>
                      <li><strong>Parafrasear:</strong> "Entonces dices que..."</li>
                      <li><strong>Preguntas:</strong> Aclarar antes de asumir</li>
                      <li><strong>Empatía:</strong> Entender la perspectiva</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">🎯 Comunicación por contexto en TARS</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-200 mb-2">⚡ Urgente (Slack)</h5>
                      <ul className="space-y-1 text-slate-300 text-xs">
                        <li>• Bugs críticos</li>
                        <li>• Decisiones inmediatas</li>
                        <li>• Coordinación en vivo</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-200 mb-2">📋 Formal (Email)</h5>
                      <ul className="space-y-1 text-slate-300 text-xs">
                        <li>• Decisiones importantes</li>
                        <li>• Documentación oficial</li>
                        <li>• Comunicación externa</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-200 mb-2">🤝 Personal (Presencial)</h5>
                      <ul className="space-y-1 text-slate-300 text-xs">
                        <li>• Feedback sensible</li>
                        <li>• Resolución de conflictos</li>
                        <li>• Brainstorming complejo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Anti-patrón común:</strong> Asumir que el otro entiende tu jerga técnica. 
                  Siempre pregunta: "¿Necesitas que explique algún término?"
                </Callout>
              </div>
            </section>

            <section id="colaboracion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🤝 Colaboración práctica
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Colaborar efectivamente va más allá de "trabajar juntos". Es sincronizar esfuerzos, 
                  compartir conocimiento y crear sinergia donde 1+1=3.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🔄 Pair Programming/Working</h4>
                    <p className="text-slate-300 text-sm mb-2">Dos personas, una tarea, mejor resultado:</p>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Driver:</strong> Quien ejecuta</li>
                      <li>• <strong>Navigator:</strong> Quien guía</li>
                      <li>• Rotar cada 25 minutos</li>
                      <li>• Pensar en voz alta</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">📚 Knowledge Sharing</h4>
                    <p className="text-slate-300 text-sm mb-2">Compartir conocimiento activamente:</p>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Documentar mientras trabajas</li>
                      <li>• Mini-charlas técnicas</li>
                      <li>• Code reviews constructivos</li>
                      <li>• Mentoría peer-to-peer</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">🎯 Protocolos de colaboración TARS</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-slate-200">1. Daily Sync (5 min)</h5>
                      <p className="text-slate-300 text-sm">¿Qué hiciste? ¿Qué harás? ¿Obstáculos?</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-200">2. Help Protocol</h5>
                      <p className="text-slate-300 text-sm">15 min stuck → Pregunta. 30 min stuck → Pide pair programming.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-200">3. Knowledge Artifacts</h5>
                      <p className="text-slate-300 text-sm">Cada solución importante → Documentada en Wiki.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="resolucion-conflictos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔧 Resolución de conflictos
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Los conflictos son inevitables en proyectos técnicos complejos. La clave no es evitarlos, 
                  sino resolverlos de forma constructiva y rápida.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🚫 Conflictos destructivos</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Ataques personales</li>
                      <li>• Discusiones públicas acaloradas</li>
                      <li>• "Siempre" y "nunca"</li>
                      <li>• Ignorar el problema</li>
                      <li>• Imposición sin escuchar</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">✅ Conflictos constructivos</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Enfoque en el problema</li>
                      <li>• Conversaciones privadas</li>
                      <li>• Hechos y datos específicos</li>
                      <li>• Addressing temprano</li>
                      <li>• Búsqueda de win-win</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">🎯 Framework de resolución: DESC</h4>
                  <div className="space-y-2">
                    <div><strong className="text-slate-200">Describe:</strong> <span className="text-slate-300">"Cuando veo que..."</span></div>
                    <div><strong className="text-slate-200">Express:</strong> <span className="text-slate-300">"Me siento..."</span></div>
                    <div><strong className="text-slate-200">Specify:</strong> <span className="text-slate-300">"Me gustaría que..."</span></div>
                    <div><strong className="text-slate-200">Consequences:</strong> <span className="text-slate-300">"Así podríamos..."</span></div>
                  </div>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-200 mb-2">⚡ Ejemplo real: Conflicto técnico</h4>
                  <p className="text-yellow-100 text-sm mb-2">
                    <strong>Situación:</strong> Software quiere usar ROS 2, Hardware prefiere comunicación directa por velocidad.
                  </p>
                  <p className="text-yellow-100 text-sm">
                    <strong>Resolución DESC:</strong> "Veo que priorizas velocidad (D). Me preocupa la mantenibilidad (E). 
                    ¿Podríamos hacer pruebas de performance con ambos? (S). Así decidiremos con datos (C)."
                  </p>
                </div>
              </div>
            </section>

            <section id="liderazgo">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                👑 Liderazgo y responsabilidad
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  En TARS, todos somos líderes en algún momento. El liderazgo no es un título - 
                  es tomar responsabilidad por los resultados del equipo.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🎯 Liderazgo técnico</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Decisiones:</strong> Basadas en datos</li>
                      <li>• <strong>Arquitectura:</strong> Explicar el "por qué"</li>
                      <li>• <strong>Standards:</strong> Definir y mantener</li>
                      <li>• <strong>Mentoría:</strong> Ayudar a crecer</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🤝 Liderazgo de equipo</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Facilitación:</strong> Meetings efectivos</li>
                      <li>• <strong>Motivación:</strong> Reconocer contribuciones</li>
                      <li>• <strong>Coordinación:</strong> Sincronizar esfuerzos</li>
                      <li>• <strong>Protección:</strong> Shield del ruido externo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">⚡ Responsabilidad compartida</h4>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-sm">
                      <strong>Individual:</strong> "Yo soy responsable de mis tareas, mi calidad y mi comunicación."
                    </p>
                    <p className="text-slate-300 text-sm">
                      <strong>Colectiva:</strong> "Todos somos responsables del éxito del proyecto y del bienestar del equipo."
                    </p>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Liderazgo situacional:</strong> En debugging crítico, lidera quien mejor conoce el sistema. 
                  En presentaciones, lidera quien mejor comunica. El liderazgo rota según el contexto.
                </Callout>
              </div>
            </section>

            <section id="gestion-tiempo">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ⏰ Gestión del tiempo en equipo
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  El tiempo es nuestro recurso más limitado en TARS. Una gestión efectiva del tiempo en equipo 
                  significa sincronización, priorización y respeto mutuo por el tiempo de otros.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">📅 Planificación</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Estimaciones realistas</li>
                      <li>• Buffer para imprevistos</li>
                      <li>• Dependencias claras</li>
                      <li>• Milestones verificables</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🎯 Priorización</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Matriz Importante/Urgente</li>
                      <li>• Value-driven decisions</li>
                      <li>• "No" como herramienta</li>
                      <li>• Focus en bloqueadores</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">⚡ Ejecución</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Time-boxing</li>
                      <li>• Pomodoro en grupo</li>
                      <li>• Async cuando posible</li>
                      <li>• Interruptions protocol</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">🎯 Meetings eficientes en TARS</h4>
                  <div className="space-y-2">
                    <div><strong className="text-slate-200">Antes:</strong> <span className="text-slate-300">Agenda + materiales 24h antes</span></div>
                    <div><strong className="text-slate-200">Durante:</strong> <span className="text-slate-300">Timekeeper + note-taker + decisions tracker</span></div>
                    <div><strong className="text-slate-200">Después:</strong> <span className="text-slate-300">Action items + owners + deadlines</span></div>
                  </div>
                </div>
              </div>
            </section>

            <section id="ambiente-positivo">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🌟 Crear ambiente positivo
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Un ambiente positivo no es "todo está bien" - es un ambiente donde las personas se sienten 
                  seguras para innovar, fallar, aprender y dar lo mejor de sí mismas.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🛡️ Seguridad psicológica</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Preguntas sin juicio</li>
                      <li>• Errores como aprendizaje</li>
                      <li>• Ideas "locas" bienvenidas</li>
                      <li>• Vulnerabilidad compartida</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🎉 Reconocimiento</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Celebrar pequeñas victorias</li>
                      <li>• Reconocimiento público</li>
                      <li>• Growth mindset</li>
                      <li>• Contributions diverse</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">⚡ Rituales positivos TARS</h4>
                  <div className="space-y-2">
                    <div><strong className="text-slate-200">Demo Friday:</strong> <span className="text-slate-300">Cada viernes, 10 min para mostrar algo cool</span></div>
                    <div><strong className="text-slate-200">Learning Lunch:</strong> <span className="text-slate-300">Almuerzo + micro-charla técnica</span></div>
                    <div><strong className="text-slate-200">Fail Party:</strong> <span className="text-slate-300">Celebrar los mejores "learning failures"</span></div>
                    <div><strong className="text-slate-200">Help Hero:</strong> <span className="text-slate-300">Reconocer quien más ayudó esta semana</span></div>
                  </div>
                </div>

                <Callout type="check">
                  <strong>Cultura de apoyo:</strong> "No sé" es una respuesta perfectamente válida. 
                  "Ayúdame a entender" es mejor que fingir que sabes.
                </Callout>
              </div>
            </section>

            <section id="feedback">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📝 Dar y recibir feedback
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  El feedback efectivo acelera el crecimiento y mejora la calidad. En un equipo técnico, 
                  necesitamos feedback tanto en soft skills como en habilidades técnicas.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">💬 Dar feedback</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>SBI Model:</strong> Situación + comportamiento + Impacto</li>
                      <li>• <strong>Timing:</strong> Tan pronto como sea apropiado</li>
                      <li>• <strong>Específico:</strong> Ejemplos concretos</li>
                      <li>• <strong>Actionable:</strong> Qué hacer diferente</li>
                      <li>• <strong>Balanceado:</strong> Fortalezas + mejoras</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">👂 Recibir feedback</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Escucha:</strong> Sin defenderse</li>
                      <li>• <strong>Pregunta:</strong> Ejemplos específicos</li>
                      <li>• <strong>Agradece:</strong> El esfuerzo de ayudar</li>
                      <li>• <strong>Reflexiona:</strong> Qué parte es cierta</li>
                      <li>• <strong>Actúa:</strong> Plan de mejora</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">🎯 Template SBI para feedback técnico</h4>
                  <div className="space-y-2">
                    <div><strong className="text-slate-200">Situación:</strong> <span className="text-slate-300">"En el code review de ayer..."</span></div>
                    <div><strong className="text-slate-200">Comportamiento:</strong> <span className="text-slate-300">"Noté que los comentarios fueron muy técnicos..."</span></div>
                    <div><strong className="text-slate-200">Impacto:</strong> <span className="text-slate-300">"El junior developer se veía confundido..."</span></div>
                    <div><strong className="text-slate-200">Sugerencia:</strong> <span className="text-slate-300">"¿Podrías incluir el 'por qué' junto al 'qué'?"</span></div>
                  </div>
                </div>

                <Callout type="info">
                  <strong>Feedback continuo:</strong> En lugar de feedback formal mensual, cultiva micro-feedback diario. 
                  "Esa explicación fue super clara" o "¿Podrías simplificar esa función?"
                </Callout>
              </div>
            </section>

            <section id="herramientas">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🛠️ Herramientas de colaboración
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Las herramientas no hacen la colaboración, pero las herramientas correctas la facilitan enormemente. 
                  Aquí está el stack de colaboración recomendado para TARS.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">💬 Comunicación</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>Slack:</strong> Chat diario + voice channels</li>
                      <li>• <strong>Email:</strong> Decisiones importantes</li>
                      <li>• <strong>WhatsApp:</strong> Coordinación urgente</li>
                      <li>• <strong>Google Meet:</strong> Reuniones formales</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">📋 Gestión de proyectos</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>GitHub Projects:</strong> Issues + PRs + roadmap</li>
                      <li>• <strong>Google Drive:</strong> Documentación + wiki</li>
                      <li>• <strong>Miro:</strong> Brainstorming + diagramas</li>
                      <li>• <strong>Google Calendar:</strong> Sincronización temporal</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">📁 Archivos</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Google Drive: Docs compartidos</li>
                      <li>• GitHub: Código + documentación</li>
                      <li>• Figma: Diseños UI/UX</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🤝 Colaboración en vivo</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• VS Code Live Share</li>
                      <li>• Google Docs simultáneo</li>
                      <li>• Miro collaborative boards</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">📊 Monitoreo</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• GitHub Insights</li>
                      <li>• Time tracking (opcional)</li>
                      <li>• Team mood check-ins</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-200 mb-2">⚡ Protocolo de comunicación TARS</h4>
                  <div className="text-blue-100 text-sm space-y-1">
                    <p>• <strong>Urgente (≤ 2h):</strong> Slack DM + @mention</p>
                    <p>• <strong>Importante (≤ 24h):</strong> Slack channel + email</p>
                    <p>• <strong>Normal (≤ 3 días):</strong> GitHub issue/PR</p>
                    <p>• <strong>FYI:</strong> Google Drive update + Slack summary</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="casos-practicos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                💡 Casos prácticos TARS
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Situaciones reales que ocurren en TARS y cómo aplicar soft skills para resolverlas efectivamente.
                </p>

                <div className="space-y-6">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🚨 Caso 1: Crisis pre-competencia</h4>
                    <p className="text-slate-300 text-sm mb-2">
                      <strong>Situación:</strong> 2 semanas antes del ERC, el algoritmo de navegación falla. 
                      Hardware culpa a software, software culpa a especificaciones cambiantes.
                    </p>
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-slate-200 text-sm font-medium mb-1">Aplicación de soft skills:</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• <strong>Liderazgo:</strong> Alguien toma control, define war room</li>
                        <li>• <strong>Comunicación:</strong> Facts vs emotions, status updates cada 2h</li>
                        <li>• <strong>Colaboración:</strong> Pair debugging hardware+software</li>
                        <li>• <strong>Gestión tiempo:</strong> Triage: fix crítico vs nice-to-have</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🤝 Caso 2: Conflicto de arquitectura</h4>
                    <p className="text-slate-300 text-sm mb-2">
                      <strong>Situación:</strong> Senior developer quiere refactorizar todo el stack. 
                      Junior developers se sienten overwhelmed y prefieren mantener código existente.
                    </p>
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-slate-200 text-sm font-medium mb-1">Aplicación de soft skills:</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• <strong>Escucha activa:</strong> Entender perspectivas de ambos lados</li>
                        <li>• <strong>Resolución conflictos:</strong> Focus en objetivos comunes</li>
                        <li>• <strong>Liderazgo:</strong> Decisión basada en datos + timeline</li>
                        <li>• <strong>Ambiente positivo:</strong> Plan de mentoring durante transición</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">⏰ Caso 3: Burnout de equipo</h4>
                    <p className="text-slate-300 text-sm mb-2">
                      <strong>Situación:</strong> 3 meses de trabajo intenso. Algunos miembros trabajando 12h/día. 
                      Calidad de código degradándose, moral baja.
                    </p>
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-slate-200 text-sm font-medium mb-1">Aplicación de soft skills:</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• <strong>Liderazgo:</strong> Reconocer señales, parar la espiral</li>
                        <li>• <strong>Gestión tiempo:</strong> Forced breaks, scope reduction</li>
                        <li>• <strong>Comunicación:</strong> One-on-ones honestos</li>
                        <li>• <strong>Ambiente positivo:</strong> Team building, celebrar progress</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🆕 Caso 4: Integración de nuevo miembro</h4>
                    <p className="text-slate-300 text-sm mb-2">
                      <strong>Situación:</strong> Nuevo miembro con mucha experiencia pero de dominio diferente. 
                      Equipo existente reacio a cambios en procesos establecidos.
                    </p>
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-slate-200 text-sm font-medium mb-1">Aplicación de soft skills:</p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        <li>• <strong>Ambiente positivo:</strong> Onboarding buddy system</li>
                        <li>• <strong>Comunicación:</strong> Knowledge transfer sessions</li>
                        <li>• <strong>Colaboración:</strong> Pair programming para context</li>
                        <li>• <strong>Feedback:</strong> 2-way feedback primeras semanas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="recursos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📚 Recursos adicionales
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Recursos para seguir desarrollando tus soft skills y la cultura de equipo en TARS.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">📖 Libros recomendados</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Team effectiveness:</strong> "The Five Dysfunctions of a Team"</li>
                      <li>• <strong>Communication:</strong> "Crucial Conversations"</li>
                      <li>• <strong>Leadership:</strong> "The Servant Leader"</li>
                      <li>• <strong>Culture:</strong> "Team Topologies"</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🎯 Práctica diaria</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Daily reflection: "¿Cómo colaboré hoy?"</li>
                      <li>• Micro-feedback: Un feedback positivo diario</li>
                      <li>• Active listening: En cada conversación</li>
                      <li>• Help someone: Al menos una vez por día</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-2">🎯 Auto-evaluación mensual</h4>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-sm">Pregúntate honestamente:</p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• ¿Comunico de forma clara y oportuna?</li>
                      <li>• ¿Escucho activamente o espero mi turno para hablar?</li>
                      <li>• ¿Contribuyo a un ambiente positivo?</li>
                      <li>• ¿Ayudo a otros a crecer?</li>
                      <li>• ¿Manejo los conflictos constructivamente?</li>
                    </ul>
                  </div>
                </div>

                <Callout type="check">
                  <strong>Crecimiento continuo:</strong> Las soft skills se desarrollan con práctica deliberada. 
                  Cada interacción es una oportunidad de mejora.
                </Callout>
              </div>
            </section>

            </div>
          </main>

          <aside className="lg:col-span-1 xl:col-span-1">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
      
      <TutorialNavigation 
        previous={{
          title: "Git & GitHub",
          href: "/tutoriales/git-github"
        }}
        next={{
          title: "Buenas Prácticas de Código",
          href: "/tutoriales/buenas-practicas-codigo"
        }}
      />
    </div>
  );
}