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
  { id: 'paso-1', title: '1. Descargar Ubuntu', level: 3 },
  { id: 'paso-2', title: '2. Instalar VirtualBox', level: 3 },
  { id: 'paso-3', title: '3. Crear la VM', level: 3 },
  { id: 'paso-4', title: '4. Configurar VM', level: 3 },
  { id: 'paso-5', title: '5. Instalar Ubuntu', level: 3 },
  { id: 'paso-6', title: '6. Post-instalación', level: 3 },
  { id: 'validacion', title: '🧪 Validación final', level: 2 },
  { id: 'problemas', title: '🚑 Problemas frecuentes', level: 2 },
  { id: 'recursos', title: '🔗 Recursos', level: 2 },
  { id: 'siguientes', title: '➡️ Siguientes pasos', level: 2 },
];

export default function InstalarUbuntuVM() {
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
                  { label: 'Onboarding', href: '/onboarding' },
                  { label: 'Instalar Ubuntu en VM' }
                ]}
              />
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Instalar Ubuntu en VM (paso a paso)
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Guía completa para instalar Ubuntu 24.04 LTS en una máquina virtual usando VirtualBox.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="Introducción" variant="level" icon="📚" />
                <TutorialChip label="45 min" variant="time" icon="⏱️" />
                <TutorialChip label="Actualizado 09/2025" variant="updated" icon="🔄" />
                <TutorialChip label="Verificado en Ubuntu 24.04" variant="status" icon="✅" />
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
                  Al finalizar este tutorial, tendrás Ubuntu 24.04 LTS instalado y funcionando en una máquina virtual. 
                  Podrás acceder al escritorio, conectarte a internet y tener un entorno de desarrollo listo para 
                  instalar ROS 2 y otras herramientas de la academia.
                </p>
              </section>

              <section id="contexto">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🧭 Contexto
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Este es el paso <strong>2/3 del onboarding técnico</strong> de Tars Academy 
                  (Git/GitHub → <strong>Ubuntu</strong> → ROS). Una vez completado, podrás continuar 
                  con la instalación de ROS 2 y comenzar con los proyectos de robótica.
                </p>
                <Callout type="info">
                  Si ya tienes Ubuntu instalado nativamente o en WSL, puedes saltar este tutorial 
                  y continuar directamente con "Instalar ROS 2".
                </Callout>
              </section>

              <section id="requisitos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  ✅ Requisitos previos
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>PC con Windows 10/11</strong> o macOS con al menos 8GB RAM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>20GB de espacio libre</strong> en disco duro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Conexión a internet estable</strong> (para descargas ~3GB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Derechos de administrador</strong> en tu PC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">○</span>
                    <span><strong>Opcional:</strong> Haber completado "Git y GitHub Desktop"</span>
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
                      Descargar Ubuntu 24.04 LTS
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Vamos a descargar la imagen ISO oficial de Ubuntu desde el sitio web oficial.
                    </p>
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Pasos:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Ve a <a href="https://ubuntu.com/download/desktop" className="text-space-400 hover:text-space-300">ubuntu.com/download/desktop</a></li>
                        <li>Haz clic en "Download Ubuntu Desktop"</li>
                        <li>Espera a que descargue el archivo .iso (~3.8 GB)</li>
                      </ol>
                    </div>
                    <Callout type="check">
                      <strong>Cómo verificar:</strong> Tendrás un archivo llamado 
                      <code className="bg-slate-700 px-2 py-1 rounded text-sm ml-1">ubuntu-24.04.x-desktop-amd64.iso</code> 
                      en tu carpeta de Descargas.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 10-15 minutos</p>
                  </div>

                  <div id="paso-2" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Instalar VirtualBox
                    </h3>
                    <p className="text-slate-300 mb-4">
                      VirtualBox es el software que nos permitirá crear y ejecutar máquinas virtuales.
                    </p>
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Pasos:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Ve a <a href="https://www.virtualbox.org/wiki/Downloads" className="text-space-400 hover:text-space-300">virtualbox.org/wiki/Downloads</a></li>
                        <li>Descarga "VirtualBox for Windows hosts" (o macOS si corresponde)</li>
                        <li>Ejecuta el instalador como administrador</li>
                        <li>Sigue el asistente con opciones por defecto</li>
                        <li>Reinicia tu PC cuando termine</li>
                      </ol>
                    </div>
                    <Callout type="tip">
                      Durante la instalación, VirtualBox puede pedirte instalar drivers de red. 
                      Acepta para que la VM tenga conexión a internet.
                    </Callout>
                    <Callout type="check">
                      <strong>Cómo verificar:</strong> Puedes abrir VirtualBox desde el menú inicio 
                      y ves la ventana principal del programa.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 5-10 minutos</p>
                  </div>

                  <div id="paso-3" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Crear la máquina virtual
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Ahora crearemos una nueva VM con las especificaciones adecuadas para Ubuntu.
                    </p>
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Configuración recomendada:</p>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• <strong>Nombre:</strong> Ubuntu-Academia</li>
                        <li>• <strong>Tipo:</strong> Linux</li>
                        <li>• <strong>Versión:</strong> Ubuntu (64-bit)</li>
                        <li>• <strong>RAM:</strong> 4096 MB (4GB) mínimo</li>
                        <li>• <strong>Disco:</strong> 20 GB dinámicamente asignado</li>
                      </ul>
                    </div>
                    <Callout type="warning">
                      Si tu PC tiene menos de 8GB RAM, asigna solo 2GB (2048 MB) a la VM, 
                      aunque el rendimiento será más lento.
                    </Callout>
                  </div>

                  {/* Continúo con los demás pasos... */}
                  <div id="paso-4" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      Configurar VM y cargar ISO
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Configuraremos los ajustes finales y cargaremos la imagen de Ubuntu.
                    </p>
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Pasos:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Selecciona tu VM y haz clic en "Configuración"</li>
                        <li>Ve a "Almacenamiento" → Controlador IDE</li>
                        <li>Haz clic en el icono de disco y "Elegir archivo"</li>
                        <li>Selecciona el archivo ubuntu-24.04.x-desktop-amd64.iso</li>
                        <li>Guarda la configuración</li>
                      </ol>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 3-5 minutos</p>
                  </div>

                  <div id="paso-5" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      Instalar Ubuntu
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Iniciaremos la VM y seguiremos el proceso de instalación de Ubuntu.
                    </p>
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Proceso de instalación:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Haz clic en "Iniciar" en tu VM</li>
                        <li>Selecciona "Try or Install Ubuntu"</li>
                        <li>Elige idioma español y continúa</li>
                        <li>Selecciona "Instalación normal"</li>
                        <li>Acepta "Borrar disco e instalar Ubuntu"</li>
                        <li>Crea tu usuario (recomendado: tarsstudent)</li>
                        <li>Espera a que termine la instalación (~15-20 min)</li>
                      </ol>
                    </div>
                    <Callout type="info">
                      No te preocupes por "borrar disco" - solo afecta al disco virtual, 
                      no a tu sistema real.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 20-25 minutos</p>
                  </div>

                  <div id="paso-6" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                      Post-instalación y configuración
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Configuraremos algunos ajustes básicos para optimizar la experiencia.
                    </p>
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Configuraciones importantes:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Reinicia la VM después de la instalación</li>
                        <li>Abre Terminal (Ctrl+Alt+T)</li>
                        <li>Ejecuta: <code className="bg-slate-700 px-1 rounded">sudo apt update && sudo apt upgrade -y</code></li>
                        <li>Instala Guest Additions para mejor rendimiento</li>
                        <li>Configura resolución de pantalla</li>
                      </ol>
                    </div>
                    <Callout type="tip">
                      Las Guest Additions permiten copiar/pegar entre tu PC y la VM, 
                      además de ajustar automáticamente la resolución.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 10-15 minutos</p>
                  </div>
                </div>
              </section>

              <section id="validacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🧪 Validación final
                </h2>
                <div className="card">
                  <p className="text-slate-300 mb-4">
                    Verifica que todo funciona correctamente completando esta checklist:
                  </p>
                  <div className="space-y-3">
                    {[
                      'Ubuntu arranca correctamente y muestra el escritorio',
                      'Puedes abrir el navegador Firefox y navegar a ubuntu.com',
                      'Terminal se abre con Ctrl+Alt+T y ejecuta comandos básicos',
                      'El comando `lsb_release -a` muestra Ubuntu 24.04.x LTS',
                      'Puedes cambiar la resolución de pantalla desde Configuración'
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
                      problema: "La VM no arranca o se queda en pantalla negra",
                      causa: "Virtualización deshabilitada en BIOS",
                      solucion: "Reinicia tu PC, entra a BIOS (F2/F12) y habilita VT-x o AMD-V en configuración de CPU"
                    },
                    {
                      problema: "Ubuntu se instala muy lento",
                      causa: "Poca RAM asignada o disco duro fragmentado",
                      solucion: "Asigna más RAM (4GB mínimo) y desfragmenta tu disco duro antes de instalar"
                    },
                    {
                      problema: "No hay conexión a internet en la VM",
                      causa: "Configuración de red incorrecta",
                      solucion: "En VirtualBox: Configuración → Red → Adaptador 1 → NAT (debe estar habilitado)"
                    },
                    {
                      problema: "Pantalla muy pequeña, no se puede ajustar resolución",
                      causa: "Guest Additions no instaladas",
                      solucion: "En VirtualBox: Dispositivos → Insertar imagen de CD de Guest Additions, luego instalar desde la VM"
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
                      <li><a href="https://ubuntu.com/tutorials" className="text-space-400 hover:text-space-300">Tutoriales oficiales Ubuntu</a></li>
                      <li><a href="https://www.virtualbox.org/manual" className="text-space-400 hover:text-space-300">Manual de VirtualBox</a></li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Ayuda adicional</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="/tutoriales/comandos-basicos-linux" className="text-space-400 hover:text-space-300">Comandos básicos de Linux</a></li>
                      <li><a href="/problemas-comunes" className="text-space-400 hover:text-space-300">Errores comunes y soluciones</a></li>
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
                    <h4 className="font-semibold text-slate-200 mb-2">Continúa el onboarding</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      El siguiente paso del onboarding técnico es instalar ROS 2.
                    </p>
                    <a href="/tutoriales/instalar-ros2" className="btn-primary inline-block">
                      Instalar ROS 2 →
                    </a>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Profundiza tus conocimientos</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <a href="/tutoriales/terminal-basico" className="text-space-400 hover:text-space-300">Domina el terminal de Linux</a></li>
                      <li>• <a href="/tutoriales/vscode-setup" className="text-space-400 hover:text-space-300">Configurar VS Code</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="border-t border-slate-700 pt-6">
                <h2 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  🤝 ¿Mejorar este tutorial?
                </h2>
                <p className="text-slate-300 text-sm">
                  Si encontraste algún error o tienes sugerencias para mejorar este tutorial, 
                  <a href="https://github.com/tars-academy/tutoriales/issues" className="text-space-400 hover:text-space-300 ml-1">abre un issue en GitHub</a> 
                  o contáctanos en Discord. ¡Tu feedback nos ayuda a mejorar! 💙
                </p>
              </section>
            </div>

            {/* Navegación */}
            <TutorialNavigation 
              previous={{
                title: "Git y GitHub Desktop",
                href: "/tutoriales/git-github-desktop"
              }}
              next={{
                title: "Instalar ROS 2 en Ubuntu",
                href: "/tutoriales/instalar-ros2"
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
