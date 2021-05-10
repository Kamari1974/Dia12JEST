// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollartoYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 1.2;
    // retornamos el valor
    return valueInYen;
}
const fromYentoPound = function(valueInPound){
    // convertimos el valor a dolares
    let valueInYen = valueInPound * 0.8;
    // retornamos el valor
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


module.exports = { sum, fromEuroToDollar };
