/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from "@/components/tutorial/Breadcrumb";
import TutorialChip from "@/components/tutorial/TutorialChip";
import Callout from "@/components/tutorial/Callout";
import TableOfContents from "@/components/tutorial/TableOfContents";
import TutorialNavigation from "@/components/tutorial/TutorialNavigation";
import SpaceParticles from "@/components/SpaceParticles";

export default function VSCodeSetup() {
  const tocItems = [
    { id: "introduccion", title: "🎯 Introducción", level: 2 },
    { id: "prerequisitos", title: "📋 Prerrequisitos", level: 2 },
    { id: "instalacion", title: "📥 Instalar VS Code", level: 2 },
    { id: "extensiones-basicas", title: "🧩 Extensiones básicas", level: 2 },
    { id: "extensiones-robotica", title: "🤖 Extensiones para robótica", level: 2 },
    { id: "configuracion", title: "⚙️ Configuración personalizada", level: 2 },
    { id: "atajos-utiles", title: "🌐 Atajos de teclado útiles", level: 2 },
    { id: "python-setup", title: "� Entorno Python", level: 2 },
    { id: "cpp-setup", title: "🔌 Desarrollo C++", level: 2 },
    { id: "entornos-virtuales", title: "🌍 Entornos virtuales", level: 2 },
    { id: "arduino-setup", title: "⚡ Arduino IDE", level: 2 },
    { id: "debugging", title: "🔧 Debugging Python", level: 2 },
    { id: "tips-productividad", title: "🚀 Tips de productividad", level: 2 },
    { id: "validacion", title: "✅ Validación final", level: 2 },
    { id: "recursos", title: "📚 Recursos", level: 2 }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Partículas espaciales optimizadas para tutorial */}
      <SpaceParticles mode="tutorial" intensity={0.6} showLines={false} />
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 gap-8">
          <main className="lg:col-span-4 xl:col-span-3 max-w-4xl mx-auto lg:mx-0">
            <Breadcrumb 
              items={[
                { label: "Inicio", href: "/" },
                { label: "Tutoriales", href: "/" },
                { label: "Configura tu Setup" }
              ]} 
            />
            
            <div className="mt-6 flex flex-wrap gap-2 mb-8">
              <TutorialChip label="Procedimientos" variant="status" icon="📋" />
              <TutorialChip label="Desarrollo" variant="level" icon="💻" />
              <TutorialChip label="Principiante" variant="level" icon="🌱" />
            </div>

            <header className="mb-8">
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                💻 Configura tu Setup para Robótica
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Configura Visual Studio Code como tu entorno de desarrollo principal para robótica. 
                Aprenderás a instalar las extensiones esenciales, configurar el debugging para Python 
                y ROS, y optimizar tu flujo de trabajo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button 
                  className="btn-primary"
                  onClick={() => document.getElementById('instalacion')?.scrollIntoView({ behavior: 'smooth' })}
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
                🎯 VS Code para robótica
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Visual Studio Code es uno de los editores más populares para desarrollo en robótica 
                  gracias a su flexibilidad, extensiones y excelente soporte para Python, C++ y ROS.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">✅ Ventajas</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Debugging integrado para Python</li>
                      <li>• Soporte nativo para Git</li>
                      <li>• Extensiones específicas para ROS</li>
                      <li>• IntelliSense y autocompletado</li>
                      <li>• Terminal integrada</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-2">🎯 Lo que lograrás</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• Entorno optimizado para Python/ROS</li>
                      <li>• Debugging de nodos ROS</li>
                      <li>• Formateo automático de código</li>
                      <li>• Flujo de trabajo eficiente</li>
                    </ul>
                  </div>
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
                      <span><strong>Ubuntu 22.04 LTS</strong> funcionando</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Python 3.10+</strong> instalado (viene con Ubuntu)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">○</span>
                      <span><strong>Opcional:</strong> ROS 2 Jazzy instalado</span>
                    </li>
                  </ul>
                </div>

                <Callout type="info">
                  <strong>Tiempo estimado:</strong> 30 minutos para instalación y configuración básica.
                </Callout>
              </div>
            </section>

            <section id="instalacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📦 Instalar VS Code
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Método 1: Snap (recomendado)</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Instalar VS Code via snap</div>
                      <div>sudo snap install --classic code</div>
                    </div>
                    <p className="text-slate-300 mt-3">
                      <strong>Ventaja:</strong> Actualizaciones automáticas y instalación simple.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Método 2: Paquete .deb</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Descargar e instalar</div>
                      <div>wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor &gt; packages.microsoft.gpg</div>
                      <div>sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/</div>
                      <div>sudo sh -c 'echo \"deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main\" &gt; /etc/apt/sources.list.d/vscode.list'</div>
                      <div>sudo apt update && sudo apt install code</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Verificar instalación</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div># Abrir VS Code desde terminal</div>
                      <div>code</div>
                      <div className="mt-2"># O abrir un directorio específico</div>
                      <div>code ~/ros2_ws</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="extensiones-basicas">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🧩 Extensiones básicas
              </h2>
              <div className="space-y-6">
                <Callout type="info">
                  Instala extensiones desde el panel lateral izquierdo (Ctrl+Shift+X) o usando comandos.
                </Callout>

                <div className="space-y-6">
                  <div className="card border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">Python</h4>
                      <span className="tag bg-blue-500/20 text-blue-300">Esencial</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Soporte completo para Python: IntelliSense, linting, debugging, formatting.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install ms-python.python</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-green-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">Pylance</h4>
                      <span className="tag bg-green-500/20 text-green-300">Esencial</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Language server rápido para Python con type checking avanzado.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install ms-python.vscode-pylance</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-yellow-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">GitLens</h4>
                      <span className="tag bg-yellow-500/20 text-yellow-300">Recomendada</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Visualización avanzada de Git: blame, history, comparaciones.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install eamodio.gitlens</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">Bracket Pair Colorizer 2</h4>
                      <span className="tag bg-purple-500/20 text-purple-300">Útil</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Colorea brackets/paréntesis para mejorar legibilidad del código.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install CoenraadS.bracket-pair-colorizer-2</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="extensiones-robotica">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🤖 Extensiones para robótica
              </h2>
              <div className="space-y-6">
                <div className="space-y-6">
                  <div className="card border-l-4 border-l-orange-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">ROS</h4>
                      <span className="tag bg-orange-500/20 text-orange-300">ROS 1/2</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Soporte para ROS: syntax highlighting, code completion, debugging.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install ms-iot.vscode-ros</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-red-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">C/C++</h4>
                      <span className="tag bg-red-500/20 text-red-300">C++ ROS</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Para desarrollo en C++ con ROS: IntelliSense, debugging, CMake.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install ms-vscode.cpptools</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-teal-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">CMake Tools</h4>
                      <span className="tag bg-teal-500/20 text-teal-300">Build</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Soporte para CMake: configuración, build, testing.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install ms-vscode.cmake-tools</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-indigo-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200">YAML</h4>
                      <span className="tag bg-indigo-500/20 text-indigo-300">Config</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      Para archivos launch, config y package.xml: syntax, validation.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      <div>ext install redhat.vscode-yaml</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="configuracion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ⚙️ Configuración personalizada
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configuración Python</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Abre configuración (Ctrl+,) y busca estas opciones:</p>
                    <div className="space-y-3">
                      <div className="bg-slate-900 p-3 rounded">
                        <h5 className="font-semibold text-slate-200 mb-2">Formateo automático</h5>
                        <ul className="text-slate-300 text-sm space-y-1">
                          <li>• <code>Python › Formatting: Provider</code> → <strong>black</strong></li>
                          <li>• <code>Editor: Format On Save</code> → <strong>true</strong></li>
                          <li>• <code>Python › Linting: Enabled</code> → <strong>true</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configuración JSON (settings.json)</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Configuración avanzada (Ctrl+Shift+P → "Open Settings JSON"):</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400 overflow-x-auto">
                      <div>&#123;</div>
                      <div>  \"python.defaultInterpreterPath\": \"/usr/bin/python3\",</div>
                      <div>  \"python.linting.pylintEnabled\": true,</div>
                      <div>  \"python.linting.enabled\": true,</div>
                      <div>  \"python.formatting.provider\": \"black\",</div>
                      <div>  \"editor.formatOnSave\": true,</div>
                      <div>  \"editor.rulers\": [88],</div>
                      <div>  \"files.autoSave\": \"afterDelay\",</div>
                      <div>  \"terminal.integrated.defaultProfile.linux\": \"bash\",</div>
                      <div>  \"ros.distro\": \"jazzy\"</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Workspace para ROS 2</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Crea <code>.vscode/settings.json</code> en tu workspace:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div>&#123;</div>
                      <div>  \"python.pythonPath\": \"/usr/bin/python3\",</div>
                      <div>  \"python.autoComplete.extraPaths\": [</div>
                      <div>    \"/opt/ros/jazzy/lib/python3.12/site-packages\"</div>
                      <div>  ],</div>
                      <div>  \"cmake.configureOnOpen\": false</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="atajos-utiles">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ⌨️ Atajos de teclado útiles
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Navegación</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+P</kbd> → Abrir archivo rápido</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+Shift+P</kbd> → Paleta de comandos</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+`</kbd> → Toggle terminal</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+B</kbd> → Toggle sidebar</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Edición</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Alt+Shift+F</kbd> → Formatear código</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+/</kbd> → Comentar línea</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+D</kbd> → Seleccionar palabra</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Alt+↑/↓</kbd> → Mover línea</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Debugging</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">F5</kbd> → Iniciar debugging</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">F9</kbd> → Toggle breakpoint</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">F10</kbd> → Step over</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">F11</kbd> → Step into</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-3">Git</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+Shift+G</kbd> → Panel Git</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+K, Ctrl+C</kbd> → Commit</li>
                      <li><kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Ctrl+K, P</kbd> → Push</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="python-setup">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🐍 Entorno Python
              </h2>
              <div className="space-y-6">
                <p className="text-slate-300">
                  Python es fundamental para desarrollo web, ciencia de datos, automatización y más. 
                  Configuramos un entorno básico con VS Code.
                </p>

                {/* Quick Installation */}
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-200 mb-3">Instalación rápida</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        🐧 Ubuntu
                      </h4>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        sudo apt install python3 python3-pip
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        🪟 Windows
                      </h4>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        winget install Python.Python.3
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                        🍎 macOS
                      </h4>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        brew install python
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Code Extensions */}
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-200 mb-3">Extensiones VS Code</h3>
                  <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                    code --install-extension ms-python.python<br />
                    code --install-extension ms-python.vscode-pylance
                  </div>
                  <p className="text-slate-300 text-sm mt-2">
                    Estas dos extensiones te dan IntelliSense, debugging y soporte completo para Python.
                  </p>
                </div>

                {/* Quick Test */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-3">✅ Prueba rápida</h4>
                  <div className="space-y-2">
                    <p className="text-slate-300">1. Crea <code className="bg-slate-700 px-1 rounded">test.py</code>:</p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                      print("¡Python funciona!")
                    </div>
                    <p className="text-slate-300">2. Ejecuta con <kbd className="bg-slate-700 px-2 py-1 rounded">F5</kbd> o clic derecho → "Run Python File"</p>
                  </div>
                </div>

                <Callout type="info">
                  <strong>💡 Tip:</strong> Para proyectos serios, usa entornos virtuales (sección siguiente) 
                  para aislar dependencias y evitar conflictos.
                </Callout>
              </div>
            </section>

            <section id="cpp-setup">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ⚡ Desarrollo C++
              </h2>
              <div className="space-y-6">
                <p className="text-slate-300">
                  C++ es esencial para desarrollo de sistemas, juegos, robótica y aplicaciones de alto rendimiento. 
                  Configuramos un entorno completo con compiladores y herramientas de debugging.
                </p>

                {/* Compiler Installation */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Instalación de compiladores</h3>
                  
                  {/* Ubuntu */}
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      🐧 Ubuntu - GCC/G++
                    </h4>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div className="mb-2"># Herramientas esenciales para C++</div>
                      sudo apt update<br />
                      sudo apt install build-essential gdb cmake<br />
                      <br />
                      <div className="mb-2"># Verificar instalación</div>
                      gcc --version<br />
                      g++ --version
                    </div>
                  </div>

                  {/* Windows */}
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      🪟 Windows - MSVC/MinGW
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 1:</strong> Visual Studio Build Tools (recomendado)</p>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• Descarga Visual Studio Build Tools</li>
                          <li>• Instala "C++ build tools" workload</li>
                          <li>• Incluye MSVC compiler + Windows SDK</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 2:</strong> MinGW-w64</p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                          winget install msys2.msys2<br />
                          pacman -S mingw-w64-ucrt-x86_64-gcc
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* macOS */}
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      🍎 macOS - Clang
                    </h4>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div className="mb-2"># Instalar Xcode Command Line Tools</div>
                      xcode-select --install<br />
                      <br />
                      <div className="mb-2"># Instalar CMake con Homebrew</div>
                      brew install cmake
                    </div>
                  </div>
                </div>

                {/* VS Code Extensions */}
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-200 mb-3">Extensiones VS Code para C++</h3>
                  <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                    <div className="mb-2"># Extensiones esenciales</div>
                    code --install-extension ms-vscode.cpptools<br />
                    code --install-extension ms-vscode.cmake-tools
                  </div>
                  <p className="text-slate-300 text-sm mt-2">
                    Estas extensiones proporcionan IntelliSense, debugging y soporte para CMake.
                  </p>
                </div>

                {/* Quick Test */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-3">✅ Prueba rápida</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-300 mb-2">1. Crea <code className="bg-slate-700 px-1 rounded">main.cpp</code>:</p>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        #include &lt;iostream&gt;<br />
                        int main() &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;std::cout &lt;&lt; "¡C++ funciona!" &lt;&lt; std::endl;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
                        &#125;
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-300 mb-2">2. Compila y ejecuta:</p>
                      <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                        g++ main.cpp -o main && ./main
                      </div>
                    </div>
                  </div>
                </div>

                <Callout type="tip">
                  <strong>🚀 Pro tip:</strong> Usa <kbd className="bg-slate-700 px-2 py-1 rounded">Ctrl+Shift+P</kbd> → 
                  "C/Cpp: Edit Configurations" para configurar paths de include específicos.
                </Callout>
              </div>
            </section>

            <section id="entornos-virtuales">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                📦 Entornos virtuales Python
              </h2>
              <div className="space-y-6">
                <p className="text-slate-300">
                  Los entornos virtuales te permiten aislar dependencias de cada proyecto y evitar conflictos entre versiones.
                </p>

                {/* venv (Built-in) */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Usando venv (incluido en Python)</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-300 mb-2">1. Crear entorno virtual:</p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                          python -m venv mi_entorno
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2">2. Activar entorno:</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          <div>
                            <p className="text-slate-400 text-sm mb-1">Windows:</p>
                            <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                              mi_entorno\Scripts\activate
                            </div>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm mb-1">Linux/macOS:</p>
                            <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                              source mi_entorno/bin/activate
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Code Integration */}
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-200 mb-3">Integración con VS Code</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                      <span className="text-slate-300">Presiona <kbd className="bg-slate-700 px-2 py-1 rounded">Ctrl+Shift+P</kbd></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                      <span className="text-slate-300">Escribe "Python: Select Interpreter"</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                      <span className="text-slate-300">Selecciona el intérprete de tu entorno virtual</span>
                    </div>
                  </div>
                </div>

                <Callout type="warning">
                  <strong>⚠️ Importante:</strong> Nunca commits el directorio del entorno virtual a Git. 
                  Agrega <code className="bg-slate-700 px-1 rounded">mi_entorno/</code> a tu .gitignore.
                </Callout>
              </div>
            </section>

            <section id="arduino-setup">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🔧 Arduino IDE
              </h2>
              <div className="space-y-6">
                <p className="text-slate-300">
                  Arduino IDE es esencial para desarrollo de microcontroladores y proyectos IoT. 
                  Te mostramos cómo instalarlo en diferentes sistemas operativos.
                </p>

                {/* Installation by OS */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Instalación por sistema operativo</h3>
                  
                  {/* Ubuntu */}
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      🐧 Ubuntu
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 1:</strong> Snap (recomendado)</p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                          sudo snap install arduino
                        </div>
                        <p className="text-slate-300 text-sm mt-1">Siempre actualizada, fácil instalación</p>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 2:</strong> AppImage desde arduino.cc</p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                          wget https://downloads.arduino.cc/arduino-ide/arduino-ide_2.2.1_Linux_64bit.AppImage<br />
                          chmod +x arduino-ide_*.AppImage<br />
                          ./arduino-ide_*.AppImage
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Windows */}
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      🪟 Windows
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 1:</strong> Microsoft Store (recomendado)</p>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• Busca "Arduino IDE" en Microsoft Store</li>
                          <li>• Instalación automática y actualizaciones</li>
                          <li>• Drivers incluidos</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 2:</strong> Descarga directa</p>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• Visita <a href="https://arduino.cc/en/software" className="text-cyan-400 hover:underline">arduino.cc/en/software</a></li>
                          <li>• Descarga Arduino IDE 2.x para Windows</li>
                          <li>• Ejecuta el instalador .exe</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 3:</strong> Winget</p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                          winget install ArduinoSA.IDE.stable
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* macOS */}
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
                      🍎 macOS
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 1:</strong> Descarga directa (recomendado)</p>
                        <ul className="space-y-1 text-slate-300 text-sm ml-4">
                          <li>• Descarga desde <a href="https://arduino.cc/en/software" className="text-cyan-400 hover:underline">arduino.cc/en/software</a></li>
                          <li>• Descomprime y arrastra a Applications</li>
                          <li>• Primera ejecución: System Preferences → Security</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-slate-300 mb-2"><strong>Opción 2:</strong> Homebrew</p>
                        <div className="bg-slate-900 p-2 rounded font-mono text-sm text-green-400">
                          brew install --cask arduino-ide
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Code Integration */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Integración con VS Code</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Para desarrollo Arduino en VS Code, instala estas extensiones:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400">
                      <div className="mb-2"># Extensión oficial de Arduino</div>
                      code --install-extension arduino.vscode-arduino<br />
                      <br />
                      <div className="mb-2"># Alternativa: PlatformIO (más avanzado)</div>
                      code --install-extension platformio.platformio-ide
                    </div>
                    <div className="mt-3 grid md:grid-cols-2 gap-3">
                      <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded">
                        <h5 className="font-semibold text-blue-400 mb-1">Arduino</h5>
                        <p className="text-slate-300 text-sm">Extensión oficial, compatible con Arduino IDE</p>
                      </div>
                      <div className="p-3 bg-purple-900/20 border border-purple-500/30 rounded">
                        <h5 className="font-semibold text-purple-400 mb-1">PlatformIO</h5>
                        <p className="text-slate-300 text-sm">Entorno profesional, múltiples plataformas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Setup Test */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-3">✅ Prueba de configuración</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-300 mb-2">1. Conecta una placa Arduino (Uno, Nano, ESP32...)</p>
                    </div>
                    <div>
                      <p className="text-slate-300 mb-2">2. Abre Arduino IDE y ve a <strong>File → Examples → 01.Basics → Blink</strong></p>
                    </div>
                    <div>
                      <p className="text-slate-300 mb-2">3. Selecciona tu placa: <strong>Tools → Board → Arduino Uno</strong></p>
                    </div>
                    <div>
                      <p className="text-slate-300 mb-2">4. Selecciona puerto: <strong>Tools → Port → COM3 (Windows) / /dev/ttyUSB0 (Linux)</strong></p>
                    </div>
                    <div>
                      <p className="text-slate-300 mb-2">5. Haz clic en <strong>Upload</strong> (→)</p>
                    </div>
                    <div className="mt-2 p-2 bg-green-800/20 rounded">
                      <p className="text-green-400 text-sm">✨ Si el LED integrado parpadea, ¡todo funciona correctamente!</p>
                    </div>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-3">💡 Tips importantes</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-slate-200 mb-2">Drivers</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Windows: Se instalan automáticamente</li>
                        <li>• Linux: Agregar usuario al grupo dialout</li>
                        <li>• macOS: No requiere drivers adicionales</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-200 mb-2">Placas populares</h5>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Arduino Uno/Nano (principiantes)</li>
                        <li>• ESP32 (WiFi/Bluetooth)</li>
                        <li>• Raspberry Pi Pico (dual-core)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Callout type="info">
                  <strong>🔗 Siguiente paso:</strong> Una vez configurado Arduino IDE, puedes combinar 
                  proyectos Arduino con Python/ROS para crear sistemas robóticos completos.
                </Callout>
              </div>
            </section>

            <section id="debugging">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🐛 Debugging Python
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Configurar launch.json</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-300 mb-3">Crea <code>.vscode/launch.json</code> para debugging de ROS:</p>
                    <div className="bg-slate-900 p-3 rounded font-mono text-sm text-green-400 overflow-x-auto">
                      <div>&#123;</div>
                      <div>  \"version\": \"0.2.0\",</div>
                      <div>  \"configurations\": [</div>
                      <div>    &#123;</div>
                      <div>      \"name\": \"Python: ROS Node\",</div>
                      <div>      \"type\": \"python\",</div>
                      <div>      \"request\": \"launch\",</div>
                      <div>      \"program\": \"$&#123;file&#125;\",</div>
                      <div>      \"console\": \"integratedTerminal\",</div>
                      <div>      \"env\": &#123;</div>
                      <div>        \"PYTHONPATH\": \"/opt/ros/jazzy/lib/python3.12/site-packages\"</div>
                      <div>      &#125;</div>
                      <div>    &#125;</div>
                      <div>  ]</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-200">Debugging paso a paso</h3>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <ol className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">1</span>
                        <span>Abre tu archivo Python (.py)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">2</span>
                        <span>Coloca breakpoints haciendo clic a la izquierda del número de línea</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">3</span>
                        <span>Presiona F5 o ve al panel de Debug (Ctrl+Shift+D)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-0.5">4</span>
                        <span>Usa F10 (step over) y F11 (step into) para navegar</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            <section id="tips-productividad">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                🚀 Tips de productividad
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Snippets personalizados</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Crea snippets para código ROS repetitivo. Ve a File → Preferences → Configure User Snippets.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>\"ros_node\": &#123;</div>
                      <div>  \"prefix\": \"rosnode\",</div>
                      <div>  \"body\": [</div>
                      <div>    \"import rclpy\",</div>
                      <div>    \"from rclpy.node import Node\"</div>
                      <div>  ]</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                  
                  <div className="card border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Multi-cursor</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Edita múltiples líneas simultáneamente:
                    </p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Alt+Click para añadir cursors</li>
                      <li>• Ctrl+Alt+↑/↓ para cursors verticales</li>
                      <li>• Ctrl+D para seleccionar occurrencias</li>
                    </ul>
                  </div>

                  <div className="card border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Workspace templates</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Guarda configuraciones de workspace para diferentes proyectos ROS.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>File → Save Workspace As...</div>
                    </div>
                  </div>

                  <div className="card border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-slate-200 mb-2">Tareas automatizadas</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Configura tasks.json para build/run automático de ROS.
                    </p>
                    <div className="bg-slate-900 p-2 rounded font-mono text-xs text-green-400">
                      <div>Terminal → Configure Tasks...</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="validacion">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                ✅ Validación final
              </h2>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Verifica que tu setup esté completo:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'VS Code instalado y funcionando',
                    'Extensiones Python y Pylance activas',
                    'Extensión ROS instalada (si usas ROS)',
                    'Formateo automático configurado',
                    'Debugging funcional con F5',
                    'Atajos de teclado memorizados'
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
                  <strong>¡Excelente!</strong> Tienes VS Code optimizado para desarrollo en robótica. 
                  Tu productividad mejorará significativamente con esta configuración.
                </Callout>
              </div>
            </section>

              <section id="recursos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🔗 Recursos y referencias
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Documentación</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <a href="https://code.visualstudio.com/docs/python/python-tutorial" className="text-blue-400 hover:underline">VS Code Python Tutorial</a></li>
                      <li>• <a href="https://marketplace.visualstudio.com/items?itemName=ms-iot.vscode-ros" className="text-blue-400 hover:underline">ROS Extension</a></li>
                      <li>• <a href="https://code.visualstudio.com/docs/editor/debugging" className="text-blue-400 hover:underline">Debugging Guide</a></li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Extensiones adicionales</h4>
                    <ul className="space-y-1 text-slate-300 text-sm">
                      <li>• <strong>Docker:</strong> ms-azuretools.vscode-docker</li>
                      <li>• <strong>Remote SSH:</strong> ms-vscode-remote.remote-ssh</li>
                      <li>• <strong>Jupyter:</strong> ms-toolsai.jupyter</li>
                      <li>• <strong>XML:</strong> redhat.vscode-xml</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <TutorialNavigation 
              previous={{ title: "Instalar Ubuntu 24.04 LTS (Guía Completa)", href: "/tutoriales/instalar-ubuntu-vm" }}
              next={{ title: "💻 Terminal Básica para Robótica", href: "/tutoriales/terminal-basica" }}
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