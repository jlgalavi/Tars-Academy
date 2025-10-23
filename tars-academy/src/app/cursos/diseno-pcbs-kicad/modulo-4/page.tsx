/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';
import SpaceParticles from '@/components/SpaceParticles';
import VideoResource from '@/components/tutorial/VideoResource';
import Link from 'next/link';

const tocItems = [
  { id: 'introduccion', title: '📋 Introducción', level: 2 },
  { id: 'opciones', title: '🎯 Opciones de proyecto', level: 2 },
  { id: 'planificacion', title: '📝 Planificación del proyecto', level: 2 },
  { id: 'diseno', title: '🖥️ Diseño y ejecución', level: 2 },
  { id: 'revision', title: '👥 Revisión cruzada', level: 2 },
  { id: 'entrega-final', title: '🏆 Entrega final', level: 2 },
  { id: 'videos', title: '📹 Videos recomendados', level: 2 },
];

export default function Modulo4() {
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
                  { label: 'Programas Intensivos', href: '/#programas-intensivos' },
                  { label: 'Diseño de PCBs con KiCad', href: '/cursos/diseno-pcbs-kicad' },
                  { label: 'Módulo 4' }
                ]}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                <TutorialChip label="Módulo 4" variant="status" icon="🏆" />
                <TutorialChip label="Semana 4" variant="level" icon="📅" />
                <TutorialChip label="5-7 días" variant="time" icon="⏱️" />
              </div>
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Módulo 4: Proyecto final guiado
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Demuestra todo lo aprendido con un proyecto completo a tu elección. Aplica de forma autónoma diseño 
                de esquemas, PCB, verificación y generación de archivos de fabricación.
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📋 Introducción</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    ¡Has llegado al módulo final! En esta última semana, realizarás un <strong>proyecto final completo</strong> 
                    que demuestre tu dominio del diseño de PCBs. Tendrás <strong>3 opciones</strong> orientadas a los proyectos 
                    reales del equipo TARS.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    El objetivo es que apliques <strong>de forma autónoma</strong> todo lo aprendido: desde la planificación 
                    hasta los archivos de fabricación, pasando por el diseño, verificación y documentación.
                  </p>
                  
                  <Callout type="check">
                    <strong>¡Enhorabuena!</strong> Al completar este módulo, tendrás un proyecto completo listo para fabricar 
                    y habrás demostrado tu capacidad para diseñar PCBs profesionales.
                  </Callout>
                </div>
              </section>

              <section id="opciones">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🎯 Opciones de proyecto</h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Elige UNA de las siguientes opciones según tus intereses y las necesidades del equipo:
                  </p>

                  {/* Opción 1: Adaptador de sensor */}
                  <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-blue-300">
                        Opción 1: Adaptador de Sensor
                      </h3>
                      <span className="text-3xl">📡</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Placa que integra un sensor analógico o digital (temperatura, presión, IMU) con acondicionamiento 
                      de señal y conectores de comunicación.
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-blue-200 font-semibold mb-2 text-sm">Componentes sugeridos:</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Sensor (ej. BME280, MPU6050, o sensor analógico)</li>
                        <li>• Microcontrolador o amplificador operacional para acondicionamiento</li>
                        <li>• Conectores I²C/SPI/UART</li>
                        <li>• Regulador de voltaje 3.3V</li>
                        <li>• LEDs indicadores</li>
                        <li>• Pull-ups/pull-downs según el bus de comunicación</li>
                      </ul>
                    </div>
                    <Callout type="info">
                      <strong>Ideal para:</strong> Aprender sobre buses de comunicación (I²C, SPI) y acondicionamiento de señales.
                    </Callout>
                  </div>

                  {/* Opción 2: Power Hub */}
                  <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-purple-300">
                        Opción 2: Distribuidor de Alimentación (Power Hub)
                      </h3>
                      <span className="text-3xl">🔌</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Placa con entrada principal protegida y múltiples salidas de alimentación con indicadores LED para 
                      cada rama. Perfecta para distribuir potencia en el rover.
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-purple-200 font-semibold mb-2 text-sm">Componentes sugeridos:</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Conector de entrada principal</li>
                        <li>• Fusible o PTC (protección contra sobrecorriente)</li>
                        <li>• Diodo de protección contra inversión de polaridad</li>
                        <li>• 4-6 conectores de salida</li>
                        <li>• LED indicador por cada rama</li>
                        <li>• Trazas de potencia robustas (≥2mm)</li>
                        <li>• Terminales de tornillo o conectores XT60/JST</li>
                      </ul>
                    </div>
                    <Callout type="info">
                      <strong>Ideal para:</strong> Practicar distribución de corriente, protección y manejo de potencia.
                    </Callout>
                  </div>

                  {/* Opción 3: Test Board */}
                  <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-green-300">
                        Opción 3: Placa de Prueba (Test Board)
                      </h3>
                      <span className="text-3xl">🧪</span>
                    </div>
                    <p className="text-slate-300 mb-4">
                      Tarjeta pequeña con elementos básicos para probar firmware, comunicarse con otros módulos o 
                      validar interfaces. Simple pero muy útil.
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-green-200 font-semibold mb-2 text-sm">Componentes sugeridos:</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• LED RGB o varios LEDs independientes</li>
                        <li>• Pulsadores táctiles (2-4)</li>
                        <li>• Conector UART/I²C/SPI</li>
                        <li>• Zócalo o pads para conectar un microcontrolador (opcional)</li>
                        <li>• Resistencias pull-up/pull-down</li>
                        <li>• Regulador 3.3V o 5V</li>
                      </ul>
                    </div>
                    <Callout type="info">
                      <strong>Ideal para:</strong> Crear una herramienta útil para debugging y pruebas rápidas.
                    </Callout>
                  </div>
                </div>
              </section>

              <section id="planificacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📝 Planificación del proyecto</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Antes de empezar a diseñar, dedica tiempo a <strong>planificar</strong>:
                  </p>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Pasos de planificación</h4>
                    <ol className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 text-yellow-300 rounded-full flex items-center justify-center font-bold">1</span>
                        <div>
                          <strong className="text-slate-200">Define el objetivo:</strong> ¿Qué problema resuelve tu placa? 
                          ¿Para qué proyecto de TARS será útil?
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 text-yellow-300 rounded-full flex items-center justify-center font-bold">2</span>
                        <div>
                          <strong className="text-slate-200">Lista de componentes:</strong> Enumera todos los componentes 
                          necesarios y sus especificaciones (voltajes, corrientes, encapsulados).
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 text-yellow-300 rounded-full flex items-center justify-center font-bold">3</span>
                        <div>
                          <strong className="text-slate-200">Diagrama de bloques:</strong> Dibuja un esquema simple mostrando 
                          las conexiones principales entre bloques funcionales.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 text-yellow-300 rounded-full flex items-center justify-center font-bold">4</span>
                        <div>
                          <strong className="text-slate-200">Cálculos preliminares:</strong> Calcula valores de resistencias, 
                          capacitores, anchos de pista según corrientes, etc.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 text-yellow-300 rounded-full flex items-center justify-center font-bold">5</span>
                        <div>
                          <strong className="text-slate-200">Revisión de datasheets:</strong> Lee las hojas de datos de los 
                          componentes principales para entender sus requisitos (capacitores de desacoplo, resistencias externas, etc.).
                        </div>
                      </li>
                    </ol>
                  </div>

                  <Callout type="tip">
                    <strong>Documenta todo:</strong> Mantén notas de tus decisiones, cálculos y razonamientos. Te ayudará 
                    en la entrega final y para futuras revisiones.
                  </Callout>
                </div>
              </section>

              <section id="diseno">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🖥️ Diseño y ejecución</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Con la planificación lista, procede al diseño aplicando todas las buenas prácticas:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-5">
                      <h4 className="text-blue-300 font-semibold mb-3">📐 Esquema eléctrico</h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>✓ Crear esquema completo con símbolos</li>
                        <li>✓ Etiquetar redes de señal importantes</li>
                        <li>✓ Añadir símbolos de power (VCC, GND, etc.)</li>
                        <li>✓ Asignar valores y referencias</li>
                        <li>✓ Asignar footprints a todos los componentes</li>
                        <li>✓ Ejecutar ERC sin errores</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-5">
                      <h4 className="text-green-300 font-semibold mb-3">🖥️ Diseño de PCB</h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>✓ Definir contorno de placa</li>
                        <li>✓ Colocar conectores en bordes</li>
                        <li>✓ Agrupar componentes por función</li>
                        <li>✓ Mantener señales de alta velocidad cortas</li>
                        <li>✓ Capacitores de desacoplo cerca de ICs</li>
                        <li>✓ Planos de masa continuos</li>
                        <li>✓ Rutear pistas con anchos adecuados</li>
                        <li>✓ Ejecutar DRC sin errores</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h4 className="text-purple-300 font-semibold mb-3 flex items-center gap-2">
                      <span>⚡</span> Buenas prácticas clave
                    </h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>Separación analógico/digital:</strong> Si hay señales analógicas, sepáralas de las digitales</li>
                      <li>• <strong>Desacoplo:</strong> Condensadores cerámicos (100nF) cerca de CADA pin de alimentación de ICs</li>
                      <li>• <strong>Retorno de corriente:</strong> Plano de masa sin interrupciones bajo señales críticas</li>
                      <li>• <strong>Serigrafía clara:</strong> Marca polaridad, pin 1, referencias y valores importantes</li>
                      <li>• <strong>Espacio para fabricación:</strong> Mínimo 2.5mm desde componentes al borde</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="revision">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">👥 Revisión cruzada</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Una parte fundamental del proceso es la <strong>revisión cruzada</strong>. Cada participante revisará 
                    el diseño de un compañero para identificar posibles mejoras.
                  </p>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Checklist de revisión</h4>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div>
                          <strong className="text-slate-200">Esquema correcto:</strong> Verifica conexiones, valores y símbolos
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div>
                          <strong className="text-slate-200">Footprints adecuados:</strong> Tamaños y pads correctos
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div>
                          <strong className="text-slate-200">Colocación lógica:</strong> Disposición coherente y funcional
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div>
                          <strong className="text-slate-200">Ruteo limpio:</strong> Sin cruces innecesarios, pistas organizadas
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div>
                          <strong className="text-slate-200">Desacoplo presente:</strong> Capacitores cerca de los ICs
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div>
                          <strong className="text-slate-200">Serigrafía legible:</strong> Referencias y polaridades claras
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div>
                          <strong className="text-slate-200">Viabilidad de fabricación:</strong> Cumple reglas de DRC
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Callout type="info">
                    <strong>Feedback constructivo:</strong> Proporciona sugerencias específicas y explicadas. El objetivo 
                    es ayudar a mejorar, no criticar.
                  </Callout>
                </div>
              </section>

              <section id="entrega-final">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🏆 Entrega final</h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    La entrega final debe incluir un <strong>paquete completo</strong> listo para fabricación y documentación:
                  </p>
                  
                  <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-xl p-6">
                    <h4 className="text-yellow-300 font-semibold mb-4 flex items-center gap-2">
                      <span className="text-2xl">📦</span> Paquete de entrega
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-yellow-200 font-semibold mb-2">Archivos de proyecto</h5>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• Archivo .kicad_pro, .kicad_sch, .kicad_pcb</li>
                          <li>• Carpeta con todas las librerías personalizadas (si las hay)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-yellow-200 font-semibold mb-2">Archivos de fabricación</h5>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• Archivos Gerber (todas las capas necesarias)</li>
                          <li>• Archivos de taladro (drill files)</li>
                          <li>• ZIP listo para enviar al fabricante</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-yellow-200 font-semibold mb-2">Documentación</h5>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• BOM (Bill of Materials) en CSV o Excel</li>
                          <li>• Esquema exportado en PDF</li>
                          <li>• Imágenes del diseño de PCB (top, bottom)</li>
                          <li>• Renders 3D (capturas desde el visor 3D)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-yellow-200 font-semibold mb-2">Memoria técnica</h5>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• Descripción del proyecto y objetivo</li>
                          <li>• Decisiones de diseño justificadas</li>
                          <li>• Cálculos realizados (resistencias, condensadores, potencia, etc.)</li>
                          <li>• Dificultades encontradas y soluciones aplicadas</li>
                          <li>• Feedback recibido en la revisión cruzada y cambios realizados</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                    <h4 className="text-green-300 font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎉</span> ¡Enhorabuena!
                    </h4>
                    <p className="text-slate-300">
                      Al completar este proyecto final, habrás demostrado tu capacidad para diseñar PCBs profesionales 
                      desde cero hasta la fabricación. Estás listo para contribuir a los proyectos de TARS y seguir 
                      aprendiendo con diseños más complejos.
                    </p>
                  </div>

                  <div className="flex justify-center pt-6">
                    <Link href="/cursos/diseno-pcbs-kicad">
                      <button className="btn-primary text-lg px-8 py-4">
                        📚 Volver al índice del curso
                      </button>
                    </Link>
                  </div>
                </div>
              </section>

              <section id="videos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📹 Videos recomendados</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Videos para inspirarte y aprender técnicas avanzadas para tu proyecto final:
                  </p>
                  
                  <div className="grid gap-4">
                    <VideoResource
                      title="Dive into PCB Design – KiCad 8 Tutorial for Beginners"
                      url="https://www.youtube.com/watch?v=ik-kXUYCweU"
                      description="Tutorial completo de diseño de PCB profesional en KiCad 8"
                      duration="42:30"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="KiCad 6 tutorial – Start to finish board design"
                      url="https://www.youtube.com/watch?v=3E5REDAQk_A"
                      description="Proyecto completo de principio a fin con mejores prácticas"
                      duration="55:15"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Importar Footprints y Símbolos desde SnapEDA"
                      url="https://www.youtube.com/watch?v=W9cLnIjvybo"
                      description="Cómo importar componentes externos de SnapEDA y otras fuentes"
                      duration="12:40"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Revisión de diseño y mejores prácticas de ruteo"
                      url="https://www.youtube.com/watch?v=jQ3-Zy_DrSs"
                      description="Checklist de revisión y técnicas avanzadas de ruteo"
                      duration="28:20"
                      language="EN"
                    />

                    <VideoResource
                      title="Preparación de archivos para fabricación y ensamblado"
                      url="https://www.youtube.com/watch?v=Sbkvza8cKQE"
                      description="Cómo preparar Gerbers, BOM y archivos para fabricación profesional"
                      duration="18:50"
                      language="EN"
                    />
                  </div>
                </div>
              </section>

            </div>

            <TutorialNavigation 
              previous={{
                title: 'Módulo 3: Proyecto práctico de ampliación',
                href: '/cursos/diseno-pcbs-kicad/modulo-3'
              }}
              next={undefined}
            />
          </div>

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
