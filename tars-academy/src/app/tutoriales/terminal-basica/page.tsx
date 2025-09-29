import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";

export default function TerminalBasica() {
  const tocItems = [
    { id: "introduccion", title: "¿Por qué aprender terminal?", level: 2 },
    { id: "prerequisitos", title: "Prerequisitos", level: 2 },
    { id: "conceptos-basicos", title: "Conceptos básicos", level: 2 },
    { id: "navegacion", title: "Navegación de archivos", level: 2 },
    { id: "manipulacion-archivos", title: "Manipulación de archivos", level: 2 },
    { id: "permisos", title: "Permisos y sudo", level: 2 },
    { id: "busqueda", title: "Búsqueda y filtros", level: 2 },
    { id: "procesos", title: "Gestión de procesos", level: 2 },
    { id: "comandos-robotica", title: "Comandos para robótica", level: 2 },
    { id: "tips-productividad", title: "Tips de productividad", level: 2 },
    { id: "validacion", title: "Validación final", level: 2 },
    { id: "recursos", title: "Recursos", level: 2 }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 gap-8">
          <main className="lg:col-span-4 xl:col-span-3 max-w-4xl mx-auto lg:mx-0">
            <Breadcrumb 
              items={[
                { label: "Inicio", href: "/" },
                { label: "Tutoriales", href: "/" },
                { label: "Terminal Básica" }
              ]} 
            />
            
            <div className="mt-6 flex flex-wrap gap-2 mb-8">
              <TutorialChip label="Conceptos" variant="status" icon="🧠" />
              <TutorialChip label="Fundamentos" variant="level" icon="🏗️" />
              <TutorialChip label="Principiante" variant="level" icon="🌱" />
            </div>

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                💻 Terminal Básica para Robótica
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Domina los comandos esenciales de terminal en Ubuntu. Aprenderás navegación, 
                manipulación de archivos, gestión de procesos y comandos específicos para 
                desarrollo en robótica. La terminal es tu herramienta más poderosa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="btn-primary">
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary">
                  📋 Ver requisitos
                </button>
              </div>
            </header>

            <div className="space-y-8">
            <section id="introduccion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🎯 ¿Por qué aprender terminal?
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  En robótica, la terminal es indispensable. ROS 2, builds, deployments, debugging - 
                  todo se maneja desde la línea de comandos. Es más rápida, precisa y poderosa 
                  que las interfaces gráficas.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">⚡ Ventajas</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Velocidad: ejecuta comandos en segundos</li>
                      <li>• Automatización: scripts y bash</li>
                      <li>• SSH: control remoto de robots</li>
                      <li>• Debugging: logs y procesos en tiempo real</li>
                      <li>• ROS: launch files y nodos</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🤖 Casos de uso</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <code>ros2 run</code> - ejecutar nodos</li>
                      <li>• <code>colcon build</code> - compilar workspaces</li>
                      <li>• <code>ssh robot@192.168.1.100</code> - conexión remota</li>
                      <li>• <code>rostopic echo</code> - debugging</li>
                      <li>• <code>htop</code> - monitoreo de sistema</li>
                    </ul>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Mentalidad:</strong> La terminal no es intimidante - es como conversar con tu computadora. 
                  Cada comando es una instrucción clara y específica.
                </Callout>
              </div>
            </section>

            <section id="prerequisitos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📋 Prerequisitos
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">Antes de comenzar necesitas:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Ubuntu 22.04 LTS</strong> (VM o nativo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Acceso de terminal</strong> (Ctrl+Alt+T)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Curiosidad</strong> para experimentar sin miedo</span>
                    </li>
                  </ul>
                </div>

                <Callout type="info">
                  <strong>Tiempo estimado:</strong> 45 minutos para conceptos básicos + práctica.
                </Callout>
              </div>
            </section>

            <section id="conceptos-basicos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🏗️ Conceptos básicos
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Anatomía de un comando</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                      <div className="text-green-400">comando <span className="text-blue-400">-opciones</span> <span className="text-yellow-400">argumentos</span></div>
                      <div className="text-slate-400 mt-2">Ejemplo:</div>
                      <div className="text-green-400">ls <span className="text-blue-400">-la</span> <span className="text-yellow-400">/home/usuario</span></div>
                    </div>
                    <div className="mt-3 text-slate-300 text-sm">
                      <p><strong>comando:</strong> qué hacer (ls = listar)</p>
                      <p><strong>opciones:</strong> cómo hacerlo (-l = formato largo, -a = mostrar ocultos)</p>
                      <p><strong>argumentos:</strong> dónde hacerlo (/home/usuario = directorio específico)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Prompt y PATH</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                      <div className="text-green-400">usuario@hostname:~/directorio$ _</div>
                    </div>
                    <div className="mt-3 text-slate-300 text-sm space-y-1">
                      <p><strong>usuario:</strong> tu nombre de usuario</p>
                      <p><strong>hostname:</strong> nombre de la máquina</p>
                      <p><strong>~/directorio:</strong> ubicación actual (~ = home)</p>
                      <p><strong>$:</strong> usuario normal (# = root/admin)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Atajos esenciales</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Navegación</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">↑/↓</kbd> → Historial de comandos</li>
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Tab</kbd> → Autocompletar</li>
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+C</kbd> → Cancelar comando</li>
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+L</kbd> → Limpiar pantalla</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-200 mb-2">Edición</h5>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+A</kbd> → Inicio de línea</li>
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+E</kbd> → Final de línea</li>
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+U</kbd> → Borrar línea</li>
                          <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+W</kbd> → Borrar palabra</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="navegacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🧭 Navegación de archivos
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-3">pwd - ¿Dónde estoy?</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ pwd</div>
                      <div>/home/usuario/ros2_ws</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>Print Working Directory</strong> - muestra tu ubicación actual.
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-3">ls - ¿Qué hay aquí?</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ ls -la</div>
                      <div>drwxr-xr-x 3 user user 4096 src/</div>
                      <div>-rw-r--r-- 1 user user  567 package.xml</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>-l:</strong> formato largo, <strong>-a:</strong> archivos ocultos
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-slate-200 mb-3">cd - Cambiar directorio</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ cd ~/ros2_ws/src</div>
                      <div>$ cd ../         # directorio padre</div>
                      <div>$ cd ~           # home</div>
                      <div>$ cd -           # directorio anterior</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>Tip:</strong> Usa Tab para autocompletar nombres de carpetas.
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-slate-200 mb-3">tree - Vista jerárquica</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ sudo apt install tree</div>
                      <div>$ tree -L 2</div>
                      <div>.</div>
                      <div>├── src/</div>
                      <div>│   └── mi_paquete/</div>
                      <div>└── install/</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>-L 2:</strong> máximo 2 niveles de profundidad
                    </p>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Rutas absolutas vs relativas:</strong><br/>
                  • <code>/home/usuario/ros2_ws</code> - ruta absoluta (desde raíz)<br/>
                  • <code>../src/mi_paquete</code> - ruta relativa (desde ubicación actual)
                </Callout>
              </div>
            </section>

            <section id="manipulacion-archivos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📁 Manipulación de archivos
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-yellow-500">
                    <h4 className="font-semibold text-slate-200 mb-3">mkdir - Crear carpetas</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ mkdir mi_proyecto</div>
                      <div>$ mkdir -p deep/nested/folder</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>-p:</strong> crea carpetas padre si no existen
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-slate-200 mb-3">touch - Crear archivos</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ touch mi_nodo.py</div>
                      <div>$ touch setup.py package.xml</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Crea archivos vacíos o actualiza timestamp
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-teal-500">
                    <h4 className="font-semibold text-slate-200 mb-3">cp - Copiar</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ cp archivo.py backup.py</div>
                      <div>$ cp -r carpeta/ copia/</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>-r:</strong> recursivo (para carpetas)
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-indigo-500">
                    <h4 className="font-semibold text-slate-200 mb-3">mv - Mover/Renombrar</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ mv viejo.py nuevo.py</div>
                      <div>$ mv archivo.py ~/Documentos/</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Mismo comando para mover y renombrar
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-pink-500">
                    <h4 className="font-semibold text-slate-200 mb-3">rm - Eliminar</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ rm archivo.txt</div>
                      <div>$ rm -rf carpeta/</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>¡CUIDADO!</strong> -rf elimina recursivamente sin confirmación
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-cyan-500">
                    <h4 className="font-semibold text-slate-200 mb-3">cat/less - Ver contenido</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ cat setup.py</div>
                      <div>$ less package.xml</div>
                      <div>$ head -10 archivo.log</div>
                      <div>$ tail -f rosout.log</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>cat:</strong> todo el archivo, <strong>less:</strong> paginado, <strong>tail -f:</strong> seguir cambios
                    </p>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>Seguridad:</strong> Siempre double-check antes de usar <code>rm -rf</code>. 
                  No hay papelera en terminal - ¡la eliminación es permanente!
                </Callout>
              </div>
            </section>

            <section id="permisos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔐 Permisos y sudo
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Entender permisos</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm">
                      <div className="text-green-400">-rwxr-xr-- 1 usuario grupo 1024 mi_nodo.py</div>
                      <div className="text-slate-400 mt-2">│└─┬─┘└─┬─┘└─┬─┘</div>
                      <div className="text-slate-400">│  │   │   └── otros (read)</div>
                      <div className="text-slate-400">│  │   └────── grupo (read+execute)</div>
                      <div className="text-slate-400">│  └────────── usuario (read+write+execute)</div>
                      <div className="text-slate-400">└─────────────── tipo: - archivo, d directorio</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-3">chmod - Cambiar permisos</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ chmod +x mi_script.sh</div>
                      <div>$ chmod 755 mi_nodo.py</div>
                      <div>$ chmod -R 644 config/</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>+x:</strong> hacer ejecutable, <strong>755:</strong> rwxr-xr-x, <strong>-R:</strong> recursivo
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-slate-200 mb-3">sudo - Super usuario</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ sudo apt install ros-humble-desktop</div>
                      <div>$ sudo systemctl restart networking</div>
                      <div>$ sudo chmod 666 /dev/ttyUSB0</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Para operaciones que requieren permisos de administrador
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-2">Códigos numéricos de permisos</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-300">
                    <div><code>755</code> - rwxr-xr-x</div>
                    <div><code>644</code> - rw-r--r--</div>
                    <div><code>777</code> - rwxrwxrwx</div>
                    <div><code>600</code> - rw-------</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="busqueda">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔍 Búsqueda y filtros
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-3">find - Buscar archivos</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ find . -name \"*.py\"</div>
                      <div>$ find /opt/ros -name \"*msg*\"</div>
                      <div>$ find ~ -type f -size +100M</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Busca por nombre, tipo, tamaño, fecha de modificación
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-3">grep - Buscar en contenido</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ grep -r \"rclpy\" src/</div>
                      <div>$ grep -n \"class\" mi_nodo.py</div>
                      <div>$ ps aux | grep ros</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>-r:</strong> recursivo, <strong>-n:</strong> números de línea, <strong>|:</strong> pipe
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-slate-200 mb-3">which/whereis - Ubicar comandos</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ which python3</div>
                      <div>/usr/bin/python3</div>
                      <div>$ whereis ros2</div>
                      <div>ros2: /opt/ros/humble/bin/ros2</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Encuentra dónde están instalados los programas
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Pipes y redirección</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ ros2 topic list | grep camera</div>
                      <div>$ colcon build &gt; build.log 2&gt;&amp;1</div>
                      <div>$ rostopic echo /cmd_vel &gt;&gt; velocidades.txt</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>|:</strong> pipe, <strong>&gt;:</strong> sobrescribir, <strong>&gt;&gt;:</strong> añadir
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="procesos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ⚙️ Gestión de procesos
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-teal-500">
                    <h4 className="font-semibold text-slate-200 mb-3">ps - Ver procesos</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ ps aux | grep ros</div>
                      <div>$ ps -ef | grep python</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Lista procesos activos con detalles
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-cyan-500">
                    <h4 className="font-semibold text-slate-200 mb-3">top/htop - Monitor sistema</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ top</div>
                      <div>$ sudo apt install htop</div>
                      <div>$ htop</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Monitor en tiempo real de CPU, RAM, procesos
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-slate-200 mb-3">kill - Terminar procesos</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ kill 1234</div>
                      <div>$ killall python3</div>
                      <div>$ pkill -f \"mi_nodo\"</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      Por PID, nombre o patrón
                    </p>
                  </div>

                  <div className="card border-l-4 border-l-yellow-500">
                    <h4 className="font-semibold text-slate-200 mb-3">Jobs y background</h4>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>$ ros2 run mi_paquete mi_nodo &amp;</div>
                      <div>$ jobs</div>
                      <div>$ fg %1</div>
                      <div>$ nohup mi_comando &amp;</div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">
                      <strong>&amp;:</strong> background, <strong>fg:</strong> foreground, <strong>nohup:</strong> sin hang up
                    </p>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Ctrl+Z vs Ctrl+C:</strong><br/>
                  • <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+Z</kbd> pausa el proceso (usa <code>fg</code> para reanudar)<br/>
                  • <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+C</kbd> termina el proceso completamente
                </Callout>
              </div>
            </section>

            <section id="comandos-robotica">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🤖 Comandos para robótica
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">ROS 2 específicos</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-slate-200 mb-2">Nodos y topics</h5>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        <div>$ ros2 node list</div>
                        <div>$ ros2 topic list</div>
                        <div>$ ros2 topic echo /cmd_vel</div>
                        <div>$ ros2 run mi_pkg mi_nodo</div>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-slate-200 mb-2">Build y workspace</h5>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        <div>$ colcon build</div>
                        <div>$ source install/setup.bash</div>
                        <div>$ ros2 launch mi_pkg launch.py</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Desarrollo y debugging</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-slate-200 mb-2">Git workflow</h5>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        <div>$ git status</div>
                        <div>$ git add .</div>
                        <div>$ git commit -m \"mensaje\"</div>
                        <div>$ git push origin main</div>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-slate-200 mb-2">Sistema y hardware</h5>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        <div>$ lsusb</div>
                        <div>$ dmesg | tail</div>
                        <div>$ sudo chmod 666 /dev/ttyUSB0</div>
                        <div>$ ifconfig</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-3">One-liners útiles para robótica</h4>
                  <div className="space-y-2 text-slate-300 text-sm">
                    <div className="bg-slate-900 p-2 rounded font-mono text-green-400">
                      <div># Ver todos los nodos y sus topics</div>
                      <div>ros2 node list | xargs -I {} sh -c 'echo \"Node: {}\"; ros2 node info {}'</div>
                    </div>
                    <div className="bg-slate-900 p-2 rounded font-mono text-green-400">
                      <div># Backup rápido de workspace</div>
                      <div>tar -czf ros2_ws_backup_$(date +%Y%m%d).tar.gz ~/ros2_ws/src</div>
                    </div>
                    <div className="bg-slate-900 p-2 rounded font-mono text-green-400">
                      <div># Monitor de recursos de nodos ROS</div>
                      <div>watch -n 1 'ps aux | grep ros2 | grep -v grep'</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="tips-productividad">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🚀 Tips de productividad
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Alias personalizados</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Añade a <code>~/.bashrc</code> para comandos frecuentes:
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>alias ll='ls -la'</div>
                      <div>alias rws='cd ~/ros2_ws && source install/setup.bash'</div>
                      <div>alias cb='colcon build'</div>
                      <div>alias rn='ros2 node list'</div>
                    </div>
                  </div>
                  
                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Historial inteligente</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Configuraciones útiles para <code>~/.bashrc</code>:
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>export HISTSIZE=10000</div>
                      <div>export HISTCONTROL=ignoredups</div>
                      <div>shopt -s histappend</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Funciones personalizadas</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Crea funciones complejas en <code>~/.bashrc</code>:
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>rosclean() &#123;</div>
                      <div>  rm -rf build/ install/ log/</div>
                      <div>  echo \"Workspace cleaned\"</div>
                      <div>&#125;</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-slate-200 mb-2">tmux - Multiplexor</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Para manejar múltiples sesiones:
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>$ sudo apt install tmux</div>
                      <div>$ tmux new -s ros_dev</div>
                      <div># Ctrl+B, D para detach</div>
                      <div>$ tmux attach -t ros_dev</div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>Pro tip:</strong> Crea un script <code>setup_ros_env.sh</code> que configure todo tu entorno 
                  (source ROS, cd workspace, alias) y ejecútalo al abrir terminal.
                </Callout>
              </div>
            </section>

            <section id="validacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ✅ Validación final
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Practica estos comandos para verificar tu dominio:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Navegar entre directorios sin mirar (cd, pwd, ls)',
                    'Crear/copiar/mover archivos con confianza',
                    'Usar grep y find para buscar código',
                    'Gestionar procesos (ps, kill, jobs)',
                    'Configurar alias y funciones en .bashrc',
                    'Usar pipes y redirección efectivamente'
                  ].map((item, index) => (
                    <div key={index} className="card">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-200 mb-2">Ejercicio práctico</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Intenta esta secuencia sin ayuda:
                  </p>
                  <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                    <div>1. Crear directorio ~/practica_terminal</div>
                    <div>2. Crear 3 archivos .py dentro</div>
                    <div>3. Hacer uno ejecutable</div>
                    <div>4. Buscar todos los .py en tu home</div>
                    <div>5. Ver procesos de python</div>
                  </div>
                </div>

                <Callout type="check">
                  <strong>¡Genial!</strong> Ahora tienes las bases sólidas de terminal para robótica. 
                  La práctica constante te hará un desarrollador mucho más eficiente.
                </Callout>
              </div>
            </section>

            <section id="recursos">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔗 Recursos y referencias
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">Cheat sheets</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <a href="https://cheatography.com/davechild/cheat-sheets/linux-command-line/" className="text-blue-400 hover:underline">Linux Command Line</a></li>
                    <li>• <a href="https://github.com/RehanSaeed/Bash-Cheat-Sheet" className="text-blue-400 hover:underline">Bash Cheat Sheet</a></li>
                    <li>• <a href="https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools.html" className="text-blue-400 hover:underline">ROS 2 CLI Tools</a></li>
                  </ul>
                </div>
                <div className="card">
                  <h4 className="font-semibold text-slate-200 mb-2">Herramientas avanzadas</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• <strong>fzf:</strong> fuzzy finder para archivos</li>
                    <li>• <strong>ag/ripgrep:</strong> búsqueda super rápida</li>
                    <li>• <strong>bat:</strong> cat con syntax highlighting</li>
                    <li>• <strong>fd:</strong> find mejorado</li>
                  </ul>
                </div>
              </div>
            </section>
            </div>

            <TutorialNavigation 
              previous={{ title: "VS Code Setup", href: "/tutoriales/vscode-setup" }}
              next={{ title: "Git & GitHub", href: "/tutoriales/git-github" }}
            />
          </main>

          <aside className="lg:col-span-1">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  );
}