# Design Tokens — AdvocatesPro

Referencia completa de todos los tokens de diseño utilizados en el entorno **AdvocatesPro**.
Fuente: `src/styles/_tokens.scss`

---

## Tabla de Contenidos

1. [Paleta de Colores Base](#paleta-de-colores-base)
2. [AdvocatesPro Accent (Pink/Rose)](#advocatespro-accent-pinkrose)
3. [Colores Semánticos](#colores-semánticos)
4. [Button](#button)
5. [Select](#select)
6. [Search Input](#search-input)
7. [Text Input](#text-input)
8. [Textarea](#textarea)
9. [Number Input](#number-input)
10. [Chip Input](#chip-input)
11. [Account Counter](#account-counter)
12. [Select Date](#select-date)
13. [Hour Date Picker](#hour-date-picker)
14. [Select Segment](#select-segment)
15. [Select Segment — Image](#select-segment--image)
16. [Select Segment — Chips](#select-segment--chips)
17. [Select Segment — User](#select-segment--user)
18. [Select Segment — Colorpicker](#select-segment--colorpicker)
19. [Card](#card)
20. [Menu](#menu)
21. [Avatar Social](#avatar-social)
22. [Status Badge](#status-badge)
23. [Table](#table)
24. [Confirm Modal](#confirm-modal)
25. [Confirm Code Modal](#confirm-code-modal)
26. [Toast](#toast)
27. [Stepper](#stepper)
28. [Filter Chip](#filter-chip)
29. [Bar Chart (Vertical & Horizontal)](#bar-chart-vertical--horizontal)
30. [Sparkline](#sparkline)
31. [Donut Chart](#donut-chart)
32. [Trend Indicator](#trend-indicator)
33. [KPI Card](#kpi-card)
34. [Chart General](#chart-general)

---

## Paleta de Colores Base

### Primary (Blue)

| Token | Valor | Uso |
|-------|-------|-----|
| `$primary-50` | `#e6edff` | Fondos claros, focus ring |
| `$primary-100` | `#b0ceff` | Gradientes suaves |
| `$primary-200` | `#8ab6ff` | Gradientes medios |
| `$primary-300` | `#5495fe` | Gradientes de barra, sparkline stroke |
| `$primary-400` | `#338ffe` | Variantes intermedias |
| `$primary-500` | `#0061fe` | **Base Primary** — acciones principales, links, focus borders |
| `$primary-600` | `#0058e7` | Hover states |
| `$primary-700` | `#0045b4` | Active/pressed states |
| `$primary-800` | `#00358c` | Variantes oscuras |
| `$primary-900` | `#00296b` | Variantes más oscuras |

### Secondary (Purple)

| Token | Valor | Uso |
|-------|-------|-----|
| `$secondary-50` | `#f5eefc` | Fondos claros |
| `$secondary-100` | `#e1caf6` | Fondos suaves |
| `$secondary-200` | `#d2b0f2` | Gradientes |
| `$secondary-300` | `#be8cec` | Gradientes medios |
| `$secondary-400` | `#b176e8` | Intermedios |
| `$secondary-500` | `#9e54e2` | **Base Secondary** — acciones secundarias, action icons |
| `$secondary-600` | `#904cce` | Hover |
| `$secondary-700` | `#703ca0` | Active |
| `$secondary-800` | `#572e7c` | Oscuros |
| `$secondary-900` | `#42235f` | Más oscuros |

### Grey

| Token | Valor | Uso |
|-------|-------|-----|
| `$grey-50` | `#ececec` | Borders, dividers, track bg |
| `$grey-100` | `#c3c3c3` | Input borders, separadores |
| `$grey-200` | `#a6a6a6` | Placeholder text, iconos secundarios |
| `$grey-300` | `#7d7d7d` | Placeholder, texto secundario, iconos |
| `$grey-400` | `#646464` | Labels secundarios |
| `$grey-500` | `#3d3d3d` | Texto body, tabla body |
| `$grey-600` | `#383838` | Hover text oscuro |
| `$grey-700` | `#2b2b2b` | Active text |
| `$grey-800` | `#222222` | **Texto principal**, headings, labels |
| `$grey-900` | `#1a1a1a` | Variantes más oscuras |

### White

| Token | Valor | Uso |
|-------|-------|-----|
| `$white-500` | `#ffffff` | Fondos, backgrounds |
| `$white-800` | `#f1f1f1` | Texto sobre botones primary/secondary |

### Neutral

| Token | Valor | Uso |
|-------|-------|-----|
| `$neutral-50` | `#fafafa` | Fondos sutiles, message boxes |
| `$neutral-100` | `#f5f7fa` | Fondos alternativos |
| `$neutral-200` | `#f1f1f1` | Fondos neutros |

---

## AdvocatesPro Accent (Pink/Rose)

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-accent-50` | `#fdedf2` | Selected bg, badge bg claro |
| `$ap-accent-100` | `#fac7d5` | Badge background |
| `$ap-accent-500` | `#ee4a79` | **Base accent** — color principal AdvocatesPro |
| `$ap-accent-600` | `#d9426e` | Hover accent |
| `$ap-accent-700` | `#a93556` | Active/pressed accent |

---

## Colores Semánticos

### Error (Red)

| Token | Valor | Uso |
|-------|-------|-----|
| `$error-50` | `#ffecec` | Fondo claro error |
| `$error-100` | `#feb0b0` | — |
| `$error-200` | `#fd8f8f` | — |
| `$error-300` | `#fd5f5f` | — |
| `$error-400` | `#fc3e3e` | **Base error** — botones, iconos |
| `$error-500` | `#b02b2b` | Error oscuro |
| `$error-600` | `#9a2626` | Error más oscuro |

### Warning (Orange)

| Token | Valor | Uso |
|-------|-------|-----|
| `$warning-50` | `#fff5ea` | Fondo claro warning |
| `$warning-100` | `#ffd4a8` | — |
| `$warning-200` | `#ffc285` | — |
| `$warning-300` | `#ffa850` | — |
| `$warning-400` | `#ff962c` | **Base warning** |
| `$warning-500` | `#b3691f` | Warning oscuro |
| `$warning-600` | `#9c5c1b` | Warning más oscuro |
| `$warning-icon` | `#e8922d` | Icono warning específico |

### Success (Green)

| Token | Valor | Uso |
|-------|-------|-----|
| `$success-50` | `#ebfaf1` | Fondo claro success |
| `$success-100` | `#aeebc7` | — |
| `$success-200` | `#8de3b0` | — |
| `$success-300` | `#5bd68d` | — |
| `$success-400` | `#3ace76` | **Base success** — trend positivo |
| `$success-500` | `#299053` | Success oscuro |
| `$success-600` | `#237e48` | Success más oscuro |

### Status Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$status-success` | `#3ace76` | Indicador verde |
| `$status-warning` | `#f4b137` | Indicador amarillo/naranja |
| `$status-error` | `#f44336` | Indicador rojo |
| `$status-info` | `$primary-500` | Indicador azul |
| `$status-neutral` | `#9e9e9e` | Indicador gris |

---

## Button

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$button-primary-bg` | `$primary-500` | Fondo botón primary |
| `$button-primary-text` | `$white-800` | Texto botón primary |
| `$button-primary-hover` | `$primary-600` | Hover primary |
| `$button-primary-active` | `$primary-700` | Active primary |
| `$button-primary-disabled-bg` | `rgba($primary-500, 0.4)` | Disabled bg |
| `$button-primary-disabled-text` | `rgba($white-800, 0.6)` | Disabled text |
| `$button-secondary-bg` | `$secondary-500` | Fondo botón secondary |
| `$button-secondary-text` | `$white-800` | Texto botón secondary |
| `$button-secondary-hover` | `$secondary-600` | Hover secondary |
| `$button-secondary-active` | `$secondary-700` | Active secondary |
| `$button-secondary-disabled-bg` | `rgba($secondary-500, 0.4)` | Disabled bg |
| `$button-secondary-disabled-text` | `rgba($white-800, 0.6)` | Disabled text |
| `$button-white-bg` | `$white-500` | Fondo botón white |
| `$button-white-text` | `$grey-500` | Texto botón white |
| `$button-white-border` | `$grey-100` | Borde botón white |
| `$button-white-hover-bg` | `$grey-50` | Hover bg white |
| `$button-white-hover-text` | `$grey-600` | Hover text white |
| `$button-white-active-bg` | `$grey-100` | Active bg white |
| `$button-white-active-text` | `$grey-700` | Active text white |
| `$button-white-disabled-bg` | `$white-500` | Disabled bg white |
| `$button-white-disabled-text` | `rgba($grey-300, 0.5)` | Disabled text white |
| `$button-white-disabled-border` | `rgba($grey-100, 0.5)` | Disabled border white |
| `$button-text-color` | `$primary-500` | Color botón text |
| `$button-text-hover` | `$primary-600` | Hover botón text |
| `$button-text-active` | `$primary-700` | Active botón text |
| `$button-text-disabled` | `rgba($primary-500, 0.4)` | Disabled botón text |

### Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `$button-padding-small` | `8px 20px` | Padding small (36px height) |
| `$button-padding-medium` | `10px 24px` | Padding medium (40px height) |
| `$button-padding-large` | `14px 28px` | Padding large (48px height) |
| `$button-gap` | `8px` | Espacio entre icono y texto |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$button-font-family` | `'Urbanist', sans-serif` | Fuente |
| `$button-font-size-small` | `14px` | Tamaño small |
| `$button-font-size-medium` | `16px` | Tamaño medium |
| `$button-font-size-large` | `18px` | Tamaño large |
| `$button-font-weight` | `600` | SemiBold |
| `$button-line-height` | `normal` | Line height |

### Shape & Transitions

| Token | Valor | Uso |
|-------|-------|-----|
| `$button-border-radius` | `12px` | Border radius |
| `$button-border-width` | `1px` | Ancho del borde |
| `$button-transition` | `all 0.2s ease-in-out` | Transición |
| `$button-disabled-cursor` | `not-allowed` | Cursor disabled |

---

## Select

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-bg` | `$white-500` | Fondo |
| `$select-border` | `#c3c3c3` | Borde |
| `$select-border-focus` | `$primary-500` | Borde focus |
| `$select-border-error` | `#ff4444` | Borde error |
| `$select-placeholder-color` | `$grey-300` | Placeholder |
| `$select-text-color` | `#222222` | Texto |
| `$select-label-color` | `#222222` | Label |
| `$select-icon-color` | `$grey-300` | Icono |
| `$select-disabled-bg` | `$grey-100` | Disabled bg |
| `$select-disabled-border` | `rgba(#c3c3c3, 0.5)` | Disabled border |
| `$select-disabled-text` | `rgba($grey-300, 0.5)` | Disabled text |

### Sizing

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-height-small` | `36px` | Altura small |
| `$select-height-medium` | `40px` | Altura medium |
| `$select-height-large` | `48px` | Altura large |
| `$select-padding` | `10px` | Padding |
| `$select-gap` | `8px` | Gap icono-texto |
| `$select-icon-size-small` | `16px` | Icono small |
| `$select-icon-size-medium` | `20px` | Icono medium |
| `$select-icon-size-large` | `20px` | Icono large |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-font-family` | `'Urbanist', sans-serif` | Fuente |
| `$select-font-size-small` | `14px` | Tamaño small |
| `$select-font-size-medium` | `16px` | Tamaño medium |
| `$select-font-size-large` | `18px` | Tamaño large |
| `$select-label-font-size` | `16px` | Label size |
| `$select-label-font-size-small` | `14px` | Label small |
| `$select-font-weight` | `600` | SemiBold |

### Shape

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-border-radius` | `10px` | Border radius |
| `$select-border-width` | `1px` | Ancho borde |
| `$select-transition` | `all 0.2s ease-in-out` | Transición |

---

## Search Input

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$search-input-bg` | `$white-500` | Fondo |
| `$search-input-border` | `#c3c3c3` | Borde |
| `$search-input-border-focus` | `$primary-500` | Borde focus |
| `$search-input-placeholder-color` | `#a6a6a6` | Placeholder |
| `$search-input-text-color` | `#222222` | Texto |
| `$search-input-icon-color` | `#a6a6a6` | Icono búsqueda |
| `$search-input-clear-icon-color` | `#a6a6a6` | Icono clear |
| `$search-input-disabled-bg` | `$grey-100` | Disabled bg |
| `$search-input-disabled-border` | `rgba(#c3c3c3, 0.5)` | Disabled border |
| `$search-input-disabled-text` | `rgba(#a6a6a6, 0.5)` | Disabled text |

### Sizing

| Token | Valor | Uso |
|-------|-------|-----|
| `$search-input-height-small` | `36px` | Altura small |
| `$search-input-height-medium` | `40px` | Altura medium |
| `$search-input-height-large` | `50px` | Altura large |
| `$search-input-padding` | `10px` | Padding |
| `$search-input-gap` | `16px` | Gap icono-texto |
| `$search-input-icon-size` | `24px` | Tamaño icono |
| `$search-input-clear-icon-size` | `20px` | Tamaño icono clear |
| `$search-input-width` | `302px` | Ancho default |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$search-input-font-family` | `'Urbanist', sans-serif` | Fuente |
| `$search-input-font-size-small` | `16px` | Tamaño small |
| `$search-input-font-size-medium` | `16px` | Tamaño medium |
| `$search-input-font-size-large` | `20px` | Tamaño large |
| `$search-input-font-weight` | `500` | Medium |

### Shape

| Token | Valor | Uso |
|-------|-------|-----|
| `$search-input-border-radius` | `50px` | Pill shape |
| `$search-input-border-width` | `1px` | Ancho borde |
| `$search-input-transition` | `all 0.2s ease-in-out` | Transición |

---

## Text Input

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$text-input-bg` | `$white-500` | Fondo |
| `$text-input-border` | `$grey-100` | Borde |
| `$text-input-border-focus` | `$primary-500` | Borde focus |
| `$text-input-border-error` | `$status-error` | Borde error |
| `$text-input-placeholder-color` | `$grey-300` | Placeholder |
| `$text-input-text-color` | `$grey-800` | Texto |
| `$text-input-label-color` | `$grey-800` | Label |
| `$text-input-icon-color` | `$grey-300` | Icono |
| `$text-input-disabled-bg` | `$grey-100` | Disabled bg |
| `$text-input-disabled-border` | `rgba($grey-100, 0.5)` | Disabled border |
| `$text-input-disabled-text` | `rgba($grey-300, 0.5)` | Disabled text |

### Sizing

| Token | Valor | Uso |
|-------|-------|-----|
| `$text-input-height-small` | `36px` | Altura small |
| `$text-input-height-medium` | `40px` | Altura medium |
| `$text-input-height-large` | `48px` | Altura large |
| `$text-input-padding-x` | `16px` | Padding horizontal |
| `$text-input-padding-y` | `10px` | Padding vertical |
| `$text-input-gap` | `8px` | Gap |
| `$text-input-icon-size-large` | `20px` | Icono large |
| `$text-input-icon-size-medium` | `20px` | Icono medium |
| `$text-input-icon-size-small` | `16px` | Icono small |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$text-input-font-family` | `'Urbanist', sans-serif` | Fuente |
| `$text-input-font-size-small` | `14px` | Tamaño small |
| `$text-input-font-size-medium` | `16px` | Tamaño medium |
| `$text-input-font-size-large` | `18px` | Tamaño large |
| `$text-input-label-font-size` | `16px` | Label size |
| `$text-input-label-font-size-small` | `14px` | Label small |
| `$text-input-font-weight` | `600` | Label weight |
| `$text-input-font-weight-field-large` | `500` | Field weight large |
| `$text-input-font-weight-field-medium` | `500` | Field weight medium |
| `$text-input-font-weight-field-small` | `400` | Field weight small |

### Shape

| Token | Valor | Uso |
|-------|-------|-----|
| `$text-input-border-radius` | `10px` | Border radius |
| `$text-input-border-width` | `1px` | Ancho borde |

---

## Textarea

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$textarea-bg` | `$text-input-bg` | Fondo (hereda de text-input) |
| `$textarea-border` | `$text-input-border` | Borde |
| `$textarea-border-focus` | `$text-input-border-focus` | Borde focus |
| `$textarea-label-color` | `$grey-800` | Color label |
| `$textarea-field-color` | `$grey-500` | Color texto field |
| `$textarea-placeholder-color` | `$grey-300` | Placeholder |
| `$textarea-disabled-bg` | `$text-input-disabled-bg` | Disabled bg |
| `$textarea-disabled-border` | `$text-input-disabled-border` | Disabled border |
| `$textarea-disabled-text` | `$text-input-disabled-text` | Disabled text |

### Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `$textarea-gap` | `6px` | Gap label-field |
| `$textarea-padding` | `14px 20px` | Padding del field |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$textarea-label-font` | `'Urbanist', sans-serif` | Fuente label |
| `$textarea-label-size` | `16px` | Tamaño label |
| `$textarea-label-weight` | `600` | Peso label |
| `$textarea-field-font` | `'DM Sans', sans-serif` | Fuente field |
| `$textarea-field-size` | `16px` | Tamaño field |
| `$textarea-field-weight` | `400` | Peso field |
| `$textarea-field-tracking` | `-0.32px` | Letter spacing |

### Shape

| Token | Valor | Uso |
|-------|-------|-----|
| `$textarea-border-radius` | `$text-input-border-radius` | Border radius (10px) |
| `$textarea-border-width` | `$text-input-border-width` | Ancho borde (1px) |
| `$textarea-transition` | `border-color 0.2s ease-in-out` | Transición |

---

## Number Input

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$number-input-bg` | `$white-500` | Fondo |
| `$number-input-border` | `$grey-100` | Borde |
| `$number-input-value-color` | `$grey-800` | Color valor |
| `$number-input-btn-color` | `$grey-300` | Color botones +/- |
| `$number-input-btn-hover-bg` | `$grey-50` | Hover bg botones |

### Sizing

| Token | Valor | Uso |
|-------|-------|-----|
| `$number-input-height-lg` | `48px` | Altura large |
| `$number-input-height-md` | `40px` | Altura medium |
| `$number-input-height-sm` | `36px` | Altura small |
| `$number-input-buttons-width` | `155px` | Ancho variante buttons |
| `$number-input-spinner-width` | `119px` | Ancho variante spinner |
| `$number-input-btn-width` | `36px` | Ancho botón +/- |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$number-input-value-font` | `'Urbanist', sans-serif` | Fuente |
| `$number-input-font-size-lg` | `18px` | Tamaño large |
| `$number-input-font-size-md` | `16px` | Tamaño medium |
| `$number-input-font-size-sm` | `16px` | Tamaño small |
| `$number-input-font-weight-lg` | `500` | Peso large |
| `$number-input-font-weight-md` | `500` | Peso medium |
| `$number-input-font-weight-sm` | `400` | Peso small |

### Shape & States

| Token | Valor | Uso |
|-------|-------|-----|
| `$number-input-border-radius` | `12px` | Border radius |
| `$number-input-border-width` | `1px` | Ancho borde |
| `$number-input-disabled-opacity` | `0.4` | Opacidad disabled |
| `$number-input-transition` | `background 0.15s ease` | Transición |

---

## Chip Input

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$chip-input-bg` | `$white-500` | Fondo container |
| `$chip-input-border` | `$grey-100` | Borde |
| `$chip-input-border-focus` | `$primary-500` | Borde focus |
| `$chip-input-placeholder-color` | `$grey-300` | Placeholder |
| `$chip-input-text-color` | `$grey-800` | Texto |
| `$chip-input-label-color` | `$grey-800` | Label |
| `$chip-input-disabled-bg` | `$grey-100` | Disabled bg |
| `$chip-input-disabled-border` | `rgba($grey-100, 0.5)` | Disabled border |
| `$chip-input-disabled-text` | `rgba($grey-300, 0.5)` | Disabled text |

### Chip Tags (inside chip-input)

| Token | Valor | Uso |
|-------|-------|-----|
| `$chip-bg` | `$primary-50` | Fondo chip |
| `$chip-text-color` | `$primary-700` | Texto chip |
| `$chip-remove-color` | `$grey-300` | Icono remove |
| `$chip-remove-hover-color` | `$grey-500` | Hover remove |
| `$chip-border-radius` | `6px` | Border radius chip |
| `$chip-font-family` | `'DM Sans', sans-serif` | Fuente chip |
| `$chip-font-size` | `13px` | Tamaño chip |

### Typography & Shape

| Token | Valor | Uso |
|-------|-------|-----|
| `$chip-input-font-family` | `'Urbanist', sans-serif` | Fuente |
| `$chip-input-label-font-size` | `16px` | Label size |
| `$chip-input-label-font-size-small` | `14px` | Label small |
| `$chip-input-font-weight` | `600` | Peso |
| `$chip-input-border-radius` | `10px` | Border radius |
| `$chip-input-border-width` | `1px` | Ancho borde |

---

## Account Counter

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$account-counter-bg` | `$grey-50` | Fondo |
| `$account-counter-icon-color` | `$grey-300` | Color icono |
| `$account-counter-color` | `$grey-300` | Color texto conteo |

### Sizing

| Token | Valor | Uso |
|-------|-------|-----|
| `$account-counter-lg-width` | `80px` | Ancho large |
| `$account-counter-lg-height` | `48px` | Altura large |
| `$account-counter-md-width` | `67px` | Ancho medium |
| `$account-counter-md-height` | `40px` | Altura medium |
| `$account-counter-sm-width` | `61px` | Ancho small |
| `$account-counter-sm-height` | `36px` | Altura small |
| `$account-counter-padding` | `13px` | Padding |

### Typography & Shape

| Token | Valor | Uso |
|-------|-------|-----|
| `$account-counter-font` | `'Urbanist', sans-serif` | Fuente |
| `$account-counter-font-size` | `18px` | Tamaño |
| `$account-counter-font-weight` | `600` | Peso |
| `$account-counter-border-radius` | `12px` | Border radius |

---

## Select Date

### Trigger

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-date-gap` | `8px` | Gap label-trigger |
| `$select-date-trigger-bg` | `$white-500` | Fondo trigger |
| `$select-date-trigger-border` | `$grey-100` | Borde |
| `$select-date-trigger-border-radius` | `12px` | Border radius |
| `$select-date-trigger-padding` | `0 20px` | Padding |
| `$select-date-trigger-height-lg` | `48px` | Altura large |
| `$select-date-trigger-height-md` | `40px` | Altura medium |
| `$select-date-trigger-height-sm` | `36px` | Altura small |
| `$select-date-trigger-hover-border` | `$grey-300` | Hover border |
| `$select-date-trigger-focus-border` | `$primary-500` | Focus border |
| `$select-date-transition` | `border-color 0.2s ease-in-out` | Transición |

### Label

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-date-label-font` | `'Urbanist', sans-serif` | Fuente label |
| `$select-date-label-size` | `16px` | Tamaño label |
| `$select-date-label-size-sm` | `14px` | Tamaño label small |
| `$select-date-label-weight` | `600` | Peso label |
| `$select-date-label-color` | `$grey-800` | Color label |

### Value Text

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-date-value-font` | `'Urbanist', sans-serif` | Fuente valor |
| `$select-date-value-weight` | `500` | Peso valor |
| `$select-date-value-size-lg` | `18px` | Tamaño large |
| `$select-date-value-size-md` | `16px` | Tamaño medium |
| `$select-date-value-size-sm` | `14px` | Tamaño small |
| `$select-date-value-color` | `$grey-800` | Color valor |
| `$select-date-placeholder-color` | `$grey-300` | Placeholder |
| `$select-date-icon-color` | `$grey-300` | Icono calendario |

### Dropdown / Calendar

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-date-dropdown-width` | `267px` | Ancho dropdown |
| `$select-date-dropdown-padding` | `24px 41px` | Padding dropdown |
| `$select-date-dropdown-bg` | `$white-500` | Fondo dropdown |
| `$select-date-dropdown-radius` | `12px` | Border radius dropdown |
| `$select-date-dropdown-shadow` | `0 4px 15px rgba(0,0,0,0.12)` | Sombra |

### Calendar Navigation

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-date-nav-font` | `'Urbanist', sans-serif` | Fuente nav |
| `$select-date-nav-size` | `16px` | Tamaño nav title |
| `$select-date-nav-weight` | `600` | Peso nav |
| `$select-date-nav-btn-size` | `28px` | Tamaño botón nav |
| `$select-date-nav-btn-hover-bg` | `$grey-50` | Hover bg nav btn |
| `$select-date-divider-color` | `$grey-50` | Color divider |

### Day Cells

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-date-day-size` | `26px` | Tamaño celda día |
| `$select-date-day-font` | `'Urbanist', sans-serif` | Fuente día |
| `$select-date-day-font-size` | `13px` | Tamaño texto día |
| `$select-date-day-weight` | `600` | Peso día |
| `$select-date-day-color` | `$grey-800` | Color día |
| `$select-date-day-other-month-color` | `$grey-100` | Color otro mes |
| `$select-date-day-today-border` | `$primary-500` | Borde hoy |
| `$select-date-day-selected-bg` | `$primary-500` | Fondo seleccionado |
| `$select-date-day-selected-color` | `$white-500` | Texto seleccionado |
| `$select-date-day-hover-bg` | `$grey-50` | Hover bg día |
| `$select-date-day-name-size` | `12px` | Tamaño nombres días |
| `$select-date-disabled-opacity` | `0.5` | Opacidad disabled |

---

## Hour Date Picker

### Dropdown

| Token | Valor | Uso |
|-------|-------|-----|
| `$hour-picker-dropdown-width` | `267px` | Ancho dropdown |
| `$hour-picker-dropdown-padding` | `16px` | Padding dropdown |
| `$hour-picker-dropdown-bg` | `$white-500` | Fondo dropdown |
| `$hour-picker-dropdown-border` | `$grey-50` | Borde dropdown |
| `$hour-picker-dropdown-radius` | `12px` | Border radius |
| `$hour-picker-dropdown-shadow` | `0 4px 16px rgba(0,0,0,0.1)` | Sombra |

### Calendar Header

| Token | Valor | Uso |
|-------|-------|-----|
| `$hour-picker-month-font` | `'Urbanist', sans-serif` | Fuente mes |
| `$hour-picker-month-size` | `14px` | Tamaño mes |
| `$hour-picker-month-weight` | `700` | Peso mes (Bold) |
| `$hour-picker-month-color` | `$grey-800` | Color mes |
| `$hour-picker-nav-btn-size` | `28px` | Tamaño botón nav |
| `$hour-picker-nav-btn-radius` | `6px` | Border radius nav btn |
| `$hour-picker-nav-btn-color` | `$grey-400` | Color nav btn |
| `$hour-picker-nav-btn-hover-bg` | `$primary-50` | Hover bg nav btn |
| `$hour-picker-nav-btn-hover-color` | `$primary-500` | Hover color nav btn |

### Weekday Headers

| Token | Valor | Uso |
|-------|-------|-----|
| `$hour-picker-weekday-font` | `'Urbanist', sans-serif` | Fuente weekday |
| `$hour-picker-weekday-size` | `11px` | Tamaño weekday |
| `$hour-picker-weekday-weight` | `600` | Peso weekday |
| `$hour-picker-weekday-color` | `$grey-300` | Color weekday |
| `$hour-picker-weekday-height` | `28px` | Altura fila weekday |

### Day Cells

| Token | Valor | Uso |
|-------|-------|-----|
| `$hour-picker-day-font` | `'DM Sans', sans-serif` | Fuente día |
| `$hour-picker-day-size` | `13px` | Tamaño día |
| `$hour-picker-day-weight` | `400` | Peso día |
| `$hour-picker-day-color` | `$grey-800` | Color día |
| `$hour-picker-day-max-height` | `32px` | Max height celda |
| `$hour-picker-day-hover-bg` | `$primary-50` | Hover bg |
| `$hour-picker-day-hover-color` | `$primary-500` | Hover color |
| `$hour-picker-day-today-weight` | `700` | Peso hoy (Bold) |
| `$hour-picker-day-today-color` | `$primary-500` | Color hoy |
| `$hour-picker-day-selected-bg` | `$primary-500` | Fondo seleccionado |
| `$hour-picker-day-selected-color` | `$white-500` | Texto seleccionado |
| `$hour-picker-day-selected-weight` | `600` | Peso seleccionado |

### Divider

| Token | Valor | Uso |
|-------|-------|-----|
| `$hour-picker-divider-color` | `$grey-50` | Color divider |
| `$hour-picker-divider-margin` | `14px` | Margen divider |

### Time Spinner

| Token | Valor | Uso |
|-------|-------|-----|
| `$hour-picker-time-gap` | `18px` | Gap entre spinners |
| `$hour-picker-spinner-gap` | `14px` | Gap interno spinner |
| `$hour-picker-spinner-btn-color` | `$grey-300` | Color botón spinner |
| `$hour-picker-spinner-btn-hover-color` | `$grey-500` | Hover botón spinner |
| `$hour-picker-spinner-value-font` | `'Urbanist', sans-serif` | Fuente valor |
| `$hour-picker-spinner-value-size` | `16px` | Tamaño valor |
| `$hour-picker-spinner-value-weight` | `600` | Peso valor |
| `$hour-picker-spinner-value-color` | `$grey-800` | Color valor |

---

## Select Segment

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-seg-outer-radius-lg` | `10px` | Radio exterior large |
| `$select-seg-outer-radius-md` | `8px` | Radio exterior medium |
| `$select-seg-inner-radius-lg` | `8px` | Radio interior large |
| `$select-seg-inner-radius-md` | `6px` | Radio interior medium |
| `$select-seg-outer-padding` | `6px` | Padding exterior |
| `$select-seg-inner-padding-lg` | `16px 24px` | Padding interior large |
| `$select-seg-inner-padding-md` | `12px 24px` | Padding interior medium |
| `$select-seg-border-color` | `$grey-100` | Color borde |
| `$select-seg-border-width` | `1px` | Ancho borde |
| `$select-seg-hover-border-width` | `1.5px` | Ancho borde hover |
| `$select-seg-selected-bg` | `$ap-accent-50` | Fondo seleccionado |
| `$select-seg-hover-border` | `$ap-accent-500` | Borde hover |
| `$select-seg-selected-border` | `$ap-accent-500` | Borde seleccionado |
| `$select-seg-font-family` | `'DM Sans', sans-serif` | Fuente |
| `$select-seg-title-size` | `16px` | Tamaño título |
| `$select-seg-title-weight` | `600` | Peso título |
| `$select-seg-desc-size` | `14px` | Tamaño descripción |
| `$select-seg-transition` | `all 0.2s ease` | Transición |

---

## Select Segment — Image

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-seg-img-outer-radius` | `14px` | Radio exterior |
| `$select-seg-img-outer-padding` | `7px` | Padding exterior |
| `$select-seg-img-outer-border-width` | `2px` | Ancho borde exterior |
| `$select-seg-img-inner-padding` | `20px 24px` | Padding interior |
| `$select-seg-img-inner-gap` | `20px` | Gap interior |
| `$select-seg-img-width` | `101px` | Ancho imagen |
| `$select-seg-img-height` | `101px` | Altura imagen |
| `$select-seg-img-radius` | `8px` | Border radius imagen |
| `$select-seg-img-placeholder` | `#d9d9d9` | Color placeholder |
| `$select-seg-img-date-size` | `12px` | Tamaño fecha |
| `$select-seg-img-date-weight` | `700` | Peso fecha (Bold) |

---

## Select Segment — Chips

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-seg-chip-radius` | `23px` | Border radius chip |
| `$select-seg-chip-padding` | `6px 11px` | Padding chip |
| `$select-seg-chip-font` | `'Urbanist', sans-serif` | Fuente |
| `$select-seg-chip-font-size` | `14px` | Tamaño |
| `$select-seg-chip-font-weight` | `600` | Peso |
| `$select-seg-chip-color` | `$grey-500` | Color texto |
| `$select-seg-chip-border` | `$grey-100` | Color borde |
| `$select-seg-chip-bg` | `$white-500` | Fondo |

---

## Select Segment — User

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-user-avatar-size-lg` | `36px` | Avatar large |
| `$select-user-avatar-size-md` | `26px` | Avatar medium |
| `$select-user-platform-size-lg` | `18px` | Badge plataforma large |
| `$select-user-platform-size-md` | `13px` | Badge plataforma medium |
| `$select-user-inner-gap` | `13px` | Gap interno |

---

## Select Segment — Colorpicker

| Token | Valor | Uso |
|-------|-------|-----|
| `$select-colorpicker-dot-size` | `25px` | Tamaño punto de color |

---

## Card

### Simple Variant

| Token | Valor | Uso |
|-------|-------|-----|
| `$card-simple-radius` | `10px` | Border radius |
| `$card-simple-padding` | `30px 25px` | Padding |

### Titled Variant

| Token | Valor | Uso |
|-------|-------|-----|
| `$card-titled-radius` | `12px` | Border radius |
| `$card-titled-padding` | `30px` | Padding |
| `$card-titled-gap` | `20px` | Gap título-contenido |
| `$card-titled-title-size` | `20px` | Tamaño título |

### Large Variant

| Token | Valor | Uso |
|-------|-------|-----|
| `$card-large-radius` | `24px` | Border radius |
| `$card-large-padding` | `40px` | Padding |
| `$card-large-gap` | `31px` | Gap título-contenido |
| `$card-large-title-size` | `24px` | Tamaño título |

---

## Menu

### Base

| Token | Valor | Uso |
|-------|-------|-----|
| `$menu-border-radius` | `10px` | Border radius |
| `$menu-shadow` | `0 2px 8px rgba(0,0,0,0.1)` | Sombra |
| `$menu-padding-y` | `8px` | Padding vertical |
| `$menu-min-width` | `220px` | Ancho mínimo |
| `$menu-item-height` | `36px` | Altura item |
| `$menu-item-gap` | `10px` | Gap entre elementos |
| `$menu-item-padding` | `0 12px` | Padding item |
| `$menu-item-hover-bg` | `$grey-50` | Hover bg item |
| `$menu-item-selected-bg` | `$ap-accent-50` | Selected bg item |
| `$menu-font-size` | `14px` | Tamaño fuente |

### Avatar Variant

| Token | Valor | Uso |
|-------|-------|-----|
| `$menu-avatar-item-height` | `48px` | Altura item avatar |
| `$menu-avatar-size` | `36px` | Tamaño avatar |
| `$menu-platform-badge-size` | `18px` | Tamaño badge plataforma |

### Radio & Checkbox Variants

| Token | Valor | Uso |
|-------|-------|-----|
| `$menu-radio-size` | `20px` | Tamaño radio |
| `$menu-checkbox-size` | `24px` | Tamaño checkbox |
| `$menu-checkbox-radius` | `8px` | Border radius checkbox |

---

## Avatar Social

### Sizes

| Token | Valor | Uso |
|-------|-------|-----|
| `$avatar-social-size-sm` | `18px` | Small |
| `$avatar-social-size-md` | `26px` | Medium |
| `$avatar-social-size-lg` | `36px` | Large |
| `$avatar-social-size-xl` | `50px` | Extra large |

### Badge (Platform Icon)

| Token | Valor | Uso |
|-------|-------|-----|
| `$avatar-social-badge-sm` | `8px` | Badge small |
| `$avatar-social-badge-md` | `13px` | Badge medium |
| `$avatar-social-badge-lg` | `18px` | Badge large |
| `$avatar-social-badge-xl` | `18px` | Badge extra large |
| `$avatar-social-offset-sm` | `3px` | Offset small |
| `$avatar-social-offset-md` | `6px` | Offset medium |
| `$avatar-social-offset-lg` | `8px` | Offset large |
| `$avatar-social-offset-xl` | `8px` | Offset extra large |
| `$avatar-social-badge-border` | `2px solid $white-500` | Borde badge |

---

## Status Badge

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$status-badge-bg` | `transparent` | Fondo |
| `$status-badge-border` | `#c3c3c3` | Borde |
| `$status-badge-text-color` | `#3d3d3d` | Texto |

### Sizing

| Token | Valor | Uso |
|-------|-------|-----|
| `$status-badge-height` | `30px` | Altura |
| `$status-badge-dot-size` | `10px` | Tamaño punto indicador |
| `$status-badge-padding` | `4px 10px` | Padding |
| `$status-badge-gap` | `10px` | Gap punto-texto |

### Typography & Shape

| Token | Valor | Uso |
|-------|-------|-----|
| `$status-badge-font-family` | `'Urbanist', sans-serif` | Fuente |
| `$status-badge-font-size` | `14px` | Tamaño |
| `$status-badge-font-weight` | `600` | Peso |
| `$status-badge-border-radius` | `50px` | Pill shape |
| `$status-badge-border-width` | `1px` | Ancho borde |

---

## Table

### Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$table-bg` | `$white-500` | Fondo |
| `$table-border-color` | `#ececec` | Color borde |
| `$table-header-text-color` | `#3d3d3d` | Texto header |
| `$table-body-text-color` | `#3d3d3d` | Texto body |
| `$table-title-color` | `#222222` | Título tabla |
| `$table-row-hover-bg` | `#f9f9f9` | Hover fila |
| `$table-action-icon-color` | `$secondary-500` | Color icono acción |
| `$table-action-icon-size` | `20px` | Tamaño icono acción |

### Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `$table-padding` | `24px` | Padding contenedor |
| `$table-cell-padding` | `10px 20px` | Padding celda |
| `$table-gap` | `48px` | Gap título-tabla |
| `$table-header-height` | `44px` | Altura header |
| `$table-row-height` | `44px` | Altura fila |
| `$table-border-width` | `1px` | Ancho borde |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$table-title-font-family` | `'Urbanist', sans-serif` | Fuente título |
| `$table-title-font-size` | `24px` | Tamaño título |
| `$table-title-font-weight` | `700` | Peso título (Bold) |
| `$table-header-font-family` | `'Urbanist', sans-serif` | Fuente header |
| `$table-header-font-size` | `16px` | Tamaño header |
| `$table-header-font-weight` | `700` | Peso header (Bold) |
| `$table-header-letter-spacing` | `-0.32px` | Tracking header |
| `$table-body-font-family` | `'DM Sans', sans-serif` | Fuente body |
| `$table-body-font-size` | `16px` | Tamaño body |
| `$table-body-font-weight` | `400` | Peso body (Regular) |
| `$table-body-font-weight-medium` | `500` | Peso body (Medium) |
| `$table-body-letter-spacing` | `-0.32px` | Tracking body |

---

## Confirm Modal

### Base

| Token | Valor | Uso |
|-------|-------|-----|
| `$confirm-modal-bg` | `$white-500` | Fondo |
| `$confirm-modal-border` | `$grey-50` | Borde |
| `$confirm-modal-border-radius` | `12px` | Border radius |
| `$confirm-modal-padding` | `40px 48px` | Padding |
| `$confirm-modal-gap` | `32px` | Gap interno |
| `$confirm-modal-max-width` | `700px` | Ancho máximo |
| `$confirm-modal-overlay-bg` | `rgba(0,0,0,0.4)` | Fondo overlay |

### Icon

| Token | Valor | Uso |
|-------|-------|-----|
| `$confirm-modal-icon-size` | `56px` | Tamaño icono |
| `$confirm-modal-icon-radius` | `50%` | Forma circular |

### Title

| Token | Valor | Uso |
|-------|-------|-----|
| `$confirm-modal-title-font` | `'Urbanist', sans-serif` | Fuente |
| `$confirm-modal-title-size` | `24px` | Tamaño |
| `$confirm-modal-title-weight` | `700` | Peso (Bold) |
| `$confirm-modal-title-color` | `$grey-800` | Color |
| `$confirm-modal-title-tracking` | `-0.48px` | Letter spacing |

### Message Box

| Token | Valor | Uso |
|-------|-------|-----|
| `$confirm-modal-msg-radius` | `10px` | Border radius |
| `$confirm-modal-msg-padding` | `16px 20px` | Padding |
| `$confirm-modal-msg-font` | `'DM Sans', sans-serif` | Fuente |
| `$confirm-modal-msg-size` | `16px` | Tamaño |
| `$confirm-modal-msg-line-height` | `28px` | Line height |
| `$confirm-modal-msg-color` | `$grey-800` | Color |
| `$confirm-modal-msg-tracking` | `-0.32px` | Letter spacing |

### Buttons

| Token | Valor | Uso |
|-------|-------|-----|
| `$confirm-modal-btn-height` | `40px` | Altura |
| `$confirm-modal-btn-padding` | `10px 20px` | Padding |
| `$confirm-modal-btn-radius` | `12px` | Border radius |
| `$confirm-modal-btn-font` | `'Urbanist', sans-serif` | Fuente |
| `$confirm-modal-btn-size` | `16px` | Tamaño |
| `$confirm-modal-btn-weight` | `700` | Peso (Bold) |

### Variant: General (Blue)

| Token | Valor |
|-------|-------|
| `$confirm-general-icon-bg` | `$primary-50` |
| `$confirm-general-icon-color` | `$primary-500` |
| `$confirm-general-msg-bg` | `$neutral-50` |
| `$confirm-general-btn-bg` | `$primary-500` |
| `$confirm-general-btn-hover` | `$primary-600` |
| `$confirm-general-btn-active` | `$primary-700` |

### Variant: Confirmation (Green)

| Token | Valor |
|-------|-------|
| `$confirm-confirmation-icon-bg` | `$success-50` |
| `$confirm-confirmation-icon-color` | `$success-400` |
| `$confirm-confirmation-msg-bg` | `$neutral-50` |
| `$confirm-confirmation-btn-bg` | `$primary-500` |
| `$confirm-confirmation-btn-hover` | `$primary-600` |
| `$confirm-confirmation-btn-active` | `$primary-700` |

### Variant: Alert (Pink)

| Token | Valor |
|-------|-------|
| `$confirm-alert-icon-bg` | `$ap-accent-50` |
| `$confirm-alert-icon-color` | `$ap-accent-500` |
| `$confirm-alert-msg-bg` | `$ap-accent-50` |
| `$confirm-alert-btn-bg` | `$ap-accent-500` |
| `$confirm-alert-btn-hover` | `$ap-accent-600` |
| `$confirm-alert-btn-active` | `darken($ap-accent-500, 15%)` |

### Variant: Error (Red)

| Token | Valor |
|-------|-------|
| `$confirm-error-icon-bg` | `rgba($error-400, 0.1)` |
| `$confirm-error-icon-color` | `$error-400` |
| `$confirm-error-msg-bg` | `rgba($error-400, 0.1)` |
| `$confirm-error-btn-bg` | `$error-400` |
| `$confirm-error-btn-hover` | `darken($error-400, 8%)` |
| `$confirm-error-btn-active` | `darken($error-400, 15%)` |

---

## Confirm Code Modal

| Token | Valor | Uso |
|-------|-------|-----|
| `$code-modal-border-radius` | `24px` | Border radius |
| `$code-modal-icon-bg` | `$warning-50` | Fondo icono |
| `$code-modal-icon-color` | `$warning-icon` | Color icono |
| `$code-modal-msg-bg` | `$warning-50` | Fondo mensaje |
| `$code-modal-btn-bg` | `$error-400` | Fondo botón |
| `$code-modal-btn-hover` | `darken($error-400, 8%)` | Hover botón |
| `$code-modal-btn-active` | `darken($error-400, 15%)` | Active botón |
| `$code-modal-code-size` | `40px` | Tamaño código |
| `$code-modal-code-spacing` | `4px` | Spacing entre dígitos |
| `$code-modal-input-width` | `334px` | Ancho input |
| `$code-modal-input-height` | `48px` | Altura input |

---

## Toast

### Base

| Token | Valor | Uso |
|-------|-------|-----|
| `$toast-bg` | `$white-500` | Fondo |
| `$toast-border-radius` | `10px` | Border radius |
| `$toast-shadow` | `0 8px 32px rgba(0,0,0,0.12)` | Sombra |
| `$toast-min-width` | `360px` | Ancho mínimo |
| `$toast-max-width` | `680px` | Ancho máximo |
| `$toast-accent-width` | `13px` | Ancho barra lateral |
| `$toast-icon-size` | `48px` | Tamaño icono |
| `$toast-icon-radius` | `50px` | Border radius icono |

### Typography

| Token | Valor | Uso |
|-------|-------|-----|
| `$toast-msg-font` | `'DM Sans', sans-serif` | Fuente |
| `$toast-msg-size` | `16px` | Tamaño |
| `$toast-msg-weight` | `500` | Peso |
| `$toast-msg-line-height` | `27px` | Line height |
| `$toast-msg-color` | `$grey-800` | Color |

### Variant Backgrounds

| Token | Valor | Uso |
|-------|-------|-----|
| `$toast-success-bg` | `$success-50` | Fondo success |
| `$toast-error-bg` | `#fdecea` | Fondo error |
| `$toast-warning-bg` | `#fff8ec` | Fondo warning |
| `$toast-info-bg` | `$primary-50` | Fondo info |

---

## Stepper

| Token | Valor | Uso |
|-------|-------|-----|
| `$stepper-gap` | `17px` | Gap entre pasos |
| `$stepper-label-font` | `'DM Sans', sans-serif` | Fuente label |
| `$stepper-label-size` | `14px` | Tamaño label |
| `$stepper-label-weight` | `500` | Peso label |
| `$stepper-label-color` | `$grey-300` | Color label |
| `$stepper-label-tracking` | `-0.28px` | Letter spacing |
| `$stepper-track-height` | `5px` | Altura track |
| `$stepper-track-bg` | `$grey-50` | Fondo track |
| `$stepper-track-radius` | `10px` | Border radius track |
| `$stepper-progress-bg` | `$primary-500` | Color progreso |
| `$stepper-transition` | `width 0.4s ease` | Transición |

---

## Filter Chip

| Token | Valor | Uso |
|-------|-------|-----|
| `$filter-chip-bg` | `$white-500` | Fondo |
| `$filter-chip-border` | `#dae1ed` | Borde |
| `$filter-chip-border-radius` | `8px` | Border radius |
| `$filter-chip-padding` | `8px 12px` | Padding |
| `$filter-chip-font` | `$select-font-family` | Fuente |
| `$filter-chip-font-size` | `14px` | Tamaño |
| `$filter-chip-font-weight` | `500` | Peso |
| `$filter-chip-color` | `$grey-500` | Color texto |
| `$filter-chip-hover-border` | `$grey-200` | Hover borde |
| `$filter-chip-hover-bg` | `$neutral-50` | Hover fondo |
| `$filter-chip-remove-size` | `18px` | Tamaño icono remove |

---

## Bar Chart (Vertical & Horizontal)

### Shared

| Token | Valor | Uso |
|-------|-------|-----|
| `$bar-chart-bg` | `#fafafa` | Fondo track |
| `$bar-chart-value-color` | `$white-500` | Color texto valor |
| `$bar-chart-value-font` | `'Urbanist', sans-serif` | Fuente valor |
| `$bar-chart-value-weight` | `600` | Peso valor |
| `$bar-chart-radius-leading` | `50px` | Radio pill leading edge |
| `$bar-chart-radius-trailing` | `10px` | Radio trailing edge |
| `$bar-chart-length` | `350px` | Longitud total barra |

### Primary Gradient (Blue)

| Token | Valor | Uso |
|-------|-------|-----|
| `$bar-chart-primary-from` | `$primary-300` (#5495fe) | Inicio gradiente |
| `$bar-chart-primary-to` | `$primary-100` (#b0ceff) | Fin gradiente |
| `$bar-chart-primary-hover-from` | `$primary-500` (#0061fe) | Hover inicio |
| `$bar-chart-primary-hover-to` | `$primary-100` (#b0ceff) | Hover fin |

### Secondary Gradient (Pink)

| Token | Valor | Uso |
|-------|-------|-----|
| `$bar-chart-secondary-from` | `#f486a5` | Inicio gradiente |
| `$bar-chart-secondary-to` | `$ap-accent-50` (#fdedf2) | Fin gradiente |
| `$bar-chart-secondary-hover-from` | `$ap-accent-500` (#ee4a79) | Hover inicio |
| `$bar-chart-secondary-hover-to` | `$ap-accent-50` (#fdedf2) | Hover fin |

### Size Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$bar-chart-size-lg` | `78px` | Cross-axis large |
| `$bar-chart-size-md` | `35px` | Cross-axis medium |
| `$bar-chart-size-sm` | `17px` | Cross-axis small |
| `$bar-chart-size-xs` | `8px` | Cross-axis extra small |

### Value Label Area

| Token | Valor | Uso |
|-------|-------|-----|
| `$bar-chart-value-size-lg` | `20px` | Font size large |
| `$bar-chart-value-size-md` | `14px` | Font size medium |
| `$bar-chart-value-area-lg` | `45px` | Área label large |
| `$bar-chart-value-area-md` | `35px` | Área label medium |

---

## Sparkline

### Primary (Blue)

| Token | Valor | Uso |
|-------|-------|-----|
| `$sparkline-primary-stroke` | `$primary-300` (#5495fe) | Línea stroke |
| `$sparkline-primary-area-from` | `rgba($primary-300, 0.4)` | Área gradiente inicio |
| `$sparkline-primary-area-to` | `rgba($primary-100, 0.02)` | Área gradiente fin |

### Secondary (Pink)

| Token | Valor | Uso |
|-------|-------|-----|
| `$sparkline-secondary-stroke` | `$ap-accent-500` (#ee4a79) | Línea stroke |
| `$sparkline-secondary-area-from` | `rgba(#f486a5, 0.4)` | Área gradiente inicio |
| `$sparkline-secondary-area-to` | `rgba($ap-accent-50, 0.02)` | Área gradiente fin |

### Sizes

| Token | Valor | Uso |
|-------|-------|-----|
| `$sparkline-width-lg` | `559px` | Ancho large |
| `$sparkline-height-lg` | `188px` | Altura large |
| `$sparkline-width-sm` | `138px` | Ancho small |
| `$sparkline-height-sm` | `46px` | Altura small |

---

## Donut Chart

### Sizes

| Token | Valor | Uso |
|-------|-------|-----|
| `$donut-size-lg` | `276px` | Tamaño large |
| `$donut-size-md` | `213px` | Tamaño medium |
| `$donut-size-sm` | `142px` | Tamaño small |
| `$donut-stroke-lg` | `18` | Ancho stroke large |
| `$donut-stroke-md` | `16` | Ancho stroke medium |
| `$donut-stroke-sm` | `14` | Ancho stroke small |

### Segment Colors (Gradient Pairs)

| Token From | Token To | Color |
|------------|----------|-------|
| `$donut-segment-green` (#5cd680) | `$donut-segment-green-to` (#8aeab0) | Verde |
| `$donut-segment-yellow` (#f5c842) | `$donut-segment-yellow-to` (#f5d97a) | Amarillo |
| `$donut-segment-orange` (#f47a37) | `$donut-segment-orange-to` (#f9b48e) | Naranja |
| `$donut-segment-pink` (#ee6fa0) | `$donut-segment-pink-to` (#f2a5c8) | Rosa |
| `$donut-segment-purple` (#9e7be8) | `$donut-segment-purple-to` (#c4aff2) | Morado |
| `$donut-segment-blue` (#5495fe) | `$donut-segment-blue-to` (#8ab6ff) | Azul |

---

## Trend Indicator

| Token | Valor | Uso |
|-------|-------|-----|
| `$trend-positive-color` | `$success-400` (#3ace76) | Color positivo (verde) |
| `$trend-negative-color` | `$error-400` (#fc3e3e) | Color negativo (rojo) |
| `$trend-font-family` | `'Urbanist', sans-serif` | Fuente |
| `$trend-font-size` | `16px` | Tamaño |
| `$trend-font-weight` | `600` | Peso |
| `$trend-icon-size` | `22px` | Tamaño icono |
| `$trend-gap` | `4px` | Gap icono-texto |
| `$trend-height` | `19px` | Altura |

---

## KPI Card

| Token | Valor | Uso |
|-------|-------|-----|
| `$kpi-card-bg` | `$white-500` | Fondo |
| `$kpi-card-border` | `$grey-50` | Borde |
| `$kpi-card-border-radius` | `12px` | Border radius |
| `$kpi-card-padding` | `20px` | Padding |
| `$kpi-card-gap` | `8px` | Gap interno |
| `$kpi-label-font-family` | `'Urbanist', sans-serif` | Fuente label |
| `$kpi-label-font-size` | `14px` | Tamaño label |
| `$kpi-label-font-weight` | `500` | Peso label |
| `$kpi-label-color` | `$grey-400` | Color label |
| `$kpi-value-font-family` | `'DM Sans', sans-serif` | Fuente valor |
| `$kpi-value-font-size` | `28px` | Tamaño valor |
| `$kpi-value-font-weight` | `700` | Peso valor (Bold) |
| `$kpi-value-color` | `$grey-800` | Color valor |
| `$kpi-change-font-size` | `12px` | Tamaño cambio % |
| `$kpi-change-positive` | `$status-success` | Color positivo |
| `$kpi-change-negative` | `$status-error` | Color negativo |

---

## Chart General

### Sentiment Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$chart-positive` | `#3ECC80` | Sentimiento positivo |
| `$chart-neutral` | `#9EA1A6` | Sentimiento neutro |
| `$chart-negative` | `#F61A4A` | Sentimiento negativo |

### Platform Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$chart-instagram` | `#E4405F` | Instagram |
| `$chart-facebook` | `#1877F2` | Facebook |
| `$chart-twitter` | `#1DA1F2` | Twitter/X |
| `$chart-tiktok` | `#000000` | TikTok |
| `$chart-youtube` | `#FF0000` | YouTube |
| `$chart-linkedin` | `#0A66C2` | LinkedIn |

### Competitor/Brand Colors

| Token | Valor | Uso |
|-------|-------|-----|
| `$chart-brand-1` | `$primary-500` | Marca 1 |
| `$chart-brand-2` | `#f47a37` | Marca 2 |
| `$chart-brand-3` | `#3ace76` | Marca 3 |
| `$chart-brand-4` | `#f4b137` | Marca 4 |
| `$chart-brand-5` | `#9e54e2` | Marca 5 |
| `$chart-brand-6` | `#00bcd4` | Marca 6 |
| `$chart-brand-7` | `#ff5722` | Marca 7 |
| `$chart-brand-8` | `#795548` | Marca 8 |
| `$chart-brand-9` | `#607d8b` | Marca 9 |
| `$chart-brand-10` | `#e91e63` | Marca 10 |

---

## Tipografías

| Fuente | Uso Principal |
|--------|--------------|
| `'Urbanist', sans-serif` | UI elements: botones, labels, selects, títulos, valores numéricos |
| `'DM Sans', sans-serif` | Body text: tabla body, mensajes, chips, sparkline, descripciones |

## Reglas de Border Radius

| Valor | Uso |
|-------|-----|
| `50px` | Pill shapes: badges, search input, bar chart leading edge |
| `24px` | Cards large, code modal |
| `16px` | Insight cards, report sections |
| `12px` | Botones, inputs numéricos, cards, modales, dropdowns, account counter |
| `10px` | Select, text input, textarea, cards simple, menu, toast |
| `8px` | Filter chip, select segment inner, checkbox, imágenes |
| `6px` | Chips internos, select segment inner small, nav btn hour picker |

---

> Archivo generado automáticamente. Fuente de verdad: `src/styles/_tokens.scss`
