// Examen Web Primer Bimestre
import {find} from "rxjs/operators";

const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const disctinct = require('rxjs/operators').distinct;
const path = require('path');

const data = require('./registros');

const filename = 'people.json';
const filepath = `${path.resolve('.')}/${filename}`;
const items = data.load(filepath);

// 1) Busque los tipos de "gender" en el arreglo `people.json`

const gender = items.map(x => x.gender)
console.log(gender)

// 2) Busque los tipos de "eye_color" en el arreglo `people.json`

const eye_color = items.map(x => x.eye_color)
console.log(eye_color)

// 3) Busque los tipos de "skin_color" en el arreglo `people.json`

const skin_color = items.map(x => x.skin_color)
console.log(skin_color)

// 4) Busque los tipos de "hair_color" en el arreglo `people.json`

const hair_color = items.map(x => x.hair_color)
console.log(hair_color)

//5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
//    EJ: Si hay gender `Male` y `Female`, existirian 2 arreglos, llenar esos arreglos con los caracteres que sean `Male` y `Female`


// 6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.



// 7) Calcular la sumatoria de la propiedad "mass" y la propiedad "height".


// 8)  Revisar si todos los personajes han usado vehicles.

// 9) Revisar si todos los personajes han usado starships.

// 10) Calcular en cuantos films han aparecido cada personaje:


// 11) Realizar la operacion de crear nuevos `people` con la libreria `inquirer.js`
const options = [
    {
        type: 'input',
        name: 'name',
        message: "Name",
    },
    {
        type: 'input',
        name: 'direccion',
        message: "Ingrese su direccion",
    },
    {
        type: 'input',
        name: 'telefono',
        message: "Ingrese su numero de telefono",
    },
    {
        type: 'list',
        name: 'tipo',
        message: 'Escoja el tipo de evento',
        choices: ['Carrera', 'Ciclismo', 'Duatlon', 'Triatlon'],
    },
    {
        type: 'input',
        name: 'edad',
        message: 'Ingrese su edad',
        validate: function (value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Ingrese un numero';
        },
        filter: Number
    },
    {
        type: 'input',
        name: 'talla',
        message: "Ingrese su talla",
    },
    {
        type: 'list',
        name: 'patrocinador',
        message: 'Ingrese un patrocinador',
        choices: ['Empresa', 'Grupo', 'Independiente'],
    }
];

inquirer.prompt(options).then(answers => {
    items.push({
        nombre: answers.nombre,
        direccion: answers.direccion,
        telefono: answers.telefono,
        tipo: answers.tipo,
        edad: answers.edad,
        talla: answers.talla,
        patrocinador: answers.patrocinador
    });

    data.save(filepath, items);
})