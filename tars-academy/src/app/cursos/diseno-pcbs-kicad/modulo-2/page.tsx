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
  { id: 'importar-netlist', title: '📥 Importar esquema a PCB', level: 2 },
  { id: 'configurar-placa', title: '⚙️ Configurar la placa', level: 2 },
  { id: 'colocar-componentes', title: '📍 Colocación de componentes', level: 2 },
  { id: 'trazar-pistas', title: '🛤️ Trazado de pistas', level: 2 },
  { id: 'comprobacion-drc', title: '✅ Design Rules Check (DRC)', level: 2 },
  { id: 'generar-gerbers', title: '📦 Generación de Gerbers', level: 2 },
  { id: 'entrega', title: '📤 Entrega del módulo', level: 2 },
  { id: 'videos', title: '📹 Videos recomendados', level: 2 },
];

export default function Modulo2() {
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
                  { label: 'Módulo 2' }
                ]}
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                <TutorialChip label="Módulo 2" variant="status" icon="🖥️" />
                <TutorialChip label="Semana 2" variant="level" icon="📅" />
                <TutorialChip label="5-7 días" variant="time" icon="⏱️" />
              </div>
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Módulo 2: De esquema a PCB
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Transforma tu esquema eléctrico en una PCB física. Aprende a configurar reglas de diseño, colocar componentes 
                estratégicamente, rutear pistas y generar archivos Gerber listos para fabricación.
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📋 Introducción</h2>
                <p className="text-slate-300 leading-relaxed">
                  El diseño de la PCB es donde tu circuito se convierte en realidad física. Pasarás del esquema lógico 
                  a la disposición física de componentes y pistas de cobre que un fabricante puede producir.
                </p>
              </section>

              <section id="objetivos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🎯 Objetivos del módulo</h2>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Importar tu esquema al editor de PCB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Configurar el contorno de la placa y reglas de diseño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Colocar componentes siguiendo buenas prácticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Rutear pistas y añadir planos de masa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Ejecutar DRC y corregir errores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Generar archivos Gerber para fabricación</span>
                  </li>
                </ul>
              </section>

              <section id="importar-netlist">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📥 Importar esquema a PCB</h2>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <ol className="space-y-3 text-slate-300">
                    <li><strong>1.</strong> Abre el editor de PCB desde el gestor de proyectos</li>
                    <li><strong>2.</strong> Ve a <code>Tools → Update PCB from Schematic</code> (o presiona F8)</li>
                    <li><strong>3.</strong> Revisa los cambios en el diálogo y haz clic en <code>Update PCB</code></li>
                    <li><strong>4.</strong> Verás todos los componentes apilados fuera del área de la placa, conectados por líneas blancas (ratsnest)</li>
                  </ol>
                </div>
              </section>

              <section id="configurar-placa">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">⚙️ Configurar la placa</h2>
                <div className="space-y-4">
                  <p className="text-slate-300">Define el contorno, número de capas y reglas de diseño:</p>
                  
                  <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-5">
                    <h4 className="text-blue-300 font-semibold mb-3">Contorno de la placa</h4>
                    <ol className="space-y-2 text-slate-300 text-sm">
                      <li>1. Cambia a la capa <code>Edge.Cuts</code> en el selector de capas</li>
                      <li>2. Usa la herramienta de línea para dibujar un rectángulo (50mm x 50mm es un buen tamaño inicial)</li>
                      <li>3. Asegúrate de que el contorno esté cerrado (sin espacios)</li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-5">
                    <h4 className="text-purple-300 font-semibold mb-3">Reglas de diseño</h4>
                    <ol className="space-y-2 text-slate-300 text-sm">
                      <li>1. Ve a <code>File → Board Setup → Design Rules → Constraints</code></li>
                      <li>2. Establece valores seguros para empezar:
                        <ul className="mt-2 ml-4 space-y-1">
                          <li>• Ancho mínimo de pista: <strong>0.25mm</strong></li>
                          <li>• Separación mínima: <strong>0.25mm</strong></li>
                          <li>• Diámetro mínimo de vía: <strong>0.8mm</strong></li>
                          <li>• Diámetro de taladro: <strong>0.4mm</strong></li>
                        </ul>
                      </li>
                      <li>3. Estos valores son compatibles con la mayoría de fabricantes (JLCPCB, PCBWay, etc.)</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section id="colocar-componentes">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📍 Colocación de componentes</h2>
                <div className="space-y-4">
                  <p className="text-slate-300">La colocación es crucial para un buen diseño. Sigue estas buenas prácticas:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">✓ Haz esto</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Agrupa componentes por función</li>
                        <li>• Coloca conectores en los bordes</li>
                        <li>• Alinea componentes en direcciones coherentes</li>
                        <li>• Deja espacio entre componentes (≥1mm)</li>
                        <li>• Orienta los componentes polarizados igual</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-red-300 font-semibold mb-2">✗ Evita esto</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Componentes muy juntos</li>
                        <li>• Orientaciones aleatorias</li>
                        <li>• Componentes cerca del borde (&lt;2.5mm)</li>
                        <li>• Cruzar pistas de potencia con señales</li>
                        <li>• Bloquear el ruteo con mala colocación</li>
                      </ul>
                    </div>
                  </div>

                  <Callout type="tip">
                    <strong>Consejo pro:</strong> Coloca primero los componentes críticos (conectores, ICs) y luego 
                    los pasivos (resistencias, condensadores) cerca de donde se necesiten.
                  </Callout>
                </div>
              </section>

              <section id="trazar-pistas">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">🛤️ Trazado de pistas</h2>
                <div className="space-y-4">
                  <p className="text-slate-300">Conecta los componentes con pistas de cobre:</p>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Pasos para rutear</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li><strong>1.</strong> Presiona <code>X</code> para activar la herramienta de ruteo</li>
                      <li><strong>2.</strong> Haz clic en un pad y sigue el ratsnest hasta el siguiente pad</li>
                      <li><strong>3.</strong> Usa la capa <code>F.Cu</code> para pistas horizontales y <code>B.Cu</code> para verticales</li>
                      <li><strong>4.</strong> Presiona <code>V</code> para colocar una vía y cambiar de capa</li>
                      <li><strong>5.</strong> Establece el ancho de pista según la corriente:
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Señales: <strong>0.3-0.5mm</strong></li>
                          <li>• Alimentación: <strong>0.8-1.0mm</strong> (depende de la corriente)</li>
                        </ul>
                      </li>
                    </ol>
                  </div>

                  <Callout type="info">
                    <strong>Planos de masa:</strong> En lugar de rutear todas las conexiones GND, usa zonas de cobre rellenas. 
                    Ve a <code>Add Filled Zone</code>, selecciona GND y dibuja sobre toda la placa en ambas caras.
                  </Callout>
                </div>
              </section>

              <section id="comprobacion-drc">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">✅ Design Rules Check (DRC)</h2>
                <div className="space-y-4">
                  <p className="text-slate-300">El DRC verifica que tu diseño cumpla las reglas de fabricación:</p>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <ol className="space-y-3 text-slate-300">
                      <li><strong>1.</strong> Ve a <code>Inspect → Design Rules Checker</code></li>
                      <li><strong>2.</strong> Haz clic en <code>Run DRC</code></li>
                      <li><strong>3.</strong> Revisa errores:
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• Pistas demasiado cercanas</li>
                          <li>• Conexiones sin rutear</li>
                          <li>• Pistas demasiado finas</li>
                          <li>• Componentes fuera del contorno</li>
                        </ul>
                      </li>
                      <li><strong>4.</strong> Corrige todos los errores antes de fabricar</li>
                    </ol>
                  </div>

                  <Callout type="check">
                    <strong>Objetivo:</strong> <strong>0 errores y 0 warnings</strong> antes de generar Gerbers.
                  </Callout>
                </div>
              </section>

              <section id="generar-gerbers">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📦 Generación de Gerbers</h2>
                <div className="space-y-4">
                  <p className="text-slate-300">Los archivos Gerber son el formato estándar para fabricación de PCBs:</p>
                  
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Generar archivos de fabricación</h4>
                    <ol className="space-y-3 text-slate-300">
                      <li><strong>1.</strong> Ve a <code>File → Fabrication Outputs → Gerbers</code></li>
                      <li><strong>2.</strong> Selecciona las capas necesarias:
                        <ul className="mt-2 ml-4 space-y-1 text-sm">
                          <li>• F.Cu, B.Cu (cobre)</li>
                          <li>• F.Mask, B.Mask (máscara de soldadura)</li>
                          <li>• F.Silkscreen, B.Silkscreen (serigrafía)</li>
                          <li>• Edge.Cuts (contorno)</li>
                        </ul>
                      </li>
                      <li><strong>3.</strong> Haz clic en <code>Plot</code></li>
                      <li><strong>4.</strong> Luego <code>Generate Drill Files</code> para los taladros</li>
                      <li><strong>5.</strong> Comprime todos los archivos en un ZIP para enviar al fabricante</li>
                    </ol>
                  </div>

                  <Callout type="tip">
                    <strong>Verifica antes de fabricar:</strong> Usa el visor 3D (<code>View → 3D Viewer</code>) para revisar 
                    visualmente tu diseño y detectar problemas.
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
                      <span className="text-slate-300">Archivo <code>.kicad_pcb</code> con el diseño completo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Todos los componentes colocados y alineados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Todas las conexiones ruteadas (ratsnest vacío)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">DRC sin errores ni warnings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Archivos Gerber generados y comprimidos en ZIP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Imagen 3D de la placa (captura de pantalla)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <span className="text-slate-300">Breve informe justificando decisiones de diseño</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="videos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">📹 Videos recomendados</h2>
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Videos tutoriales para dominar el diseño de PCBs en KiCad:
                  </p>
                  
                  <div className="grid gap-4">
                    <VideoResource
                      title="Placement and Routing in the PCB Editor (KiCad 8)"
                      url="https://www.youtube.com/watch?v=2rIyBDW4lok"
                      description="Proceso completo de colocación de componentes y ruteado de pistas"
                      duration="28:15"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="KiCad 8 – Route add tracks (ruteado de pistas)"
                      url="https://www.youtube.com/watch?v=6SrfPNxv6s4"
                      description="Técnicas avanzadas de ruteado manual en KiCad 8"
                      duration="15:40"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="How to Place Components in PCB Editor – KiCad 9.0"
                      url="https://www.youtube.com/watch?v=jQ3-Zy_DrSs"
                      description="Mejores prácticas para colocar componentes eficientemente"
                      duration="18:30"
                      language="EN"
                    />
                    
                    <VideoResource
                      title="Generación de archivos Gerber para fabricación"
                      url="https://www.youtube.com/watch?v=Sbkvza8cKQE"
                      description="Cómo exportar los Gerbers correctamente para fabricación"
                      duration="12:45"
                      language="EN"
                    />

                    <VideoResource
                      title="Ground Planes y zonas de cobre"
                      url="https://www.youtube.com/watch?v=gg58vON2d_k"
                      description="Planos de tierra, zonas de cobre y consideraciones de EMI"
                      duration="20:25"
                      language="EN"
                    />
                  </div>
                </div>
              </section>

            </div>

            <TutorialNavigation 
              previous={{
                title: 'Módulo 1: Fundamentos de circuitos y esquemas',
                href: '/cursos/diseno-pcbs-kicad/modulo-1'
              }}
              next={{
                title: 'Módulo 3: Proyecto práctico de ampliación',
                href: '/cursos/diseno-pcbs-kicad/modulo-3'
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
