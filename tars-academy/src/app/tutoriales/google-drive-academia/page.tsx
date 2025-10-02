'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';
import SpaceParticles from '@/components/SpaceParticles';

const tocItems = [
  { id: 'introduccion', title: '🎯 Introducción al TARS Drive', level: 2 },
  { id: 'estructura-general', title: '📁 Estructura general de carpetas', level: 2 },
  { id: 'departamentos', title: 'Carpetas por departamento', level: 3 },
  { id: 'software-detalle', title: '💻 Carpeta de Software (detalle)', level: 2 },
  { id: 'general-software', title: '10_General', level: 3 },
  { id: 'equipos-software', title: '11_Equipos', level: 3 },
  { id: 'recursos-software', title: '12_Recursos', level: 3 },
  { id: 'academia-software', title: '13_Academia', level: 3 },
  { id: 'tareas-software', title: '14_Tareas', level: 3 },
  { id: 'buenas-practicas', title: '📋 Buenas prácticas de uso', level: 2 },
  { id: 'permisos', title: '🔒 Permisos y responsabilidades', level: 2 },
  { id: 'nomenclatura', title: '📝 Nomenclatura de archivos', level: 2 },
  { id: 'problemas', title: '🚑 Problemas frecuentes', level: 2 },
];

export default function GoogleDriveAcademia() {
  const handleStartClick = () => {
    const element = document.getElementById('estructura-general');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrerequisitesClick = () => {
    const element = document.getElementById('buenas-practicas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SpaceParticles mode="tutorial" intensity={0.5} showLines={false} />
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 gap-8">
          {/* Contenido principal */}
          <main className="lg:col-span-4 xl:col-span-3 max-w-4xl mx-auto lg:mx-0">
            {/* Cabecera */}
            <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Tutoriales', href: '/' },
                  { label: 'TARS Drive - Guía de uso' }
                ]}
              />
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                🗂️ TARS Drive - Guía de uso y organización
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Aprende a navegar y utilizar correctamente la estructura de carpetas del equipo TARS Robotics. 
                Organización, permisos y buenas prácticas para el trabajo colaborativo.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="Equipo TARS" variant="level" icon="🤖" />
                <TutorialChip label="Organización" variant="status" icon="📁" />
                <TutorialChip label="Básico" variant="status" icon="📚" />
                <TutorialChip label="Actualizado 09/2025" variant="updated" icon="📅" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary" onClick={handleStartClick}>
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary" onClick={handlePrerequisitesClick}>
                  📋 Buenas prácticas
                </button>
              </div>
            </div>

            {/* Contenido del tutorial */}
            <div className="prose prose-invert max-w-none space-y-8 [&_pre]:scrollbar-none [&_pre]:hover:scrollbar-thin [&_pre:hover]:scrollbar-thumb-transparent [&_pre:hover]:scrollbar-track-transparent">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🎯 Introducción al TARS Drive
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  El <strong>TARS Drive</strong> es nuestro espacio de trabajo compartido donde se organizan todos los documentos, 
                  recursos y información del equipo TARS Robotics para el European Rover Challenge (ERC).
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Esta guía te ayudará a entender la estructura, navegar correctamente y seguir las buenas prácticas 
                  para mantener la organización del equipo.
                </p>
                
                <Callout type="info">
                  💡 <strong>Importante:</strong> El TARS Drive usa un sistema de numeración específico para mantener 
                  el orden. Siempre respeta esta estructura y consulta antes de hacer cambios importantes.
                </Callout>
              </section>

              <section id="estructura-general">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📁 Estructura general de carpetas
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Cuando entras en TARS Drive, verás una carpeta para cada departamento del equipo. 
                  Cada carpeta tiene un código numérico para mantener el orden.
                </p>

                <div id="departamentos" className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">Carpetas por departamento</h3>
                  
                  <div className="grid gap-4">
                    <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-300 mb-2">📁 0.General</h4>
                      <p className="text-slate-300 text-sm">
                        Información principal de todo el grupo: reglas de competiciones, planificaciones, 
                        lista de materiales. Carpeta para información general del equipo completo.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-300 mb-2">📁 1.Software</h4>
                      <p className="text-slate-300 text-sm">
                        <strong>Tu carpeta principal.</strong> Aquí está toda la información del equipo de software: 
                        planes, tareas, documentos, etc. Tu espacio de trabajo principal.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-semibold text-orange-300 mb-2">📁 2.Mecánica</h4>
                      <p className="text-slate-300 text-sm">
                        Especificaciones de diseño y información sobre montaje. 
                        <strong>⚠️ No elimines ni modifiques nada sin permiso del líder de mecánica.</strong>
                      </p>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-300 mb-2">📁 3.Electrónica</h4>
                      <p className="text-slate-300 text-sm">
                        Esta carpeta por el momento no es utilizable. Si necesitas algo, 
                        contacta con el líder del equipo de software.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-300 mb-2">📁 4.Finanzas</h4>
                      <p className="text-slate-300 text-sm">
                        Presupuestos, listas de pedidos y procedimientos de compra. 
                        Principalmente para líderes, no necesitarás acceder habitualmente.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-pink-500">
                      <h4 className="font-semibold text-pink-300 mb-2">📁 5.Imagen</h4>
                      <p className="text-slate-300 text-sm">
                        Bocetos y diseños del equipo de imagen. No necesitarás acceder a esta carpeta.
                      </p>
                    </div>
                  </div>
                  
                  <Callout type="tip">
                    <strong>Sistema de numeración:</strong> Las carpetas usan códigos numéricos ascendentes. 
                    Dentro de Software (1) tienes 10, 11, 12... y dentro de estas: 101, 102, 111, 112, etc.
                  </Callout>
                </div>
              </section>

              <section id="software-detalle">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  💻 Carpeta de Software (detalle)
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Dentro de la carpeta <strong>1.Software</strong> encontrarás varias subcarpetas organizadas. 
                  Aquí te explico cada una en detalle:
                </p>

                <div className="space-y-6">
                  <div id="general-software" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">10</span>
                      10_General
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Información principal que necesitará todo el equipo de software, subida por el líder.
                    </p>
                    
                    <div className="grid gap-3">
                      <div className="bg-slate-800 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-200 mb-2">📄 100_Actas</h4>
                        <p className="text-slate-300 text-sm">Resúmenes de nuestras reuniones principales.</p>
                      </div>
                      
                      <div className="bg-slate-800 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-200 mb-2">📚 101_Documentos</h4>
                        <p className="text-slate-300 text-sm">Documentos principales del equipo: manuales, buenas prácticas de programación, etc.</p>
                      </div>
                      
                      <div className="bg-slate-800 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-200 mb-2">📅 102_Planificacion</h4>
                        <p className="text-slate-300 text-sm">Cronogramas semanales, mensuales y anuales, así como el plan del proyecto.</p>
                      </div>
                      
                      <div className="bg-slate-800 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-200 mb-2">🏆 103_Competiciones</h4>
                        <p className="text-slate-300 text-sm">Carpeta para cada competición con reglas, documentos presentados, validaciones y tablas de pruebas.</p>
                      </div>
                      
                      <div className="bg-slate-800 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-200 mb-2">🛒 104_Pedidos</h4>
                        <p className="text-slate-300 text-sm">Listas de componentes a comprar. Si necesitas algo, avisa al líder o crea un Excel siguiendo el ejemplo.</p>
                      </div>
                    </div>
                  </div>

                  <div id="equipos-software" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">11</span>
                      11_Equipos
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Carpetas para los subequipos del departamento de software. Aquí subes documentos de proyectos, 
                      investigaciones y diseños. <strong>⚠️ AQUÍ NO subas resúmenes de tareas.</strong>
                    </p>
                    
                    <div className="grid gap-2 text-sm">
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-blue-300">111_Cinemática</span>
                      </div>
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-blue-300">112_Navegación y localización</span>
                      </div>
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-blue-300">113_Visión artificial</span>
                      </div>
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-blue-300">114_Interfaces</span>
                      </div>
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-blue-300">115_Dron</span>
                      </div>
                      <div className="bg-slate-800 rounded p-2 opacity-60">
                        <span className="font-mono text-blue-300">...</span>
                      </div>
                    </div>
                  </div>

                  <div id="recursos-software" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">12</span>
                      12_Recursos
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Recursos útiles para comprender y aprender sobre el proyecto.
                    </p>
                    
                    <div className="grid gap-2 text-sm">
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-purple-300">120_Datasheets</span> - Hojas de datos técnicas
                      </div>
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-purple-300">121_Artículos</span> - Papers y artículos de investigación
                      </div>
                      <div className="bg-slate-800 rounded p-2">
                        <span className="font-mono text-purple-300">122_Libros</span> - Libros y manuales técnicos
                      </div>
                      <div className="bg-slate-800 rounded p-2 opacity-60">
                        <span className="font-mono text-purple-300">...</span>
                      </div>
                    </div>
                  </div>

                  <div id="academia-software" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">13</span>
                      13_Academia
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Manuales principales de los tutoriales y enlace a la academia. Aquí encontrarás recursos 
                      educativos actualizados.
                    </p>
                  </div>

                  <div id="tareas-software" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">14</span>
                      14_Tareas
                    </h3>
                    <p className="text-slate-300 mb-4">
                      <strong>Aquí SÍ subes los resúmenes de las tareas.</strong> Hay carpetas para cada semana, 
                      deberás subir el resumen de tus tareas en la semana correspondiente.
                    </p>
                    
                    <Callout type="warning">
                      Importante: Los resúmenes de tareas van en 14_Tareas, NO en 11_Equipos. 
                      Siempre sube en la carpeta de la semana correcta.
                    </Callout>
                  </div>
                </div>
              </section>

              <section id="buenas-practicas">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📋 Buenas prácticas de uso
                </h2>
                <div className="space-y-4">
                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-green-300 mb-2">✅ Qué SÍ hacer</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Respetar la estructura de numeración existente</li>
                      <li>• Subir archivos en la carpeta correcta según su tipo</li>
                      <li>• Usar nombres descriptivos para los archivos</li>
                      <li>• Consultar al líder antes de crear nuevas carpetas principales</li>
                      <li>• Mantener actualizados los resúmenes de tareas semanales</li>
                    </ul>
                  </div>
                  
                  <div className="card border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-red-300 mb-2">❌ Qué NO hacer</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• No modificar archivos de otros departamentos sin permiso</li>
                      <li>• No subir resúmenes de tareas en 11_Equipos</li>
                      <li>• No crear carpetas fuera del sistema de numeración</li>
                      <li>• No eliminar archivos que no hayas creado tú</li>
                      <li>• No usar la carpeta 3.Electrónica (está deshabilitada)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="permisos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🔒 Permisos y responsabilidades
                </h2>
                <div className="grid gap-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200 mb-2">👤 Miembros del equipo de software</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Lectura:</strong> Todas las carpetas de software</li>
                      <li>• <strong>Escritura:</strong> Sus subcarpetas en 11_Equipos y 14_Tareas</li>
                      <li>• <strong>Consulta:</strong> Carpetas de otros departamentos (sin modificar)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200 mb-2">👑 Líder de software</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Control total:</strong> Carpeta 1.Software completa</li>
                      <li>• <strong>Gestión de permisos:</strong> Puede añadir/quitar accesos</li>
                      <li>• <strong>Coordinación:</strong> Con otros líderes de departamento</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="nomenclatura">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📝 Nomenclatura de archivos
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Para mantener el orden, sigue estas convenciones al nombrar archivos:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200 mb-2">📄 Documentos de trabajo</h4>
                    <code className="block bg-slate-900 p-2 rounded text-xs text-green-300">
                      [Fecha]-[Tipo]-[Descripción]<br/>
                      Ej: 2025-09-30-Reporte-AvanceVisión
                    </code>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200 mb-2">📊 Resúmenes de tareas</h4>
                    <code className="block bg-slate-900 p-2 rounded text-xs text-blue-300">
                      Tarea_[Semana]_[Acrónimo]<br/>
                      Ej: Tarea_S2_CIA
                    </code>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200 mb-2">🔬 Investigación y diseño</h4>
                    <code className="block bg-slate-900 p-2 rounded text-xs text-purple-300">
                      [Proyecto]-[Área]-[Descripción]<br/>
                      Ej: ERC2025-Navegación-AlgoritmoSLAM
                    </code>
                  </div>
                </div>
              </section>

              <section id="problemas">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🚑 Problemas frecuentes
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      problema: "No puedo acceder a una carpeta de otro departamento",
                      solucion: "Es normal. Contacta al líder del departamento correspondiente o al líder de software para solicitar acceso específico."
                    },
                    {
                      problema: "No sé dónde subir un documento que no encaja en las categorías",
                      solucion: "Consulta con el líder de software. Probablemente vaya en 10_General o necesites crear una subcarpeta específica."
                    },
                    {
                      problema: "Subí mi resumen de tareas en el lugar equivocado",
                      solucion: "Muévelo a 14_Tareas en la carpeta de la semana correcta. Si no puedes moverlo, contacta al líder."
                    },
                    {
                      problema: "La carpeta que necesito no existe",
                      solucion: "Antes de crear nuevas carpetas, consulta con el líder. Puede que debas usar una existente o que sea necesario planificar la nueva estructura."
                    }
                  ].map((item, index) => (
                    <div key={index} className="card border-l-4 border-l-yellow-500">
                      <h4 className="font-semibold text-slate-200 mb-2">❓ {item.problema}</h4>
                      <p className="text-slate-300 text-sm"><strong>Solución:</strong> {item.solucion}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border-t border-slate-700 pt-6">
                <h2 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  🤝 ¿Dudas sobre el TARS Drive?
                </h2>
                <p className="text-slate-300 text-sm">
                  Si tienes dudas sobre dónde subir algo o cómo usar correctamente la estructura, 
                  contacta directamente con el líder del equipo de software. ¡Estamos aquí para ayudarte 
                  a mantener todo organizado! 🤖
                </p>
              </section>
            </div>

            {/* Navegación */}
            <TutorialNavigation 
              previous={{
                title: "🤝 Trabajo en Equipo y Soft Skills",
                href: "/tutoriales/issues-y-prs"
              }}
              next={{
                title: "Instalar Ubuntu 24.04 LTS (Guía Completa)",
                href: "/tutoriales/instalar-ubuntu-vm"
              }}
            />
          </main>

          {/* Sidebar con TOC */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}