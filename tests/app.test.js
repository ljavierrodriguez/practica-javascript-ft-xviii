const { texto, contador, contadorDePalabrasConCiclo, contadorDePalabrasConSplit, operacion } = require("../app");

describe('Pruebas sobre nuestro archivo app.js', () => {

    test('La variable texto debe estar definida', () => {
        expect(typeof(texto)).not.toBe('undefined')
    })

    test('La funcion contadorDePalabrasConCiclo debe retornar un numero', () => {
        expect(typeof(contadorDePalabrasConCiclo(texto))).toBe('number');
    })

    test('La funcion contadorDePalabrasConCiclo debe retornar mayor a 100 palabras', () => {
        expect(contadorDePalabrasConCiclo(texto)).toBeGreaterThan(150);
    })    
});

test('Validar que operacion retorne una funcion', () => {
    expect(typeof(operacion())).toBe('function')
})

test('Validar que operacion retorne una la suma de 2 + 2 y debe ser 4', () => {
    expect(operacion()(2, 2)).toBe(4)
})