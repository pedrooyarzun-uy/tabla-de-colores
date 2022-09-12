const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(base = 5, listar, hasta) => {
    try{
        let salida = ''

        for (let x = 1; x<=hasta; x++){
            salida += `${base} x ${x} = ${base*x}\n`
        }
        
        if(listar){
            console.log('=========================')
            console.log(' Tabla del numero:',base)
            console.log(' Limite hasta:', hasta)
            console.log('=========================')

            console.log(salida.rainbow)  
        } 

        fs.writeFileSync(`./output/tabla-del-${base}.txt`, salida)

        return `tabla-del-${base}.txt`
    } catch (err) {
        throw err
    }
    
}

module.exports = {
    crearArchivo
}

