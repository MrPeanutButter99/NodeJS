const fs = require('fs')

// const crearArchivo = (base = 5) => {
//     return new Promise ( ( resolve, reject ) => {
//         if ( base <=10 && base > 0){
//             console.log('=================')
//             console.log(`Tabla del ${base}`)
//             console.log('=================')
        
//             let salida = ''
        
//             for( let i= 1; i<=10; i++ ){
//                 salida += `${ base } * ${ i } = ${ base * i }\n`
//             }
        
//             fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//                 if (err) throw err
//             })            

//             resolve(`tabla-${base}.txt creado`)
//         } else {
//             reject('La base ingresada no es correcta.')
//         }

//     })
// }

const crearArchivo = async (base = 5, l = false) => {
    try {
            console.log('=================')
            console.log(`Tabla del ${base}`)
            console.log('=================')
        
            let salida = ''
        
            for( let i= 1; i<=10; i++ ){
                salida += `${ base } * ${ i } = ${ base * i }\n`
            }

            if( l === true) {
                console.log(salida)
            }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            
            return `tabla-${base}.txt`

    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}