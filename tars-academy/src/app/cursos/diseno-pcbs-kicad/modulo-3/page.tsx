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
  { id: 'proyecto', title: '🔋 Proyecto: Fuente de alimentación', level: 2 },
  { id: 'esquema', title: '📐 Diseño del esquema', level: 2 },
  { id: 'pcb', title: '🖥️ Diseño de la PCB', level: 2 },
  { id: 'entrega', title: '📤 Entrega del módulo', level: 2 },
  { id: 'videos', title: '📹 Videos recomendados', level: 2 },
];

export default function Modulo3() {
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
                  { label: 'Módulo 3' }
                ]}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                <TutorialChip label="Módulo 3" variant="status" icon="🔋" />
                <TutorialChip label="Semana 3" variant="level" icon="📅" />
                <TutorialChip label="5-7 días" variant="time" icon="⏱️" />
              </div>
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Módulo 3: Proyecto práctico de ampliación
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Diseña una fuente de alimentación regulada completa. Aplica todas las técnicas aprendidas en un proyecto 
                realista listo para fabricación.
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📋 Introducción</h2>
                <p className="text-slate-300 leading-relaxed">
                  En este módulo pondrás en práctica todo lo aprendido diseñando un proyecto completo: una 
                  <strong> fuente de alimentación regulada</strong>. Este tipo de circuito es fundamental en cualquier 
                  sistema electrónico y te permitirá trabajar con componentes de potencia, filtrado y protección.
                </p>
              </section>

              <section id="proyecto">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🔋 Proyecto: Fuente de alimentación</h2>
                <div className="space-y-4">
                  <p className="text-slate-300">Diseñarás un regulador de tensión que convierta 9V a 5V con los siguientes elementos:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-5">
                      <h4 className="text-orange-300 font-semibold mb-3">Componentes principales</h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>• <strong>Regulador lineal 7805</strong> (o equivalente SMD)</li>
                        <li>• <strong>Condensadores de entrada/salida</strong> (100µF, 10µF)</li>
                        <li>• <strong>Diodo de protección</strong> contra inversión de polaridad</li>
                        <li>• <strong>LED indicador</strong> con resistencia limitadora</li>
                        <li>• <strong>Conectores</strong> de entrada y salida</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-5">
                      <h4 className="text-blue-300 font-semibold mb-3">Especificaciones</h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>• <strong>Entrada:</strong> 7-12V DC</li>
                        <li>• <strong>Salida:</strong> 5V ±5%, 1A máx</li>
                        <li>• <strong>Protección:</strong> Inversión de polaridad</li>
                        <li>• <strong>Filtrado:</strong> Capacitores de entrada/salida</li>
                        <li>• <strong>Indicación:</strong> LED de power</li>
                      </ul>
                    </div>
                  </div>

                  <Callout type="info">
                    <strong>Alternativa avanzada:</strong> Si te sientes cómodo, puedes diseñar un regulador conmutado 
                    (buck converter) en lugar del lineal, que será más eficiente pero más complejo.
                  </Callout>
                </div>
              </section>

              <section id="esquema">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📐 Diseño del esquema</h2>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Pasos para el esquema</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li><strong>1. Definir el circuito:</strong>
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Conector de entrada (2 pines: +Vin, GND)</li>
                          <li>• Diodo de protección (1N4001 o similar)</li>
                          <li>• Condensador de entrada (100µF electrolítico)</li>
                          <li>• Regulador 7805 (TO-220 o SMD)</li>
                          <li>• Condensador de salida (10µF + 100nF cerámico)</li>
                          <li>• LED indicador + resistencia 330Ω</li>
                          <li>• Conector de salida (2 pines: +5V, GND)</li>
                        </ul>
                      </li>
                      <li><strong>2. Crear el esquema:</strong> Usa el editor de esquemas para colocar todos los componentes y conectarlos</li>
                      <li><strong>3. Calcular valores:</strong>
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Condensador de entrada: mínimo 100µF para filtrar rizado</li>
                          <li>• Condensador de salida: 10µF para estabilidad + 100nF para alta frecuencia</li>
                          <li>• Resistencia LED: (5V - 2V) / 20mA = 150Ω → usar 330Ω comercial</li>
                        </ul>
                      </li>
                      <li><strong>4. Asignar footprints:</strong> Elegir encapsulados adecuados (TO-220 para el regulador, condensadores electrolíticos radiales, etc.)</li>
                      <li><strong>5. Ejecutar ERC:</strong> Verificar que no haya errores antes de pasar a la PCB</li>
                    </ol>
                  </div>

                  <Callout type="warning">
                    <strong>Disipación térmica:</strong> El 7805 puede disipar (Vin - Vout) × Iout de potencia. 
                    Con 9V in y 5V out @ 500mA, disipa 2W. Considera un disipador o zona de cobre amplia.
                  </Callout>
                </div>
              </section>

              <section id="pcb">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🖥️ Diseño de la PCB</h2>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Consideraciones de diseño</h4>
                    <ul className="space-y-3 text-slate-300">
                      <li><strong>Separación de potencia y señal:</strong>
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Coloca el regulador en el centro</li>
                          <li>• Entrada a la izquierda, salida a la derecha</li>
                          <li>• Separa claramente las secciones de entrada y salida</li>
                        </ul>
                      </li>
                      <li><strong>Ruteo de potencia:</strong>
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Pistas de alimentación anchas (≥1mm para 1A)</li>
                          <li>• Mantén las pistas de potencia cortas y directas</li>
                          <li>• Plano de masa continuo en la cara inferior</li>
                        </ul>
                      </li>
                      <li><strong>Ubicación de condensadores:</strong>
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Condensadores lo MÁS CERCA posible de los pines del regulador</li>
                          <li>• El condensador cerámico (100nF) debe estar pegado al pin de salida</li>
                          <li>• Esto reduce la impedancia y mejora la estabilidad</li>
                        </ul>
                      </li>
                      <li><strong>Disipación térmica:</strong>
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Zona de cobre amplia conectada al pin de salida del regulador (actúa como disipador)</li>
                          <li>• Si usas TO-220, considera un pad grande en la cara superior para atornillar un disipador</li>
                          <li>• Vías térmicas conectando ambas caras si es necesario</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <Callout type="tip">
                    <strong>Prueba de concepto:</strong> Antes de fabricar, revisa el diseño con compañeros. 
                    Una segunda opinión puede detectar errores que pasaste por alto.
                  </Callout>
                </div>
              </section>

              <section id="entrega">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📤 Entrega del módulo</h2>
                <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="text-yellow-300 font-semibold mb-4">📋 Checklist de entrega</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Esquema completo con todos los componentes y valores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">PCB diseñada con sección de potencia separada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Plano de masa continuo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Zona de disipación térmica adecuada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">DRC sin errores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Archivos Gerber generados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Memoria con cálculos de potencia disipada y justificación de decisiones</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="videos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📹 Videos recomendados</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Videos para profundizar en el diseño de fuentes de alimentación:
                  </p>
                  
                  <div className="grid gap-4">
                    <VideoResource
                      title="Diseño de PCB en KiCad 7.0 – Layout y Ruteado"
                      url="https://www.youtube.com/watch?v=nX5dkSzaUZg"
                      description="Tutorial completo de layout y ruteado para fuentes de alimentación"
                      duration="35:20"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Reguladores de Voltaje – LM7805 explicado"
                      url="https://www.youtube.com/watch?v=GSzVs7_aW-Y"
                      description="Cómo funciona el LM7805 y cómo usarlo correctamente"
                      duration="15:30"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Capacitores de filtrado y desacoplo"
                      url="https://www.youtube.com/watch?v=BcJ6UdDx1vg"
                      description="Por qué y dónde colocar capacitores en diseños de potencia"
                      duration="18:20"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Gestión térmica en fuentes de alimentación"
                      url="https://www.youtube.com/watch?v=qH0dWMUwN8o"
                      description="Gestión térmica y disipadores para reguladores de voltaje"
                      duration="16:40"
                      language="EN"
                    />

                    <VideoResource
                      title="Testing y Troubleshooting de fuentes de alimentación"
                      url="https://www.youtube.com/watch?v=xR0RfmmRhDY"
                      description="Cómo probar y depurar fuentes de alimentación"
                      duration="22:50"
                      language="EN"
                    />
                  </div>
                </div>
              </section>

            </div>

            <TutorialNavigation 
              previous={{
                title: 'Módulo 2: De esquema a PCB',
                href: '/cursos/diseno-pcbs-kicad/modulo-2'
              }}
              next={{
                title: 'Módulo 4: Proyecto final guiado',
                href: '/cursos/diseno-pcbs-kicad/modulo-4'
              }}
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
