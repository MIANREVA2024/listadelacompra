## Lista de la compra

## Descripción

Creacion de una lista de la compra donde poder añadir, modificar, eliminar productos en esta asi como poder actualizar la pagina y que ese guarden tanto los poductos guardados como los eliminados.

## Tecnologias

- Visual Studio
- HTML/CSS
- JavaScript
- Git
- Git Hub

## Uso

Hemos diseñado una interfaz intuitiva y fácil de usar, tanto para dispositivos móviles como para web.
Se trata de una lista de la compra en la que el usuario puede añadir productos a la lista, marcar los productos de la lista como comprados o no comprados para poder llevar un control, también puede eliminar un producto de la lista.
Hemos implementado la funcionalidad para poder sincronizar la lista de la compra entre diferentes dispositivos o usuarios.

![alt text](listadecompras.gif)

## Características

- **FUNCIONALIDAD 1:** AÑADIR ÍTEMS A LA LISTA
  Permite añadir un artículo con un formato estandarizado a la lista.
  Valida que el campo de entrada no esté vacío ni contenga solo espacios en blanco.
  Evita duplicados al comparar nombres de ítems sin importar mayúsculas/minúsculas.
  Limita el nombre del ítem a un máximo de 25 caracteres.
  Limpia el campo de entrada después de añadir un ítem exitosamente.
- **FUNCIONALIDAD 2:** ELIMINAR ÍTEMS DE LA LISTA
  Cada ítem tiene un botón de eliminar que permite removerlo de la lista.
  Elimina el ítem de la lista inmediatamente sin necesidad de confirmación.
- **FUNCIONALIDAD 3:** Marcar Ítems como Comprados
  Incluye una casilla de verificación para marcar ítems como "comprados".
  Cambia el estilo visual del ítem para diferenciar los artículos comprados de los que no.
  Permite desmarcar ítems, restaurando su estilo original.
- **FUNCIONALIDAD 4:** SINCRONIZACIÓN DE ÍTEMS CON UNA API EXTERNA
  Carga automáticamente los ítems desde la API al iniciar la aplicación.
  Cada ítem recibe un ID único de la API para facilitar la gestión de datos.
  Sincroniza automáticamente los cambios en la lista (añadir, eliminar, marcar como comprado) con la API.
  Al recargar la página, muestra el estado actualizado de cada ítem en la lista.

## Autores y Agradecimientos

|                                                                                     **Miguel Reyes**                                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|            <a href="https://github.com/MIANREVA2024"> <img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a>             |
| <a href="https://www.linkedin.com/in/miguelreyesvasquez/"> <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> |


