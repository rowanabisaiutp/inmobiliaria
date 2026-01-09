# Terreno 4 Hectáreas - Landing Page

Landing page para promoción de terreno de 4 hectáreas en Yucatán, México.

## Despliegue en Fly.io

1. Instalar Fly CLI: https://fly.io/docs/getting-started/installing-flyctl/

2. Login en Fly.io:

```bash
fly auth login
```

3. Crear la aplicación (solo la primera vez):

```bash
fly launch
```

4. Desplegar:

```bash
fly deploy
```

5. Ver logs:

```bash
fly logs
```

6. Abrir en el navegador:

```bash
fly open
```

## Estructura del Proyecto

```
.
├── index.html          # Página principal
├── css/                # Estilos
│   └── style.css
├── js/                 # JavaScript
│   ├── features.js
│   └── main.js
├── data/               # Datos y configuración
│   ├── contact_section.js
│   ├── details_section.js
│   ├── data_renders.js
│   └── schema.js
├── Dockerfile          # Configuración Docker
├── nginx.conf          # Configuración Nginx
└── fly.toml            # Configuración Fly.io
```
