/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import SpaceParticles from '@/components/SpaceParticles';
import Link from 'next/link';

const tocItems = [
  { id: 'introduccion', title: '📋 Introducción al curso', level: 2 },
  { id: 'objetivos', title: '🎯 Objetivos de aprendizaje', level: 2 },
  { id: 'por-que-kicad', title: '💡 ¿Por qué KiCad?', level: 2 },
  { id: 'estructura', title: '📚 Estructura del curso', level: 2 },
  { id: 'modulo-0', title: 'Módulo 0: Instalación y entorno', level: 3 },
  { id: 'modulo-1', title: 'Módulo 1: Fundamentos y esquemas', level: 3 },
  { id: 'modulo-2', title: 'Módulo 2: De esquema a PCB', level: 3 },
  { id: 'modulo-3', title: 'Módulo 3: Proyecto práctico', level: 3 },
  { id: 'modulo-4', title: 'Módulo 4: Proyecto final', level: 3 },
  { id: 'kicad-9', title: '🚀 Novedades de KiCad 9', level: 2 },
  { id: 'recursos', title: '📖 Recursos adicionales', level: 2 },
  { id: 'como-empezar', title: '🏁 Cómo empezar', level: 2 },
];

export default function CursoPCBKiCad() {
  const handleStartClick = () => {
    const element = document.getElementById('modulo-0');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  { label: 'Diseño de PCBs con KiCad' }
                ]}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                <TutorialChip label="Hardware" variant="status" icon="🔧" />
                <TutorialChip label="PCB Design" variant="status" icon="⚡" />
                <TutorialChip label="Intermedio" variant="level" icon="📊" />
                <TutorialChip label="4 semanas" variant="time" icon="⏱️" />
              </div>
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                ⚡ Diseño de PCBs con KiCad
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Curso intensivo de 4 semanas para dominar el diseño profesional de placas de circuito impreso usando KiCad 8. 
                Desde los fundamentos de electrónica hasta proyectos completos listos para fabricación.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="5 módulos" variant="status" icon="📚" />
                <TutorialChip label="Proyectos prácticos" variant="status" icon="🛠️" />
                <TutorialChip label="Entregas semanales" variant="status" icon="📅" />
                <TutorialChip label="Edición 2025" variant="updated" icon="🔄" />
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">🎓 Lo que aprenderás</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Fundamentos de electrónica: resistores, condensadores, diodos, transistores y microcontroladores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Captura de esquemas eléctricos profesionales con símbolos y anotaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Diseño de PCBs: colocación, ruteo, planos de masa y reglas de diseño (DRC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Buenas prácticas: separación analógico/digital, desacoplo, gestión térmica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Generación de archivos Gerber y preparación para fabricación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Proyectos reales: fuente de alimentación, adaptadores de sensores y test boards</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cursos/diseno-pcbs-kicad/modulo-0">
                  <button className="btn-primary w-full sm:w-auto">
                    🚀 Comenzar Módulo 0
                  </button>
                </Link>
                <button className="btn-secondary" onClick={handleStartClick}>
                  📚 Ver estructura completa
                </button>
              </div>
            </div>

            {/* Contenido del curso */}
            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📋 Introducción al curso
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Este curso plantea un <strong>itinerario paso a paso</strong> para que el equipo de diseño de hardware, 
                    con poca o ninguna experiencia previa en electrónica, se inicie en el <strong>diseño de placas de circuito impreso (PCBs)</strong> usando KiCad.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Durante <strong>4 semanas intensivas</strong>, combinarás teoría con práctica mediante <strong>actividades semanales</strong> que 
                    te permitirán consolidar el aprendizaje. Al final del curso, habrás recorrido el flujo completo desde la teoría 
                    de componentes hasta la generación de archivos Gerber listos para fabricación.
                  </p>
                  <Callout type="info">
                    <strong>Dirigido a:</strong> Equipo de diseño de PCBs de TARS, pero accesible para cualquier miembro del equipo 
                    interesado en aprender diseño de hardware.
                  </Callout>
                </div>
              </section>

              <section id="objetivos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🎯 Objetivos de aprendizaje
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Al completar este curso, serás capaz de:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-2">🔌 Fundamentos de Electrónica</h4>
                      <p className="text-slate-400 text-sm">
                        Comprender el funcionamiento de componentes básicos y calcular valores correctos usando la ley de Ohm y fórmulas de potencia.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-2">📐 Captura de Esquemas</h4>
                      <p className="text-slate-400 text-sm">
                        Crear esquemas eléctricos profesionales, asignar footprints y generar listas de materiales (BOM).
                      </p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-2">🖥️ Diseño de PCBs</h4>
                      <p className="text-slate-400 text-sm">
                        Diseñar placas multicapa con colocación estratégica, ruteo eficiente y planos de masa continuos.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-2">✅ Verificación y Fabricación</h4>
                      <p className="text-slate-400 text-sm">
                        Ejecutar comprobaciones ERC/DRC y generar archivos Gerber listos para enviar al fabricante.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="por-que-kicad">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  💡 ¿Por qué KiCad?
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    KiCad es un paquete de <strong>software libre y open-source</strong> para crear esquemas eléctricos, 
                    diseñar PCBs y generar archivos de fabricación. A diferencia de otras herramientas comerciales, 
                    KiCad no tiene limitaciones de tamaño o número de capas.
                  </p>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-3">Ventajas principales</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span><strong>Gratuito y libre:</strong> Sin costos de licencia ni restricciones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span><strong>Multiplataforma:</strong> Windows, macOS y Linux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span><strong>Herramientas completas:</strong> ERC, DRC, visor 3D, generador de Gerber</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span><strong>Comunidad activa:</strong> Amplia documentación y librerías públicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span><strong>Profesional:</strong> Usado en industria y proyectos comerciales</span>
                      </li>
                    </ul>
                  </div>
                  <Callout type="tip">
                    <strong>Versión del curso:</strong> Basado en KiCad 8 (estable). Al final se mencionan novedades de KiCad 9 
                    previsto para principios de 2025.
                  </Callout>
                </div>
              </section>

              <section id="estructura">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📚 Estructura del curso
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    El curso se divide en <strong>5 módulos</strong> (uno preparatorio + 4 semanales). Cada módulo combina 
                    teoría con práctica y finaliza con una <strong>entrega semanal</strong> que consolidará tu aprendizaje.
                  </p>

                  {/* Módulo 0 */}
                  <div id="modulo-0" className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-300 mb-1">
                          Módulo 0: Instalación y entorno
                        </h3>
                        <p className="text-slate-400 text-sm">⏱️ 2-3 días • 📅 Preparatorio</p>
                      </div>
                      <span className="text-4xl">🛠️</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Descarga e instalación de KiCad 8, configuración del proyecto y exploración de la interfaz. 
                      Familiarízate con el gestor de proyectos, editores y visor 3D.
                    </p>
                    <Link href="/cursos/diseno-pcbs-kicad/modulo-0">
                      <button className="btn-secondary text-sm">
                        Ver contenido completo →
                      </button>
                    </Link>
                  </div>

                  {/* Módulo 1 */}
                  <div id="modulo-1" className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-purple-300 mb-1">
                          Módulo 1: Fundamentos de circuitos y esquemas
                        </h3>
                        <p className="text-slate-400 text-sm">⏱️ Semana 1 • 📅 5-7 días</p>
                      </div>
                      <span className="text-4xl">📐</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Repaso de electrónica básica (resistores, condensadores, diodos). Creación de tu primer esquema 
                      con LED, resistencia y pulsador. ERC y generación de BOM.
                    </p>
                    <Link href="/cursos/diseno-pcbs-kicad/modulo-1">
                      <button className="btn-secondary text-sm">
                        Ver contenido completo →
                      </button>
                    </Link>
                  </div>

                  {/* Módulo 2 */}
                  <div id="modulo-2" className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-green-300 mb-1">
                          Módulo 2: De esquema a PCB
                        </h3>
                        <p className="text-slate-400 text-sm">⏱️ Semana 2 • 📅 5-7 días</p>
                      </div>
                      <span className="text-4xl">🖥️</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Importar el esquema al editor de PCB, configurar reglas de diseño, colocar componentes siguiendo 
                      buenas prácticas, rutear pistas y ejecutar DRC. Generación de Gerbers.
                    </p>
                    <Link href="/cursos/diseno-pcbs-kicad/modulo-2">
                      <button className="btn-secondary text-sm">
                        Ver contenido completo →
                      </button>
                    </Link>
                  </div>

                  {/* Módulo 3 */}
                  <div id="modulo-3" className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-orange-300 mb-1">
                          Módulo 3: Proyecto práctico de ampliación
                        </h3>
                        <p className="text-slate-400 text-sm">⏱️ Semana 3 • 📅 5-7 días</p>
                      </div>
                      <span className="text-4xl">🔋</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Diseño completo de una fuente de alimentación básica (regulador lineal 7805 o conmutado). 
                      Aplicación de todas las técnicas aprendidas en un proyecto realista.
                    </p>
                    <Link href="/cursos/diseno-pcbs-kicad/modulo-3">
                      <button className="btn-secondary text-sm">
                        Ver contenido completo →
                      </button>
                    </Link>
                  </div>

                  {/* Módulo 4 */}
                  <div id="modulo-4" className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-yellow-300 mb-1">
                          Módulo 4: Proyecto final guiado
                        </h3>
                        <p className="text-slate-400 text-sm">⏱️ Semana 4 • 📅 5-7 días</p>
                      </div>
                      <span className="text-4xl">🏆</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Proyecto final a elegir entre 3 opciones: adaptador de sensor, distribuidor de alimentación o 
                      test board. Revisión cruzada entre compañeros y entrega final completa.
                    </p>
                    <Link href="/cursos/diseno-pcbs-kicad/modulo-4">
                      <button className="btn-secondary text-sm">
                        Ver contenido completo →
                      </button>
                    </Link>
                  </div>
                </div>
              </section>

              <section id="kicad-9">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🚀 Novedades de KiCad 9
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Aunque el curso está basado en <strong>KiCad 8</strong> (versión estable), es útil conocer las 
                    mejoras previstas para <strong>KiCad 9</strong> (principios de 2025):
                  </p>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">⚙️</span>
                      <div>
                        <strong className="text-slate-200">Nuevo gestor de zonas de cobre:</strong> Gestión mejorada de 
                        planos de masa y áreas rellenas.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">🔄</span>
                      <div>
                        <strong className="text-slate-200">Sincronización de pines y etiquetas jerárquicas:</strong> Facilita 
                        el manejo de diseños complejos multi-hoja.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">📏</span>
                      <div>
                        <strong className="text-slate-200">Áreas de reglas eléctricas en esquema:</strong> Define zonas con 
                        reglas específicas directamente en el esquema.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">🎯</span>
                      <div>
                        <strong className="text-slate-200">Control mejorado del tentado de vías:</strong> Mayor control sobre 
                        qué vías cubrir con máscara de soldadura.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">🔤</span>
                      <div>
                        <strong className="text-slate-200">Selección de texto por teclas rápidas:</strong> Mejoras en la 
                        edición de texto y serigrafía.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">🎨</span>
                      <div>
                        <strong className="text-slate-200">Exportación 3D mejorada:</strong> Mayor compatibilidad y control 
                        sobre modelos 3D.
                      </div>
                    </li>
                  </ul>
                  <Callout type="info">
                    <strong>Recomendación:</strong> Completa el curso con KiCad 8 y luego actualiza a KiCad 9 cuando se 
                    lance. La transición será sencilla y podrás aprovechar las nuevas características.
                  </Callout>
                </div>
              </section>

              <section id="recursos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📖 Recursos adicionales
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Documentación y guías oficiales que complementan el curso:
                  </p>
                  <div className="grid gap-4">
                    <a 
                      href="https://docs.kicad.org/8.0/en/getting_started_in_kicad/getting_started_in_kicad.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📘</span>
                        <div>
                          <h4 className="text-blue-300 font-semibold mb-1">KiCad Documentation – Getting Started 8.0</h4>
                          <p className="text-slate-400 text-sm">
                            Manual oficial con instrucciones detalladas para crear proyectos, capturar esquemas y generar PCBs.
                          </p>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.ultralibrarian.com/2024/12/13/pcb-component-placement-guidelines-ulc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📐</span>
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-1">PCB Component Placement Guidelines (2024)</h4>
                          <p className="text-slate-400 text-sm">
                            Guía actualizada sobre estrategias de colocación, separación de dominios y mejores prácticas.
                          </p>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.protoexpress.com/kb/basic-components-overview/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-green-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔌</span>
                        <div>
                          <h4 className="text-green-300 font-semibold mb-1">Basic Electronic Components</h4>
                          <p className="text-slate-400 text-sm">
                            Explica de manera concisa resistores, condensadores, diodos y transistores.
                          </p>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://jlcpcb.com/blog/pcb-basics-2-design-guidelines" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-orange-500/50 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚙️</span>
                        <div>
                          <h4 className="text-orange-300 font-semibold mb-1">JLCPCB Design Guidelines</h4>
                          <p className="text-slate-400 text-sm">
                            Reglas de diseño específicas para fabricación (anchos de pista, separaciones, anillos anulares).
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              <section id="como-empezar">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🏁 Cómo empezar
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    ¿Listo para comenzar tu viaje en el diseño de PCBs? Sigue estos pasos:
                  </p>
                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6">
                    <ol className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">1</span>
                        <div>
                          <strong className="text-slate-200">Descarga KiCad 8:</strong> Visita 
                          <a href="https://www.kicad.org/download/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                            kicad.org/download
                          </a> e instala la versión estable para tu sistema operativo.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">2</span>
                        <div>
                          <strong className="text-slate-200">Completa el Módulo 0:</strong> Configura tu entorno, explora la 
                          interfaz y familiarízate con los editores.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">3</span>
                        <div>
                          <strong className="text-slate-200">Avanza módulo por módulo:</strong> Dedica una semana a cada módulo, 
                          completa las actividades y entrega los proyectos.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">4</span>
                        <div>
                          <strong className="text-slate-200">Comparte y colabora:</strong> Participa en reuniones periódicas, 
                          comparte dudas y revisa proyectos de compañeros.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">5</span>
                        <div>
                          <strong className="text-slate-200">Proyecto final:</strong> Aplica todo lo aprendido en un proyecto 
                          completo listo para fabricación.
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <Callout type="check">
                    <strong>💪 ¡Estás listo!</strong> Al finalizar este curso, serás capaz de diseñar PCBs profesionales 
                    para los proyectos de TARS (ERC, Robochallenge, etc.). ¡Adelante!
                  </Callout>
                  
                  <div className="flex justify-center pt-6">
                    <Link href="/cursos/diseno-pcbs-kicad/modulo-0">
                      <button className="btn-primary text-lg px-8 py-4">
                        🚀 Comenzar con el Módulo 0
                      </button>
                    </Link>
                  </div>
                </div>
              </section>

            </div>
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
