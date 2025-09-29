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
  { id: 'pasos', title: '🛠️ Flujo de trabajo guiado', level: 2 },
  { id: 'paso-1', title: '1. Clonar repositorio', level: 3 },
  { id: 'paso-2', title: '2. Crear rama de trabajo', level: 3 },
  { id: 'paso-3', title: '3. Realizar cambios', level: 3 },
  { id: 'paso-4', title: '4. Commit y descripción', level: 3 },
  { id: 'paso-5', title: '5. Push a GitHub', level: 3 },
  { id: 'paso-6', title: '6. Crear Pull Request', level: 3 },
  { id: 'paso-7', title: '7. Revisión y merge', level: 3 },
  { id: 'validacion', title: '🧪 Validación final', level: 2 },
  { id: 'problemas', title: '🚑 Problemas frecuentes', level: 2 },
  { id: 'recursos', title: '🔗 Recursos', level: 2 },
  { id: 'siguientes', title: '➡️ Siguientes pasos', level: 2 },
];

export default function GitHubPrimeraPR() {
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
                  { label: 'Primera Pull Request con GitHub Desktop' }
                ]}
              />
              
              <h1 className="text-4xl font-bold text-slate-100 mb-4">
                Tu primera Pull Request (GitHub Desktop paso a paso)
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                Aprende el flujo completo para contribuir a proyectos de la academia: desde clonar un repo hasta hacer merge de tu primera PR.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <TutorialChip label="Introducción" variant="level" icon="📚" />
                <TutorialChip label="25 min" variant="time" icon="⏱️" />
                <TutorialChip label="Actualizado 09/2025" variant="updated" icon="🔄" />
                <TutorialChip label="GitHub Desktop 3.3+" variant="status" icon="💻" />
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
                  Al finalizar este tutorial, habrás creado y mergeado tu primera Pull Request en un repositorio 
                  de la academia. Conocerás el flujo completo de colaboración que usarás en todos los proyectos 
                  de robótica: clonar, crear ramas, hacer cambios, commit, push y PR.
                </p>
              </section>

              <section id="contexto">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🧭 Contexto
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Este es el paso <strong>1/3 del onboarding técnico</strong> de Tars Academy 
                  (<strong>Git/GitHub</strong> → Ubuntu → ROS). Este flujo de trabajo lo usarás para 
                  contribuir código a proyectos de robots, documentación, y cualquier colaboración en equipo.
                </p>
                <Callout type="info">
                  Una Pull Request (PR) es la forma estándar de proponer cambios en proyectos colaborativos. 
                  Permite revisar código antes de integrarlo al proyecto principal.
                </Callout>
              </section>

              <section id="requisitos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  ✅ Requisitos previos
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Cuenta de GitHub</strong> creada y verificada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>GitHub Desktop instalado</strong> y conectado a tu cuenta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Editor de texto</strong> (VS Code recomendado)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Acceso al repositorio</strong> tars-academy/practica-pr (se te dará acceso)</span>
                  </li>
                </ul>
              </section>

              <section id="pasos">
                <h2 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                  🛠️ Flujo de trabajo guiado
                </h2>

                <div className="space-y-8">
                  <div id="paso-1" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Clonar el repositorio de práctica
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Comenzaremos clonando el repositorio donde harás tu primera contribución práctica.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Pasos en GitHub Desktop:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Abre GitHub Desktop</li>
                        <li>Haz clic en "File" → "Clone repository"</li>
                        <li>En la pestaña "URL", pega: <code className="bg-slate-700 px-2 py-1 rounded">https://github.com/tars-academy/practica-pr</code></li>
                        <li>Elige dónde guardar el proyecto localmente</li>
                        <li>Haz clic en "Clone"</li>
                      </ol>
                    </div>

                    <Callout type="check">
                      <strong>Cómo verificar:</strong> GitHub Desktop muestra el repositorio clonado y puedes 
                      ver la carpeta del proyecto en tu explorador de archivos.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 2-3 minutos</p>
                  </div>

                  <div id="paso-2" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Crear una rama de trabajo
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Nunca trabajes directamente en la rama principal (main). Siempre crea una rama nueva para tus cambios.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Crear rama nueva:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>En GitHub Desktop, haz clic en "Current branch" (arriba)</li>
                        <li>Haz clic en "New branch"</li>
                        <li>Nombre sugerido: <code className="bg-slate-700 px-2 py-1 rounded">feature/mi-primera-contribucion</code></li>
                        <li>Asegúrate de que se base en "main"</li>
                        <li>Haz clic en "Create branch"</li>
                      </ol>
                    </div>

                    <Callout type="tip">
                      <strong>Convención de nombres:</strong> Usa prefijos como feature/, bugfix/, docs/ 
                      seguido de una descripción corta con guiones.
                    </Callout>

                    <Callout type="check">
                      <strong>Cómo verificar:</strong> En la parte superior de GitHub Desktop aparece el nombre 
                      de tu nueva rama en lugar de "main".
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 1-2 minutos</p>
                  </div>

                  <div id="paso-3" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Realizar cambios en el código
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Ahora harás un cambio sencillo: añadir tu información al archivo de contribuidores.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Cambio a realizar:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Abre la carpeta del proyecto en tu editor (VS Code)</li>
                        <li>Encuentra el archivo <code className="bg-slate-700 px-1 rounded">CONTRIBUTORS.md</code></li>
                        <li>Añade una línea nueva al final con tu información:</li>
                      </ol>
                      <div className="mt-3 bg-slate-900 p-3 rounded border-l-4 border-space-500">
                        <pre className="text-xs text-slate-300">
{`- **Tu Nombre** - [@tu-usuario-github](https://github.com/tu-usuario) 
  - Rol: Estudiante de robótica
  - Interés: [ROS2, Navegación, Manipulación, etc.]
  - Primera contribución: [Fecha de hoy]`}
                        </pre>
                      </div>
                    </div>

                    <Callout type="info">
                      Este es un cambio sencillo y seguro para tu primera PR. En proyectos reales, 
                      harías cambios más complejos como añadir funciones, corregir bugs, o actualizar documentación.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 3-5 minutos</p>
                  </div>

                  <div id="paso-4" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      Hacer commit con descripción clara
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Un commit es una "foto" de tus cambios con una descripción de qué hiciste y por qué.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Crear commit en GitHub Desktop:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>Guarda el archivo en tu editor</li>
                        <li>Ve a GitHub Desktop - verás los cambios en la pestaña "Changes"</li>
                        <li>Revisa que el cambio sea correcto</li>
                        <li>En "Summary", escribe: <code className="bg-slate-700 px-2 py-1 rounded">Add mi-nombre to contributors list</code></li>
                        <li>En "Description" (opcional): <code className="bg-slate-700 px-2 py-1 rounded">Primera contribución como parte del onboarding</code></li>
                        <li>Haz clic en "Commit to feature/mi-primera-contribucion"</li>
                      </ol>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4 mb-4 border-l-4 border-energy-500">
                      <p className="text-sm text-slate-400 mb-2">✍️ Buenas prácticas para mensajes de commit:</p>
                      <div className="space-y-1 text-slate-300 text-sm">
                        <div><strong>Formato:</strong> Verbo en presente + qué cambió</div>
                        <div><strong>Ejemplos buenos:</strong> "Add navigation module", "Fix sensor timeout bug", "Update README with setup instructions"</div>
                        <div><strong>Evita:</strong> "Changes", "Updates", "Fixed stuff", "WIP"</div>
                      </div>
                    </div>

                    <Callout type="check">
                      <strong>Cómo verificar:</strong> En GitHub Desktop, la pestaña "History" muestra tu commit 
                      con el mensaje que escribiste.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 2-3 minutos</p>
                  </div>

                  <div id="paso-5" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      Push a GitHub (subir cambios)
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Ahora subirás tu rama con los cambios a GitHub para que otros puedan verla y revisarla.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Subir rama a GitHub:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>En GitHub Desktop, haz clic en "Publish branch" (si es la primera vez)</li>
                        <li>O "Push origin" si ya existe la rama en GitHub</li>
                        <li>GitHub Desktop subirá tus cambios automáticamente</li>
                      </ol>
                    </div>

                    <Callout type="check">
                      <strong>Cómo verificar:</strong> Ve a GitHub en tu navegador (github.com/tars-academy/practica-pr) 
                      y verás tu rama en la lista de branches.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 1-2 minutos</p>
                  </div>

                  <div id="paso-6" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                      Crear Pull Request
                    </h3>
                    <p className="text-slate-300 mb-4">
                      Una Pull Request es tu propuesta formal para integrar tus cambios al proyecto principal.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Crear PR desde GitHub Desktop:</p>
                      <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                        <li>En GitHub Desktop, haz clic en "Create Pull Request"</li>
                        <li>Te llevará a GitHub en el navegador</li>
                        <li>Completa la información de la PR:</li>
                        <li className="ml-4">• <strong>Título:</strong> "Add [tu-nombre] to contributors list"</li>
                        <li className="ml-4">• <strong>Descripción:</strong> Explica qué haces y por qué</li>
                        <li>Haz clic en "Create Pull Request"</li>
                      </ol>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4 mb-4 border-l-4 border-energy-500">
                      <p className="text-sm text-slate-400 mb-2">📝 Plantilla de descripción de PR:</p>
                      <pre className="text-xs text-slate-300 whitespace-pre-wrap">
{`## ¿Qué cambios incluye esta PR?
- Añado mi información personal al archivo CONTRIBUTORS.md

## ¿Por qué es necesario este cambio?
- Parte del proceso de onboarding de la academia
- Permite conocer a los nuevos miembros del equipo

## ¿Cómo se puede probar?
- Verificar que la información añadida sigue el formato correcto
- Comprobar que no se rompió el formato del archivo

## Checklist:
- [x] El cambio sigue las convenciones del proyecto
- [x] He probado el cambio localmente
- [x] La descripción explica claramente qué se cambió`}
                      </pre>
                    </div>

                    <Callout type="tip">
                      Una buena descripción de PR ayuda a los revisores a entender rápidamente 
                      qué cambiaste y por qué. ¡Será muy útil en PRs más complejas!
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: 5-7 minutos</p>
                  </div>

                  <div id="paso-7" className="card">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                      <span className="bg-space-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">7</span>
                      Revisión y merge de la PR
                    </h3>
                    <p className="text-slate-300 mb-4">
                      El último paso es esperar la revisión y, si todo está bien, hacer merge de tu PR.
                    </p>
                    
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-400 mb-2">Proceso de revisión:</p>
                      <div className="space-y-2 text-slate-300 text-sm">
                        <div><strong>1. Revisión automática:</strong> GitHub ejecuta checks automáticos (si están configurados)</div>
                        <div><strong>2. Revisión humana:</strong> Un maintainer o compañero revisa tu código</div>
                        <div><strong>3. Posibles resultados:</strong></div>
                        <div className="ml-4 space-y-1">
                          <div>• ✅ <span className="text-green-400">Aprobada:</span> Lista para hacer merge</div>
                          <div>• 💬 <span className="text-yellow-400">Comentarios:</span> Sugerencias de mejora</div>
                          <div>• ❌ <span className="text-red-400">Cambios solicitados:</span> Necesitas hacer modificaciones</div>
                        </div>
                        <div><strong>4. Merge:</strong> Si está aprobada, se integra al proyecto principal</div>
                      </div>
                    </div>

                    <Callout type="info">
                      Como estudiante, es normal recibir comentarios en tus primeras PRs. 
                      ¡Es parte del proceso de aprendizaje y mejora continua!
                    </Callout>

                    <Callout type="check">
                      <strong>Cómo verificar:</strong> Una vez merged, tu cambio aparece en la rama main del proyecto 
                      y tu rama de trabajo puede ser eliminada.
                    </Callout>
                    <p className="text-xs text-slate-400 mt-2">⏱️ Tiempo estimado: Variable (depende de la disponibilidad de revisores)</p>
                  </div>
                </div>
              </section>

              <section id="validacion">
                <h2 className="text-2xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  🧪 Validación final
                </h2>
                <div className="card">
                  <p className="text-slate-300 mb-4">
                    Confirma que has completado exitosamente tu primera Pull Request:
                  </p>
                  <div className="space-y-3">
                    {[
                      'Has clonado el repositorio de práctica con GitHub Desktop',
                      'Creaste una rama de trabajo con un nombre descriptivo',
                      'Modificaste el archivo CONTRIBUTORS.md con tu información',
                      'Hiciste commit con un mensaje claro y descriptivo',
                      'Subiste tu rama a GitHub (push)',
                      'Creaste una Pull Request con título y descripción apropiados',
                      'Tu PR fue revisada y eventualmente merged al proyecto principal'
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
                      problema: "GitHub Desktop no puede clonar - error de permisos",
                      causa: "No tienes acceso al repositorio o problemas de autenticación",
                      solucion: "Verifica que tengas acceso al repo. En GitHub Desktop: File → Options → Accounts, y re-autentica tu cuenta de GitHub."
                    },
                    {
                      problema: "No puedo hacer push - rejected o behind",
                      causa: "Alguien más hizo cambios en main mientras trabajabas",
                      solucion: "Haz pull de los cambios principales primero: Repository → Pull (en main), luego cambia a tu rama y haz push de nuevo."
                    },
                    {
                      problema: "Mi PR tiene conflictos",
                      causa: "Dos personas modificaron las mismas líneas de código",
                      solucion: "GitHub te ayudará a resolver conflictos. En casos simples, edita el archivo para mantener ambos cambios. Practica esto en el siguiente tutorial."
                    },
                    {
                      problema: "Accidentalmente hice commit en main",
                      causa: "No creaste una rama de trabajo antes de hacer cambios",
                      solucion: "En GitHub Desktop: Branch → Create branch from current commit. Esto mueve tu commit a una nueva rama y restaura main al estado anterior."
                    },
                    {
                      problema: "Mi mensaje de commit no es descriptivo",
                      causa: "Falta de práctica escribiendo mensajes claros",
                      solucion: "Puedes editar el último commit: Repository → Amend last commit. Para el futuro, sigue el formato: verbo + qué cambiaste."
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
                    <h4 className="font-semibold text-slate-200 mb-2">Documentación oficial</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <a href="https://docs.github.com/en/desktop" className="text-space-400 hover:text-space-300">GitHub Desktop Docs</a></li>
                      <li>• <a href="https://docs.github.com/en/pull-requests" className="text-space-400 hover:text-space-300">About Pull Requests</a></li>
                      <li>• <a href="https://docs.github.com/en/get-started/quickstart/github-flow" className="text-space-400 hover:text-space-300">GitHub Flow</a></li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Tutoriales relacionados</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <a href="/tutoriales/git-avanzado" className="text-space-400 hover:text-space-300">Git avanzado - merge conflicts</a></li>
                      <li>• <a href="/tutoriales/code-review" className="text-space-400 hover:text-space-300">Cómo hacer code review</a></li>
                      <li>• <a href="/tutoriales/github-actions" className="text-space-400 hover:text-space-300">Automatización con GitHub Actions</a></li>
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
                      Has completado el paso 1/3. Ahora instala Ubuntu para tener un entorno de desarrollo completo.
                    </p>
                    <a href="/tutoriales/instalar-ubuntu-vm" className="btn-primary inline-block">
                      Instalar Ubuntu →
                    </a>
                  </div>
                  <div className="card">
                    <h4 className="font-semibold text-slate-200 mb-2">Profundiza en Git</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• <a href="/tutoriales/git-comandos-avanzados" className="text-space-400 hover:text-space-300">Comandos avanzados de Git</a></li>
                      <li>• <a href="/tutoriales/resolver-conflictos" className="text-space-400 hover:text-space-300">Resolver merge conflicts</a></li>
                      <li>• <a href="/tutoriales/git-workflow-equipo" className="text-space-400 hover:text-space-300">Workflows en equipo</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="border-t border-slate-700 pt-6">
                <h2 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  🤝 ¿Mejorar este tutorial?
                </h2>
                <p className="text-slate-300 text-sm">
                  Si encontraste algún paso confuso o tienes sugerencias para mejorar el proceso, 
                  <a href="https://github.com/tars-academy/tutoriales/issues" className="text-space-400 hover:text-space-300 ml-1">abre un issue</a> 
                  o mejor aún, ¡haz una Pull Request con tus mejoras! 😉💙
                </p>
              </section>
            </div>

            {/* Navegación */}
            <TutorialNavigation 
              next={{
                title: "Instalar Ubuntu en VM",
                href: "/tutoriales/instalar-ubuntu-vm"
              }}
            />
          </div>

          {/* Sidebar con TOC */}
          <div className="hidden lg:block w-80">
            <TableOfContents items={tocItems} />
          </div>
        </div>


      </div>
    </div>
  );
}