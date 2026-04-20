# AdvocatesPro — Design Tokens

> Sistema de diseno independiente para el entorno AdvocatesPro.
> Todos los tokens usan el prefijo `$ap-` para evitar colisiones con otros entornos (SocialGest, Quantico, Tikket).
> Color base secondary: **rosa (#ee4a79)** — distintivo de AdvocatesPro.

---

## 1. Primary Color Scale (Blue)

Igual que Quantico — ambos productos usan azul como color primario.

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-primary-50` | `#e6efff` | rgb(230, 239, 255) | Tinta mas clara, fondos |
| `$ap-primary-100` | `#b0ceff` | rgb(176, 206, 255) | Tinta clara, fondos hover |
| `$ap-primary-200` | `#8ab6ff` | rgb(138, 182, 255) | Accent suave |
| `$ap-primary-300` | `#5495fe` | rgb(84, 149, 254) | Accent medio, gradientes |
| `$ap-primary-400` | `#3381fe` | rgb(51, 129, 254) | Accent fuerte |
| `$ap-primary-500` | `#0061fe` | rgb(0, 97, 254) | **Base Primary** — botones, links, focus |
| `$ap-primary-600` | `#0058e7` | rgb(0, 88, 231) | Hover |
| `$ap-primary-700` | `#0045b4` | rgb(0, 69, 180) | Active/pressed |
| `$ap-primary-800` | `#00358c` | rgb(0, 53, 140) | Accent oscuro |
| `$ap-primary-900` | `#00296b` | rgb(0, 41, 107) | Tinta mas oscura |

---

## 2. Secondary Color Scale (Pink/Rose)

Color distintivo de AdvocatesPro — rosa base `#ee4a79`.

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-secondary-50` | `#fdedf2` | rgb(253, 237, 242) | Tinta mas clara, fondos seleccionados |
| `$ap-secondary-100` | `#fac7d5` | rgb(250, 199, 213) | Tinta clara, badges |
| `$ap-secondary-200` | `#f7acc1` | rgb(247, 172, 193) | Accent suave, disabled |
| `$ap-secondary-300` | `#f38fab` | rgb(243, 143, 171) | Accent medio, gradientes |
| `$ap-secondary-400` | `#f07090` | rgb(240, 112, 144) | Accent fuerte |
| `$ap-secondary-500` | `#ee4a79` | rgb(238, 74, 121) | **Base Secondary** — acciones secundarias, acentos rosa |
| `$ap-secondary-600` | `#d9436e` | rgb(217, 67, 110) | Hover |
| `$ap-secondary-700` | `#b93c5e` | rgb(185, 60, 94) | Active/pressed |
| `$ap-secondary-800` | `#8a2c48` | rgb(138, 44, 72) | Accent oscuro |
| `$ap-secondary-900` | `#5e1c30` | rgb(94, 28, 48) | Tinta mas oscura |

---

## 3. Grey Color Scale

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-grey-50` | `#ececec` | rgb(236, 236, 236) | Bordes, divisores, fondos |
| `$ap-grey-100` | `#c3c3c3` | rgb(195, 195, 195) | Bordes de inputs |
| `$ap-grey-200` | `#a6a6a6` | rgb(166, 166, 166) | Placeholder, iconos |
| `$ap-grey-300` | `#7d7d7d` | rgb(125, 125, 125) | Texto secundario, iconos |
| `$ap-grey-400` | `#646464` | rgb(100, 100, 100) | Texto de labels |
| `$ap-grey-500` | `#3d3d3d` | rgb(61, 61, 61) | Texto body |
| `$ap-grey-600` | `#383838` | rgb(56, 56, 56) | Texto oscuro |
| `$ap-grey-700` | `#2b2b2b` | rgb(43, 43, 43) | Texto muy oscuro |
| `$ap-grey-800` | `#222222` | rgb(34, 34, 34) | Headings, texto primario |
| `$ap-grey-900` | `#1a1a1a` | rgb(26, 26, 26) | Texto casi negro |

---

## 4. Success Color Scale (Green)

Mismos valores hex que Quantico (estados semanticos compartidos).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-success-50` | `#ebfaf1` | rgb(235, 250, 241) | Fondo claro success |
| `$ap-success-100` | `#aeebc7` | rgb(174, 235, 199) | Tinta clara |
| `$ap-success-200` | `#8de3b0` | rgb(141, 227, 176) | Accent suave |
| `$ap-success-300` | `#5bd68d` | rgb(91, 214, 141) | Accent medio |
| `$ap-success-400` | `#3ace76` | rgb(58, 206, 118) | **Base Success** — indicadores, badges |
| `$ap-success-500` | `#299053` | rgb(41, 144, 83) | Success oscuro |
| `$ap-success-600` | `#237e48` | rgb(35, 126, 72) | Success mas oscuro |

---

## 5. Warning Color Scale (Orange)

Mismos valores hex que Quantico (estados semanticos compartidos).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-warning-50` | `#fff5ea` | rgb(255, 245, 234) | Fondo claro warning |
| `$ap-warning-100` | `#ffd4a8` | rgb(255, 212, 168) | Tinta clara |
| `$ap-warning-200` | `#ffc285` | rgb(255, 194, 133) | Accent suave |
| `$ap-warning-300` | `#ffa850` | rgb(255, 168, 80) | Accent medio |
| `$ap-warning-400` | `#ff962c` | rgb(255, 150, 44) | **Base Warning** — alertas, indicadores |
| `$ap-warning-500` | `#b3691f` | rgb(179, 105, 31) | Warning oscuro |
| `$ap-warning-600` | `#9c5c1b` | rgb(156, 92, 27) | Warning mas oscuro |

---

## 6. Error Color Scale (Red)

Mismos valores hex que Quantico (estados semanticos compartidos).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-error-50` | `#ffecec` | rgb(255, 236, 236) | Fondo claro error |
| `$ap-error-100` | `#feb0b0` | rgb(254, 176, 176) | Tinta clara |
| `$ap-error-200` | `#fd8f8f` | rgb(253, 143, 143) | Accent suave |
| `$ap-error-300` | `#fd5f5f` | rgb(253, 95, 95) | Accent medio |
| `$ap-error-400` | `#fc3e3e` | rgb(252, 62, 62) | **Base Error** — destructivo, alertas |
| `$ap-error-500` | `#b02b2b` | rgb(176, 43, 43) | Error oscuro |
| `$ap-error-600` | `#9a2626` | rgb(154, 38, 38) | Error mas oscuro |

---

## 7. Neutral Color Scale

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-neutral-50` | `#fafafa` | rgb(250, 250, 250) | Fondos sutiles, message boxes |
| `$ap-neutral-100` | `#f5f7fa` | rgb(245, 247, 250) | Fondos claros |
| `$ap-neutral-200` | `#f1f1f1` | rgb(241, 241, 241) | Fondos de cards/secciones |

---

## 8. White

| Token | Hex | Uso |
|-------|-----|-----|
| `$ap-white-base` | `#ffffff` | Fondos, superficies de cards |

---

## 9. Black

| Token | Hex | Uso |
|-------|-----|-----|
| `$ap-black-base` | `#000000` | Negro puro, superficies oscuras |

---

## 9.1. AI Color Scale (Cyan)

Mismos valores hex que Quantico (reservado para botones AI).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$ap-ai-50` | `#e5f6ff` | rgb(229, 246, 255) | Hover boton AI |
| `$ap-ai-100` | `#c9edff` | rgb(201, 237, 255) | Active boton AI |
| `$ap-ai-500` | `#00aaff` | rgb(0, 170, 255) | **Base AI** — borde boton AI |

---

## 10. Button Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-button-primary-bg` | `$ap-primary-500` (#0061fe) | Fondo boton primary |
| `$ap-button-primary-text` | `$ap-neutral-200` (#f1f1f1) | Texto boton primary |
| `$ap-button-primary-hover` | `$ap-primary-600` (#0058e7) | Hover boton primary |
| `$ap-button-primary-active` | `$ap-primary-700` (#0045b4) | Active boton primary |
| `$ap-button-primary-disabled-bg` | `$ap-primary-200` (#8ab6ff) | Disabled boton primary |
| `$ap-button-secondary-bg` | `$ap-secondary-500` (#ee4a79) | Fondo boton secondary (rosa) |
| `$ap-button-secondary-text` | `$ap-white-base` (#ffffff) | Texto boton secondary |
| `$ap-button-secondary-hover` | `$ap-secondary-600` (#d9436e) | Hover boton secondary |
| `$ap-button-secondary-active` | `$ap-secondary-700` (#b93c5e) | Active boton secondary |
| `$ap-button-secondary-disabled-bg` | `$ap-secondary-200` (#f7acc1) | Disabled boton secondary |
| `$ap-button-white-bg` | `$ap-white-base` (#ffffff) | Fondo boton white |
| `$ap-button-white-text` | `$ap-grey-300` (#7d7d7d) | Texto boton white |
| `$ap-button-white-border` | `$ap-grey-100` (#c3c3c3) | Borde boton white |
| `$ap-button-white-hover` | `$ap-neutral-50` (#fafafa) | Hover boton white |
| `$ap-button-white-active` | `$ap-neutral-200` (#f1f1f1) | Active boton white |
| `$ap-button-white-disabled-text` | `$ap-grey-100` (#c3c3c3) | Disabled texto boton white |
| `$ap-button-height-large` | `48px` | Altura boton large |
| `$ap-button-height-medium` | `40px` | Altura boton medium |
| `$ap-button-height-small` | `36px` | Altura boton small |
| `$ap-button-font-size-large` | `18px` | Font size boton large |
| `$ap-button-font-size-medium` | `16px` | Font size boton medium |
| `$ap-button-font-size-small` | `14px` | Font size boton small |
| `$ap-button-font-family` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-button-font-weight` | `700` | Peso de fuente |
| `$ap-button-border-radius` | `12px` | Border radius |
| `$ap-button-padding` | `10px 20px` | Padding |
| `$ap-button-gap` | `10px` | Gap entre icono y texto |
| `$ap-button-transition` | `all 0.2s ease` | Transicion de estados |

---

## 11. Toggle / Switch Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-toggle-off-bg` | `$ap-grey-100` (#c3c3c3) | Fondo toggle apagado |
| `$ap-toggle-on-bg` | `$ap-secondary-500` (#ee4a79) | Fondo toggle encendido (rosa) |
| `$ap-toggle-thumb-bg` | `$ap-white-base` (#ffffff) | Color thumb del toggle |
| `$ap-toggle-thumb-shadow` | `0 1px 3px rgba(#000, 0.15)` | Sombra del thumb |
| `$ap-toggle-large-width` | `56px` | Ancho toggle large |
| `$ap-toggle-large-height` | `32px` | Altura toggle large |
| `$ap-toggle-large-thumb` | `24px` | Tamano thumb toggle large |
| `$ap-toggle-medium-width` | `48px` | Ancho toggle medium |
| `$ap-toggle-medium-height` | `28px` | Altura toggle medium |
| `$ap-toggle-medium-thumb` | `20px` | Tamano thumb toggle medium |
| `$ap-toggle-small-width` | `40px` | Ancho toggle small |
| `$ap-toggle-small-height` | `24px` | Altura toggle small |
| `$ap-toggle-small-thumb` | `18px` | Tamano thumb toggle small |

---

## 12. Checkbox Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-checkbox-size` | `24px` | Tamano del checkbox |
| `$ap-checkbox-border-radius` | `8px` | Border radius |
| `$ap-checkbox-border` | `$ap-grey-100` (#c3c3c3) | Borde default |
| `$ap-checkbox-bg` | `$ap-white-base` (#ffffff) | Fondo default |
| `$ap-checkbox-active-bg` | `$ap-secondary-500` (#ee4a79) | Fondo activo (rosa) |
| `$ap-checkbox-active-border` | `$ap-secondary-500` (#ee4a79) | Borde activo |
| `$ap-checkbox-hover-border` | `$ap-secondary-500` (#ee4a79) | Borde en hover |
| `$ap-checkbox-check-color` | `$ap-white-base` (#ffffff) | Color del check |

---

## 13. Radio Button Tokens (PrimeNG)

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-radio-checked-bg` | `$ap-secondary-500` (#ee4a79) | Fondo radio seleccionado (rosa) |
| `$ap-radio-checked-border` | `$ap-secondary-500` (#ee4a79) | Borde radio seleccionado |
| `$ap-radio-checked-hover-bg` | `$ap-secondary-600` (#d9436e) | Hover radio seleccionado |
| `$ap-radio-hover-border` | `$ap-secondary-300` (#f38fab) | Hover borde radio |
| `$ap-radio-border` | `$ap-grey-100` (#c3c3c3) | Borde default |
| `$ap-radio-icon-color` | `$ap-white-base` (#ffffff) | Color icono radio |
| `$ap-radio-focus-ring` | `rgba(238, 74, 121, 0.2)` | Sombra de focus (rosa) |

---

## 14. Radio Tab Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-radio-tab-height` | `36px` | Altura radio tab |
| `$ap-radio-tab-border-radius` | `12px` | Border radius |
| `$ap-radio-tab-font-size` | `14px` | Tamano de fuente |
| `$ap-radio-tab-font-weight` | `700` | Peso de fuente |
| `$ap-radio-tab-color` | `$ap-grey-300` (#7d7d7d) | Color texto inactivo |
| `$ap-radio-tab-hover-color` | `$ap-grey-500` (#3d3d3d) | Color texto en hover |
| `$ap-radio-tab-active-border` | `$ap-secondary-500` (#ee4a79) | Borde tab activo (rosa) |
| `$ap-radio-tab-active-color` | `$ap-secondary-500` (#ee4a79) | Color texto activo |
| `$ap-radio-tab-active-bg` | `$ap-secondary-50` (#fdedf2) | Fondo tab activo (rosa claro) |

---

## 15. Status Badge Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-badge-border` | `$ap-grey-100` (#c3c3c3) | Borde del badge |
| `$ap-badge-border-radius` | `50px` | Border radius pill |
| `$ap-badge-font-family` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-badge-font-size` | `14px` | Tamano de fuente |
| `$ap-badge-font-weight` | `600` | Peso de fuente |
| `$ap-badge-text-color` | `$ap-grey-500` (#3d3d3d) | Color texto |
| `$ap-badge-padding` | `4px 10px` | Padding |
| `$ap-badge-gap` | `10px` | Gap entre dot y texto |
| `$ap-badge-dot-size` | `10px` | Tamano dot indicador |
| `$ap-badge-height-small` | `30px` | Altura badge small |
| `$ap-badge-height-large` | `36px` | Altura badge large |
| `$ap-badge-positiva` | `$ap-success-400` (#3ace76) | Dot positiva (verde) |
| `$ap-badge-negativa` | `$ap-error-400` (#fc3e3e) | Dot negativa (rojo) |
| `$ap-badge-neutra` | `$ap-warning-400` (#ff962c) | Dot neutra (naranja) |
| `$ap-badge-desactivado` | `$ap-grey-200` (#a6a6a6) | Dot desactivado (gris) |

---

## 16. Chip Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-chip-height` | `26px` | Altura del chip |
| `$ap-chip-border-radius` | `23px` | Border radius |
| `$ap-chip-padding` | `6px 11px` | Padding |
| `$ap-chip-gap` | `10px` | Gap entre dot/icono y texto |
| `$ap-chip-font-family` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-chip-font-size` | `14px` | Tamano de fuente |
| `$ap-chip-font-weight` | `600` | Peso de fuente |
| `$ap-chip-white-bg` | `$ap-white-base` (#ffffff) | Fondo chip white |
| `$ap-chip-white-border` | `$ap-grey-100` (#c3c3c3) | Borde chip white |
| `$ap-chip-white-color` | `$ap-grey-500` (#3d3d3d) | Texto chip white |
| `$ap-chip-primary-bg` | `$ap-primary-100` (#b0ceff) | Fondo chip primary |
| `$ap-chip-primary-color` | `$ap-primary-500` (#0061fe) | Texto chip primary |
| `$ap-chip-secondary-bg` | `$ap-secondary-100` (#fac7d5) | Fondo chip secondary (rosa) |
| `$ap-chip-secondary-color` | `$ap-secondary-500` (#ee4a79) | Texto chip secondary |
| `$ap-chip-disabled-bg` | `$ap-grey-50` (#ececec) | Fondo chip disabled |
| `$ap-chip-disabled-border` | `$ap-grey-100` (#c3c3c3) | Borde chip disabled |
| `$ap-chip-disabled-color` | `$ap-grey-300` (#7d7d7d) | Texto chip disabled |
| `$ap-chip-add-border` | `$ap-grey-100` (#c3c3c3) | Borde boton agregar |
| `$ap-chip-add-color` | `$ap-grey-300` (#7d7d7d) | Color boton agregar |
| `$ap-chip-add-hover-border` | `$ap-primary-500` (#0061fe) | Hover borde agregar |
| `$ap-chip-add-hover-color` | `$ap-primary-500` (#0061fe) | Hover color agregar |

---

## 17. Toaster Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-toast-border-radius` | `10px` | Border radius |
| `$ap-toast-accent-width` | `13px` | Ancho barra lateral de color |
| `$ap-toast-shadow` | `0 8px 32px rgba(#000, 0.08)` | Sombra del toast |
| `$ap-toast-success-stripe` | `$ap-success-400` (#3ace76) | Barra lateral success |
| `$ap-toast-success-bg` | `$ap-success-50` (#ebfaf1) | Fondo icono success |
| `$ap-toast-success-color` | `$ap-success-400` (#3ace76) | Color icono success |
| `$ap-toast-warning-stripe` | `$ap-warning-400` (#ff962c) | Barra lateral warning |
| `$ap-toast-warning-bg` | `$ap-warning-50` (#fff5ea) | Fondo icono warning |
| `$ap-toast-warning-color` | `$ap-warning-400` (#ff962c) | Color icono warning |
| `$ap-toast-error-stripe` | `$ap-error-400` (#fc3e3e) | Barra lateral error |
| `$ap-toast-error-bg` | `$ap-error-50` (#ffecec) | Fondo icono error |
| `$ap-toast-error-color` | `$ap-error-400` (#fc3e3e) | Color icono error |
| `$ap-toast-info-stripe` | `$ap-primary-500` (#0061fe) | Barra lateral info |
| `$ap-toast-info-bg` | `$ap-primary-50` (#e6efff) | Fondo icono info |
| `$ap-toast-info-color` | `$ap-primary-500` (#0061fe) | Color icono info |
| `$ap-toast-title-color` | `$ap-grey-800` (#222222) | Color titulo |
| `$ap-toast-message-color` | `$ap-grey-300` (#7d7d7d) | Color mensaje |
| `$ap-toast-close-color` | `$ap-grey-300` (#7d7d7d) | Color boton cerrar |

---

## 18. Select Segment Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-select-seg-border-color` | `$ap-grey-100` (#c3c3c3) | Borde de los segmentos |
| `$ap-select-seg-selected-bg` | `$ap-secondary-50` (#fdedf2) | Fondo seleccionado (rosa claro) |
| `$ap-select-seg-selected-border` | `$ap-secondary-500` (#ee4a79) | Borde seleccionado |
| `$ap-select-seg-hover-border` | `$ap-secondary-500` (#ee4a79) | Borde en hover |
| `$ap-select-seg-chip-radius` | `23px` | Border radius de chips |
| `$ap-select-colorpicker-dot-size` | `25px` | Tamano dot de color |
| `$ap-select-user-avatar-size-lg` | `36px` | Tamano avatar large |

---

## 19. Confirm Modal Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-confirm-modal-border-radius` | `12px` | Border radius del modal |
| `$ap-confirm-modal-max-width` | `700px` | Ancho maximo |
| `$ap-confirm-modal-icon-size` | `56px` | Tamano icono circular |
| `$ap-confirm-general-btn-bg` | `$ap-primary-500` (#0061fe) | Boton variante general (azul) |
| `$ap-confirm-confirmation-icon-color` | `$ap-success-400` (#3ace76) | Icono variante confirmacion (verde) |
| `$ap-confirm-alert-btn-bg` | `$ap-secondary-500` (#ee4a79) | Boton variante alerta (rosa AdvocatesPro) |
| `$ap-confirm-error-btn-bg` | `$ap-error-400` (#fc3e3e) | Boton variante error (rojo) |

---

## 20. Code Modal Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-code-modal-border-radius` | `24px` | Border radius |
| `$ap-code-modal-icon-bg` | `$ap-warning-50` (#fff5ea) | Fondo icono warning |
| `$ap-code-modal-icon-color` | `$ap-warning-400` (#ff962c) | Color icono warning |
| `$ap-code-modal-btn-bg` | `$ap-error-400` (#fc3e3e) | Boton confirmacion destructiva |
| `$ap-code-modal-code-size` | `40px` | Tamano codigo verificacion |

---

## 21. Stepper Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-stepper-track-height` | `5px` | Altura barra progreso |
| `$ap-stepper-track-bg` | `$ap-grey-50` (#ececec) | Fondo del track |
| `$ap-stepper-progress-bg` | `$ap-primary-500` (#0061fe) | Color barra progreso (azul) |
| `$ap-stepper-track-radius` | `10px` | Border radius del track |
| `$ap-stepper-label-font` | `'DM Sans', sans-serif` | Familia tipografica label |
| `$ap-stepper-label-color` | `$ap-grey-300` (#7d7d7d) | Color texto del paso |

---

## 22. TextArea Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-textarea-border` | `$ap-grey-100` (#c3c3c3) | Borde del textarea |
| `$ap-textarea-border-focus` | `$ap-primary-500` (#0061fe) | Borde en focus |
| `$ap-textarea-border-radius` | `10px` | Border radius |
| `$ap-textarea-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-textarea-font-size` | `16px` | Tamano de fuente |
| `$ap-textarea-label-color` | `$ap-grey-800` (#222222) | Color del label |
| `$ap-textarea-placeholder-color` | `$ap-grey-200` (#a6a6a6) | Color placeholder |
| `$ap-textarea-padding` | `12px 16px` | Padding |
| `$ap-textarea-disabled-opacity` | `0.5` | Opacidad en disabled |

---

## 23. Number Input Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-number-input-border` | `$ap-grey-100` (#c3c3c3) | Borde del contenedor |
| `$ap-number-input-border-radius` | `12px` | Border radius |
| `$ap-number-input-height-lg` | `48px` | Altura large |
| `$ap-number-input-height-md` | `40px` | Altura medium |
| `$ap-number-input-height-sm` | `36px` | Altura small |
| `$ap-number-input-btn-color` | `$ap-grey-300` (#7d7d7d) | Color botones -/+ |
| `$ap-number-input-btn-hover` | `$ap-primary-500` (#0061fe) | Hover botones -/+ |
| `$ap-number-input-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-number-input-font-weight` | `600` | Peso de fuente |

---

## 24. Account Counter Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-counter-border` | `$ap-grey-100` (#c3c3c3) | Borde del badge |
| `$ap-counter-border-radius` | `12px` | Border radius |
| `$ap-counter-icon-color` | `$ap-grey-300` (#7d7d7d) | Color icono User |
| `$ap-counter-text-color` | `$ap-grey-800` (#222222) | Color del numero |
| `$ap-counter-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-counter-font-weight` | `600` | Peso de fuente |
| `$ap-counter-height-lg` | `48px` | Altura large |
| `$ap-counter-height-md` | `40px` | Altura medium |
| `$ap-counter-height-sm` | `36px` | Altura small |

---

## 25. Select Date Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-select-date-border` | `$ap-grey-100` (#c3c3c3) | Borde del trigger |
| `$ap-select-date-border-radius` | `12px` | Border radius |
| `$ap-select-date-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-select-date-height-lg` | `48px` | Altura large |
| `$ap-select-date-height-md` | `40px` | Altura medium |
| `$ap-select-date-height-sm` | `36px` | Altura small |
| `$ap-select-date-dropdown-shadow` | `0 4px 15px rgba(#000, 0.12)` | Sombra dropdown |
| `$ap-select-date-day-selected-bg` | `$ap-primary-500` (#0061fe) | Fondo dia seleccionado |
| `$ap-select-date-day-other-color` | `$ap-grey-100` (#c3c3c3) | Color dias de otro mes |

---

## 26. Hour Date Picker Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-hour-picker-spinner-gap` | `18px` | Gap entre spinners |
| `$ap-hour-picker-chevron-color` | `$ap-grey-300` (#7d7d7d) | Color flechas |
| `$ap-hour-picker-chevron-hover` | `$ap-grey-500` (#3d3d3d) | Hover flechas |
| `$ap-hour-picker-value-color` | `$ap-grey-800` (#222222) | Color valor |
| `$ap-hour-picker-divider` | `$ap-grey-50` (#ececec) | Color separador |

---

## 27. Select Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-select-bg` | `$ap-white-base` (#ffffff) | Fondo |
| `$ap-select-border` | `$ap-grey-100` (#c3c3c3) | Borde |
| `$ap-select-border-focus` | `$ap-primary-500` (#0061fe) | Borde en focus |
| `$ap-select-border-radius` | `10px` | Border radius |
| `$ap-select-height-lg` | `48px` | Altura large |
| `$ap-select-height-md` | `40px` | Altura medium |
| `$ap-select-height-sm` | `36px` | Altura small |
| `$ap-select-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-select-placeholder-color` | `$ap-grey-300` (#7d7d7d) | Color placeholder |
| `$ap-select-text-color` | `$ap-grey-800` (#222222) | Color texto seleccionado |
| `$ap-select-icon-color` | `$ap-grey-300` (#7d7d7d) | Color iconos |
| `$ap-select-dropdown-shadow` | `0 4px 12px rgba(#000, 0.1)` | Sombra dropdown |
| `$ap-select-option-hover-bg` | `$ap-neutral-50` (#fafafa) | Hover opcion |
| `$ap-select-disabled-bg` | `$ap-grey-100` (#c3c3c3) | Fondo disabled |
| `$ap-select-disabled-text` | `$ap-grey-200` (#a6a6a6) | Texto disabled |

---

## 28. Search Input Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-search-input-bg` | `$ap-white-base` (#ffffff) | Fondo |
| `$ap-search-input-border` | `$ap-grey-100` (#c3c3c3) | Borde |
| `$ap-search-input-border-focus` | `$ap-primary-500` (#0061fe) | Borde en focus |
| `$ap-search-input-border-radius` | `50px` | Pill shape |
| `$ap-search-input-height-lg` | `50px` | Altura large |
| `$ap-search-input-height-md` | `40px` | Altura medium |
| `$ap-search-input-height-sm` | `36px` | Altura small |
| `$ap-search-input-icon-color` | `$ap-grey-200` (#a6a6a6) | Color icono search |
| `$ap-search-input-placeholder-color` | `$ap-grey-200` (#a6a6a6) | Color placeholder |
| `$ap-search-input-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-search-input-font-weight` | `500` | Peso de fuente |
| `$ap-search-input-disabled-bg` | `$ap-grey-100` (#c3c3c3) | Fondo disabled |
| `$ap-search-input-disabled-text` | `$ap-grey-200` (#a6a6a6) | Texto disabled |

---

## 29. Text Input Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-text-input-border` | `$ap-grey-100` (#c3c3c3) | Borde |
| `$ap-text-input-border-focus` | `$ap-primary-500` (#0061fe) | Borde en focus |
| `$ap-text-input-border-error` | `$ap-error-400` (#fc3e3e) | Borde en error |
| `$ap-text-input-border-radius` | `10px` | Border radius |
| `$ap-text-input-height-lg` | `48px` | Altura large |
| `$ap-text-input-height-md` | `40px` | Altura medium |
| `$ap-text-input-height-sm` | `36px` | Altura small |
| `$ap-text-input-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$ap-text-input-label-color` | `$ap-grey-800` (#222222) | Color label |
| `$ap-text-input-placeholder-color` | `$ap-grey-200` (#a6a6a6) | Color placeholder |
| `$ap-text-input-icon-color` | `$ap-grey-300` (#7d7d7d) | Color iconos |

---

## 30. Card Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-card-bg` | `$ap-white-base` (#ffffff) | Fondo |
| `$ap-card-border` | `$ap-grey-50` (#ececec) | Borde |
| `$ap-card-border-radius` | `16px` | Border radius |
| `$ap-card-padding-simple` | `24px` | Padding variante simple |
| `$ap-card-padding-large` | `32px` | Padding variante large |
| `$ap-card-title-color` | `$ap-grey-800` (#222222) | Color titulo |
| `$ap-card-title-size-titled` | `20px` | Tamano titulo titled |
| `$ap-card-title-size-large` | `24px` | Tamano titulo large |

---

## 31. Menu Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-menu-bg` | `$ap-white-base` (#ffffff) | Fondo |
| `$ap-menu-border` | `$ap-grey-50` (#ececec) | Borde |
| `$ap-menu-border-radius` | `12px` | Border radius |
| `$ap-menu-item-hover` | `$ap-neutral-50` (#fafafa) | Hover items |
| `$ap-menu-item-selected-bg` | `$ap-secondary-50` (#fdedf2) | Fondo seleccionado (rosa claro) |
| `$ap-menu-item-color` | `$ap-grey-500` (#3d3d3d) | Color texto items |
| `$ap-menu-icon-color` | `$ap-grey-300` (#7d7d7d) | Color iconos |
| `$ap-menu-radio-active` | `$ap-secondary-500` (#ee4a79) | Radio seleccionado |
| `$ap-menu-checkbox-active` | `$ap-secondary-500` (#ee4a79) | Checkbox seleccionado |

---

## 32. Avatar Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-avatar-border-radius` | `50%` | Forma circular |
| `$ap-avatar-size-xlarge` | `50px` | Tamano extra large |
| `$ap-avatar-size-large` | `36px` | Tamano large |
| `$ap-avatar-size-medium` | `26px` | Tamano medium |
| `$ap-avatar-size-small` | `18px` | Tamano small |
| `$ap-avatar-badge-size` | `16px` | Tamano badge plataforma |
| `$ap-avatar-badge-border` | `$ap-white-base` (#ffffff) | Borde del badge |

---

## 33. Metricas / Bar Chart Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-bar-primary-from` | `$ap-primary-300` (#5495fe) | Gradiente inicio primary |
| `$ap-bar-primary-to` | `$ap-primary-500` (#0061fe) | Gradiente fin primary |
| `$ap-bar-secondary-from` | `$ap-secondary-300` (#f38fab) | Gradiente inicio secondary (rosa) |
| `$ap-bar-secondary-to` | `$ap-secondary-500` (#ee4a79) | Gradiente fin secondary |
| `$ap-bar-size-large` | `78px` | Ancho barra large |
| `$ap-bar-size-medium` | `35px` | Ancho barra medium |
| `$ap-bar-size-small` | `17px` | Ancho barra small |
| `$ap-bar-size-xsmall` | `8px` | Ancho barra x-small |
| `$ap-bar-label-color` | `$ap-grey-300` (#7d7d7d) | Color labels |
| `$ap-sparkline-primary-color` | `$ap-primary-500` (#0061fe) | Color linea primary |
| `$ap-sparkline-secondary-color` | `$ap-secondary-500` (#ee4a79) | Color linea secondary (rosa) |
| `$ap-donut-stroke-width` | `30px` | Grosor segmentos dona |
| `$ap-trend-up-color` | `$ap-success-400` (#3ace76) | Indicador positivo |
| `$ap-trend-down-color` | `$ap-error-400` (#fc3e3e) | Indicador negativo |

---

## 34. Table Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-table-bg` | `$ap-white-base` (#ffffff) | Fondo |
| `$ap-table-border-color` | `$ap-grey-50` (#ececec) | Borde de filas |
| `$ap-table-header-color` | `$ap-grey-500` (#3d3d3d) | Color texto header |
| `$ap-table-body-color` | `$ap-grey-500` (#3d3d3d) | Color texto body |
| `$ap-table-title-color` | `$ap-grey-800` (#222222) | Color titulo |
| `$ap-table-title-size` | `24px` | Tamano titulo |
| `$ap-table-row-height` | `44px` | Altura de filas |
| `$ap-table-cell-padding` | `10px 20px` | Padding de celdas |
| `$ap-table-hover-bg` | `$ap-neutral-50` (#fafafa) | Fondo hover de fila |
| `$ap-table-action-icon-color` | `$ap-secondary-500` (#ee4a79) | Color icono acciones (rosa) |

---

## 35. Dashboard UI Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$ap-code-block-bg` | `$ap-grey-900` (#1a1a1a) | Fondo code blocks |
| `$ap-code-block-text` | `$ap-grey-100` (#c3c3c3) | Color texto code blocks |
| `$ap-ui-label-color` | `$ap-grey-200` (#a6a6a6) | Color labels UI del dashboard |
| `$ap-ui-light-bg` | `$ap-neutral-200` (#f1f1f1) | Fondo inline code |
| `$ap-swatch-border` | `$ap-grey-50` (#ececec) | Borde color swatches |

---

## 36. Typography

| Nombre | Familia | Tamano | Peso | Uso |
|--------|---------|--------|------|-----|
| Heading 1 | Urbanist | 28px | 700 (Bold) | Titulos principales |
| Heading 2 | Urbanist | 24px | 700 (Bold) | Titulos de secciones y cards |
| Heading 3 | Urbanist | 22px | 700 (Bold) | Subtitulos dentro de cards |
| Heading 4 | Urbanist | 20px | 600 (SemiBold) | Titulos de subsecciones |
| Body | DM Sans | 16px | 400 (Regular) | Texto general, cuerpo, tablas |
| Body Bold | DM Sans | 16px | 700 (Bold) | Texto enfatizado |
| Small | DM Sans | 14px | 400 (Regular) | Texto secundario, labels |
| Caption | DM Sans | 12px | 400 (Regular) | Textos muy pequenos |
| Label | Urbanist | 14px | 600 (SemiBold) | Labels de formularios |
| Button | Urbanist | 14-18px | 700 (Bold) | Texto dentro de botones |
| Nav Link | Urbanist | 15px | 600 (SemiBold) | Links del navbar |
| Token Code | Inter | 13px | 500 (Medium) | Nombres de variables, codigo |

---

## 37. Spacing

| Nombre | Valor | Uso |
|--------|-------|-----|
| 2xs | 4px | Espacio minimo, gaps internos muy pequenos |
| xs | 8px | Padding interno de badges, gaps pequenos |
| sm | 12px | Gap entre elementos relacionados (Gestalt: proximidad) |
| md | 16px | Gap estandar dentro de grupos |
| lg | 24px | Margen debajo de titulos, separacion entre subsecciones |
| xl | 32px | Padding de cards, separacion entre grupos |
| 2xl | 40px | Padding vertical de paginas |
| 3xl | 48px | Separacion entre secciones principales |

---

## 38. Border Radius

| Nombre | Valor | Uso |
|--------|-------|-----|
| sm | 8px | Dropdown options, elementos pequenos |
| md | 10px | Inputs, selects |
| lg | 12px | Botones, KPI cards, swatches de color |
| xl | 16px | Cards principales, secciones |
| pill | 50px | Search inputs, badges, pills |
| circle | 50% | Avatares, dots de status |

---

## Ubicacion del archivo de tokens

Todos los tokens estan definidos en:
```
src/styles/_tokens.scss
```

Busca `ADVOCATESPRO DESIGN SYSTEM TOKENS` para encontrar la seccion AdvocatesPro.

## Uso en SCSS

```scss
@import '../../../../styles/tokens';

.ap-button {
  background: $ap-button-primary-bg;
  color: $ap-button-primary-text;
  height: $ap-button-height-large;
  font-size: $ap-button-font-size-large;
  font-weight: $ap-button-font-weight;
  border-radius: $ap-button-border-radius;
  padding: $ap-button-padding;
  transition: $ap-button-transition;

  &:hover {
    background: $ap-button-primary-hover;
  }

  &:active {
    background: $ap-button-primary-active;
  }

  &:disabled {
    background: $ap-button-primary-disabled-bg;
  }
}

.ap-button--secondary {
  // Rosa distintivo de AdvocatesPro
  background: $ap-button-secondary-bg;
  color: $ap-button-secondary-text;

  &:hover { background: $ap-button-secondary-hover; }
  &:active { background: $ap-button-secondary-active; }
}

.ap-card {
  background: $ap-card-bg;
  border: 1px solid $ap-card-border;
  border-radius: $ap-card-border-radius;
  padding: $ap-card-padding-simple;
  color: $ap-card-title-color;
}

.ap-table {
  background: $ap-table-bg;

  &__row:hover {
    background: $ap-table-hover-bg;
  }

  &__header {
    color: $ap-table-header-color;
    height: $ap-table-row-height;
  }

  &__cell {
    padding: $ap-table-cell-padding;
    color: $ap-table-body-color;
  }

  &__action {
    // Iconos de accion en rosa (distintivo AdvocatesPro)
    color: $ap-table-action-icon-color;
  }
}
```

---

## Convencion de nombres

Todos los tokens AdvocatesPro siguen el patron:
```
$ap-{componente}-{propiedad}
```

- **Color scales**: `$ap-{categoria}-{tono}` — ej. `$ap-primary-500`, `$ap-secondary-500`, `$ap-grey-800`
- **Component tokens**: `$ap-{componente}-{propiedad}` — ej. `$ap-button-primary-bg`, `$ap-card-border-radius`
- **tono**: `50` (mas claro) a `900` (mas oscuro), o `base` para escalas de un solo valor

---

## Diferencias con Quantico

| Aspecto | Quantico | AdvocatesPro |
|---------|----------|--------------|
| Prefijo | `$qt-` | `$ap-` |
| Primary | Azul (`#0061fe`) | Azul (`#0061fe`) — identico |
| Secondary | Purpura (`#9e54e2`) | **Rosa (`#ee4a79`)** — distintivo |
| Success / Warning / Error | Identicos hex | Identicos hex |
| Grey / Neutral | Identicos hex | Identicos hex |
| Confirm modal alert btn | Warning (naranja) | **Secondary (rosa)** |
| Table action icon | Grey-800 | **Secondary-500 (rosa)** |
| Menu selected bg | Secondary-50 (purpura claro) | **Secondary-50 (rosa claro)** |
