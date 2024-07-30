# Desafío - Always Music v2

## Descripción

La **escuela de música Always Music** necesita realizar mejoras en su sistema de gestión de estudiantes utilizando PostgreSQL. En esta versión del desafío, se busca validar el uso de consultas parametrizadas, la manipulación de JSON como argumento de consultas y la captura de errores en las operaciones de base de datos. 

Debes desarrollar una aplicación en Node.js utilizando el paquete `pg` para:

- Agregar un nuevo estudiante.
- Consultar los estudiantes registrados.
- Consultar estudiante por RUT.
- Actualizar la información de un estudiante.
- Eliminar el registro de un estudiante.

La aplicación debe manejar las consultas usando textos parametrizados y capturar cualquier error durante el proceso de conexión y ejecución de consultas.

## Vista Codificada

A continuación, se muestra la imagen del resultado codificado:

![002](screenshot/002.png)

## Requerimientos

1. **Consultas con JSON como argumento**:
   - **Descripción**: Todas las consultas deben recibir un JSON como argumento para el método `query` del objeto `Pool`.

2. **Consultas con texto parametrizado**:
   - **Descripción**: Utiliza textos parametrizados en las consultas para evitar problemas de seguridad y mejorar la robustez de las consultas.

3. **Captura de errores**:
   - **Descripción**: Captura y maneja los posibles errores durante las consultas e imprime los mensajes de error en la consola.

4. **Formato de resultados en arreglos**:
   - **Descripción**: Los registros obtenidos de la base de datos deben ser devueltos en formato de arreglos.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **pg**: Paquete para interactuar con bases de datos PostgreSQL desde Node.js.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar los datos de los estudiantes.

## Instrucciones para Ejecutar el Proyecto

1. **Instalación de Dependencias**:
   - Clona el repositorio y navega al directorio del proyecto.
   - Ejecuta `npm install` para instalar las dependencias necesarias.

2. **Configurar la Base de Datos**:
   - Crea una base de datos PostgreSQL y una tabla con las siguientes columnas: Nombre, Rut, Curso, Nivel.
   - Usa las siguientes sentencias SQL para crear la tabla:
     ```sql
     CREATE TABLE estudiantes (
       id SERIAL PRIMARY KEY,
       nombre VARCHAR(100),
       rut VARCHAR(20) UNIQUE,
       curso VARCHAR(50),
       nivel VARCHAR(50)
     );
     ```

3. **Ejecutar el Servidor**:
   - Ejecuta `node index.js` para iniciar el script y realizar las operaciones CRUD desde la línea de comandos.

4. **Uso de las Funciones**:
   - Utiliza las funciones proporcionadas en el archivo `index.js` para interactuar con la base de datos. Puedes ejecutar el script y pasar argumentos desde la línea de comandos para probar cada funcionalidad.

## Ejemplos de Uso

- **Agregar un nuevo estudiante**:
  ```bash
  node index.js addStudent '{"nombre": "Juan Perez", "rut": "12345678-9", "curso": "Guitarra", "nivel": "Intermedio"}'

## Autor

Este proyecto fue desarrollado por **Valeria Torrealba**.
