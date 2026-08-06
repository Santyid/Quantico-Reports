# SocialGest — Guía del Sistema de Diseño

> Documento de referencia visual y funcional del sistema de diseño de **SocialGest**.
> Todos los tokens usan el prefijo `$sg-` (`src/styles/_tokens.scss`). Ver también [socialgest-design-tokens.json](socialgest-design-tokens.json) para los tokens puros en formato estructurado.
> Color distintivo: **naranja `#f47a37`** como secundario — diferencia a SocialGest de Quantico (púrpura) y AdvocatesPro (rosa).

---

## 1. Principios de diseño (Gestalt)

Todo componente y layout de SocialGest debe seguir estos principios:

| Principio | Aplicación en SocialGest |
|-----------|---------------------------|
| **Proximidad** | Gap 12–16px dentro de un grupo de campos (ej. spinners de hora); 24–32px entre grupos (ej. secciones de un modal) |
| **Similitud** | Todos los botones secundarios usan naranja `$sg-secondary-500`; todos los estados activos (toggle, checkbox, radio, tabs, menú) también usan naranja — refuerza que son "la misma familia de acción" |
| **Continuidad** | Selects, inputs y botones alineados a una altura común por tamaño (36 / 40 / 48px) para que los formularios se lean como una fila continua |
| **Cierre** | Cards con `border-radius: 16px` y borde `$sg-grey-50` encierran contenido relacionado (KPIs, tablas, paneles de IA) |
| **Figura-fondo** | Botones y elementos interactivos sobre fondo blanco con sombra o borde; fondos de página en `$sg-neutral-100` para contraste |
| **Región común** | Modales especiales usan círculos decorativos y paneles internos (`$sg-special-modal-body-bg`) para agrupar visualmente hero + features |

---

## 2. Paleta de colores

### 2.1 Primary (azul) — igual que Quantico/AdvocatesPro

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-primary-50` | `#e6efff` | Fondos muy claros |
| `$sg-primary-100` | `#b0ceff` | Fondos hover |
| `$sg-primary-200` | `#8ab6ff` | Accent suave |
| `$sg-primary-300` | `#5495fe` | Gradientes, accent medio |
| `$sg-primary-400` | `#3381fe` | Accent fuerte |
| **`$sg-primary-500`** | **`#0061fe`** | **Base** — botones, links, focus |
| `$sg-primary-600` | `#0058e7` | Hover |
| `$sg-primary-700` | `#0045b4` | Active/pressed |
| `$sg-primary-800` | `#00358c` | Accent oscuro |
| `$sg-primary-900` | `#00296b` | Tinta más oscura |

### 2.2 Secondary (naranja) — distintivo de SocialGest

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-secondary-50` | `#fef2eb` | Fondos seleccionados, chips |
| `$sg-secondary-100` | `#fcd6c1` | Badges claros |
| `$sg-secondary-200` | `#fac2a3` | Disabled |
| `$sg-secondary-300` | `#f8a679` | Gradientes |
| `$sg-secondary-400` | `#f6955f` | Accent fuerte |
| **`$sg-secondary-500`** | **`#f47a37`** | **Base** — acciones secundarias, toggles/checkbox/radio activos |
| `$sg-secondary-600` | `#e5641e` | Hover |
| `$sg-secondary-700` | `#c84802` | Active/pressed |
| `$sg-secondary-800` | `#b84100` | Accent oscuro |
| `$sg-secondary-900` | `#9c3700` | Tinta más oscura |

### 2.3 Grises

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-grey-50` | `#ececec` | Bordes, divisores |
| `$sg-grey-100` | `#c3c3c3` | Bordes de inputs |
| `$sg-grey-200` | `#a6a6a6` | Placeholder, iconos |
| `$sg-grey-300` | `#7d7d7d` | Texto secundario |
| `$sg-grey-400` | `#646464` | Labels |
| `$sg-grey-500` | `#3d3d3d` | Texto body |
| `$sg-grey-800` | `#222222` | Headings, texto primario |
| `$sg-grey-900` | `#1a1a1a` | Texto casi negro |

