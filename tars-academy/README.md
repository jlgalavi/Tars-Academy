# 🌍 TARS Academy

> **Academia interna de software para TARS Robotics - European Rover Challenge (ERC) 2025**

La **TARS Academy** es una plataforma educativa interna que proporciona tutoriales básicos y prácticos para que cualquier miembro del equip TARS Robotics pueda comenzar rápidamente a trabajar en el proyecto ERC.

## 🚀 Características

- ✅ **Tutoriales paso a paso**: Git/GitHub, Terminal, ROS 2, Ubuntu, VS Code
- ✅ **Mejores prácticas**: Guías de estilo y estándares de código para el equipo
- ✅ **Organización**: Gestión de Google Drive y flujos de trabajo colaborativos
- ✅ **Responsive**: Optimizado para desktop y móvil
- ✅ **Estático**: Sin base de datos, máximo rendimiento

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS 4
- **Markdown**: MDX para contenido
- **Deploy**: Vercel (optimizado)

## 🏃‍♂️ Desarrollo Local

```bash
# Instalar dependencias
npm ci

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Deploy en Vercel

### ✅ Estado: LISTO PARA DEPLOY

El proyecto está completamente preparado para deployment. Ver guías detalladas:

- 📚 **[DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md)** - Guía completa paso a paso
- 🔐 **[VERCEL_ENV_VARS.md](./VERCEL_ENV_VARS.md)** - Variables de entorno necesarias
- 🔒 **[AUTH_STATUS.md](./AUTH_STATUS.md)** - Estado de autenticación (no requerida)

### Resumen rápido:
1. **Importar repo** en Vercel
2. **Configurar variables** (mínimas, ver VERCEL_ENV_VARS.md)
3. **Deploy automático** - listo para usar

## 🏗️ Arquitectura

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── tutoriales/        # Páginas de tutoriales
├── components/            # Componentes React
│   ├── cards.tsx         # Tarjetas de tutoriales
│   ├── hero.tsx          # Sección hero
│   └── tutorial/         # Componentes específicos de tutoriales
└── _data/                # Datos de configuración
```

## 📋 Scripts Disponibles

```bash
npm run dev      # Desarrollo con Turbopack
npm run build    # Build optimizado para producción
npm start        # Servidor de producción
npm run lint     # ESLint + validación TypeScript
```

## 🧪 CI/CD

GitHub Actions configurado para:
- ✅ **Build validation** en Node 18 y 20
- ✅ **Linting** automático  
- ✅ **Security audit** 
- ✅ **Lighthouse performance** check

## 👥 Equipo TARS Robotics

**Desarrollado por**: José Luis Galán Avilés  
**Rol**: Coordinador de Software  
**Universidad**: Universitat Politècnica de València (UPV)  
**Competición**: European Rover Challenge 2025

## 🤝 Contribuir

1. Fork el repositorio
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

© 2025 TARS Academy - Universitat Politècnica de València

---

**🚀 ¡Listo para llevar el rover TARS a la victoria en ERC 2025!**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
