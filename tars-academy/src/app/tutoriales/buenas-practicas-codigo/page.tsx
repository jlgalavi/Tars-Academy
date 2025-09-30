/* eslint-disable react/no-unescaped-entities */
'use client';

import Breadcrumb from '@/components/tutorial/Breadcrumb';
import TutorialChip from '@/components/tutorial/TutorialChip';
import Callout from '@/components/tutorial/Callout';
import TableOfContents from '@/components/tutorial/TableOfContents';
import TutorialNavigation from '@/components/tutorial/TutorialNavigation';

const tocItems = [
  { id: 'introduccion', title: '🎯 Introducción', level: 2 },
  { id: 'porque', title: '¿Por qué lo hacemos?', level: 3 },
  { id: 'dirigido', title: '¿A quién va dirigido?', level: 3 },
  { id: 'principios-comunes', title: '📝 Principios de diseño y estilo', level: 2 },
  { id: 'nombres', title: '🏷️ Nombres de variables, funciones y clases', level: 2 },
  { id: 'variables', title: 'Variables', level: 3 },
  { id: 'funciones', title: 'Funciones y métodos', level: 3 },
  { id: 'clases', title: 'Clases', level: 3 },
  { id: 'constantes', title: 'Constantes', level: 3 },
  { id: 'booleanos', title: 'Booleanos', level: 3 },
  { id: 'comentarios', title: '📝 Comentarios y documentación', level: 2 },
  { id: 'modularidad', title: '🔧 Modularidad y organización', level: 2 },
  { id: 'estilo-bloques', title: '📐 Espaciado y estilo de bloques', level: 2 },
  { id: 'lenguajes', title: '💻 Guías específicas por lenguaje', level: 2 },
  { id: 'cpp', title: 'C++', level: 3 },
  { id: 'python', title: 'Python', level: 3 },
  { id: 'estructura-repo', title: '� Estructura del repositorio', level: 2 },
  { id: 'git-workflow', title: '🌿 Control de versiones con Git', level: 2 },
  { id: 'ramas', title: 'Ramas principales', level: 3 },
  { id: 'branching', title: 'Branching para features y bugs', level: 3 },
  { id: 'commits', title: 'Mensajes de commit', level: 3 },
  { id: 'pull-requests', title: 'Pull Requests y revisiones', level: 3 },
  { id: 'ros2-conventions', title: '🤖 Convenciones ROS 2', level: 2 },
  { id: 'ejemplos', title: '💡 Ejemplos prácticos', level: 2 },
  { id: 'validacion', title: '✅ Validación y checklist', level: 2 },
];

