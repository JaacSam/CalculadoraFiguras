// Solicitar al usuario que ingrese el tipo de figura
var figura = prompt("Ingrese el tipo de figura (cuadrado, rectangulo, triangulo o circulo):").toLowerCase();

// Función para calcular el área de un cuadrado
function calcularAreaCuadrado() {
    var lado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado:"));
    var area = lado * lado;
    alert("El área del cuadrado es: " + area);
}

// Función para calcular el área de un rectángulo
function calcularAreaRectangulo() {
    var longitud = parseFloat(prompt("Ingrese la longitud del rectángulo:"));
    var ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
    var area = longitud * ancho;
    alert("El área del rectángulo es: " + area);
}

// Función para calcular el área de un círculo
function calcularAreaCirculo() {
    var radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    var area = Math.PI * radio * radio;
    alert("El área del círculo es: " + area.toFixed(2));
}
// Función para calcular el área de un triangulo
function calcularAreaTrianguloEscaleno() {
    var ladoA = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo:"));
    var ladoB = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo:"));
    var ladoC = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo:"));
    var semiperimetro = (ladoA + ladoB + ladoC) / 2;
    var area = Math.sqrt(semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC));
    alert("El área del triángulo es: " + area.toFixed(2));
}

// Función para calcular el perímetro de un cuadrado
function calcularPerimetroCuadrado() {
    var lado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado:"));
    var perimetro = 4 * lado;
    alert("El perímetro del cuadrado es: " + perimetro);
}

// Función para calcular el perímetro de un rectángulo
function calcularPerimetroRectangulo() {
    var longitud = parseFloat(prompt("Ingrese la longitud del rectángulo:"));
    var ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
    var perimetro = 2 * (longitud + ancho);
    alert("El perímetro del rectángulo es: " + perimetro);
}

// Función para calcular el perímetro de un círculo
function calcularPerimetroCirculo() {
    var radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    var perimetro = 2 * Math.PI * radio;
    alert("El perímetro del círculo es: " + perimetro.toFixed(2));
}

// Función para calcular el perímetro de un triangulo
function calcularPerimetroTrianguloEscaleno() {
    var ladoA = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo:"));
    var ladoB = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo:"));
    var ladoC = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo:"));
    var perimetro = ladoA + ladoB + ladoC;
    alert("El perímetro del triángulo es: " + perimetro);
}
// Determinar qué cálculo realizar según la figura ingresada
switch (figura) {
    case "cuadrado":
        var opcion = prompt("¿Desea calcular el área o el perímetro?").toLowerCase();
        if (opcion === "area") {
            calcularAreaCuadrado();
        } else if (opcion === "perimetro") {
            calcularPerimetroCuadrado();
        } else {
            alert("Opción no válida.");
        }
        break;
    case "rectangulo":
        var opcion = prompt("¿Desea calcular el área o el perímetro?").toLowerCase();
        if (opcion === "area") {
            calcularAreaRectangulo();
        } else if (opcion === "perimetro") {
            calcularPerimetroRectangulo();
        } else {
            alert("Opción no válida.");
        }
        break;
    case "circulo":
        var opcion = prompt("¿Desea calcular el área o el perímetro?").toLowerCase();
        if (opcion === "area") {
            calcularAreaCirculo();
        } else if (opcion === "perimetro") {
            calcularPerimetroCirculo();
        } else {
            alert("Opción no válida.");
        }
        break;
        case "triangulo":
            var opcion = prompt("¿Desea calcular el área o el perímetro del triángulo escaleno?").toLowerCase();
            if (opcion === "area") {
                calcularAreaTrianguloEscaleno();
            } else if (opcion === "perimetro") {
                calcularPerimetroTrianguloEscaleno();
            } else {
                alert("Opción no válida.");
            }
            break;
    default:
        alert("Figura no válida.");
}
