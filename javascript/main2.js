/*----------------------------
| ejemplo # 2 pagina 151     |
-----------------------------*/
// INICIO bloque para ingresar dinamicamente la descripcion del ejemplo
let descripcion = document.getElementById("descripcion")
descripcion.innerText = "PROGRAMA PARA INDICAR LOS NUMEROS ENTEROS COMPRENDIDOS ENTRE DOS NUMEROS"
// FIN bloque para ingresar dinamicamente la descripcion del ejemplo

let num1 = 0;
let num2 = 0;
let aux = 0;
// let cuentaDigitos1 = 0;
// let cuentaDigitos2 = 0;

// INICIO script paraborrar "resultado2" y "resultado1"
let resultado1 = document.getElementById("resultado1");
resultado1.style.display="none";
let resultado2 = document.getElementById("resultado2");
resultado2.style.display="none";
// FIN script paraborrar "resultado3"
// INICIO de la funcion Calculo
function calculoTotal(){
    document.getElementById("resultado3").innerText=""
    num1 = document.getElementById("numero1").value;
    num2 = document.getElementById("numero2").value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    if (num1 < num2){
        aux = num1+1 ;
        while (aux != num2) {
            var para = document.createElement("span");
            var node = document.createTextNode(`${aux} `);
            para.appendChild(node)
            var element = document.getElementById("resultado3")
            element.appendChild(para);
            console.log(aux);
            aux++;
         }
    }
    if (num1 > num2){
        aux = num2+1 ;
    
        while (aux != num1) {
            var para = document.createElement("span");
            var node = document.createTextNode(`${aux} `);
            para.appendChild(node)
            var element = document.getElementById("resultado3")
            element.appendChild(para);
            console.log(aux);
            aux++
        }
    }
    document.getElementById("formulario").reset();
}
// FIN de la funcion Calculo




// num1 = document.getElementById("numero1").value;
// console.log(num1)
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
// console.log(num2)
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
// }