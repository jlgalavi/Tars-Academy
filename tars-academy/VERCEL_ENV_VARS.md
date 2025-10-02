# 📋 Variables de Entorno para Vercel

## ✅ Variables Confirmadas Necesarias

### 📊 Variables Obligatorias:
- `NEXT_TELEMETRY_DISABLED=1` - Deshabilita telemetría de Next.js
- `NODE_ENV=production` - Define el entorno de producción

### 🌐 Variables de URL (opcionales):
- `NEXT_PUBLIC_BASE_URL` - URL base de la aplicación

## 📝 Configuración en Vercel

### Variables de Entorno a Añadir:

1. **Production & Preview & Development:**
   ```
   NEXT_TELEMETRY_DISABLED=1
   NODE_ENV=production
   ```

2. **Solo Production:**
   ```
   NEXT_PUBLIC_BASE_URL=https://tu-dominio-final.com
   ```

3. **Solo Preview:**
   ```
   NEXT_PUBLIC_BASE_URL=https://tu-proyecto.vercel.app
   ```

## 🎯 Resumen

Esta es una aplicación **estática sin autenticación ni base de datos**, por lo que:

- ✅ **NO necesita** Supabase
- ✅ **NO necesita** NextAuth
- ✅ **NO necesita** variables de API keys
- ✅ **Mínimas variables** requeridas

El proyecto está listo para despliegue con configuración mínima.