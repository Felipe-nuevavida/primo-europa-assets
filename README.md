# Primo Europa Assets

Este repositorio publica activos estáticos usados por `https://primoeuropa.eu`.

## Archivo activo

- `primo-comparador.js`: módulo centralizado que asigna URLs oficiales a las tarjetas de los comparadores y muestra el panel desplegable «Ver detalles».

El contenido se genera a partir de la base de datos interna verificada. No contiene credenciales, enlaces de afiliado ni datos personales.

## Mantenimiento

Cuando se aprueben programas de afiliación, se actualizarán las URLs correspondientes en el archivo central. El sitio Ghost seguirá cargando el mismo archivo, sin editar los comparadores uno a uno.


## Auditoría de carga visual — 14 de agosto de 2026

La web principal carga `primo-opcionA.css` desde jsDelivr con un commit fijo del repositorio `primo-europa-assets`. Esto confirma que el diseño de la página principal se puede actualizar mediante un nuevo archivo CSS y un cambio explícito de la URL de carga, sin modificar el contenido, los comparadores ni el JavaScript de Ghost. La estrategia segura es mantener `primo-opcionA.css` sin cambios, crear una variante visual nueva y probarla con un commit inmutable antes de reemplazar la referencia activa.
