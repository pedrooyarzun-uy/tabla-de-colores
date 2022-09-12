const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplcacion'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: false,
        describe: 'Muestra la tabla hasta la cantidad indicada'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser numero'
        }

        if(isNaN(argv.h)){
            throw 'Hasta tiene que ser numero'
        }

        return true
    })
    .argv

module.exports = argv;