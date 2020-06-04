const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {

    // primero pasamos la informacion del array a un formato json valido con la siguiente funcion    
    let data = JSON.stringify(listadoPorHacer);

    // grabamos en un archivo    
    fs.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw new Error('Hubo un error al grabar la tarea.');
        console.log('The file has been saved!');
    });
}

const cargarDB = () => {

    // usamos un try y un catch para cuando la base de datos este vacia
    try {
        // primero traemos la informacion del archivo de la base de datos. ../ regresa al directorio anterior    /entra al siguiente
        listadoPorHacer = require('../db/data.json');

        //  console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB();

    let todo = {
        descripcion,
        completado: false
    };

    //usamos un push para ingresar el objeto todo en el arreglo de listados
    listadoPorHacer.push(todo);
    guardarDB();

    return todo;

}

const getList = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {

        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {

        return tarea.descripcion !== descripcion;

    });


    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true

    }

}


module.exports = {

    crear,
    getList,
    actualizar,
    borrar

}