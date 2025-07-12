# Workflow Platform

## Configuración local
1. Copia `.env.local.example` a `.env.local` y agrega tus variables de entorno de Firebase.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Levanta el entorno de desarrollo:
   ```bash
   npm run dev
   ```
4. Accede a http://localhost:3000 y prueba los flujos de autenticación y dashboard.

## Despliegue en Vercel
### Opción 1: Usando Vercel CLI
1. Instala el CLI de Vercel (si no lo tienes):
   ```bash
   npm install -g vercel
   ```
2. Inicia tu primer despliegue:
   ```bash
   vercel
   ```
   - Selecciona la carpeta raíz del proyecto.
   - Confirma tu cuenta y nombre de proyecto.
3. Para producción:
   ```bash
   vercel --prod
   ```
4. Copia la URL que retorna Vercel (`https://<tu-proyecto>.vercel.app`) y pruébala.

### Opción 2: Integración con GitHub
1. Empuja tu código a GitHub.
2. Vincula tu repo en Vercel desde el dashboard.
3. Configura en Vercel las mismas variables de entorno que en `.env.local`.
4. Cada push a `main` generará un nuevo despliegue.

---

## Enlaces útiles
- **Firebase Console → Configuración de proyecto → General → Tus apps** para obtener el SDK config.
- **Firestore**: colecciones `users` y `tasks`.