export default function BuenasPracticasCodigo() {
  const handleStartClick = () => {
    const element = document.getElementById('principios-comunes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrerequisitesClick = () => {
    const element = document.getElementById('validacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 gap-8">
          {/* Contenido principal */}
          <main className="lg:col-span-4 xl:col-span-3 max-w-4xl mx-auto lg:mx-0">
            {/* Cabecera */}
            <div className="mb-8">
              <Breadcrumb 
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Tutoriales', href: '/' },
                  { label: 'Buenas Prácticas de Programación TARS' }
                ]}
              />
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                🚀 Buenas Prácticas de Programación - TARS Robotics
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Manual de estilo y buenas prácticas para el equipo de software del European Rover Challenge (ERC). 
                Código homogéneo, legible y mantenible para el desarrollo colaborativo del rover.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="Equipo TARS" variant="level" icon="🤖" />
                <TutorialChip label="ERC 2025" variant="status" icon="🏆" />
                <TutorialChip label="C++ & Python & ROS 2" variant="status" icon="�" />
                <TutorialChip label="Actualizado 09/2025" variant="updated" icon="�" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary" onClick={handleStartClick}>
                  🚀 Empezar ahora
                </button>
                <button className="btn-secondary" onClick={handlePrerequisitesClick}>
                  ✅ Ver checklist
                </button>
              </div>
            </div>

            {/* Contenido del tutorial */}
            <div className="prose prose-invert max-w-none space-y-8 [&_pre]:scrollbar-none [&_pre]:hover:scrollbar-thin [&_pre:hover]:scrollbar-thumb-transparent [&_pre:hover]:scrollbar-track-transparent">
              
              <section id="introduccion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🎯 Introducción
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Este documento recoge las buenas prácticas de programación que seguimos en el equipo de 
                  software de <strong>TARS Robotics</strong> durante el proyecto European Rover Challenge (ERC).
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  La idea es que, aunque seamos un grupo de estudiantes con niveles diferentes de experiencia, 
                  todo el código se entienda igual y sea fácil de mantener.
                </p>
                
                <Callout type="info">
                  💡 <strong>Piensa en este documento como en un "manual de estilo":</strong> igual que en un idioma 
                  seguimos reglas gramaticales para entendernos, aquí seguimos unas pautas para que cualquier 
                  persona del equipo pueda leer, modificar o ampliar el código sin problemas.
                </Callout>

                <div className="space-y-6 mt-8">
                  <div id="porque">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">¿Por qué lo hacemos?</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Porque un código ordenado y homogéneo evita errores y malentendidos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Porque así, si alguien nuevo entra en el equipo, puede entender rápidamente lo que ya está hecho.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Porque trabajar con C++ y Python (y en parte con ROS 2) requiere coordinación: cada uno programa en su ordenador, pero al final todo se junta en el rover.</span>
                      </li>
                    </ul>
                  </div>

                  <div id="dirigido">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">¿A quién va dirigido?</h3>
                    <p className="text-slate-300 leading-relaxed">
                      A todos los miembros del departamento de software, pero también a los de otros equipos 
                      (mecánica, electrónica, teléco) que tengan que escribir scripts, módulos o pruebas.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-3">
                      <strong>En resumen:</strong> este documento es nuestra guía común para que el desarrollo sea claro, 
                      organizado y escalable, independientemente de quién lo escriba o en qué lenguaje lo haga.
                    </p>
                  </div>
                </div>
              </section>

              <section id="principios-comunes">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  📝 Principios de diseño y estilo comunes
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Cuando programamos en equipo no basta con que el código funcione, también debe ser legible, 
                  ordenado y coherente. Si cada persona escribe a su manera, el resultado es un caos difícil de mantener.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Por eso, adoptamos unas reglas comunes que nos permiten:
                </p>
                <ul className="space-y-2 text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Que cualquier miembro pueda leer y entender el trabajo de otro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Que el código sea más fácil de depurar y ampliar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Que se eviten errores al integrar diferentes módulos.</span>
                  </li>
                </ul>
                <p className="text-slate-300 leading-relaxed">
                  A continuación se presentan las normas básicas de estilo y diseño que todos debemos seguir.
                </p>
              </section>

              <section id="nombres">
                <h2 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                  🏷️ Nombres de variables, funciones y clases
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Usaremos nombres claros y descriptivos, evitando abreviaciones innecesarias como <code>tmp</code>, 
                  <code>var</code>, <code>coso</code>, etc. El nombre debe dejar claro qué representa o qué hace.
                </p>

                <div className="space-y-6">
                  <div id="variables">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">Variables</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">❌ Mal ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Python
d = 5.2
t = get_time()  
x = calc_pos(d, t)

// C++
int n = 10;
double temp = sensor.read();
bool f = check_status();`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">✅ Buen ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Python
distance_meters = 5.2
current_timestamp = get_time()
robot_x_position = calc_pos(distance_meters, current_timestamp)

// C++
int max_iterations = 10;
double sensor_temperature = sensor.read();
bool is_system_ready = check_status();`}
                        </pre>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      <strong>Convención:</strong> snake_case en Python, camelCase o snake_case en C++ (mantener consistencia).
                    </p>
                  </div>

                  <div id="funciones">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">Funciones y métodos</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">❌ Mal ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`def proc_data(d):
    # ¿Qué hace exactamente?
    return d * 2 + 1

void do_stuff() {
    // Muy genérico
}`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">✅ Buen ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`def convert_sensor_reading_to_distance(raw_reading):
    # Aplica calibración específica del sensor
    return raw_reading * 2 + 1

void initialize_motor_controllers() {
    // Claro y específico
}`}
                        </pre>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      <strong>Principio:</strong> El nombre debe describir qué hace la función, no cómo lo hace.
                    </p>
                  </div>

                  <div id="clases">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">Clases</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">❌ Mal ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`class Data:
    pass

class Manager:
    pass

class Handler:
    pass`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">✅ Buen ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`class SensorReading:
    pass

class RobotNavigationController:
    pass

class SerialCommunicationHandler:
    pass`}
                        </pre>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      <strong>Convención:</strong> PascalCase tanto en Python como en C++.
                    </p>
                  </div>

                  <div id="constantes">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">Constantes</h3>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">✅ Ejemplos correctos</h4>
                      <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Python
MAX_SPEED_MPS = 2.5
DEFAULT_TIMEOUT_SECONDS = 10
PI_APPROXIMATION = 3.14159

// C++
const double MAX_SPEED_MPS = 2.5;
const int DEFAULT_TIMEOUT_SECONDS = 10;
const double PI_APPROXIMATION = 3.14159;`}
                      </pre>
                    </div>
                    <p className="text-slate-300 text-sm mt-3">
                      <strong>Convención:</strong> UPPER_SNAKE_CASE en ambos lenguajes.
                    </p>
                  </div>

                  <div id="booleanos">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">Booleanos</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">❌ Mal ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`active = True
status = False
flag = robot.check()`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">✅ Buen ejemplo</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`is_motor_active = True
has_valid_connection = False
should_continue_mission = robot.check_mission_status()`}
                        </pre>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      <strong>Prefijos recomendados:</strong> is_, has_, should_, can_, will_
                    </p>
                  </div>
                </div>
              </section>

              <section id="principios">
                <h2 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                  📝 Principios clave del código limpio
                </h2>

                <div className="space-y-8">
                  <div id="principio-1" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Nombres claros y descriptivos
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Variables, funciones y clases deben tener nombres que expliquen su propósito sin necesidad de comentarios adicionales.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2 flex items-center gap-2">
                          ❌ Mal ejemplo
                        </h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Python
def calc(x, y, z):
    temp = x * 3.14159
    result = temp + y - z
    return result

d = calc(radius, height, offset)`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                          ✅ Buen ejemplo
                        </h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Python
