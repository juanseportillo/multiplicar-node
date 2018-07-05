const argv = require ('./config/yargs').argv;
const colors= require ('colors');


const {crearArchivo, listarTabla} = require ('./multiplicar/multiplicar');
//const fs = require ('express');
//const fs = require ('./fs');

//let base = '5';
let comando= argv._[0];

switch( comando ){
	case 'listar':
 	listarTabla(argv.base, argv.limite);
	break;
	case 'crear':
	crearArchivo(argv.base,argv.limite)
	    	.then(archivo=>console.log(`Archivo creado: ${archivo.green}`))
             .catch (e => console.log(e));
	break;

	default:
	console.log('Comando no reconocido');

}

//console.log(multiplicar);
//console.log( process.argv );

//console.log(base);

