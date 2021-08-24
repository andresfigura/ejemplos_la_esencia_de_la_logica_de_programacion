/*----------------------------
| ejemplo # 3 pagina 157     |
------------------------------*/
// INICIO bloque para ingresar dinamicamente la descripcion del ejemplo
let descripcion = document.getElementById("descripcion")
descripcion.innerText = "PROGRAMA PARA SACAR EL PROMEDIO DE NUMEROS POSITIVOS HASTA QUE SE PRESIONE EL BOTON"
// FIN bloque para ingresar dinamicamente la descripcion del ejemplo

let num1 = 0;
let num2 = 0;
let cuentaDigitos1 = 0;
let cuentaDigitos2 = 0;

// INICIO script paraborrar elementos del DOM que no se va a necesitar en este ejercicio
let resultado3 = document.getElementById("resultado3");
resultado3.style.display="none";
let bloque2 = document.querySelector(".bloque2");
bloque2.style.display="none";
// FIN script paraborrar elementos del DOM que no se va a necesitar en este ejercicio
// LE AGREGAMOS UNA DESCRIPCION AL RESULTADO
let resultado1 = document.getElementById("resultado1").innerHTML="NUMEROS GUARDADOS:<br>"
//-------------------------------------------
// INICIO FUNCION PARA GUARDAR Y CALCULAR EL PROMEDIO
let arregloNumeros= [];
// ------------------------------------------------------
// INICIO FUNCION PARA GUARDAR CON LA TECLA ENTER
var validar= document.getElementById("numero1")
validar.addEventListener("keydown",function(e){
    if(e.keyCode ===13){
        guardar();
    }
});
// FIN FUNCION PARA GUARDAR CON LA TECLA ENTER
// ------------------------------------------------------
function guardar(){
    let numeroParaGuardar = document.getElementById("numero1").value;
    if(numeroParaGuardar != 0){
        let mostrar = document.getElementById("resultado1").innerHTML += `<span> ${numeroParaGuardar} | </span>`;
        arregloNumeros.push(parseInt(numeroParaGuardar)); 
    }
    console.log(arregloNumeros);
    document.getElementById("formulario").reset()
}

// FIN FUNCION PARA GUARDAR Y CALCULAR EL PROMEDIO
        /*let botonGuardar = document.querySelector(".bloque3 div");
            botonGuardar.addEventListener("keydown", function pulsar(e){
                if(e.keyCode === 13){
                 guardar();
                }
            })*/
function calculoTotal(){
    let cont=0;
    let sumatoria=0;
    for(let i=0;i<arregloNumeros.length;i++){
        sumatoria = sumatoria + arregloNumeros[i];
        cont++
    }
    let promedio = sumatoria/cont;
// INICIO bloque para imprimir en pantalla el resultado final
    let resultado2 = document.getElementById("resultado2")
    resultado2.innerHTML = `digtaste <span>${cont}</span> numeros y su promedio es <span>${promedio}</span>`
// FIN bloque para imprimir en pantalla el resultado final
console.log(sumatoria);
console.log(cont);
console.log(promedio);
}
function reset(){
    location.reload();
}
// num1 = document.getElementById("numero1").value;
// num1 = parseInt(num1,10);
// while(num1!=0){
//     num1= parseInt(num1/10);
//     cuentaDigitos1++;
// }

// // INICIO bloque para imprimir en pantalla el primer resultado
// let reslutado1= document.getElementById("resultado1")
// reslutado1.innerHTML = "el numero ingresado tiene "+ "<span>"+cuentaDigitos1+"</span>" + " digito(s)";

// // FIN bloque para imprimir en pantalla el primer resultado
// console.log(cuentaDigitos1);
// cuentaDigitos1=0;
// // codigo para la segunda casilla en este caso
// num2 = document.getElementById("numero2").value;
// num2 = parseInt(num2,10);
// console.log(num2);
// while(num2!=0){
//     num2= parseInt(num2/10);
//     cuentaDigitos2++;
// }
// // INICIO bloque para imprimir en pantalla el segundo resultado
// let reslutado2= document.getElementById("resultado2")
// reslutado2.innerHTML = "el numero ingresado tiene "+ "<span>"+cuentaDigitos2+"</span>" + " digito(s)";

// // FIN bloque para imprimir en pantalla el segundo resultado
// console.log(cuentaDigitos2);
// document.getElementById("formulario").reset();
// cuentaDigitos2=0;
// let numeroGrande = 741852963741852963418520968523;
// numeroGrande = BigInt(numeroGrande)
// console.log(numeroGrande)
// }