# 🚀 TARS Academy - Guía de Deploy en Vercel

## ✅ Checklist Pre-Deploy (COMPLETADO)

### 🔧 Preparativos del Repositorio
- [x] ✅ **package-lock.json** presente en el repo
- [x] ✅ **Versión de Node fijada** en package.json (`engines: { node: ">=18" }`)
- [x] ✅ **Build local exitoso** (`npm ci && npm run build`)

### 🔐 Variables de Entorno
- [x] ✅ **Variables mínimas identificadas** (ver `VERCEL_ENV_VARS.md`)
- [x] ✅ **No requiere autenticación** (aplicación estática)
- [x] ✅ **Variables documentadas** para copy-paste en Vercel

### ⚙️ Configuración Next.js
- [x] ✅ **next.config.ts optimizado** para Vercel
- [x] ✅ **Headers de seguridad** configurados
- [x] ✅ **Optimización de imágenes** habilitada

### 🔄 CI/CD
- [x] ✅ **GitHub Actions** configurado para validación automática

---

## 🎯 PASOS PARA DEPLOY EN VERCEL

### 1. 📱 Crear Cuenta en Vercel
1. Ir a [vercel.com](https://vercel.com)
2. Conectar con GitHub
3. Autorizar acceso al repositorio `Tars-Academy`

### 2. 📦 Importar Proyecto
1. En Vercel Dashboard: **"Add New Project"**
2. Seleccionar: **`jlgalavi/Tars-Academy`**
3. **Configurar proyecto:**
   - **Framework Preset:** Next.js (auto-detectado)
   - **Root Directory:** `tars-academy/`
   - **Build Command:** `npm run build` (auto-detectado)
   - **Output Directory:** `.next` (auto-detectado)

### 3. 🔐 Configurar Variables de Entorno
En **Project Settings → Environment Variables**, añadir:

#### Para todos los entornos (Production, Preview, Development):
```
NEXT_TELEMETRY_DISABLED=1
```

#### Solo para Production:
```
NEXT_PUBLIC_BASE_URL=https://tu-dominio-final.com
NODE_ENV=production
```

#### Solo para Preview:
```
NEXT_PUBLIC_BASE_URL=https://tars-academy-jlgalavi.vercel.app
```

### 4. ⚙️ Build & Development Settings
- **Node.js Version:** `18.x` (o superior)
- **Build Command:** `npm run build` 
- **Output Directory:** `.next`
- **Install Command:** `npm ci`

### 5. 🚀 Primer Deploy
1. Hacer **"Deploy"**
2. Esperar a que termine el build (1-3 minutos)
3. Verificar **Preview URL** generada

---

## 🧪 VALIDACIÓN POST-DEPLOY

### ✅ Checklist de Validación:

#### 🌐 Funcionalidad Básica:
- [ ] Página principal carga correctamente
- [ ] Navegación entre tutoriales funciona
- [ ] Imágenes se cargan (perfil de José Luis)
- [ ] CSS/styling aplicado correctamente
- [ ] Componentes interactivos (TOC, breadcrumbs)

#### 📱 Rendimiento:
- [ ] Carga rápida (< 3 segundos)
- [ ] Responsive design en móvil
- [ ] Lighthouse score > 90

#### 🔒 Seguridad:
- [ ] Headers de seguridad presentes
- [ ] HTTPS funcionando
- [ ] No errores en consola del navegador

### 🛠️ Troubleshooting Común:

#### ❌ Error: "Build Failed"
```bash
# Verificar localmente:
npm ci && npm run build

# Si falla, revisar:
- Versión de Node (>=18)
- Dependencias actualizadas
- Errores de TypeScript
```

#### ❌ Error: "Module not found"
```bash
# Verificar imports:
- Rutas relativas correctas
- Case sensitivity en nombres de archivo
- Extensiones de archivo (.tsx, .ts)
```

#### ❌ Imágenes no cargan:
```bash
# Verificar:
- Imágenes en public/ folder
- Rutas empiezan con /
- Nombres exactos (case sensitive)
```

---

## 🌍 PRODUCCIÓN Y DOMINIO

### 1. 🎯 Promover a Producción:
- En Vercel Dashboard → Deployments
- Seleccionar deploy exitoso
- **"Promote to Production"**

### 2. 🔗 Configurar Dominio Personalizado:
1. **Settings → Domains**
2. **"Add Domain"**
3. Configurar DNS según instrucciones de Vercel
4. Verificar SSL automático

### 3. 📊 Monitoreo:
- **Analytics:** Activar Vercel Analytics
- **Performance:** Revisar Lighthouse scores
- **Errors:** Monitorear Function Logs

---

## 🎉 ¡LISTO PARA DEPLOY!

### 📋 Resumen Estado:
- ✅ **Código:** Preparado y validado
- ✅ **Build:** Funciona localmente 
- ✅ **Configuración:** Optimizada para Vercel
- ✅ **Variables:** Documentadas y listas
- ✅ **CI/CD:** Workflow configurado

### 🚀 Próximos Pasos:
1. **Commit y push** todos los cambios
2. **Importar en Vercel** siguiendo los pasos de arriba
3. **Configurar variables** de entorno
4. **Deploy y validar** funcionamiento
5. **Configurar dominio** personalizado

**¡La TARS Academy está lista para volar! 🛸**