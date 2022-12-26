const { number } = require('yargs')
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

// const [ , , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split("=")
const {base, l} = argv

crearArchivo(base, l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado.'))
    .catch(err => console.log(err))