def calculate_cylinder_volume(radius, height, offset):
    circumference = radius * 3.14159
    volume = circumference + height - offset
    return volume

total_displacement = calculate_cylinder_volume(
    wheel_radius, robot_height, sensor_offset
)`}
                        </pre>
                      </div>
                    </div>

                    <Callout type="tip">
                      <strong>Regla práctica:</strong> Si necesitas un comentario para explicar qué hace una variable o función, 
                      probablemente necesita un nombre mejor.
                    </Callout>
                  </div>

                  <div id="principio-2" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Funciones pequeñas y enfocadas
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Cada función debe hacer una sola cosa y hacerla bien. Si una función hace múltiples tareas, divídela.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">❌ Función muy larga</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`def process_robot_data(sensor_data):
    # Validar datos
    if not sensor_data:
        return None
    
    # Filtrar ruido
    filtered = []
    for point in sensor_data:
        if point.confidence > 0.8:
            filtered.append(point)
    
    # Convertir coordenadas
    converted = []
    for point in filtered:
        x = point.x * math.cos(angle)
        y = point.y * math.sin(angle)
        converted.append(Point(x, y))
    
    # Guardar en archivo
    with open('data.json', 'w') as f:
        json.dump(converted, f)
    
    return converted`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">✅ Funciones separadas</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`def validate_sensor_data(sensor_data):
    return sensor_data is not None

def filter_high_confidence_points(sensor_data):
    return [p for p in sensor_data if p.confidence > 0.8]

def convert_coordinates(points, angle):
    converted = []
    for point in points:
        x = point.x * math.cos(angle)
        y = point.y * math.sin(angle)
        converted.append(Point(x, y))
    return converted

def save_points_to_file(points, filename):
    with open(filename, 'w') as f:
        json.dump(points, f)

def process_robot_data(sensor_data):
    if not validate_sensor_data(sensor_data):
        return None
    
    filtered_points = filter_high_confidence_points(sensor_data)
    converted_points = convert_coordinates(filtered_points, angle)
    save_points_to_file(converted_points, 'data.json')
    
    return converted_points`}
                        </pre>
                      </div>
                    </div>

                    <Callout type="tip">
                      <strong>Regla de 20 líneas:</strong> Si una función tiene más de 20 líneas, 
                      considera dividirla en funciones más pequeñas.
                    </Callout>
                  </div>

                  <div id="principio-3" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Comentarios útiles, no obvios
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Los comentarios deben explicar el *por qué*, no el *qué*. El código ya muestra qué hace.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">❌ Comentarios obvios</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Incrementar contador
counter += 1

# Crear una lista vacía
robot_positions = []

# Verificar si el robot está activo
if robot.is_active():
    # Llamar a la función move
    robot.move()`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">✅ Comentarios útiles</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Contador de intentos para evitar bucle infinito
