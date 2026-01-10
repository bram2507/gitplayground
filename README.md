# lit-hexagonal-practice

Proyecto de ejemplo con **LitElement + Vite** aplicando:
- Arquitectura **Hexagonal (Ports & Adapters)**  
- Principios **SOLID**  
- Tests: **unit**, **e2e**, **a11y**  
- Web Test Runner + Sinon para E2E y mocks  
- Interceptores y DI simple

## Scripts

- `npm install`
- `npm run dev` - servidor de desarrollo
- `npm run test:unit` - tests unitarios
- `npm run test:e2e` - tests e2e (headless browser via Playwright launcher)
- `npm run test:a11y` - tests de accesibilidad
- `npm run test` - ejecuta todos

## Estructura principal

See `src/` for domain, infrastructure, application, ui and shared layers.

Git stuff

update stuff on develop doc 