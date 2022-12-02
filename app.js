let texto = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

let contador = 0;

for(let i of texto){
    //console.log(i);
    if(i === " "){
        contador += 1;
    }
}

texto = texto.trim();

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
        contador = contador + 1;
    }
}

console.log(`La cantidad de palabras en el texto es de: ${contador + 1}`);


let arreglo_palabras = [];
arreglo_palabras = texto.trim().split(" ");

console.log(`La cantidad de palabras en el texto es de: ${arreglo_palabras.length}`);


console.log(arreglo_palabras[0]);


function contadorDePalabrasConCiclo(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            contador = contador + 1;
        }
    }
    return contador + 1;
}

function contadorDePalabrasConSplit(texto) {
    let contador = 0;
    let arreglo_palabras = texto.trim().split(" ");
    contador = arreglo_palabras.length;
    return contador;
    // return texto.trim().split(" ").length;
}

// const contadorDePalabrasConSplit = (texto) => texto.trim().split(" ").length;


console.log(`La cantidad de palabras en el texto es de: ${contadorDePalabrasConCiclo(texto)}`);
console.log(`La cantidad de palabras en el texto es de: ${contadorDePalabrasConSplit(texto)}`);

/* const sumar = function(){

} */

/* const sumar = (a, b) => {
    return a + b
} */

//const sumar = (a, b) => a + b;




const operacion = () => (a, b) => a + b;


/* function operacion() {
    return function (a, b) {
        return a + b;
    }
} */

const sumar = operacion()
console.log(sumar(20, 33));

console.log(operacion()(10, 10));

module.exports = {
    texto,
    contador,
    contadorDePalabrasConCiclo,
    contadorDePalabrasConSplit,
    operacion
}
