const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer' //ESTO NO ES OBLIGATORIO, ES UNA DESCRIPCION ADICIONAL
}

const completado = {
    default: true,
    alias: 'c',
}


const argv = require('yargs')
    .command('crear', 'Ingrese la tarea que quiere agregar a la lista', {
        descripcion
    })
    .command('actualizar', 'Ingrese la tarea que quiere actualizar de la lista y la accion que desea hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Ingrese la tarea que quiere borrar de la lista', {
        descripcion
    })
    .help()
    .argv;


module.exports = {

    argv

}