### 2.4 Semánticos (success / warning / error) — idénticos en todo el repo

| Estado | Base | Fondo claro (50) |
|--------|------|-------------------|
| Success | `$sg-success-400` `#3ace76` | `$sg-success-50` `#ebfaf1` |
| Warning | `$sg-warning-400` `#ff962c` | `$sg-warning-50` `#fff5ea` |
| Error | `$sg-error-400` `#fc3e3e` | `$sg-error-50` `#ffecec` |

### 2.5 Neutral / White / Black / AI

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-neutral-50` | `#fafafa` | Fondos sutiles, hover de tabla |
| `$sg-neutral-100` | `#f5f7fa` | Fondos claros |
| `$sg-neutral-200` | `#f1f1f1` | Fondos de card/sección, texto sobre botones de color |
| `$sg-white-base` | `#ffffff` | Superficies |
| `$sg-black-base` | `#000000` | Base de sombras (`rgba`) |
| `$sg-ai-500` | `#00aaff` | Borde de botones/elementos de IA |

---

## 3. Escala tipográfica

| Nombre | Familia | Tamaño | Peso | Uso |
|--------|---------|--------|------|-----|
| Heading 1 | Urbanist | 28px | 700 Bold | Títulos principales |
| Heading 2 | Urbanist | 24px | 700 Bold | Títulos de secciones/cards |
| Heading 3 | Urbanist | 22px | 700 Bold | Subtítulos dentro de cards |
| Heading 4 | Urbanist | 20px | 600 SemiBold | Subsecciones |
| Body | DM Sans | 16px | 400 Regular | Texto general, tablas |
| Body Bold | DM Sans | 16px | 700 Bold | Texto enfatizado |
| Small | DM Sans | 14px | 400 Regular | Texto secundario, labels |
| Caption | DM Sans | 12px | 400 Regular | Textos muy pequeños |
| Label | Urbanist | 14px | 600 SemiBold | Labels de formularios |
| Button | Urbanist | 14–18px | 700 Bold | Texto de botones |
| Nav Link | Urbanist | 15px | 600 SemiBold | Navbar |
| Token/Código | Inter | 13px | 500 Medium | Nombres de variables |
| IA Hero Title | Urbanist | 48px | 600 SemiBold, tracking -0.96px | Encabezados hero de IA con gradiente tricolor |

**Reglas**: `Urbanist` para toda UI (botones, labels, títulos, navegación); `DM Sans` para contenido/cuerpo/tablas; nunca mezclar familia dentro del mismo tipo de elemento.

---

## 4. Espaciado

| Nombre | Valor | Uso |
|--------|-------|-----|
| 2xs | 4px | Gaps internos mínimos |
| xs | 8px | Padding de badges, gaps pequeños |
| sm | 12px | Gap entre elementos relacionados (proximidad) |
| md | 16px | Gap estándar dentro de un grupo |
| lg | 24px | Margen bajo títulos, separación entre subsecciones |
| xl | 32px | Padding de cards, separación entre grupos |
| 2xl | 40px | Padding vertical de páginas |
| 3xl | 48px | Separación entre secciones principales |

---

## 5. Radios de borde

| Nombre | Valor | Uso |
|--------|-------|-----|
| sm | 8px | Opciones de dropdown, checkbox |
| md | 10px | Inputs, selects, textarea |
| lg | 12px | Botones, KPI cards, number input, account counter |
| xl | 16px | Cards principales, secciones, panel de IA |
| pill | 50px | Search input, badges, chips |
| circle | 50% | Avatares, dots |
| — | 24px | Modal de código de verificación |
| — | 40px | Modales especiales (bienvenida, plan vencido, lanzamiento) |

---

## 6. Sombras

