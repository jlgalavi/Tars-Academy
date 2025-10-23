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
  { id: 'repaso-teoria', title: '🔌 Repaso teórico de componentes', level: 2 },
  { id: 'resistores', title: 'Resistores', level: 3 },
  { id: 'condensadores', title: 'Condensadores', level: 3 },
  { id: 'diodos', title: 'Diodos', level: 3 },
  { id: 'crear-esquema', title: '📐 Crear tu primer esquema', level: 2 },
  { id: 'comprobacion-erc', title: '✅ Comprobación eléctrica (ERC)', level: 2 },
  { id: 'lista-materiales', title: '📊 Lista de materiales (BOM)', level: 2 },
  { id: 'entrega', title: '📤 Entrega del módulo', level: 2 },
];

export default function Modulo1() {
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
                  { label: 'Módulo 1' }
                ]}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                <TutorialChip label="Módulo 1" variant="status" icon="📐" />
                <TutorialChip label="Semana 1" variant="level" icon="📅" />
                <TutorialChip label="5-7 días" variant="time" icon="⏱️" />
              </div>
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Módulo 1: Fundamentos de circuitos y esquemas
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Aprende los fundamentos de electrónica y crea tu primer esquema eléctrico con LED, resistencia y pulsador. 
                Domina el uso del editor de esquemas de KiCad y las herramientas de verificación ERC.
              </p>
            </div>

            {/* Contenido */}
            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📋 Introducción</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    En este primer módulo del curso, combinarás <strong>teoría de electrónica básica</strong> con 
                    <strong> práctica en KiCad</strong>. Aprenderás cómo funcionan los componentes esenciales y 
                    crearás tu primer esquema eléctrico funcional.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    El esquema eléctrico es el <strong>punto de partida</strong> de cualquier diseño de PCB. Representa 
                    qué componentes hay en tu circuito y cómo están conectados entre sí, sin preocuparte todavía por 
                    la disposición física.
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
                      <span>Comprender el funcionamiento de resistores, condensadores y diodos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Calcular el valor correcto de una resistencia para un LED usando la ley de Ohm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Crear un esquema eléctrico completo en KiCad con símbolos y conexiones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Asignar footprints adecuados a cada componente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Ejecutar el ERC (Electrical Rules Check) y corregir errores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Generar una lista de materiales (BOM) exportable</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="repaso-teoria">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🔌 Repaso teórico de componentes</h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Antes de diseñar, necesitas entender cómo funcionan los componentes básicos que usarás:
                  </p>

                  {/* Resistores */}
                  <div id="resistores" className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-300 mb-3 flex items-center gap-2">
                      <span>🔵</span> Resistores
                    </h3>
                    
                    <DiagramBox title="⚡ Circuito básico con resistor" variant="example">
                      <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-center">
                        <pre className="text-slate-300">
{`    +5V
     │
     ├─── LED (2V, 20mA)
     │
    ╱╲╱
   ╱  ╲  R = 220Ω
  ╱    ╲
 ╱      ╲
│        │
│        │
└────────┘
   GND`}
                        </pre>
                      </div>
                      <p className="text-slate-400 text-sm">
                        Diagrama de un LED con resistencia limitadora. La resistencia protege al LED limitando la corriente.
                      </p>
                    </DiagramBox>
                    
                    <p className="text-slate-300 mb-4">
                      Los resistores son componentes pasivos que <strong>limitan la corriente eléctrica</strong>. Su valor 
                      se mide en <strong>ohmios (Ω)</strong> y se calcula usando la ley de Ohm:
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                      <code className="text-blue-300 text-lg">R = V / I</code>
                      <p className="text-slate-400 text-sm mt-2">
                        Donde R = resistencia (Ω), V = voltaje (V), I = corriente (A)
                      </p>
                    </div>
                    <p className="text-slate-300 mb-3">
                      Una resistencia grande implica menor corriente para un voltaje dado. Los resistores disipan energía 
                      en forma de calor:
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <code className="text-blue-300 text-lg">P = I² × R</code>
                      <p className="text-slate-400 text-sm mt-2">
                        Donde P = potencia disipada (W)
                      </p>
                    </div>
                    
                    <Callout type="tip">
                      <strong>Ejemplo práctico:</strong> Para alimentar un LED de 2V que consume 20mA desde una fuente de 5V, 
                      necesitas una resistencia de (5V - 2V) / 0.02A = 150Ω. El valor comercial más cercano es 220Ω.
                    </Callout>
                  </div>

                  {/* Condensadores */}
                  <div id="condensadores" className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
                      <span>⚡</span> Condensadores
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Los condensadores <strong>almacenan energía eléctrica</strong> en dos placas separadas por un dieléctrico. 
                      Su capacidad se mide en <strong>faradios (F)</strong>, aunque comúnmente usamos µF (microfaradios) o pF (picofaradios).
                    </p>
                    <p className="text-slate-300 mb-4">
                      Los condensadores <strong>bloquean la corriente continua (DC)</strong> pero permiten pasar la 
                      <strong> corriente alterna (AC)</strong>. La energía almacenada es:
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                      <code className="text-purple-300 text-lg">E = ½ × C × V²</code>
                      <p className="text-slate-400 text-sm mt-2">
                        Donde E = energía (J), C = capacidad (F), V = voltaje (V)
                      </p>
                    </div>
                    <p className="text-slate-300 mb-3">
                      <strong>Usos principales:</strong>
                    </p>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Filtrado:</strong> Eliminar ruido de la alimentación</li>
                      <li>• <strong>Desacoplo:</strong> Proporcionar corriente rápida a circuitos digitales</li>
                      <li>• <strong>Temporización:</strong> Circuitos RC para delays o osciladores</li>
                    </ul>
                  </div>

                  {/* Diodos */}
                  <div id="diodos" className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-300 mb-3 flex items-center gap-2">
                      <span>🔺</span> Diodos
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Los diodos son dispositivos semiconductores de dos terminales que <strong>permiten el paso de corriente 
                      en un solo sentido</strong>. Están formados por material tipo P y N.
                    </p>
                    <p className="text-slate-300 mb-4">
                      Un diodo conduce cuando la tensión directa supera una barrera (≈ 0.7V para diodos de silicio, ≈ 0.3V 
                      para Schottky) y se bloquea en polarización inversa.
                    </p>
                    <p className="text-slate-300 mb-3">
                      <strong>Aplicaciones comunes:</strong>
                    </p>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Rectificación:</strong> Convertir AC a DC</li>
                      <li>• <strong>Protección:</strong> Evitar polarización inversa</li>
                      <li>• <strong>Regulación:</strong> Diodos Zener para referencias de voltaje</li>
                      <li>• <strong>Señalización:</strong> LEDs (Light Emitting Diodes)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="crear-esquema">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📐 Crear tu primer esquema</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Ahora que conoces los componentes, crearás un <strong>circuito simple con LED, resistencia y pulsador</strong> 
                    en el editor de esquemas de KiCad.
                  </p>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Pasos para crear el esquema</h4>
                    <ol className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">1</span>
                        <div>
                          <strong className="text-slate-200">Abre el editor de esquemas:</strong> Desde el gestor de proyectos, 
                          haz clic en el icono del editor de esquemas o presiona Ctrl+E.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">2</span>
                        <div>
                          <strong className="text-slate-200">Configurar la hoja:</strong> Ve a <code>File → Page Settings</code> 
                          y establece el tamaño de papel (A4), título del proyecto y tu nombre como autor.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">3</span>
                        <div>
                          <strong className="text-slate-200">Añadir símbolos:</strong> Presiona <code>A</code> para abrir el selector 
                          de símbolos y busca:
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• <code className="text-purple-300">LED</code> (Device:LED)</li>
                            <li>• <code className="text-purple-300">R</code> (Device:R para resistencia)</li>
                            <li>• <code className="text-purple-300">SW_Push</code> (Switch:SW_Push para pulsador)</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">4</span>
                        <div>
                          <strong className="text-slate-200">Colocar componentes:</strong> Coloca los símbolos en el esquema 
                          dejando espacio para las conexiones. Puedes rotar con <code>R</code> antes de colocar.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">5</span>
                        <div>
                          <strong className="text-slate-200">Conectar con cables:</strong> Presiona <code>W</code> para dibujar 
                          cables entre los pines de los componentes. Conecta:
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Positivo de alimentación → Pulsador → Resistencia → LED (ánodo) → Masa</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">6</span>
                        <div>
                          <strong className="text-slate-200">Añadir símbolos de alimentación:</strong> Presiona <code>P</code> y busca:
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• <code className="text-purple-300">+5V</code> (para la alimentación positiva)</li>
                            <li>• <code className="text-purple-300">GND</code> (para la masa)</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">7</span>
                        <div>
                          <strong className="text-slate-200">Añadir valores:</strong> Haz doble clic en cada componente y establece:
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Resistencia: <code className="text-purple-300">220R</code> o <code className="text-purple-300">220Ω</code></li>
                            <li>• LED: tipo y color (ej. <code className="text-purple-300">LED_RED</code>)</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">8</span>
                        <div>
                          <strong className="text-slate-200">Anotar esquema:</strong> Ve a <code>Tools → Annotate Schematic</code> 
                          y haz clic en <code>Annotate</code>. Esto asignará referencias únicas (R1, LED1, SW1, etc.).
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center font-bold">9</span>
                        <div>
                          <strong className="text-slate-200">Asignar footprints:</strong> Ve a <code>Tools → Assign Footprints</code>. 
                          Para cada componente, selecciona un footprint adecuado:
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Resistencia: <code className="text-purple-300">Resistor_SMD:R_0805</code> (SMD) o <code className="text-purple-300">Resistor_THT:R_Axial_DIN0207</code> (THT)</li>
                            <li>• LED: <code className="text-purple-300">LED_SMD:LED_0805</code> o <code className="text-purple-300">LED_THT:LED_D5.0mm</code></li>
                            <li>• Pulsador: <code className="text-purple-300">Button_Switch_THT:SW_PUSH_6mm</code></li>
                          </ul>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <Callout type="tip">
                    <strong>SMD vs THT:</strong> SMD (Surface Mount Device) son componentes de montaje superficial, más pequeños. 
                    THT (Through-Hole Technology) tienen pines que atraviesan la placa. Para aprender, THT es más fácil de soldar 
                    manualmente.
                  </Callout>
                </div>
              </section>

              <section id="comprobacion-erc">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">✅ Comprobación eléctrica (ERC)</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    El <strong>Electrical Rules Check (ERC)</strong> es una herramienta que detecta errores comunes en el esquema:
                  </p>

                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Pines sin conectar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Cortocircuitos entre redes de diferente voltaje</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Conflictos de tipo de pin (salida conectada a salida)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">•</span>
                      <span>Componentes sin footprints asignados</span>
                    </li>
                  </ul>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Ejecutar el ERC</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-green-500/20 text-green-300 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <div>
                          En el editor de esquemas, ve a <code>Inspect → Electrical Rules Checker</code>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-green-500/20 text-green-300 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                        <div>
                          Haz clic en <code>Run ERC</code>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-green-500/20 text-green-300 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                        <div>
                          Revisa la lista de errores y advertencias. Haz clic en cada uno para ver su ubicación en el esquema.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-green-500/20 text-green-300 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                        <div>
                          Corrige todos los errores antes de continuar. Las advertencias pueden ignorarse si estás seguro de que 
                          son intencionales.
                        </div>
                      </li>
                    </ol>
                  </div>

                  <Callout type="check">
                    <strong>Objetivo:</strong> Debes tener <strong>0 errores</strong> antes de pasar al diseño de la PCB. 
                    Es normal tener algunas advertencias sobre pines de power no conectados si usas símbolos genéricos.
                  </Callout>
                </div>
              </section>

              <section id="lista-materiales">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📊 Lista de materiales (BOM)</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    La <strong>Bill of Materials (BOM)</strong> es una lista de todos los componentes necesarios para fabricar 
                    tu PCB. Incluye referencias, valores, footprints y cantidades.
                  </p>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Generar la BOM</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <div>
                          En el editor de esquemas, ve a <code>Tools → Generate BOM</code>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                        <div>
                          Selecciona un plugin de exportación (por defecto usa <code>bom_csv_grouped_by_value</code>)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                        <div>
                          Haz clic en <code>Generate</code>. Se creará un archivo CSV en la carpeta del proyecto.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                        <div>
                          Abre el CSV con Excel, LibreOffice o un editor de texto para verificar la lista.
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-5">
                    <h4 className="text-blue-300 font-semibold mb-3">Ejemplo de BOM esperada</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-slate-300">
                        <thead className="text-blue-300 border-b border-blue-500/30">
                          <tr>
                            <th className="text-left py-2 px-3">Referencia</th>
                            <th className="text-left py-2 px-3">Valor</th>
                            <th className="text-left py-2 px-3">Footprint</th>
                            <th className="text-left py-2 px-3">Cantidad</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                          <tr>
                            <td className="py-2 px-3">R1</td>
                            <td className="py-2 px-3">220Ω</td>
                            <td className="py-2 px-3">Resistor_THT:R_Axial_DIN0207</td>
                            <td className="py-2 px-3">1</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3">LED1</td>
                            <td className="py-2 px-3">LED_RED</td>
                            <td className="py-2 px-3">LED_THT:LED_D5.0mm</td>
                            <td className="py-2 px-3">1</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3">SW1</td>
                            <td className="py-2 px-3">SW_Push</td>
                            <td className="py-2 px-3">Button_Switch_THT:SW_PUSH_6mm</td>
                            <td className="py-2 px-3">1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              <section id="entrega">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📤 Entrega del módulo</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-xl p-6">
                    <h4 className="text-yellow-300 font-semibold mb-4 flex items-center gap-2">
                      <span className="text-2xl">📋</span> Checklist de entrega
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Esquema completo:</strong> Circuito con LED, resistencia y pulsador 
                          correctamente conectado.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Componentes anotados:</strong> Referencias únicas (R1, LED1, SW1).
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Footprints asignados:</strong> Todos los componentes tienen footprint.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">ERC sin errores:</strong> 0 errores en el Electrical Rules Check.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">BOM generada:</strong> Archivo CSV con la lista de materiales.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Esquema exportado en PDF:</strong> Para documentación.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-5 h-5" />
                        <div className="text-slate-300">
                          <strong className="text-slate-200">Cálculos documentados:</strong> Breve explicación de cómo calculaste 
                          el valor de la resistencia usando la ley de Ohm.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Callout type="info">
                    <strong>Formato de entrega:</strong> Comparte el esquema PDF, BOM CSV y tus cálculos en el canal del equipo.
                  </Callout>
                </div>
              </section>

              <section id="videos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📹 Videos recomendados</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Videos tutoriales para complementar el aprendizaje de este módulo:
                  </p>
                  
                  <div className="grid gap-4">
                    <VideoResource
                      title="KiCad Tutorial – A to Z of PCB Design for Beginners"
                      url="https://www.youtube.com/watch?v=7vs7-pJzWf8"
                      description="Tutorial completo de KiCad desde cero hasta proyecto terminado"
                      duration="32:45"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Cómo crear tus propios Footprints en KiCad"
                      url="https://www.youtube.com/watch?v=Qx0kQdFYC7o"
                      description="Guía para crear footprints personalizados en KiCad"
                      duration="18:30"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Crear librerías de símbolos y huellas en KiCad"
                      url="https://www.youtube.com/watch?v=9J0OW0vAPWE"
                      description="Aprende a crear y gestionar bibliotecas personalizadas"
                      duration="22:15"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Componentes electrónicos básicos explicados (Resistencias, Diodos, Transistores, etc.)"
                      url="https://www.youtube.com/watch?v=6Maq5IyHSuc"
                      description="Fundamentos de los componentes electrónicos más comunes"
                      duration="25:40"
                      language="ES"
                    />

                    <VideoResource
                      title="Ley de Ohm y análisis de circuitos"
                      url="https://www.youtube.com/watch?v=HsLLq6Rm5tU"
                      description="Introducción a la ley de Ohm y análisis básico de circuitos"
                      duration="16:20"
                      language="ES"
                    />
                  </div>
                </div>
              </section>

            </div>

            {/* Navegación */}
            <TutorialNavigation 
              previous={{
                title: 'Módulo 0: Instalación y entorno',
                href: '/cursos/diseno-pcbs-kicad/modulo-0'
              }}
              next={{
                title: 'Módulo 2: De esquema a PCB',
                href: '/cursos/diseno-pcbs-kicad/modulo-2'
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
