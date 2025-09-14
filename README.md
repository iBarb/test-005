# 📊 PRUEBA_TECNICA

Este proyecto es una aplicación desarrollada con **React + TypeScript + Vite**, diseñada para realizar cotizaciones y operaciones de tipo de cambio.  

## 🚀 Instalación y ejecución

npm install

npm run dev

## 📝 Variables de entorno
```
VITE_APIKEY
VITE_AUTHDOMAIN
VITE_PROJECTID
VITE_STORAGEBUCKET
VITE_MESSAGINGSENDERID
VITE_APPID
```

## 📝 Estructura de directorios
```
src/
 ┣ api/               # Llamadas a APIs externas
 ┃ ┗ ratesApi.ts
 ┣ app/               # Configuración de store y hooks globales
 ┃ ┣ hooks.ts
 ┃ ┗ store.ts
 ┣ components/        # Componentes reutilizables
 ┃ ┗ Cotizador/
 ┃    ┣ Cotizador.tsx
 ┃    ┗ CurrencyInput.tsx
 ┣ features/          # Estado y lógica
 ┃ ┗ rates/
 ┃    ┣ ratesSlice.ts
 ┃    ┣ types.ts
 ┃    ┗ useRates.ts
 ┣ pages/             # Páginas principales
 ┃ ┗ Exchange.tsx
 ┣ services/          # Servicios de negocio
 ┃ ┗ ratesService.ts
 ┣ utils/             # Utilidades y helpers
 ┃ ┗ formatCurrency.ts
 ┣ App.tsx            # Componente raíz
 ┣ main.tsx           # Punto de entrada
 ┣ firebaseConfig.ts  # Configuración de Firebase
 ```

## 📝 Tecnologías

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Firebase** 
