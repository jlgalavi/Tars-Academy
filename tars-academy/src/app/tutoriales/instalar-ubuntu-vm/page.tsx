'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';

const tocItems = [
  { id: 'objetivo', title: '🎯 Objetivo', level: 2 },
  { id: 'contexto', title: '🧭 Contexto', level: 2 },
  { id: 'metodos', title: '🔍 Métodos de instalación', level: 2 },
  { id: 'requisitos', title: '✅ Requisitos generales', level: 2 },
  { id: 'maquina-virtual', title: '💻 Máquina Virtual', level: 2 },
  { id: 'dual-boot', title: '⚡ Dual Boot', level: 2 },
  { id: 'disco-externo', title: '🔌 Disco externo', level: 2 },
  { id: 'post-instalacion', title: '🛠️ Post-instalación', level: 2 },
  { id: 'problemas', title: '🚑 Solución de problemas', level: 2 },
  { id: 'consejos', title: '💡 Consejos', level: 2 },
  { id: 'recursos', title: '🔗 Recursos', level: 2 },
];

export default function InstalarUbuntuVM() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1 max-w-4xl">
            <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Onboarding', href: '/onboarding' },
                  { label: 'Instalar Ubuntu (Múltiples métodos)' }
                ]}
              />
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Instalar Ubuntu 24.04 LTS (Guía Completa)
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Guía completa con múltiples métodos para instalar Ubuntu: máquina virtual, dual boot y disco externo. 
                Incluye pasos detallados, solución de problemas y mejores prácticas.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="Introducción" variant="level" icon="📚" />
                <TutorialChip label="60-90 min" variant="time" icon="⏱️" />
                <TutorialChip label="Actualizado 12/2024" variant="updated" icon="🔄" />
                <TutorialChip label="Ubuntu 24.04 LTS" variant="status" icon="✅" />
                <TutorialChip label="Múltiples métodos" variant="level" icon="🔧" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-primary"
                  onClick={() => document.getElementById('maquina-virtual')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🚀 Empezar ahora
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => document.getElementById('requisitos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  📋 Ver requisitos
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <section id="objetivo">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  🎯 Objetivo
                </h2>
                <p className="text-slate-300">
                  Al finalizar este tutorial, tendrás Ubuntu 24.04 LTS instalado y funcionando según el método elegido. 
                  Podrás acceder al escritorio, conectarte a internet y tener un entorno de desarrollo listo para 
                  instalar ROS 2 y otras herramientas de la academia.
                </p>
              </section>

              <section id="contexto">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  🧭 Contexto
                </h2>
                <p className="text-slate-300">
                  Este es el paso <strong>2/3 del onboarding técnico</strong> de Tars Academy 
                  (Git/GitHub → <strong>Ubuntu</strong> → ROS). Una vez completado, podrás continuar 
                  con la instalación de ROS 2 y comenzar con los proyectos de robótica.
                </p>
                <Callout type="info">
                  Si ya tienes Ubuntu instalado nativamente o en WSL, puedes saltar este tutorial 
                  y continuar directamente con &quot;Instalar ROS 2&quot;.
                </Callout>
              </section>

              <section id="metodos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  🔍 Métodos de instalación
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-2">
                      💻 Máquina Virtual
                    </h4>
                    <p className="text-slate-300 text-sm mb-3">
                      <strong>Recomendado para principiantes.</strong> Instala Ubuntu dentro de Windows/Mac sin riesgo.
                    </p>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div>✅ Seguro, no afecta el sistema principal</div>
                      <div>✅ Fácil de usar y eliminar</div>
                      <div>✅ Perfecto para aprender</div>
                      <div>⚠️ Rendimiento limitado</div>
                      <div>⚠️ Requiere RAM suficiente (8GB+)</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-slate-200 mb-2">
                      ⚡ Dual Boot
                    </h4>
                    <p className="text-slate-300 text-sm mb-3">
                      <strong>Máximo rendimiento.</strong> Ubuntu e Windows/Mac en el mismo disco con particiones.
                    </p>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div>✅ Rendimiento nativo completo</div>
                      <div>✅ Acceso directo al hardware</div>
                      <div>✅ Ideal para proyectos intensivos</div>
                      <div>⚠️ Requiere backup antes</div>
                      <div>⚠️ Más complejo de instalar</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-2">
                      🔌 Disco Externo
                    </h4>
                    <p className="text-slate-300 text-sm mb-3">
                      <strong>Portabilidad total.</strong> Ubuntu en USB/disco externo, úsalo en cualquier PC.
                    </p>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div>✅ Completamente portable</div>
                      <div>✅ No afecta PC principal</div>
                      <div>✅ Perfecto para laboratorios</div>
                      <div>⚠️ Velocidad limitada por USB</div>
                      <div>⚠️ Requiere USB 3.0+ rápido</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="requisitos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  ✅ Requisitos generales
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-3">Hardware mínimo</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>RAM:</strong> 4GB mínimo, 8GB+ recomendado</li>
                      <li>• <strong>CPU:</strong> Dual-core 2GHz o superior</li>
                      <li>• <strong>Almacenamiento:</strong> 25GB libres mínimo</li>
                      <li>• <strong>Internet:</strong> Conexión estable (descarga ~4GB)</li>
                      <li>• <strong>USB:</strong> 8GB+ para instalación</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-200 mb-3">Software necesario</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>Sistema base:</strong> Windows 10/11, macOS 10.14+</li>
                      <li>• <strong>Permisos:</strong> Administrador del sistema</li>
                      <li>• <strong>Backup:</strong> Copia de seguridad (dual boot)</li>
                      <li>• <strong>Virtualization:</strong> Habilitada en BIOS (VM)</li>
                    </ul>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Importante:</strong> Siempre haz backup de tus datos importantes antes de cualquier instalación, 
                  especialmente para dual boot y disco externo.
                </Callout>
              </section>

              <section id="maquina-virtual">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  💻 Máquina Virtual (Recomendado)
                </h2>
                <p className="text-slate-300 mb-6">
                  La opción más segura y popular para principiantes. Instala Ubuntu como un programa dentro de tu sistema actual.
                </p>

                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    🔵 VirtualBox (Gratuito)
                  </h3>

                  <div className="space-y-6">
                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 1: Descargar e instalar VirtualBox</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Ve a <a href="https://www.virtualbox.org/wiki/Downloads" className="text-blue-400 hover:underline">virtualbox.org/wiki/Downloads</a></li>
                        <li>Descarga &quot;VirtualBox for Windows hosts&quot; (o tu OS)</li>
                        <li>Ejecuta el instalador como administrador</li>
                        <li>Acepta todas las opciones por defecto</li>
                        <li>Reinicia cuando termine</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 2: Descargar Ubuntu 24.04 LTS</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Ve a <a href="https://ubuntu.com/download/desktop" className="text-blue-400 hover:underline">ubuntu.com/download/desktop</a></li>
                        <li>Descarga &quot;Ubuntu 24.04.3 LTS&quot; (~4GB)</li>
                        <li>Guarda el archivo .iso en una carpeta fácil de encontrar</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 3: Crear la máquina virtual</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Abre VirtualBox</li>
                        <li>Click &quot;New&quot; (Nuevo)</li>
                        <li>Nombre: &quot;Ubuntu 24.04&quot;</li>
                        <li>Type: Linux, Version: Ubuntu (64-bit)</li>
                        <li>RAM: 4096MB (4GB) mínimo, 8192MB (8GB) si tienes suficiente</li>
                        <li>Disco duro: &quot;Create a virtual hard disk now&quot;</li>
                        <li>Tipo: VDI (VirtualBox Disk Image)</li>
                        <li>Almacenamiento: &quot;Dynamically allocated&quot;</li>
                        <li>Tamaño: 50GB (se expandirá según necesites)</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 4: Configurar la VM</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Selecciona tu VM y click &quot;Settings&quot;</li>
                        <li><strong>System → Processor:</strong> 2-4 CPUs (según tengas disponible)</li>
                        <li><strong>Display → Video Memory:</strong> 128MB</li>
                        <li><strong>Storage:</strong> Click el CD vacío → &quot;Choose disk file&quot; → Selecciona tu Ubuntu.iso</li>
                        <li><strong>Network:</strong> &quot;NAT&quot; (por defecto está bien)</li>
                        <li>Click &quot;OK&quot;</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 5: Instalar Ubuntu</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Click &quot;Start&quot; en tu VM</li>
                        <li>Ubuntu debería arrancar desde el ISO</li>
                        <li>Selecciona idioma y click &quot;Install Ubuntu&quot;</li>
                        <li><strong>Keyboard:</strong> Spanish (o tu idioma)</li>
                        <li><strong>Updates:</strong> &quot;Normal installation&quot; + &quot;Download updates&quot;</li>
                        <li><strong>Installation type:</strong> &quot;Erase disk and install Ubuntu&quot; (es seguro, es virtual)</li>
                        <li>Crea tu usuario y contraseña</li>
                        <li>Espera 15-30 minutos a que termine</li>
                        <li>Reinicia cuando termine</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 6: Instalar Guest Additions</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Una vez en Ubuntu, ve al menú VirtualBox: Devices → Insert Guest Additions CD</li>
                        <li>Abre terminal y ejecuta:</li>
                      </ol>
                      <div className="bg-slate-900 p-3 rounded mt-3 font-mono text-sm text-green-400">
                        <div>sudo apt update</div>
                        <div>sudo apt install build-essential dkms linux-headers-$(uname -r)</div>
                        <div>cd /media/$(whoami)/VBox*</div>
                        <div>sudo ./VBoxLinuxAdditions.run</div>
                      </div>
                      <ol start={3} className="space-y-2 text-slate-300 text-sm list-decimal list-inside mt-3">
                        <li>Reinicia la VM</li>
                        <li>Ahora tendrás pantalla completa, copiar/pegar y carpetas compartidas</li>
                      </ol>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    � VMware Workstation (Pago)
                  </h3>
                  <p className="text-slate-300 mb-4">
                    VMware ofrece mejor rendimiento que VirtualBox, pero es de pago. Proceso similar pero más optimizado.
                  </p>
                  
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Ventajas de VMware</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>Mejor rendimiento:</strong> Hasta 30% más rápido que VirtualBox</li>
                      <li>• <strong>Integración superior:</strong> Unity mode, mejor soporte 3D</li>
                      <li>• <strong>Snapshots avanzados:</strong> Múltiples puntos de restauración</li>
                      <li>• <strong>Soporte técnico:</strong> Documentación y comunidad profesional</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-900/20 rounded border-l-4 border-blue-500">
                      <p className="text-blue-200 text-sm">
                        <strong>Precio:</strong> VMware Workstation Pro cuesta ~$270 USD. Considera si el rendimiento extra justifica el costo para tus necesidades.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="dual-boot">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  ⚡ Dual Boot (Partición)  
                </h2>
                <p className="text-slate-300 mb-6">
                  Instalación nativa junto a Windows. Máximo rendimiento pero requiere preparación cuidadosa.
                </p>

                <Callout type="warning">
                  <strong>⚠️ ADVERTENCIA:</strong> El dual boot modifica las particiones de tu disco. 
                  Siempre haz backup completo antes de proceder. Si no estás seguro, usa máquina virtual.
                </Callout>

                <div className="space-y-8 mt-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    🛠️ Preparación del sistema
                  </h3>

                  <div className="space-y-6">
                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 1: Backup completo</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Haz backup de todos tus archivos importantes</li>
                        <li>Crea un punto de restauración de Windows</li>
                        <li>Anota tu clave de producto de Windows (por si acaso)</li>
                        <li>Desactiva BitLocker si está activo</li>
                        <li>Desactiva Fast Startup en Windows</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 2: Liberar espacio en disco</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Abre &quot;Disk Management&quot; (Administración de discos)</li>
                        <li>Click derecho en tu partición principal (C:)</li>
                        <li>Selecciona &quot;Shrink Volume&quot; (Reducir volumen)</li>
                        <li>Libera al menos 50GB (50000 MB) para Ubuntu</li>
                        <li>Confirma - verás espacio &quot;Unallocated&quot; (sin asignar)</li>
                      </ol>
                      <div className="mt-3 p-3 bg-amber-900/20 rounded border-l-4 border-amber-500">
                        <p className="text-amber-200 text-sm">
                          <strong>Tip:</strong> Si tienes poco espacio, elimina archivos temporales y ejecuta Disk Cleanup antes de reducir la partición.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 3: Configurar BIOS/UEFI</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Reinicia y entra al BIOS (F2, F12, DEL según tu PC)</li>
                        <li>Deshabilita &quot;Secure Boot&quot; temporalmente</li>
                        <li>Habilita &quot;Legacy Boot&quot; o &quot;CSM&quot; si es necesario</li>
                        <li>Cambia boot priority: USB primero</li>
                        <li>Guarda cambios (F10) y sal</li>
                      </ol>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    ⚙️ Instalación paso a paso
                  </h3>

                  <div className="space-y-6">
                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 4: Crear USB booteable</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Descarga <a href="https://rufus.ie/" className="text-blue-400 hover:underline">Rufus</a> (Windows)</li>
                        <li>Inserta USB de 8GB+ (⚠️ se borrará todo)</li>
                        <li>Abre Rufus, selecciona tu USB</li>
                        <li>Boot selection → Selecciona tu Ubuntu.iso</li>
                        <li>Partition scheme → GPT (UEFI) o MBR (Legacy)</li>
                        <li>Click START y espera 10-15 minutos</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 5: Boot desde USB</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Reinicia con USB conectado</li>
                        <li>Presiona F12 (o F8/F10) para boot menu</li>
                        <li>Selecciona tu USB</li>
                        <li>En el menú de Ubuntu: &quot;Try or Install Ubuntu&quot;</li>
                        <li>Espera a que cargue el escritorio temporal</li>
                      </ol>
                    </div>

                    <div className="card bg-red-900/10 border-red-500">
                      <h4 className="font-semibold text-red-200 mb-3">⚠️ Paso 6: Instalar Ubuntu (CUIDADO)</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Click &quot;Install Ubuntu&quot; en el escritorio</li>
                        <li>Selecciona idioma y teclado</li>
                        <li>&quot;Normal installation&quot; + &quot;Download updates&quot;</li>
                        <li><strong className="text-red-300">MUY IMPORTANTE:</strong> Selecciona &quot;Install Ubuntu alongside Windows&quot;</li>
                        <li><strong className="text-red-300">❌ NO</strong> selecciones &quot;Erase disk&quot; (borraría Windows)</li>
                        <li>Ajusta el tamaño de particiones con el slider</li>
                        <li>Verifica que Windows aparezca en la lista</li>
                        <li>Continúa con usuario y contraseña</li>
                        <li>Instala (20-40 minutos)</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Paso 7: Configurar GRUB</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Al reiniciar verás el menú GRUB</li>
                        <li>Opciones disponibles: Ubuntu, Windows, Recovery</li>
                        <li>Ubuntu será default (timeout 10 segundos)</li>
                        <li>Para cambiar el default, desde Ubuntu:</li>
                      </ol>
                      <div className="bg-slate-900 p-3 rounded mt-3 font-mono text-sm text-green-400">
                        <div>sudo nano /etc/default/grub</div>
                        <div># Cambia GRUB_DEFAULT=0 (Ubuntu) o =2 (Windows)</div>
                        <div>sudo update-grub</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="disco-externo">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  🔌 Disco externo/USB
                </h2>
                <p className="text-slate-300 mb-6">
                  Ubuntu portable en USB o disco externo. Úsalo en cualquier PC manteniendo toda tu configuración.
                </p>

                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    📱 USB Persistente (Live USB)
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Ubuntu ejecutándose desde USB que guarda cambios entre sesiones. Perfecto para probar sin instalar.
                  </p>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Crear USB persistente</h4>
                    <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                      <li>Necesitas USB de 16GB+ (velocidad USB 3.0+ recomendado)</li>
                      <li>Descarga <a href="https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/" className="text-blue-400 hover:underline">Universal USB Installer</a></li>
                      <li>Selecciona Ubuntu en la lista de distribuciones</li>
                      <li>Browse tu archivo .iso de Ubuntu</li>
                      <li>Selecciona tu dispositivo USB</li>
                      <li><strong>Importante:</strong> Mueve el slider &quot;Persistent file size&quot; a 4GB+</li>
                      <li>Click &quot;Create&quot; y espera 15-20 minutos</li>
                      <li>Boot desde USB: tendrás Ubuntu totalmente funcional y portable</li>
                    </ol>
                    <div className="mt-3 p-3 bg-green-900/20 rounded border-l-4 border-green-500">
                      <p className="text-green-200 text-sm">
                        <strong>Ventaja:</strong> Todos los programas instalados, configuraciones y archivos se guardan automáticamente.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    💾 Instalación completa en disco externo
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Ubuntu instalado completamente en disco externo/USB. Funciona exactamente como instalación normal.
                  </p>

                  <div className="space-y-6">
                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Preparar hardware recomendado</h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>• <strong>SSD externo:</strong> Samsung T7, SanDisk Extreme (máximo rendimiento)</li>
                        <li>• <strong>USB 3.0+:</strong> Mínimo para velocidad aceptable</li>
                        <li>• <strong>128GB+:</strong> Espacio recomendado para uso completo</li>
                        <li>• <strong>Calidad:</strong> Evita USBs baratos, se corrompen fácilmente</li>
                      </ul>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Proceso de instalación</h4>
                      <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
                        <li>Boot desde USB de instalación Ubuntu (como en dual boot)</li>
                        <li>Conecta tu disco externo de destino</li>
                        <li>En &quot;Installation type&quot; → &quot;Something else&quot;</li>
                        <li><strong className="text-red-300">⚠️ CUIDADO:</strong> Selecciona SOLO tu disco externo (no el interno)</li>
                        <li>Crea particiones manualmente:</li>
                      </ol>
                      <div className="ml-6 mt-3 space-y-1 text-slate-400 text-sm">
                        <div>• Root (/): 20GB+ ext4 (sistema)</div>
                        <div>• Swap: 2-4GB (memoria virtual)</div>
                        <div>• Home (/home): El resto ext4 (archivos personales)</div>
                      </div>
                      <ol start={6} className="space-y-2 text-slate-300 text-sm list-decimal list-inside mt-3">
                        <li><strong>Crucial:</strong> Instala el bootloader en tu disco externo (/dev/sdX)</li>
                        <li>Continúa instalación normal (usuario, contraseña, etc.)</li>
                        <li>Espera completar instalación (30-60 minutos)</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h4 className="font-semibold text-slate-200 mb-3">Uso en diferentes PCs</h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li>• Conecta tu disco en cualquier PC compatible</li>
                        <li>• Accede al boot menu (F12, F8, F10)</li>
                        <li>• Selecciona tu disco externo</li>
                        <li>• Ubuntu arrancará con toda tu configuración personal</li>
                        <li>• Perfecto para laboratorios universitarios o trabajo remoto</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="post-instalacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  🛠️ Configuración post-instalación
                </h2>
                <p className="text-slate-300 mb-6">
                  Pasos esenciales después de cualquier instalación de Ubuntu para tener un sistema optimizado y listo para desarrollo.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">1. Actualizar sistema</h4>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div>sudo apt update</div>
                      <div>sudo apt upgrade -y</div>
                      <div>sudo apt install curl wget git vim -y</div>
                      <div>sudo snap refresh</div>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">2. Codecs multimedia</h4>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div>sudo apt install ubuntu-restricted-extras -y</div>
                      <div>sudo apt install vlc gimp -y</div>
                      <div>sudo apt install ffmpeg -y</div>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">3. Herramientas desarrollo</h4>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div>sudo snap install code --classic</div>
                      <div>sudo apt install build-essential -y</div>
                      <div>sudo apt install python3-pip -y</div>
                      <div>curl -fsSL https://get.docker.com | sh</div>
                    </div>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">4. Configurar firewall</h4>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div>sudo ufw enable</div>
                      <div>sudo ufw status verbose</div>
                      <div>sudo ufw allow ssh</div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Para máquinas virtuales:</strong> Instala Guest Additions (VirtualBox) o VMware Tools 
                  para mejor integración: pantalla completa, copiar/pegar, carpetas compartidas.
                </Callout>
              </section>

              <section id="problemas">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  🚑 Problemas frecuentes y soluciones
                </h2>

                <div className="space-y-6">
                  <div className="card border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-red-300 mb-3">VM muy lenta o se cuelga</h4>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p><strong>Síntomas:</strong> Ubuntu no responde, clicks lentos, aplicaciones se cierran</p>
                      <p><strong>Causas comunes:</strong></p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>RAM insuficiente asignada (&lt;4GB)</li>
                        <li>Virtualización deshabilitada en BIOS</li>
                        <li>Muchas aplicaciones abiertas en el host</li>
                        <li>Disco duro lleno o fragmentado</li>
                      </ul>
                      <p><strong>Soluciones:</strong></p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Aumenta RAM a 6-8GB en configuración VM</li>
                        <li>Habilita Intel VT-x/AMD-V en BIOS</li>
                        <li>Cierra programas innecesarios en Windows/Mac</li>
                        <li>Asigna 2-4 CPUs a la VM</li>
                        <li>Mueve VM a SSD si tienes HDD</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-orange-300 mb-3">No detecta WiFi</h4>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p><strong>Síntomas:</strong> No aparecen redes WiFi disponibles</p>
                      <p><strong>Común en:</strong> Dual boot con tarjetas WiFi nuevas</p>
                      <p><strong>Soluciones:</strong></p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Conecta por cable Ethernet temporalmente</li>
                        <li>Ejecuta: <code className="bg-slate-800 px-1 rounded">sudo apt update && sudo apt install linux-firmware</code></li>
                        <li>Reinicia el sistema</li>
                        <li>Identifica tu tarjeta: <code className="bg-slate-800 px-1 rounded">lspci | grep -i wireless</code></li>
                        <li>Busca drivers específicos para tu modelo</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-yellow-500">
                    <h4 className="font-semibold text-yellow-300 mb-3">GRUB no aparece (dual boot)</h4>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p><strong>Síntomas:</strong> Windows arranca directamente, no hay menú de selección</p>
                      <p><strong>Causas:</strong> Windows Update sobrescribió GRUB, Fast Boot activo</p>
                      <p><strong>Soluciones:</strong></p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Deshabilita Fast Boot en Windows</li>
                        <li>Desde Ubuntu Live USB:</li>
                      </ul>
                      <div className="bg-slate-900 p-2 rounded mt-2 font-mono text-xs text-green-400">
                        <div>sudo mount /dev/sda2 /mnt  # (ajusta sda2 por tu partición)</div>
                        <div>sudo grub-install --root-directory=/mnt /dev/sda</div>
                        <div>sudo update-grub</div>
                      </div>
                      <ul className="list-disc ml-6 space-y-1 mt-2">
                        <li>O usa Boot-Repair: <code className="bg-slate-800 px-1 rounded">sudo apt install boot-repair && boot-repair</code></li>
                      </ul>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-purple-300 mb-3">USB no bootea</h4>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p><strong>Síntomas:</strong> PC ignora USB, va directo a Windows</p>
                      <p><strong>Soluciones paso a paso:</strong></p>
                      <ol className="list-decimal ml-6 space-y-1">
                        <li>Verifica que USB esté en primer lugar en BIOS boot order</li>
                        <li>Deshabilita Secure Boot temporalmente</li>
                        <li>Habilita Legacy/CSM mode si tienes UEFI</li>
                        <li>Recrea USB con Rufus, probando GPT y MBR</li>
                        <li>Prueba diferentes puertos USB (usa 2.0 si 3.0 falla)</li>
                        <li>Verifica que el ISO no esté corrupto</li>
                      </ol>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-blue-300 mb-3">Pantalla negra al iniciar</h4>
                    <div className="space-y-2 text-slate-300 text-sm">
                      <p><strong>Síntomas:</strong> Ubuntu inicia pero pantalla se queda negra</p>
                      <p><strong>Común con:</strong> Tarjetas gráficas NVIDIA/AMD</p>
                      <p><strong>Solución temporal:</strong></p>
                      <ol className="list-decimal ml-6 space-y-1">
                        <li>En GRUB, presiona &apos;e&apos; sobre Ubuntu</li>
                        <li>Añade <code className="bg-slate-800 px-1 rounded">nomodeset</code> al final de línea que empieza con &apos;linux&apos;</li>
                        <li>Presiona Ctrl+X para arrancar</li>
                        <li>Una vez dentro, instala drivers:</li>
                      </ol>
                      <div className="bg-slate-900 p-2 rounded mt-2 font-mono text-xs text-green-400">
                        <div>sudo ubuntu-drivers autoinstall</div>
                        <div># O específicamente para NVIDIA:</div>
                        <div>sudo apt install nvidia-driver-535</div>
                      </div>
                      <p className="mt-2">Luego reinicia normalmente.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="consejos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  💡 Consejos y mejores prácticas
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="card border-l-4 border-l-green-500">
                      <h4 className="font-semibold text-slate-200 mb-2">Para principiantes</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Empieza siempre con máquina virtual</li>
                        <li>• Practica comandos básicos antes de ROS</li>
                        <li>• Haz snapshots de VM en puntos importantes</li>
                        <li>• Únete a comunidades Ubuntu en español</li>
                        <li>• Ten paciencia: Linux tiene curva de aprendizaje</li>
                        <li>• Documenta lo que aprendes en un blog/notas</li>
                      </ul>
                    </div>

                    <div className="card border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-slate-200 mb-2">Seguridad</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Siempre backup antes de dual boot</li>
                        <li>• Usa contraseñas fuertes (12+ caracteres)</li>
                        <li>• Actualiza sistema semanalmente</li>
                        <li>• No ejecutes scripts de internet sin revisar</li>
                        <li>• Habilita firewall desde el primer día</li>
                        <li>• Considera cifrado de disco para datos sensibles</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="card border-l-4 border-l-orange-500">
                      <h4 className="font-semibold text-slate-200 mb-2">Rendimiento</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• VM: Asigna 50-70% de RAM total disponible</li>
                        <li>• SSD mejora dramáticamente la experiencia</li>
                        <li>• Para robotics serios: dual boot recomendado</li>
                        <li>• Cierra aplicaciones innecesarias</li>
                        <li>• Considera XFCE si tu PC es viejo</li>
                        <li>• Limpia cache periódicamente: <code className="bg-slate-800 px-1 rounded text-xs">sudo apt autoclean</code></li>
                      </ul>
                    </div>

                    <div className="card border-l-4 border-l-purple-500">
                      <h4 className="font-semibold text-slate-200 mb-2">Organización</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Crea ~/ros2_ws desde el primer día</li>
                        <li>• Usa Git para versionar todos tus proyectos</li>
                        <li>• Mantén documentadas configuraciones importantes</li>
                        <li>• Backup automático de /home cada semana</li>
                        <li>• Estructura clara de carpetas por proyecto</li>
                        <li>• Aprende shortcuts de teclado básicos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="recursos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                  🔗 Recursos adicionales
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Documentación oficial</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li><a href="https://ubuntu.com/tutorials" className="text-blue-400 hover:underline">• Tutoriales Ubuntu</a></li>
                      <li><a href="https://help.ubuntu.com/" className="text-blue-400 hover:underline">• Ubuntu Help</a></li>
                      <li><a href="https://www.virtualbox.org/manual" className="text-blue-400 hover:underline">• Manual VirtualBox</a></li>
                      <li><a href="https://rufus.ie/" className="text-blue-400 hover:underline">• Rufus (USB booteable)</a></li>
                      <li><a href="https://www.vmware.com/support" className="text-blue-400 hover:underline">• Soporte VMware</a></li>
                    </ul>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Comunidades</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li><a href="https://askubuntu.com/" className="text-blue-400 hover:underline">• Ask Ubuntu</a></li>
                      <li><a href="https://ubuntu-es.org/" className="text-blue-400 hover:underline">• Ubuntu España</a></li>
                      <li><a href="https://www.reddit.com/r/Ubuntu/" className="text-blue-400 hover:underline">• r/Ubuntu Reddit</a></li>
                      <li><a href="https://discourse.ubuntu.com/" className="text-blue-400 hover:underline">• Ubuntu Discourse</a></li>
                      <li><a href="https://telegram.me/ubuntu_es" className="text-blue-400 hover:underline">• Telegram Ubuntu ES</a></li>
                    </ul>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Herramientas útiles</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li><a href="https://www.balena.io/etcher/" className="text-blue-400 hover:underline">• Balena Etcher</a></li>
                      <li><a href="https://gparted.org/" className="text-blue-400 hover:underline">• GParted (particiones)</a></li>
                      <li><a href="https://www.pendrivelinux.com/" className="text-blue-400 hover:underline">• Pendrivelinux</a></li>
                      <li><a href="https://boot-repair.org/" className="text-blue-400 hover:underline">• Boot-Repair</a></li>
                      <li><a href="https://www.ventoy.net/" className="text-blue-400 hover:underline">• Ventoy (multi-boot USB)</a></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Callout type="info">
                    <strong>🚀 Próximo paso:</strong> Una vez tengas Ubuntu funcionando perfectamente, continúa con 
                    &quot;<a href="/tutoriales/instalar-ros-primer-nodo" className="text-blue-400 hover:underline">Instalar ROS 2 y tu primer nodo</a>&quot; 
                    para comenzar tu aventura en robótica con Tars Academy.
                  </Callout>
                </div>
              </section>
            </div>
          </div>

          <div className="hidden lg:block w-80">
            <div className="sticky top-8">
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <TutorialNavigation 
            previous={{
              title: "Git y GitHub Desktop",
              href: "/tutoriales/github-primera-pr"
            }}
            next={{
              title: "Instalar ROS 2 y primer nodo",
              href: "/tutoriales/instalar-ros-primer-nodo"
            }}
          />
        </div>
      </div>
    </div>
  );
}
