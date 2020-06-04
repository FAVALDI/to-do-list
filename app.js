/**** */
/*** APLICACION TO DO****/
/*** FABIAN NAULA ***/


//hacemos el requerimiento del objeto de tipo yargs
const argv = require('./config/yargs').argv;

//hacemos el requerimiento del objeto de crear una nueva tarea
const porHacer = require('./to-do/to-do');

//hacemos requiere para colores
const colors = require('colors');



let comando = argv._[0]

switch (comando) {

    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');

        let listado = porHacer.getList();


        //sacamos las tareas que son objetos con descripcion y status
        for (let tarea of listado) {
            console.log('==========TO DO============'.green);
            console.log(tarea.descripcion.blue);
            console.log(tarea.completado);
            console.log('==========================='.green);
        }

        console.log("fin tareas a realizar");

        break;
    case 'actualizar':
        /*  console.log('Actualiza una tarea por hacer'); */
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);


        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;
    default:
        console.log('Comando no reconocido.');
        break;
}