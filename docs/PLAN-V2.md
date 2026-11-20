# Plan de desarrollo — Portfolio V2

## Objetivo

Simplificar el contenido, destacar los proyectos y conservar la información profesional importante. Desarrollar y probar los cambios por etapas sin afectar la versión publicada.

## Preparación

- [x] Mantener `main` como rama estable.
- [x] Crear la rama local `develop-v2` desde `main`.
- [x] Identificar la V1 con el tag `v1.0.0` y subirlo a GitHub.
- [x] Crear `CHANGELOG.md` para registrar cambios importantes entre versiones.
- [x] Actualizar `AGENTS.md` para consultar este plan y el estado de Git al iniciar una sesión.
- [x] Revisar el dominio y la documentación general en `README.md`.
- [ ] Revisar los cambios de documentación y guardarlos en un commit autorizado.
- [ ] Subir `develop-v2` a GitHub con autorización para continuar desde ambas computadoras.

## Etapa 1 — Simplificación del portfolio

- [ ] Analizar el contenido de Inicio, Sobre mí, Proyectos y Contacto.
- [ ] Presentar propuestas para reducir repeticiones y textos extensos.
- [ ] Decidir qué contenido conservar o modificar antes de eliminarlo.
- [ ] Definir cómo dar más protagonismo a los proyectos.
- [ ] Implementar y revisar los cambios aprobados por etapas.
- [ ] Probar las cuatro páginas y actualizar este plan.

## Etapa 2 — Formulario con backend propio

- [ ] Evaluar opciones y decidir la arquitectura antes de implementarla.
- [ ] Crear una rama independiente, por ejemplo `feature/formulario-backend`.
- [ ] Desarrollar y probar la solución paso a paso.
- [ ] Decidir si integrar la funcionalidad terminada a `develop-v2`.

## Etapas posteriores

- [ ] Evaluar un rediseño visual con Impeccable de uso temporal.
- [ ] Evaluar español e inglés con i18next.
- [ ] Decidir el alcance y las herramientas antes de instalar o implementar nada.

## Revisión y publicación

- [ ] Revisar responsive, accesibilidad, SEO, rendimiento y seguridad básica.
- [ ] Probar formulario, enlaces y navegación.
- [ ] Ejecutar lint y compilación de producción.
- [ ] Revisar la V2 terminada y decidir su integración a `main` y publicación.

## Acuerdos de trabajo

- `main` contiene la versión estable; `develop-v2` reúne las mejoras aprobadas.
- Las funcionalidades independientes se prueban en ramas `feature/...` antes de decidir su integración.
- No hacer commits, pushes, merges ni publicaciones sin autorización.
- Actualizar este documento al cerrar etapas importantes y guardar los avances autorizados en GitHub.