| Nombre | Valor | Uso |
|--------|-------|-----|
| Card (gradient cards) | `2px 5px 27px 0px rgba(0,0,0,0.05)` | Cards de alerta/insight/señal en Reportes |
| Toast | `0 8px 32px rgba(0,0,0,0.08)` | Notificaciones toast |
| Toggle thumb | `0 1px 3px rgba(0,0,0,0.15)` | Thumb del switch |
| Select dropdown | `0 4px 12px rgba(0,0,0,0.1)` | Menú desplegable de select |
| Select date dropdown | `0 4px 15px rgba(0,0,0,0.12)` | Calendario de selección de fecha |

---

## 7. Breakpoints

| Nombre | Valor |
|--------|-------|
| sm | 576px |
| md | 768px |
| lg | 992px |
| xl | 1200px |
| 2xl | 1400px |
| max | 1920px |

> SocialGest no define breakpoints propios en Figma — reutiliza la convención responsive global del repositorio.

---

## 8. Componentes base y variantes

### 8.1 Botones

| Variante | Fondo | Texto | Hover | Active | Disabled |
|----------|-------|-------|-------|--------|----------|
| Primary | `$sg-primary-500` | `$sg-neutral-200` | `$sg-primary-600` | `$sg-primary-700` | `$sg-primary-200` |
| Secondary (naranja) | `$sg-secondary-500` | `$sg-white-base` | `$sg-secondary-600` | `$sg-secondary-700` | `$sg-secondary-200` |
| White | `$sg-white-base` | `$sg-grey-300` | `$sg-neutral-50` bg | `$sg-neutral-200` bg | texto `$sg-grey-100` |
| Text | transparent | `$sg-primary-500` | `$sg-primary-600` | `$sg-primary-700` | — |
| AI/Mia | `$sg-white-base` + borde gradiente IA | `$sg-primary-500` | fondo `$sg-ai-50` | fondo `$sg-ai-100` | opacidad 0.5 |

**Tamaños**: small 36px / medium 40px / large 48px de alto. Fuente 14/16/18px respectivamente, siempre `Urbanist 700`, `border-radius: 12px`, `padding: 10px 20px`, `gap: 10px`, transición `all 0.2s ease`.

El botón **AI/Mia** reemplaza el texto "AI" por el logo SVG de Mia (`/images/mia-logo.svg`) junto al ícono `Sparkles` (Lucide), con `z-index: 1` sobre el borde de gradiente.

### 8.2 Inputs

| Componente | Altura (sm/md/lg) | Radio | Notas |
|------------|---------------------|-------|-------|
| Text input | 36 / 40 / 48px | 10px | Borde `$sg-grey-100`, focus `$sg-primary-500`, error `$sg-error-400` |
| Search input | 36 / 40 / 50px | 50px (pill) | Icono search + clear opcional, ancho default 302px |
| Select | 36 / 40 / 48px | 10px | Chevron rota al abrir, dropdown shadow |
| Select date | 36 / 40 / 48px | 12px | Calendario con día seleccionado en `$sg-primary-500` |
| Textarea | — | 10px | Padding `12px 16px`, disabled opacity 0.5 |
| Number input | 36 / 40 / 48px | 12px | Botones -/+ en `$sg-grey-300`, hover `$sg-primary-500` |
| Hour date picker | — | 12px (dropdown) | Spinners con gap 18px, hover `$sg-grey-500` |

Todos los inputs de formulario implementan `ControlValueAccessor` para Reactive Forms.

### 8.3 Cards

- **Simple**: `$sg-card-padding-simple` 24px
- **Large**: `$sg-card-padding-large` 32px
- Fondo `$sg-white-base`, borde `$sg-grey-50` 1px, `border-radius: 16px`
- Título: `$sg-grey-800`, 20px (titled) o 24px (large)
- **Regla obligatoria (módulo Reportes)**: todo título de sección debe ir dentro de una card — nunca como título standalone

### 8.4 Modales

