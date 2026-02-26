# Claude Configuration - Portfolio Angular

## UI/UX Design Principles - Gestalt

All UI components and layouts must follow Gestalt principles for optimal user experience:

### Core Principles
1. **Proximity**: Related elements should be grouped together. Use consistent spacing to show relationships between form fields, buttons, and content sections.

2. **Similarity**: Elements that share visual characteristics (color, shape, size) are perceived as related. Use consistent styling for similar actions/elements.

3. **Continuity**: Elements arranged in a line or curve are perceived as more related. Align form fields, use consistent grid layouts.

4. **Closure**: Users perceive incomplete shapes as complete. Use cards, borders, and containers to group related content.

5. **Figure-Ground**: Clearly distinguish between foreground (interactive elements) and background. Use elevation, shadows, and contrast.

6. **Common Region**: Elements within the same bounded area are perceived as grouped. Use cards, sections, and visual boundaries.

### Application Guidelines
- Group related form fields with visual proximity (12-16px gap within groups, 24-32px between groups)
- Use consistent card components to encapsulate related content
- Maintain visual hierarchy with typography scale and color contrast
- Align elements to a consistent grid system
- Use whitespace intentionally to create visual breathing room

---

## Icon Rules

### Source
- All icons must come from **Lucide** (https://lucide.dev/)
- Use the `lucide-angular` package for Angular integration

### Installation
```bash
npm install lucide-angular
```

### Usage in Components
```typescript
import { LucideAngularModule, Bell, Plus, ChevronDown } from 'lucide-angular';

@Component({
  imports: [LucideAngularModule],
  // ...
})
export class MyComponent {
  readonly BellIcon = Bell;
  readonly PlusIcon = Plus;
}
```

### Template Usage
```html
<lucide-icon [img]="BellIcon" [size]="24" [strokeWidth]="1.5"></lucide-icon>
```

### Common Icons Used
- `Plus` - Create/Add actions
- `Bell` - Notifications
- `CircleHelp` - Help/Info
- `ChevronDown` - Dropdowns
- `User` - User profile
- `Search` - Search functionality

---

## Button Component Rules

### Structure
- All buttons must be created as standalone Angular components
- Use Angular standalone components (no modules required)
- Follow the component structure: `button-{variant}.component.ts`

### Variants
Define the button variants for this project:
- **Primary**: Main call-to-action buttons
- **Secondary**: Secondary actions
- **White**: Bordered buttons with white background
- **Text**: Text-only buttons without background

### Sizes
- **Small**: Compact buttons for inline or tight spaces
- **Medium**: Default button size
- **Large**: Prominent buttons for main actions

### Style Guidelines
- Use CSS custom properties (CSS variables) for theming
- Follow BEM naming convention for CSS classes
- Ensure accessibility (ARIA labels, keyboard navigation, focus states)
- Support disabled state
- Include hover, active, and focus states

### TypeScript Interface
```typescript
import { LucideIconData } from 'lucide-angular';

export interface ButtonConfig {
  variant?: 'primary' | 'secondary' | 'white' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: LucideIconData;  // Lucide icon
}
```

### Component Structure
```
src/app/components/ui/
  ├── button/
  │   ├── button.component.ts
  │   ├── button.component.html
  │   ├── button.component.scss
  │   └── button.component.spec.ts
```

### Usage Example
```html
<app-button
  variant="primary"
  size="medium"
  (clicked)="handleClick()">
  Click me
</app-button>
```

### Design Tokens (from Figma SocialGest)

#### Color Palette

**Primary Colors:**
```scss
// Primary Scale
$primary-50: #e6edff;   // rgb(230, 239, 255)
$primary-100: #b0ceff;  // rgb(176, 206, 255)
$primary-200: #8ab6ff;  // rgb(138, 182, 255)
$primary-300: #5495fe;  // rgb(84, 149, 254)
$primary-400: #338ffe;  // rgb(51, 143, 254)
$primary-500: #0061fe;  // rgb(0, 97, 254) - Base Primary
$primary-600: #0058e7;  // rgb(0, 88, 231)
$primary-700: #0045b4;  // rgb(0, 69, 180)
$primary-800: #00358c;  // rgb(0, 53, 140)
$primary-900: #00296b;  // rgb(0, 41, 107)
```

**Secondary Colors (Purple):**
```scss
// Secondary Scale (Purple)
$secondary-50: #f5eefc;   // rgb(245, 238, 252)
$secondary-100: #e1caf6;  // rgb(225, 202, 246)
$secondary-200: #d2b0f2;  // rgb(210, 176, 242)
$secondary-300: #be8cec;  // rgb(190, 140, 236)
$secondary-400: #b176e8;  // rgb(177, 118, 232)
$secondary-500: #9e54e2;  // rgb(158, 84, 226) - Base Secondary
$secondary-600: #904cce;  // rgb(144, 76, 206) - Hover
$secondary-700: #703ca0;  // rgb(112, 60, 160) - Active
$secondary-800: #572e7c;  // rgb(87, 46, 124)
$secondary-900: #42235f;  // rgb(66, 35, 95)
```

**Grey Colors:**
```scss
// Grey Scale
$grey-300: #7d7d7d;  // White button text
```

**White Colors:**
```scss
// White Scale
$white-500: #ffffff;  // White button background
$white-800: #f1f1f1;  // Text on primary/secondary buttons
```

#### Button Design Tokens
```scss
// Primary Button
$button-primary-bg: $primary-500;           // #0061fe
$button-primary-text: $white-800;           // #f1f1f1
$button-primary-hover: $primary-600;        // #0058e7
$button-primary-active: $primary-700;       // #0045b4
$button-primary-disabled-bg: rgba($primary-500, 0.4);

// Secondary Button (Purple)
$button-secondary-bg: $secondary-500;       // #9e54e2
$button-secondary-text: $white-800;         // #f1f1f1
$button-secondary-hover: $secondary-600;    // #904cce
$button-secondary-active: $secondary-700;   // #703ca0
$button-secondary-disabled-bg: rgba($secondary-500, 0.4);

// White Button
$button-white-bg: $white-500;               // #ffffff
$button-white-text: $grey-300;              // #7d7d7d
$button-white-border: $grey-200;            // Light grey border

// Text Button
$button-text-color: $primary-500;
$button-text-hover: $primary-600;
$button-text-active: $primary-700;

// Spacing (from Figma)
$button-padding-small: 8px 20px;
$button-padding-medium: 10px 24px;
$button-padding-large: 14px 28px;

// Typography (from Figma)
$button-font-family: 'Urbanist', sans-serif;
$button-font-size-small: 14px;
$button-font-size-medium: 16px;
$button-font-size-large: 18px;
$button-font-weight: 600;

// Border
$button-border-radius: 12px;
$button-border-width: 1px;

// Transitions
$button-transition: all 0.2s ease-in-out;
```

### Testing Requirements
- Unit tests for all button variants
- Accessibility tests (keyboard navigation, screen readers)
- Visual regression tests for all states

### Notes
- Extract design tokens from Figma design system
- Ensure consistency with the SocialGest design
- Follow Angular best practices and style guide

---

## Select Component Rules

### Structure
- Standalone Angular component with ControlValueAccessor support
- Compatible with Angular Reactive Forms
- Follow the component structure: `select.component.ts`

### Sizes
- **Small**: 36px height, 14px text, 16px icons
- **Medium**: 40px height, 16px text, 20px icons
- **Large**: 48px height, 18px text, 20px icons (default)

### Features
- Optional label text
- Optional left icon (Lucide)
- Chevron down icon (rotates when open)
- Dropdown with options
- Keyboard navigation (Enter, Space, Escape, Arrow keys)
- Disabled state support

### Style Guidelines
- Use design tokens from `_tokens.scss`
- Follow BEM naming convention for CSS classes
- Ensure accessibility (ARIA roles, keyboard navigation, focus states)
- Include hover, focus, and disabled states

### TypeScript Interface
```typescript
import { LucideIconData } from 'lucide-angular';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectConfig {
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  leftIcon?: LucideIconData;
  showChevron?: boolean;
  options?: SelectOption[];
}
```

### Component Structure
```
src/app/components/ui/
  ├── select/
  │   ├── select.component.ts
  │   ├── select.component.html
  │   └── select.component.scss
```

### Usage Example
```html
<app-select
  size="large"
  label="Label text"
  placeholder="Placeholder input"
  [options]="options"
  (selectionChange)="onSelect($event)">
</app-select>
```

### With Reactive Forms
```html
<app-select
  [formControl]="myControl"
  [options]="options"
  label="Select option">
</app-select>
```

### Select Design Tokens (from Figma)
```scss
// Select Colors
$select-bg: $white-500;                     // #ffffff
$select-border: #c3c3c3;                    // grey border
$select-border-focus: $primary-500;         // #0061fe
$select-placeholder-color: $grey-300;       // #7d7d7d
$select-text-color: #222222;                // grey-800
$select-label-color: #222222;               // grey-800
$select-icon-color: $grey-300;              // #7d7d7d

// Select Heights (from Figma)
$select-height-small: 36px;
$select-height-medium: 40px;
$select-height-large: 48px;

// Select Typography
$select-font-family: 'Urbanist', sans-serif;
$select-font-size-small: 14px;
$select-font-size-medium: 16px;
$select-font-size-large: 18px;
$select-font-weight: 600;

// Select Border & Shape
$select-border-radius: 10px;
$select-border-width: 1px;
```

### Testing Requirements
- Unit tests for all size variants
- Accessibility tests (keyboard navigation, screen readers)
- Form integration tests (ControlValueAccessor)

---

## Search Input Component Rules

### Structure
- Standalone Angular component with ControlValueAccessor support
- Compatible with Angular Reactive Forms
- Pill-shaped (fully rounded) input field
- Follow the component structure: `search-input.component.ts`

### Sizes
- **Small**: 36px height, 16px text
- **Medium**: 40px height, 16px text
- **Large**: 50px height, 20px text (default)

### Features
- Search icon (Lucide) on the left
- Optional clear/X icon on the right (appears when has value)
- Placeholder text
- Keyboard navigation (Enter to search, Escape to clear)
- Disabled state support
- Full width option

### Style Guidelines
- Use design tokens from `_tokens.scss`
- Follow BEM naming convention for CSS classes
- Pill-shaped border radius (50px)
- Ensure accessibility (ARIA labels, keyboard navigation, focus states)
- Include hover, focus, and disabled states

### TypeScript Interface
```typescript
export interface SearchInputConfig {
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  showClearIcon?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}
```

### Component Structure
```
src/app/components/ui/
  ├── search-input/
  │   ├── search-input.component.ts
  │   ├── search-input.component.html
  │   └── search-input.component.scss
```

### Usage Example
```html
<app-search-input
  size="large"
  placeholder="Buscar..."
  (valueChange)="onSearchChange($event)"
  (search)="onSearch($event)"
  (cleared)="onSearchCleared()">
</app-search-input>
```

### With Reactive Forms
```html
<app-search-input
  [formControl]="searchControl"
  placeholder="Search...">
</app-search-input>
```

### Search Input Design Tokens (from Figma)
```scss
// Search Input Colors
$search-input-bg: $white-500;               // #ffffff
$search-input-border: #c3c3c3;              // grey border
$search-input-border-focus: $primary-500;   // #0061fe
$search-input-placeholder-color: #a6a6a6;   // grey-200
$search-input-text-color: #222222;          // grey-800
$search-input-icon-color: #a6a6a6;          // grey-200

// Search Input Heights (from Figma)
$search-input-height-small: 36px;
$search-input-height-medium: 40px;
$search-input-height-large: 50px;

// Search Input Typography
$search-input-font-family: 'Urbanist', sans-serif;
$search-input-font-size-small: 16px;
$search-input-font-size-medium: 16px;
$search-input-font-size-large: 20px;
$search-input-font-weight: 500;             // Medium

// Search Input Border & Shape
$search-input-border-radius: 50px;          // Pill shape
$search-input-border-width: 1px;
$search-input-width: 302px;                 // Default width
```

### Testing Requirements
- Unit tests for all size variants
- Accessibility tests (keyboard navigation, screen readers)
- Form integration tests (ControlValueAccessor)

---

## Status Badge Component Rules

### Structure
- Standalone Angular component
- Simple badge with colored dot indicator and label text
- Follow the component structure: `status-badge.component.ts`

### Variants
- **success**: Green dot (#3ace76)
- **warning**: Yellow/Orange dot (#f4b137)
- **error**: Red dot (#f44336)
- **info**: Blue dot (primary-500)
- **neutral**: Grey dot (#9e9e9e)

### Features
- Colored dot indicator on the left
- Label text
- Pill-shaped border with subtle grey border
- Optional dot visibility

### TypeScript Interface
```typescript
export type StatusBadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral';

export interface StatusBadgeConfig {
  label: string;
  variant?: StatusBadgeVariant;
  showDot?: boolean;
}
```

### Component Structure
```
src/app/components/ui/
  ├── status-badge/
  │   ├── status-badge.component.ts
  │   ├── status-badge.component.html
  │   └── status-badge.component.scss
```

### Usage Example
```html
<app-status-badge
  label="Positiva"
  variant="success">
</app-status-badge>
```

### Status Badge Design Tokens (from Figma)
```scss
// Status Badge Colors
$status-badge-bg: transparent;
$status-badge-border: #c3c3c3;              // grey-100
$status-badge-text-color: #3d3d3d;          // grey-500

// Status Colors
$status-success: #3ace76;                   // Green indicator
$status-warning: #f4b137;                   // Yellow/Orange indicator
$status-error: #f44336;                     // Red indicator
$status-info: $primary-500;                 // Blue indicator
$status-neutral: #9e9e9e;                   // Grey indicator

// Status Badge Sizes
$status-badge-height: 30px;
$status-badge-dot-size: 10px;
$status-badge-padding: 4px 10px;
$status-badge-gap: 10px;

// Status Badge Typography
$status-badge-font-family: 'Urbanist', sans-serif;
$status-badge-font-size: 14px;
$status-badge-font-weight: 600;             // SemiBold

// Status Badge Border
$status-badge-border-radius: 50px;          // Pill shape
$status-badge-border-width: 1px;
```

---

## Table Component Rules

### Structure
- Standalone Angular component
- Flexible column definitions with different cell types
- Supports text, badge, and icon/action columns
- Follow the component structure: `table.component.ts`

### Features
- Optional title above table
- Configurable columns with headers
- Row borders (optional)
- Hoverable rows (optional)
- Click events for rows and actions
- Support for badge cells (using StatusBadge)
- Support for icon/action cells

### Column Types
- **text**: Default text content
- **badge**: StatusBadge component with label and variant
- **icon**: Action icon buttons (e.g., delete, edit)

### Style Guidelines
- Use design tokens from `_tokens.scss`
- Follow BEM naming convention for CSS classes
- Ensure accessibility (ARIA roles: table, rowgroup, row, columnheader, cell)
- Headers use Urbanist Bold, body uses DM Sans Regular
- Row height: 44px
- Cell padding: 10px 20px

### TypeScript Interface
```typescript
import { LucideIconData } from 'lucide-angular';
import { StatusBadgeVariant } from '../status-badge/status-badge.component';

export type TableColumnType = 'text' | 'badge' | 'icon';

export interface TableColumn {
  key: string;
  header: string;
  type?: TableColumnType;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableBadgeData {
  label: string;
  variant: StatusBadgeVariant;
}

export interface TableIconAction {
  icon: LucideIconData;
  action: string;
  ariaLabel?: string;
}
```

### Component Structure
```
src/app/components/ui/
  ├── table/
  │   ├── table.component.ts
  │   ├── table.component.html
  │   └── table.component.scss
```

### Usage Example
```html
<app-table
  title="Mis ordenes"
  [columns]="tableColumns"
  [data]="tableData"
  (rowClick)="onRowClick($event)"
  (actionClick)="onActionClick($event)">
</app-table>
```

### Data Example
```typescript
// Column definitions
readonly tableColumns: TableColumn[] = [
  { key: 'orden', header: 'Orden' },
  { key: 'estatus', header: 'Estatus', type: 'badge' },
  { key: 'plan', header: 'Plan' },
  { key: 'monto', header: 'Monto' },
  { key: 'tipo', header: 'Tipo' },
  { key: 'codigo', header: 'Código', width: '113px' },
  { key: 'actions', header: '', type: 'icon', width: '67px', align: 'center' }
];

// Row data
readonly tableData = [
  {
    orden: '121894',
    estatus: { label: 'Positiva', variant: 'success' },
    plan: 'Professional 3.0',
    monto: '€396,60',
    tipo: 'Renovacion mensual',
    codigo: '714',
    actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' }
  }
];
```

### Table Design Tokens (from Figma)
```scss
// Table Colors
$table-bg: $white-500;                      // #ffffff
$table-border-color: #ececec;               // grey-50
$table-header-text-color: #3d3d3d;          // grey-500
$table-body-text-color: #3d3d3d;            // grey-500
$table-title-color: #222222;                // grey-800
$table-row-hover-bg: #f9f9f9;               // Subtle hover

// Table Spacing
$table-padding: 24px;                       // Container padding
$table-cell-padding: 10px 20px;             // Cell padding
$table-gap: 48px;                           // Gap between title and table

// Table Row Heights
$table-header-height: 44px;
$table-row-height: 44px;

// Table Typography
$table-title-font-family: 'Urbanist', sans-serif;
$table-title-font-size: 24px;
$table-title-font-weight: 700;              // Bold

$table-header-font-family: 'Urbanist', sans-serif;
$table-header-font-size: 16px;
$table-header-font-weight: 700;             // Bold
$table-header-letter-spacing: -0.32px;

$table-body-font-family: 'DM Sans', sans-serif;
$table-body-font-size: 16px;
$table-body-font-weight: 400;               // Regular
$table-body-letter-spacing: -0.32px;

// Table Action Icon
$table-action-icon-color: $secondary-500;   // #9e54e2
$table-action-icon-size: 20px;
```

### Testing Requirements
- Unit tests for different column types
- Accessibility tests (ARIA roles, keyboard navigation)
- Event handling tests (row clicks, action clicks)

---

## Reportes Module Rules

### Section Titles
**IMPORTANT**: All section titles in the Reportes module MUST be inside cards. No standalone titles are allowed.

#### Correct Pattern
```html
<section class="component__section">
  <div class="component__card">
    <h3 class="component__card-title">Section Title</h3>
    <!-- Content here -->
  </div>
</section>
```

#### Incorrect Pattern (DO NOT USE)
```html
<section class="component__section">
  <h3 class="component__section-title">Section Title</h3>
  <div class="component__content">
    <!-- Content here -->
  </div>
</section>
```

### Card Styling
All cards in Reportes sections must have:
- White background
- Border: 1px solid $kpi-card-border
- Border radius: 16px
- Padding: 32px

```scss
&__card {
  background: white;
  border: 1px solid $kpi-card-border;
  border-radius: 16px;
  padding: 32px;
}

&__card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  color: $primary-500;
}

&__card-title {
  font-family: 'Urbanist', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #262626;
  margin: 0 0 24px 0;  // Always 24px margin-bottom below titles
}
```

### Gradient Cards (Alerts, Insights, Signals)
For cards that show status/risk level (alerts, insights, signals), use diagonal gradient styling:

```scss
&__item {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 24px 32px 24px;
  background: linear-gradient(141.6deg, rgba(COLOR, 0) 15.2%, rgba(COLOR, 0.08) 52.7%, rgba(COLOR, 0) 112%), white;
  border-radius: 16px;
  box-shadow: 2px 5px 27px 0px rgba(0, 0, 0, 0.05);
  position: relative;

  // Diagonal gradient border
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(COLOR, 0.1) 0%, rgba(COLOR, 0.5) 50%, rgba(COLOR, 0.1) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}
```

Color variants:
- **Green (success/opportunity/high confidence)**: rgba(58, 206, 118, ...)
- **Yellow (warning/potential/medium confidence)**: rgba(244, 177, 55, ...)
- **Red (error/risk/low confidence)**: rgba(240, 112, 112, ...)

### Chart Styling Rules
**IMPORTANT**: All charts (bar charts, pie charts, stacked bars) MUST use gradient colors. Never use solid/flat colors.

#### Bar Charts (Vertical & Horizontal)
Use ApexCharts fill gradient configuration:
```typescript
fill: {
  type: 'gradient',
  gradient: {
    shade: 'light',
    type: 'vertical',
    shadeIntensity: 0.4,
    gradientToColors: undefined,
    inverseColors: false,
    opacityFrom: 1,
    opacityTo: 0.6,
    stops: [0, 90, 100]
  }
}
```

#### Pie Charts
Always set `[useGradient]="true"` on the pie-chart component:
```html
<app-pie-chart
  [data]="data"
  [useGradient]="true">
</app-pie-chart>
```

#### CSS Stacked Bars
For CSS-based stacked bars (non-ApexCharts), use linear gradients:
```scss
// Main/highlight segment
&--main {
  background: linear-gradient(90deg, $secondary-400 0%, $secondary-500 100%);
}

// Legend dots use vertical gradient
&__legend-dot {
  background: linear-gradient(180deg, #{$color}80 0%, #{$color} 100%);
}
```

#### Sentiment Bars
Sentiment segments use gradients with opacity:
```scss
&--positive {
  background: linear-gradient(90deg, rgba(62, 204, 128, 0.75) 0%, rgba(62, 204, 128, 0.38) 100%);
}
&--neutral {
  background: linear-gradient(90deg, rgba(168, 213, 229, 0.85) 0%, rgba(168, 213, 229, 0.5) 100%);
}
&--negative {
  background: linear-gradient(90deg, rgba(246, 26, 74, 0.75) 0%, rgba(246, 26, 74, 0.38) 100%);
}

---

## Figma MCP Integration Rules

These rules define how to translate Figma inputs into code for this Angular project and must be followed for every Figma-driven change.

### Required Flow (do not skip)

1. Run `get_design_context` first to fetch the structured representation for the exact node(s)
2. If the response is too large or truncated, run `get_metadata` to get the high-level node map, then re-fetch only the required node(s) with `get_design_context`
3. Run `get_screenshot` for a visual reference of the node variant being implemented
4. Only after you have both `get_design_context` and `get_screenshot`, download any assets needed and start implementation
5. Translate the output (usually React + Tailwind) into this project's Angular conventions, SCSS styling, and component patterns
6. Validate against Figma for 1:1 look and behavior before marking complete

### Translation Rules (React/Tailwind → Angular/SCSS)

- IMPORTANT: Figma MCP output is typically React + Tailwind — this is a **representation of design**, not final code
- Convert React components to Angular standalone components with `@Component` decorator
- Replace Tailwind utility classes with SCSS using BEM naming convention (`.app-component__element--modifier`)
- Replace `className` with Angular `class` bindings or `[ngClass]`
- Replace `onClick` handlers with Angular `(click)` event bindings
- Replace `useState` / `useEffect` with Angular `@Input()`, `@Output()`, and lifecycle hooks
- Replace `{children}` with `<ng-content></ng-content>`
- Map Figma colors to SCSS variables from `src/styles/_tokens.scss` — never hardcode hex values
- Use `ViewEncapsulation.None` as per project convention

### Component Organization

- IMPORTANT: Always check for existing components in `src/app/components/ui/` before creating new ones
- Reusable UI components go in `src/app/components/ui/[component-name]/`
- Feature/page components go in `src/app/components/[feature-name]/`
- Report sub-sections go in `src/app/components/reportes/sections/[section-name]/`
- All components must be `standalone: true` — no NgModules

### Component File Structure

Every new component must follow this pattern:
```
src/app/components/ui/[component-name]/
├── [component-name].component.ts
├── [component-name].component.html
└── [component-name].component.scss
```

### Naming Conventions

- Component selector prefix: `app-` (e.g., `<app-button>`, `<app-kpi-card>`)
- File names: kebab-case (e.g., `search-input.component.ts`)
- CSS classes: BEM with `app-` prefix (e.g., `.app-select`, `.app-select--large`, `.app-select__icon`)
- TypeScript types: PascalCase (e.g., `ButtonVariant`, `SelectOption`)

### Styling Rules

- IMPORTANT: Use SCSS variables from `src/styles/_tokens.scss` for all colors, spacing, and typography
- IMPORTANT: Never hardcode hex colors — always reference token variables (`$primary-500`, `$grey-300`, etc.)
- Import tokens with `@import '../../../../styles/tokens'` (adjust relative path as needed)
- BEM naming convention for all CSS classes
- Fonts: `'Urbanist', sans-serif` for UI elements, `'DM Sans', sans-serif` for body/table text
- Border radius: `12px` for buttons/cards, `10px` for inputs/selects, `50px` for pills/badges/search
- All charts must use gradient fills, never solid colors

### Icon Rules

- IMPORTANT: All icons must come from **Lucide** via `lucide-angular`
- IMPORTANT: DO NOT import/add new icon packages — if Figma shows an icon, find the closest Lucide equivalent
- If the Figma MCP server returns a localhost source for an SVG/image asset, use that source directly
- Store downloaded assets in `src/assets/` or `public/images/`

### Form Components

- All form input components must implement `ControlValueAccessor` for Reactive Forms compatibility
- Include `writeValue`, `registerOnChange`, `registerOnTouched`, `setDisabledState`
- Support both `[formControl]` and standalone usage with `@Input()/@Output()`

### Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| `$primary-500` | `#0061fe` | Primary actions, links, focus borders |
| `$secondary-500` | `#9e54e2` | Secondary actions, accent elements |
| `$grey-800` | `#222222` | Primary text, headings |
| `$grey-300` | `#7d7d7d` | Placeholder text, secondary text |
| `$grey-50` | `#ececec` | Borders, dividers |
| `$status-success` | `#3ace76` | Success states |
| `$status-warning` | `#f4b137` | Warning states |
| `$status-error` | `#f44336` | Error states |
| `$white-500` | `#ffffff` | Backgrounds |

### Asset Handling

- IMPORTANT: If the Figma MCP server returns a localhost source for an image or SVG, use that source directly
- IMPORTANT: DO NOT use or create placeholders if a localhost source is provided
- IMPORTANT: DO NOT install new icon packages — all icons use `lucide-angular`
- Store downloaded image assets in `public/images/`
- Store SVG icons in `src/assets/icons/`

### Accessibility Requirements

- All interactive elements must have `aria-label` attributes
- Support keyboard navigation (Tab, Enter, Space, Escape, Arrow keys)
- Include focus-visible states for keyboard users
- Use semantic HTML elements and ARIA roles (`role="table"`, `role="button"`, etc.)
- Ensure color contrast meets WCAG AA standards
