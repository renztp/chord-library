# Project Instructions: Chord Library

## Tech Stack
- **Frontend:** Ionic (Angular), Capacitor, Tailwind CSS.
- **Backend:** NestJS, PostgreSQL, Prisma.
- **State Management:** Angular Signals (preferred over RxJS for simple state).

## Coding Standards
- **Naming:** Use PascalCase for components, camelCase for variables/functions.
- **Architecture:** Maintain strict separation between NestJS Services (logic) and Controllers (routing).
- **TypeScript:** Always define interfaces for API responses; avoid using `any`.
- **UI:** Use Ionic UI components for mobile-first consistency.

## Contextual Rules
- When writing NestJS code, always include a Logger in the constructor.
- When writing Angular components, use Standalone Components by default.
- If I ask for a "Service," clarify if it's an Angular service or a NestJS service.