#### Confirm Modal
`border-radius: 12px`, `max-width: 700px`, ícono circular 56px. Variantes:
- **General** (azul) → `$sg-primary-500`
- **Confirmación** (verde) → icono `$sg-success-400`
- **Alerta** (naranja, distintivo SocialGest) → `$sg-secondary-500`
- **Error** (rojo) → `$sg-error-400`

#### Code Modal
`border-radius: 24px`, ícono warning (`$sg-warning-50` bg / `$sg-warning-400` color), botón de confirmación destructiva `$sg-error-400`, tamaño de dígitos 40px.

#### Modales especiales (distintivos de SocialGest)
Tres modales con círculos decorativos radiales y layout propio:

1. **Bienvenida** — usuario sin canales. Ícono `PartyPopper`, CTA "Crear canal".
2. **Plan Vencido** — ícono `TriangleAlert`, dos CTAs ("Contáctanos" + "Renovar plan").
3. **Lanzamiento SocialGest.ai** — dos columnas (hero 555px + features 718px), badge "Nuevo lanzamiento" con gradiente primary→secondary, cuadrícula 2×2 de features IA, banner de créditos y botón Mia (419×40px).

Tokens compartidos: `border-radius: 40px`, `padding: 48px 40px`, overlay `rgba(0,0,0,0.5)`, círculos decorativos de 729px de diámetro (radial-gradient primary-50 / secondary-50 → transparente).

### 8.5 Badges, chips y etiquetas

| Componente | Altura | Radio | Variantes |
|------------|--------|-------|-----------|
| Status badge | 30 / 36px | 50px (pill) | success / warning / error / info / neutral (dot + label) |
| Chip | 26px | 23px | white / primary / secondary (naranja) / disabled |
| Color label (etiqueta) | 20px | 10px | 10 variantes pastel + variante IA (borde + texto gradiente) |

### 8.6 Tablas

- Fondo `$sg-white-base`, borde de fila `$sg-grey-50`
- Alto de fila/header: 44px, padding de celda `10px 20px`
- Header: `Urbanist Bold 16px`; Body: `DM Sans Regular 16px`
- Hover de fila: `$sg-neutral-50`
- **Ícono de acción en naranja `$sg-secondary-500`** (distintivo — en Quantico es gris, en AdvocatesPro es rosa)

### 8.7 Toggle / Checkbox / Radio / Radio Tab

Todos los estados "activo/seleccionado" usan **naranja `$sg-secondary-500`** (color de marca de SocialGest), reforzando el principio de similitud:
- Toggle on → `$sg-secondary-500`
- Checkbox activo → `$sg-secondary-500`
- Radio seleccionado → `$sg-secondary-500`
- Radio tab activo → borde/texto `$sg-secondary-500`, fondo `$sg-secondary-50`

### 8.8 Menú

`border-radius: 12px`, ítem seleccionado con fondo `$sg-secondary-50` (naranja claro), radio/checkbox internos en `$sg-secondary-500`.

### 8.9 Avatar

Circular (`border-radius: 50%`). Tamaños: xlarge 50px, large 36px, medium 26px, small 18px. Badge de plataforma 16px con borde blanco.

### 8.10 Toast

`border-radius: 10px`, barra lateral de color de 13px de ancho, sombra `0 8px 32px rgba(0,0,0,0.08)`. Variantes success/warning/error/info con stripe + fondo + color de ícono correspondientes.

### 8.11 Charts (Metrics)

- Barras: gradiente primary (`#5495fe → #0061fe`) o secondary/naranja (`#f8a679 → #f47a37`)
- Tamaños de barra: large 78px, medium 35px, small 17px, xsmall 8px
- Sparkline: línea primary (`$sg-primary-500`) o secondary naranja (`$sg-secondary-500`)
- Donut: stroke 30px
- Trend indicator: positivo `$sg-success-400`, negativo `$sg-error-400`
- **Regla obligatoria**: todos los charts (barras, pie, stacked bars) usan gradientes, nunca colores sólidos

