const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla a multiplicar'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Lista las tabla del número enviado por consola'

                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) ) {
                        throw "La base tiene que ser numérica."
                    }
                    return true
                })
                .argv

module.exports = argv