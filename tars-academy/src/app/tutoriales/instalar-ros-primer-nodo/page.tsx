/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";
import SpaceParticles from "@/components/SpaceParticles";

export default function InstalarROSPrimerNodo() {
  const tocItems = [
    { id: "introduccion", title: "🎯 ¿Qué es ROS 2?", level: 2 },
    { id: "prerequisitos", title: "📋 Prerrequisitos", level: 2 },
    { id: "instalar-ros", title: "📥 Instalar ROS 2 Jazzy", level: 2 },
    { id: "configurar-entorno", title: "⚙️ Configurar entorno", level: 2 },
    { id: "primer-workspace", title: "📁 Crear primer workspace", level: 2 },
    { id: "primer-nodo", title: "🐍 Primer nodo Python", level: 2 },
    { id: "ejecutar-nodo", title: "🚀 Ejecutar y probar nodo", level: 2 },
    { id: "troubleshooting", title: "🔧 Troubleshooting", level: 2 },
    { id: "validacion", title: "✅ Validación final", level: 2 },
    { id: "recursos", title: "🔗 Recursos", level: 2 }
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
                { label: "Onboarding", href: "/onboarding" },
                { label: "Instalar ROS + primer nodo" }
              ]} 
            />
        
        <div className="mt-6 flex flex-wrap gap-2 mb-8">
          <TutorialChip label="Instalación" variant="level" icon="🔧" />
          <TutorialChip label="Robótica" variant="status" icon="🤖" />
          <TutorialChip label="Principiante" variant="level" icon="🌱" />
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">
                        🤖 Instalar ROS 2 Jazzy + Primer Nodo
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Aprende a instalar ROS 2 Jazzy en Ubuntu 24.04, configurar tu entorno de desarrollo 
            y crear tu primer nodo en Python. Este tutorial te llevará desde cero hasta 
            tener un nodo funcionando que publique mensajes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('instalar-ros')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Empezar ahora
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('prerequisitos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📋 Ver prerrequisitos
            </button>
          </div>
        </header>

            <div className="space-y-8">
            <section id="introduccion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔍 ¿Qué es ROS 2?
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  ROS 2 (Robot Operating System 2) es un framework de código abierto para desarrollo 
                  de software robótico. Proporciona herramientas, librerías y convenciones para 
                  simplificar la creación de comportamientos robóticos complejos.
                </p>
                
                <Callout type="info">
                  Este tutorial está diseñado para Ubuntu 24.04 LTS con ROS 2 Jazzy Jalisco, 
                  la distribución LTS (Long Term Support) recomendada para proyectos académicos.
                </Callout>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-2">¿Por qué ROS 2?</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Comunicación entre procesos robusta</li>
                    <li>• Arquitectura distribuida y modular</li>
                    <li>• Amplio ecosistema de paquetes</li>
                    <li>• Estándar en la industria robótica</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="prerequisitos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📋 Prerrequisitos
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">Antes de comenzar necesitas:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Ubuntu 24.04 LTS</strong> instalado (VM o nativo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Conexión a internet</strong> estable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Terminal básica</strong> - conocer comandos como cd, ls, mkdir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">○</span>
                      <span><strong>Opcional:</strong> Haber completado "Terminal Básica"</span>
                    </li>
                  </ul>
                </div>

                <Callout type="warning">
                  <strong>Tiempo estimado:</strong> 45-60 minutos (dependiendo de velocidad de internet)
                </Callout>
              </div>
            </section>

            <section id="instalar-ros">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📦 Instalar ROS 2 Jazzy
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Paso 1: Preparar el sistema</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Abre terminal (Ctrl+Alt+T) y ejecuta:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Actualizar sistema</div>
                      <div>sudo apt update && sudo apt upgrade -y</div>
                      <div className="mt-2"># Configurar locale (requerido para ROS 2 Jazzy)</div>
                      <div>sudo apt install locales</div>
                      <div>sudo locale-gen en_US en_US.UTF-8</div>
                      <div>sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8</div>
                      <div>export LANG=en_US.UTF-8</div>
                      <div className="mt-2"># Habilitar repositorio Universe</div>
                      <div>sudo apt install software-properties-common</div>
                      <div>sudo add-apt-repository universe</div>
                      <div className="mt-2"># Instalar dependencias</div>
                      <div>sudo apt install curl gnupg lsb-release -y</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Paso 2: Añadir repositorio ROS 2</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Añadir clave GPG</div>
                      <div>sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg</div>
                      <div className="mt-2"># Añadir repositorio</div>
                      <div>echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list &gt; /dev/null</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Paso 3: Instalar ROS 2 Jazzy</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Actualizar lista de paquetes</div>
                      <div>sudo apt update</div>
                      <div className="mt-2"># Instalar ROS 2 Jazzy Desktop (completo)</div>
                      <div>sudo apt install ros-jazzy-desktop python3-argcomplete -y</div>
                    </div>
                    <Callout type="info">
                      <strong>Nota:</strong> La descarga puede tomar 10-20 minutos dependiendo de tu conexión.
                    </Callout>
                  </div>
                </div>
              </div>
            </section>

            <section id="configurar-entorno">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ⚙️ Configurar entorno
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configuración automática</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Añadir ROS 2 al bashrc para que se cargue automáticamente:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Añadir source al bashrc</div>
                      <div>echo "source /opt/ros/jazzy/setup.bash" &gt;&gt; ~/.bashrc</div>
                      <div className="mt-2"># Recargar bashrc</div>
                      <div>source ~/.bashrc</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Verificar instalación</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Probar comando ROS 2</div>
                      <div>ros2 --help</div>
                    </div>
                    <p className="text-slate-300 mt-3">
                      <strong>Resultado esperado:</strong> Deberías ver la ayuda de ROS 2 con comandos disponibles.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Instalar herramientas adicionales</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Herramientas de desarrollo</div>
                      <div>sudo apt install python3-pip python3-colcon-common-extensions -y</div>
                      <div className="mt-2"># Dependencias Python para ROS 2</div>
                      <div>pip3 install setuptools==58.2.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="primer-workspace">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📁 Crear primer workspace
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Estructura del workspace</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Crear estructura de carpetas</div>
                      <div>mkdir -p ~/ros2_ws/src</div>
                      <div>cd ~/ros2_ws</div>
                    </div>
                    <p className="text-slate-300 mt-3">
                      Un workspace de ROS 2 contiene tus paquetes personalizados y permite compilarlos juntos.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Crear paquete Python</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Entrar al directorio src</div>
                      <div>cd ~/ros2_ws/src</div>
                      <div className="mt-2"># Crear paquete</div>
                      <div>ros2 pkg create --build-type ament_python mi_primer_paquete</div>
                    </div>
                    <p className="text-slate-300 mt-3">
                      <strong>Resultado:</strong> Se crea la estructura básica del paquete con archivos de configuración.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="primer-nodo">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🐍 Primer nodo Python
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Crear el archivo del nodo</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Crear archivo Python</div>
                      <div>cd ~/ros2_ws/src/mi_primer_paquete/mi_primer_paquete</div>
                      <div>touch mi_primer_nodo.py</div>
                      <div>chmod +x mi_primer_nodo.py</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Código del nodo</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Edita <code>mi_primer_nodo.py</code> con nano o tu editor favorito:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400 overflow-x-auto">
                      <div>#!/usr/bin/env python3</div>
                      <div>import rclpy</div>
                      <div>from rclpy.node import Node</div>
                      <div>from std_msgs.msg import String</div>
                      <div></div>
                      <div>class MiPrimerNodo(Node):</div>
                      <div>    def __init__(self):</div>
                      <div>        super().__init__('mi_primer_nodo')</div>
                      <div>        self.publisher_ = self.create_publisher(String, 'topic_saludo', 10)</div>
                      <div>        self.timer = self.create_timer(1.0, self.timer_callback)</div>
                      <div>        self.counter = 0</div>
                      <div></div>
                      <div>    def timer_callback(self):</div>
                      <div>        msg = String()</div>
                      <div>        msg.data = f&apos;¡Hola desde ROS 2! Mensaje #&#123;self.counter&#125;&apos;</div>
                      <div>        self.publisher_.publish(msg)</div>
                      <div>        self.get_logger().info(f&apos;Publicando: &quot;&#123;msg.data&#125;&quot;&apos;)</div>
                      <div>        self.counter += 1</div>
                      <div></div>
                      <div>def main(args=None):</div>
                      <div>    rclpy.init(args=args)</div>
                      <div>    node = MiPrimerNodo()</div>
                      <div>    rclpy.spin(node)</div>
                      <div>    node.destroy_node()</div>
                      <div>    rclpy.shutdown()</div>
                      <div></div>
                      <div>if __name__ == '__main__':</div>
                      <div>    main()</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configurar setup.py</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Edita <code>~/ros2_ws/src/mi_primer_paquete/setup.py</code>:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Buscar la sección entry_points y añadir:</div>
                      <div>entry_points=&#123;</div>
                      <div>    'console_scripts': [</div>
                      <div>        'mi_primer_nodo = mi_primer_paquete.mi_primer_nodo:main',</div>
                      <div>    ],</div>
                      <div>&#125;,</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="ejecutar-nodo">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🚀 Ejecutar y probar nodo
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Compilar el workspace</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Volver al workspace root</div>
                      <div>cd ~/ros2_ws</div>
                      <div className="mt-2"># Compilar</div>
                      <div>colcon build</div>
                      <div className="mt-2"># Source del workspace</div>
                      <div>source install/setup.bash</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Ejecutar el nodo</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Ejecutar nodo</div>
                      <div>ros2 run mi_primer_paquete mi_primer_nodo</div>
                    </div>
                    <p className="text-slate-300 mt-3">
                      <strong>Resultado esperado:</strong> Verás mensajes cada segundo mostrando "¡Hola desde ROS 2! Mensaje #X"
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Verificar comunicación (terminal separada)</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Abre otra terminal (Ctrl+Alt+T) y ejecuta:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Ver topics activos</div>
                      <div>ros2 topic list</div>
                      <div className="mt-2"># Escuchar mensajes</div>
                      <div>ros2 topic echo /topic_saludo</div>
                    </div>
                    <p className="text-slate-300 mt-3">
                      Deberías ver los mensajes que está publicando tu nodo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="troubleshooting">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🛠️ Troubleshooting
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-200">Problemas comunes</h3>
                <div className="space-y-4">
                  {[
                    {
                      problema: "comando 'ros2' no encontrado",
                      causa: "ROS 2 no está en el PATH",
                      solucion: "Ejecuta: source /opt/ros/jazzy/setup.bash y verifica que esté en ~/.bashrc"
                    },
                    {
                      problema: "Error al compilar con colcon",
                      causa: "Dependencias faltantes o setup.py mal configurado",
                      solucion: "Verifica entry_points en setup.py y ejecuta: pip3 install setuptools==58.2.0"
                    },
                    {
                      problema: "Nodo no aparece al hacer 'ros2 run'",
                      causa: "No se hizo source del workspace local",
                      solucion: "En el workspace: source install/setup.bash"
                    },
                    {
                      problema: "ImportError: No module named 'rclpy'",
                      causa: "ROS 2 no está correctamente instalado",
                      solucion: "Reinstala: sudo apt install ros-jazzy-desktop python3-argcomplete"
                    }
                  ].map((item, index) => (
                    <div key={index} className="card border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-slate-200 mb-2">P-{String(index + 1).padStart(2, '0')}: {item.problema}</h4>
                      <p className="text-slate-400 text-sm mb-2"><strong>Causa probable:</strong> {item.causa}</p>
                      <p className="text-slate-300 text-sm"><strong>Solución:</strong> {item.solucion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="validacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ✅ Validación final
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Verifica que has completado correctamente el tutorial:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'ROS 2 Jazzy instalado y en PATH',
                    'Workspace ~/ros2_ws creado y compilado',
                    'Nodo ejecutándose sin errores',
                    'Topic /topic_saludo publicando mensajes',
                    'ros2 topic echo muestra los mensajes correctamente'
                  ].map((item, index) => (
                    <div key={index} className="card">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Callout type="check">
                  <strong>¡Felicitaciones!</strong> Tienes ROS 2 funcionando con tu primer nodo. 
                  Ahora puedes explorar más tipos de nodos: subscribers, services, y actions.
                </Callout>
              </div>
            </section>

            <section id="recursos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔗 Recursos y referencias
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">Documentación oficial</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <a href="https://docs.ros.org/en/jazzy/" className="text-blue-400 hover:underline">ROS 2 Jazzy Docs</a></li>
                    <li>• <a href="https://docs.ros.org/en/jazzy/Tutorials.html" className="text-blue-400 hover:underline">Tutoriales oficiales</a></li>
                    <li>• <a href="https://github.com/ros2/examples" className="text-blue-400 hover:underline">Ejemplos de código</a></li>
                  </ul>
                </div>
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">Herramientas útiles</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <code>ros2 node list</code> - Ver nodos activos</li>
                    <li>• <code>ros2 topic list</code> - Ver topics</li>
                    <li>• <code>rqt_graph</code> - Visualizar arquitectura</li>
                    <li>• <code>rviz2</code> - Visualización 3D</li>
                  </ul>
                </div>
              </div>
            </section>
            </div>

            <TutorialNavigation 
              previous={{ title: "Instalar Ubuntu VM", href: "/tutoriales/instalar-ubuntu-vm" }}
              next={{ title: "VS Code Setup", href: "/tutoriales/vscode-setup" }}
            />
          </main>

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