### 8.12 Stepper

Track 5px de alto (`$sg-grey-50`), progreso en `$sg-primary-500`, radio 10px, label `DM Sans` `$sg-grey-300`.

### 8.13 Account Counter

Badge con ícono `User`, borde `$sg-grey-100`, `border-radius: 12px`, texto `Urbanist SemiBold` `$sg-grey-800`. Alturas 36/40/48px.

### 8.14 Elementos de IA

Tres componentes distintivos:
1. **Título hero IA** — 48px, gradiente tricolor azul→azul oscuro→naranja
2. **Nota de IA** — caja compacta `4px 16px`, radio 10px, ícono `Sparkles`
3. **Panel "Generando con IA"** — `24px 32px`, radio 16px, barra de progreso + badge "En progreso" con gradiente IA

Iconos Lucide usados en IA: `Sparkles`, `LoaderCircle`, `Info`.

---

## 9. Reglas de uso y jerarquía visual

1. **Naranja = marca SocialGest**: todo elemento que en Quantico/AdvocatesPro usa el color secundario (púrpura/rosa) debe usar naranja `$sg-secondary-500` en SocialGest — botones secundarios, toggles, checkboxes, radios, radio tabs, chips secondary, menú seleccionado, ícono de acción en tablas, badge de confirm modal "alerta".
2. **Azul primario compartido**: el azul (`$sg-primary-500` `#0061fe`) es idéntico en los tres productos — no cambiar.
3. **Jerarquía tipográfica**: `Urbanist` para elementos de UI/interacción, `DM Sans` para contenido/lectura. Nunca usar `DM Sans` en botones ni `Urbanist` en párrafos largos.
4. **Contraste y elevación**: fondo de página `$sg-neutral-100`/`$sg-neutral-200`, cards en blanco puro con borde sutil `$sg-grey-50` — nunca cards sin borde ni sombra sobre fondo blanco.
5. **Estados consistentes**: todo componente interactivo debe implementar hover, active, focus y disabled con los tokens definidos — no improvisar valores.
6. **Iconografía**: únicamente Lucide vía `lucide-angular`; nunca instalar otro paquete de íconos.
7. **Gradientes obligatorios en charts**: nunca colores sólidos en gráficas de barras, pie o stacked bars.

---

## 10. Patrones de layout

### Dashboard
- Navbar fijo superior (altura estándar 80px), fondo blanco, borde inferior `$sg-grey-50`
- Grid de KPI cards con gap `lg` (24px)
- Secciones separadas por `3xl` (48px)

### Módulo Reportes
- Todo título de sección **dentro** de una card (nunca standalone)
- Cards con `padding: 32px`, `border-radius: 16px`, borde `$sg-kpi-card-border`
- Cards de alerta/insight/señal usan gradiente diagonal 141.6° + borde de gradiente enmascarado (`mask-composite: exclude`) según el color semántico (verde/amarillo/rojo)

### Modales
- Overlay `rgba(0,0,0,0.4–0.5)` centrado
- Estructura: overlay → header (título + close) → body → footer (acciones)
- Footer sticky con fondo blanco opaco y sombra cuando el body es scrolleable (ver [socialgest-modal-template.html](socialgest-modal-template.html))

### Formularios
- Agrupar campos relacionados con gap `sm`–`md` (12–16px)
- Separar grupos de campos con gap `lg`–`xl` (24–32px)
- Alinear todos los inputs/selects de una fila a la misma altura

---

## Referencias

- Tokens SCSS: `src/styles/_tokens.scss` (sección `SocialGest`, prefijo `$sg-`)
- Tokens JSON estructurados: [socialgest-design-tokens.json](socialgest-design-tokens.json)
- Detalle exhaustivo token por token: [socialgest-design-tokens.md](socialgest-design-tokens.md)
- Plantilla de modal de referencia: [socialgest-modal-template.html](socialgest-modal-template.html)
