const { Pool } = require('pg');

const config = {
    host: "localhost",
    port: 5432,
    database: "alwaysmusic",
    user: "postgres",
    password: "0000",
};

const pool = new Pool(config);

const nuevoEstudiante = async (estudiante) => {
    try {
        const query = {
                        text: "insert into alumnos (nombre, rut, curso, nivel) values ($1, $2, $3, $4)",
                        values: [estudiante.nombre, estudiante.rut, estudiante.curso, estudiante.nivel]
                    };

        const result = await pool.query(query);
        console.log(`Estudiante ${estudiante.nombre} agregado con éxito`);
    } catch (error) {
        const { code } = error;
        console.error(`Error al ingresar el nuevo estudiante, Error ${code}`);
    }finally{
        pool.end();
    }
};

const consultarPorRut = async (rut) => {
    try {
        const query = {
            text: "select * from alumnos where rut = $1",
            rowMode: "array",
            values: [rut]
        };

        const result = await pool.query(query);
        console.log(result.rows);
    } catch (error) {
        const { code } = error;
        console.error(`Error al consultar el rut del estudiante, Error ${code}`);
    }finally{
        pool.end();
    }
};

const todosLosEstudiantes = async () => {
    try {
        const query = {
            text: "select * from alumnos",
            rowMode: "array"
        };

        const result = await pool.query(query);
        console.log(result.rows);
    } catch (error) {
        const { code } = error;
        console.error(`Error al querer ver a todos los estudiantes,Error ${code}`);
    }finally{
        pool.end();
    }
};

const actualizarDatos = async (estudiante) => {
    try {
        const query = {
            text: "update alumnos set nombre = $1, curso = $2, nivel = $3 where rut = $4",
            values: [estudiante.nombre, estudiante.curso, estudiante.nivel, estudiante.rut],
            rowMode: "array"
        };

        const result = await pool.query(query);
        console.log(`Estudiante ${estudiante.nombre} editado con éxito`);
    } catch (error) {
        const { code } = error;
        console.error(`Error al querer actualizar los datos de los estudiantes,Error ${code}`);
    }finally{
        pool.end();
    }
};

const eliminarRegistro = async (rut) => {
    try {
        const query = {
            text: "delete from alumnos where rut = $1",
            values: [rut]
        };

        const result = await pool.query(query);
        console.log(`Registro de estudiante con rut ${rut} eliminado`);
    } catch (error) {
        const { code } = error;
        console.error(`Error al querer eliminar a un estudiante,Error ${code}`);
    }finally{
        pool.end();
    }
};

const args = process.argv.slice(2);
const opciones = args[0];

switch (opciones) {
    case 'nuevo': //node index.js nuevo "ingresar nombre" "ingresar rut" "Html5" "13"
        const [nombre, rut, curso, nivel] = args.slice(1);
        const estudianteNuevo = { nombre, rut, curso, nivel };
        nuevoEstudiante(estudianteNuevo);
        break;
    case 'rut': //node index.js rut 'ingresar rut'
        const rutEstudiante = args[1];
        consultarPorRut(rutEstudiante);
        break;
    case 'consulta': //node index.js consulta
        todosLosEstudiantes();
        break;
    case 'editar': //node index.js editar 'ingresar rut' 'Valito' 'JavaScript' '5465400'
        const [rutActualizar, nuevoNombre, nuevoCurso, nuevoNivel] = args.slice(1);
        const estudianteActualizado = { rut: rutActualizar, nombre: nuevoNombre, curso: nuevoCurso, nivel: nuevoNivel };
        actualizarDatos(estudianteActualizado);
        break;
    case 'eliminar': //node index.js eliminar 'ingresar rut'
        const rutEliminar = args[1];
        eliminarRegistro(rutEliminar);
        break;
    default:
        console.log("La opcion ingresada no es valida. Por favor ingrese alguna de estas opciones: nuevo, buscar, consulta, editar o eliminar");
}
