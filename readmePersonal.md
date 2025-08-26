# Personal Developer README: mayMayTools

## 1. Introduction

This document serves as a personal guide and reference for Mery Vega, the developer of the `mayMayTools` project (internally named `dev-tools-catalog`). It outlines the project's architecture, logic, key functionalities, development practices, and other relevant information to aid in ongoing development and maintenance.

## 2. Core Technologies

- **Build Tool**: Vite
- **Main Language**: TypeScript
- **Framework**: React.js
- **Routing**: React Router DOM (`react-router-dom`)
- **Styling**: Tailwind CSS
    - Plugins: `@tailwindcss/forms`, `@tailwindcss/line-clamp`, `@tailwindcss/typography`
- **Linting**: ESLint
- **Form Handling**: React Hook Form (`react-hook-form`)
- **Icons**: Lucide React (`lucide-react`)
- **Date Utilities**: `date-fns`
- **Email Integration**: `@emailjs/browser` and/or `@formspree/react`

## 3. Project Structure

*(To be filled in based on the workspace structure and further analysis)*

*   `public/`: Static assets that are directly served.
    *   `public/img/tools/`: Images specifically for tools.
*   `src/`: Main source code for the application.
    *   `src/components/`: Reusable React components.
        *   `src/components/blog/`: Components specific to the blog feature.
    *   `src/contexts/`: React context providers for global state management.
    *   `src/data/`: Static data, mock data, or data fetching modules.
    *   `src/hooks/`: Custom React hooks.
    *   `src/img/tools/`: Images used within the source code (likely imported by components).
    *   `src/pages/`: Top-level components representing application pages/routes.
        *   `src/pages/blog/`: Page components specific to the blog.
    *   `src/styles/`: Global styles or Tailwind base configurations (though most styling is utility-first).
    *   `src/types/`: TypeScript type definitions and interfaces.
    *   `src/utils/`: Utility functions and helpers.
*   `.env`, `.env.example`: Environment variable configuration.
*   `eslint.config.js`: ESLint configuration file.
*   `index.html`: The main HTML entry point for Vite.
*   `package.json`: Project metadata, dependencies, and scripts.
*   `postcss.config.js`: PostCSS configuration (used by Tailwind CSS).
*   `tailwind.config.js`: Tailwind CSS configuration.
*   `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuration files.
*   `vite.config.ts`: Vite build tool configuration.

## 4. Key Functionalities & Logic

*(This section will be expanded as more understanding of the project's purpose is gained. Currently, it appears to be a catalog of developer tools, possibly with a blog section.)*

## 5. Development Workflow

### 5.1. Prerequisites

- Node.js (check `package.json` or project docs for specific version, if any)
- npm or yarn (based on `package-lock.json`, npm is used)

### 5.2. Installation

1.  Clone the repository (if not already done).
2.  Install dependencies:
    ```bash
    npm install
    ```

### 5.3. Running the Project (Development Mode)

```bash
npm run dev
```
This command starts the Vite development server, typically accessible at `http://localhost:5173` (Vite's default) or another port if configured.

### 5.4. Building for Production

```bash
npm run build
```
This command compiles and bundles the application into the `dist/` directory (Vite's default output folder).

### 5.5. Previewing the Production Build

```bash
npm run preview
```
This command serves the contents of the `dist/` folder locally, allowing you to test the production build before deployment.

### 5.6. Linting the Codebase

```bash
npm run lint
```
This command runs ESLint to check for code quality and style issues across the project.

## 6. Coding Standards and Methodologies

This project adheres to the following principles and guidelines, as specified by Mery Vega:

- **Core Stack Expertise**: ReactJS, JavaScript, TypeScript, HTML, CSS, TailwindCSS.
- **UI/UX Philosophy**:
    - Emphasis on modern UI/UX frameworks (TailwindCSS, potentially Shadcn, Radix as per preferences).
    - Clear visual hierarchy, cohesive color palette, effective typography, and sufficient contrast (WCAG 2.1 AA).
    - Intuitive navigation, familiar UI components, and clear calls-to-action.
    - Responsive design for cross-device compatibility, mobile-first approach.
    - Judicious use of animations to enhance UX.
- **Accessibility (A11y)**:
    - Adherence to WCAG guidelines.
    - Semantic HTML for screen reader compatibility.
    - Alt text for images and non-text content.
    - Keyboard navigability for all interactive elements.
- **Performance Optimization**:
    - Optimized images (WebP, size data, lazy loading).
    - Code splitting and minimizing initial load times.
    - Monitoring Core Web Vitals (LCP, FID, CLS).
    - Minimize `use client`, `useEffect`, `setState`; favor React Server Components (RSC) where applicable (though this is primarily a Vite/React SPA setup, so RSC concepts are less direct).
- **Code Implementation Guidelines**:
    - Early returns for readability.
    - Tailwind CSS for all styling; `class:` syntax preferred over ternary operators in class attributes where clearer.
    - Descriptive variable and function names (e.g., `handleClick`).
    - Accessibility attributes on interactive elements (`tabindex="0"`, `aria-label`, event handlers for click and keydown).
    - `const` for functions (`const myFunc = () => {}`) with type definitions.
    - Functional and declarative programming patterns.
    - Iteration and modularization over code duplication.
    - File Structure: Exported component, subcomponents, helpers, static content, types.
    - Naming: Lowercase with dashes for directories.
    - TypeScript: Use for all code, prefer interfaces over types, avoid enums (use maps).
    - Syntax: `function` keyword for pure functions, concise conditionals.
    - JSX: Declarative.
- **State Management**: Utilizes React Context API (inferred from `src/contexts/`) and potentially `nuqs` for URL search parameter state management if adopted.
- **Next.js App Router Conventions (Mentioned, but project is Vite-based)**: While Next.js specifics like its App Router, server components, and data fetching patterns are noted in the preferences, this project uses Vite. The principles of minimizing client-side state and optimizing rendering are still valuable.

## 7. Notes for Future Development / Personal Reminders

- Consider clarifying the primary purpose and target audience of the `dev-tools-catalog` to better inform future feature development.
- Review the use of both `@emailjs/browser` and `@formspree/react`; typically one is chosen. Determine if both are actively used or if one is legacy/experimental.
- *(Add any specific areas of the codebase that need attention, refactoring ideas, or features you plan to implement next)* 