counter += 1

# Buffer circular para últimas 100 posiciones del robot
robot_positions = []

# Solo mover si los sensores están calibrados
# (evita movimientos erráticos al iniciar)
if robot.is_active():
    robot.move()`}
                        </pre>
                      </div>
                    </div>

                    <Callout type="info">
                      Los mejores comentarios explican decisiones de diseño, limitaciones conocidas, 
                      o contexto que no es obvio desde el código.
                    </Callout>
                  </div>

                  <div id="principio-4" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      Manejo explícito de errores
                    </h3>
                    <p className="text-slate-300 mb-4">
                      En robótica, los errores pueden ser peligrosos. Manéjalos explícitamente en lugar de ignorarlos.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <h4 className="text-red-300 font-semibold mb-2">❌ Ignorar errores</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`def read_sensor():
    try:
        return sensor.get_distance()
    except:
        return 0  # ¿Qué error ocurrió?

distance = read_sensor()
robot.move_forward(distance)  # ¿Y si distance es 0?`}
                        </pre>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <h4 className="text-green-300 font-semibold mb-2">✅ Manejo explícito</h4>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
{`def read_sensor():
    try:
        distance = sensor.get_distance()
        if distance < 0:
            raise ValueError("Sensor returned negative distance")
        return distance
    except SensorConnectionError:
        print("Error: Sensor disconnected")
        return None
    except ValueError as e:
        print(f"Sensor error: {e}")
        return None

distance = read_sensor()
if distance is not None and distance > 0.1:
    robot.move_forward(distance)
else:
    robot.stop()
    print("Cannot move: invalid distance reading")`}
                        </pre>
                      </div>
                    </div>

                    <Callout type="warning">
                      En robots reales, un error no manejado puede causar colisiones o daños. 
                      Siempre valida datos de sensores antes de enviar comandos de movimiento.
                    </Callout>
                  </div>

                  <div id="principio-5" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      Consistencia en el estilo
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Todo el equipo debe seguir las mismas convenciones de nomenclatura, indentación y estructura.
                    </p>

                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <h4 className="text-slate-200 font-semibold mb-3">Convenciones recomendadas:</h4>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div><strong>Python:</strong> snake_case para variables/funciones, PascalCase para clases</div>
                        <div><strong>C++:</strong> camelCase o snake_case (decide uno y mantenlo)</div>
                        <div><strong>Indentación:</strong> 4 espacios (nunca mezclar tabs y espacios)</div>
                        <div><strong>Líneas:</strong> Máximo 80-100 caracteres por línea</div>
                        <div><strong>Imports:</strong> Agrupados y ordenados alfabéticamente</div>
                      </div>
                    </div>

                    <Callout type="tip">
                      Usa herramientas como <strong>Black</strong> (Python) o <strong>clang-format</strong> (C++) 
                      para mantener el formato automáticamente.
                    </Callout>
                  </div>
                </div>
              </section>

              <section id="practica">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🛠️ Práctica guiada
                </h2>
                <div className="card">
                  <h3 className="text-lg font-semibold text-slate-200 mb-3">Actividad: Refactorizar código existente</h3>
                  <p className="text-slate-300 mb-4">
                    Toma un archivo de código que hayas escrito recientemente y aplica los 5 principios:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-space-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <strong className="text-slate-200">Revisar nombres:</strong>
                        <p className="text-slate-300 text-sm">Cambia variables como 'data', 'temp', 'result' por nombres descriptivos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-space-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <strong className="text-slate-200">Dividir funciones largas:</strong>
                        <p className="text-slate-300 text-sm">Si alguna función tiene más de 20 líneas, divídela</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-space-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <strong className="text-slate-200">Mejorar comentarios:</strong>
                        <p className="text-slate-300 text-sm">Elimina comentarios obvios y añade contexto útil</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-space-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <strong className="text-slate-200">Añadir manejo de errores:</strong>
                        <p className="text-slate-300 text-sm">Identifica puntos donde pueden fallar operaciones y manéjalos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-space-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                      <div>
                        <strong className="text-slate-200">Aplicar formato consistente:</strong>
                        <p className="text-slate-300 text-sm">Usa un formateador automático o revisa manualmente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="validacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🧪 Validación final
                </h2>
                <div className="card">
                  <p className="text-slate-300 mb-4">
                    Verifica que has aplicado las buenas prácticas correctamente:
                  </p>
                  <div className="space-y-3">
                    {[
                      'Todas las variables y funciones tienen nombres descriptivos',
                      'No hay funciones de más de 20-25 líneas',
                      'Los comentarios explican el "por qué", no el "qué"',
                      'Hay manejo explícito de errores en operaciones críticas',
                      'El código sigue un estilo consistente de nomenclatura y formato',
                      'Un compañero puede entender el código sin explicaciones adicionales'
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
                      problema: "Mi código funciona bien, ¿por qué cambiarlo?",
                      causa: "Mentalidad de corto plazo",
                      solucion: "El código se lee 10 veces más de lo que se escribe. Código limpio ahorra horas de debugging futuro y facilita agregar nuevas funcionalidades."
                    },
                    {
                      problema: "Refactorizar toma mucho tiempo",
                      causa: "Falta de herramientas y práctica",
                      solucion: "Usa herramientas de refactoring de tu IDE. Comienza con cambios pequeños (renombrar variables). Con práctica, se vuelve más rápido."
                    },
                    {
                      problema: "Mi equipo no sigue las mismas reglas",
                      causa: "Falta de acuerdos explícitos",
                      solucion: "Propón crear un documento de convenciones del equipo. Usa herramientas de formato automático que fuercen consistencia."
                    },
                    {
                      problema: "No sé cuándo un comentario es necesario",
                      causa: "Confusión entre documentar código vs explicar lógica",
                      solucion: "Regla simple: si alguien nuevo en el proyecto necesitaría contexto adicional para entender una decisión, comméntala."
                    }
                  ].map((item, index) => (
                    <div key={index} className="card border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-slate-200 mb-2">P-{String(index + 1).padStart(2, '0')}: {item.problema}</h4>
                      <p className="text-slate-400 text-sm mb-2"><strong>Causa típica:</strong> {item.causa}</p>
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
                    <h4 className="font-semibold text-slate-200 mb-2">Libros esenciales</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <span className="text-space-400">Clean Code</span> - Robert C. Martin</li>
                      <li>• <span className="text-space-400">The Pragmatic Programmer</span> - Hunt & Thomas</li>
                      <li>• <span className="text-space-400">Code Complete</span> - Steve McConnell</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Herramientas recomendadas</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Python:</strong> Black, flake8, pylint</li>
                      <li>• <strong>C++:</strong> clang-format, cppcheck</li>
                      <li>• <strong>General:</strong> SonarQube, CodeClimate</li>
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
                    <h4 className="font-semibold text-slate-200 mb-2">Profundiza en herramientas</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Aprende a configurar linters y formateadores automáticos.
                    </p>
                    <button className="btn-primary inline-block opacity-50 cursor-not-allowed" disabled>
                      Configurar linters → (Próximamente)
                    </button>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Ejercicio práctico</h4>
                    <p className="text-slate-300 text-sm mb-3">
                      Refactoriza este código aplicando las buenas prácticas:
                    </p>
                    <div className="bg-slate-800 rounded-lg p-3 mb-3">
                      <pre className="text-xs text-slate-300 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
{`// Código problemático
def calc(d, t, x, y):
    tmp = d * 2.5
    if tmp > 100:
        return None
    result = tmp + t
    return result

data = calc(5, 10, 0, 0)
print(data)`}
                      </pre>
                    </div>
                    <p className="text-slate-300 text-xs">
                      💡 <strong>Pista:</strong> Nombres descriptivos, validación de parámetros, documentación
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-t border-slate-700 pt-6">
                <h2 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  🤝 ¿Mejorar este tutorial?
                </h2>
                <p className="text-slate-300 text-sm">
                  Si tienes ejemplos de código que te gustaría que incluyamos o encontraste algún principio confuso, 
                  <a href="https://github.com/tars-academy/tutoriales/issues" className="text-space-400 hover:text-space-300 ml-1">compártelo en GitHub</a>. 
                  ¡Las mejores prácticas evolucionan con la experiencia del equipo! 💙
                </p>
              </section>
            </div>

            {/* Navegación */}
            <TutorialNavigation 
              previous={{
                title: "Configurar VS Code",
                href: "/tutoriales/vscode-setup"
              }}
              next={{
                title: "Issues y Pull Requests",
                href: "/tutoriales/issues-y-prs"
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