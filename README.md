# 🌍 Countries Explorer App

Aplicación web moderna desarrollada con React + Vite que consume la API de Rest Countries para mostrar información detallada de países europeos con sistema de paginación y gestión de estado global.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite)
![Zustand](https://img.shields.io/badge/Zustand-4.5-000000?style=flat)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap)

---

## 📋 Descripción

Countries Explorer es una SPA (Single Page Application) que permite explorar información de países europeos incluyendo:

- 🏴 Banderas oficiales
- 🏛️ Capitales
- 🌎 Regiones
- 👥 Población
- 📄 Sistema de paginación inteligente
- 📧 Formulario de contacto con validación

---

## 🚀 Demo en Vivo

- **Deploy:** [Tu link de Vercel/Netlify aquí]
- **Repositorio:** [Tu link de GitHub aquí]
- **Video Demo:** [Tu link de YouTube aquí]

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.3.1 | Librería principal para UI |
| **Vite** | 5.0.8 | Build tool y dev server |
| **Zustand** | 4.5.0 | Estado global (store) |
| **React Router** | 6.22.0 | Enrutamiento SPA |
| **Bootstrap** | 5.3.2 | Framework CSS |
| **Rest Countries API** | v3.1 | API de datos de países |

---

## 📦 Instalación

### Prerrequisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/countries-explorer.git
cd countries-explorer

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Card.jsx           # Tarjeta individual de país
│   ├── CardList.jsx       # Grid de tarjetas
│   ├── Header.jsx         # Navbar con navegación
│   └── Footer.jsx         # Pie de página
├── layouts/
│   └── RootLayout.jsx     # Layout principal con Outlet
├── pages/
│   ├── Home.jsx           # Página principal (6 países)
│   ├── Entities.jsx       # Listado completo con paginación
│   └── Contact.jsx        # Formulario de contacto
├── store/
│   └── store.js           # Zustand store global
├── App.jsx                # Configuración de rutas
├── main.jsx               # Entry point
└── index.css              # Estilos globales
```

---

## 🎯 Funcionalidades

### 🏠 Página Home (`/`)
- Hero section con título y descripción
- Muestra 6 países destacados
- Cards con banderas e información básica
- Datos consumidos desde Zustand store

### 📋 Página Entities (`/entities`)
- Listado completo de países europeos (~50)
- Sistema de paginación (12 países por página)
- Botones Previous/Next con estado disabled
- Indicador visual de página actual
- Estado de loading mientras carga datos

### 📧 Página Contact (`/contact`)
- Formulario con validación HTML5:
  - Nombre (required)
  - Email (required, type email)
  - Mensaje (textarea, required)
- Mensaje de éxito al enviar
- Reset automático del formulario

---

## 🔌 API Utilizada

**Endpoint:** `https://restcountries.com/v3.1/region/europe`

**Estructura de respuesta:**
```json
[
  {
    "name": {
      "common": "Spain"
    },
    "capital": ["Madrid"],
    "region": "Europe",
    "population": 47351567,
    "flags": {
      "png": "https://flagcdn.com/w320/es.png"
    }
  }
]
```

**Campos utilizados:**
- `name.common` - Nombre del país
- `capital[0]` - Capital principal
- `region` - Región geográfica
- `population` - Población total
- `flags.png` - URL de la bandera

---

## 🧩 Estado Global con Zustand

```javascript
// store/store.js
export const useStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));
```

**Usado en:**
- `Home.jsx` - Para mostrar 6 países iniciales
- `Entities.jsx` - Para paginar todos los países

---

## 🎨 Estilos y Diseño

- **Framework:** Bootstrap 5.3
- **Sistema de Grid:** `row-cols-1 row-cols-md-3`
- **Componentes:** Cards, Navbar, Buttons, Forms
- **Responsive:** Mobile-first design
- **Altura de imágenes:** Fixed 200px con `object-fit: cover`

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor en http://localhost:5173

# Producción
npm run build        # Genera build optimizado en /dist
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecuta ESLint
```

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Deploy a producción
vercel --prod
```

### Netlify

```bash
# 1. Build del proyecto
npm run build

# 2. Deploy carpeta dist/
# Drag & drop en netlify.com
```

---

## 🎥 Video Demostración

**Duración:** 2 minutos máximo

**Contenido sugerido:**
1. Navegación entre páginas (0:20)
2. Home con 6 países (0:30)
3. Paginación en Entities (0:40)
4. Formulario de contacto (0:30)

**Subir a:** YouTube (sin listar)

---

## ✅ Checklist de Entrega

- [x] Repositorio GitHub público
- [x] README.md completo
- [x] 3 páginas funcionales (Home, Entities, Contact)
- [x] Zustand implementado en mínimo 2 páginas
- [x] React Router con layouts
- [x] Bootstrap para estilos
- [x] Consumo de API externa
- [x] Paginación funcional
- [x] Formulario con validación
- [x] Deploy funcional
- [x] Video demostración

---

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@example.com

---

## 📄 Licencia

Este proyecto fue desarrollado como examen final para el curso de React.

MIT License - 2025

---

## 🙏 Agradecimientos

- [Rest Countries API](https://restcountries.com/) - Datos de países
- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [Zustand](https://github.com/pmndrs/zustand) - Estado global
- [Vite](https://vitejs.dev/) - Build tool