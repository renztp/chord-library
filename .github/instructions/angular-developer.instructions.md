---
description: "Use when working on Angular frontend files, component/page creation, module architecture, or Playwright e2e tests in this workspace."
applyTo:
  - "src/**/*.ts"
  - "src/**/*.html"
  - "src/**/*.scss"
  - "e2e/**/*.ts"
  - "tests/**/*.ts"
  - "playwright.config.ts"
---

Always follow the Angular frontend conventions for this project.

- Prefer Angular modules over standalone components for generated features and pages.
- Use Angular CLI for code generation, package installation, and workspace maintenance when additional dependencies are needed.
- Optimize performance using `ChangeDetectionStrategy.OnPush`, lazy-loaded modules, `trackBy`, pure pipes, memoization, and by minimizing unnecessary change detection and DOM updates.
- Use typed RxJS and declarative observable streams for state and async data handling.
- Keep components small and focused. Separate concerns into:
  - `feature/` for routed pages and smart components that orchestrate data and services.
  - `ui/` for dumb/presentational components using `@Input()` and `@Output()`.
  - `data-access/` for feature services, stores, and API/data layers.
  - `utils/` for small shared helper functions.
- For a single-page feature, place `.ts`, `.scss`, and `.html` files directly in `feature/`.
- For complex features, organize nested subfolders inside `feature/` and `ui/`.
- When writing Playwright tests, favor maintainable flows and reusable page objects or helpers.

Use this instruction for frontend tasks such as component/page creation, performance improvements, and e2e test writing.
