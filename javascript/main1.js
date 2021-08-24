/*----------------------------
| ejemplo # 1 pagina 148- 149|
-----------------------------*/
// INICIO bloque para ingresar dinamicamente la descripcion del ejemplo
    let descripcion = document.getElementById("descripcion")
    descripcion.innerText = "PROGRAMA PARA INDICAR CUANTOS DIGITOS TIENE UN NUMERO"
// FIN bloque para ingresar dinamicamente la descripcion del ejemplo
let num1 = 0;
let num2 = 0;
let cuentaDigitos1 = 0;
let cuentaDigitos2 = 0;

// INICIO script paraborrar "resultado3"
let resultado3 = document.getElementById("resultado3");
resultado3.style.display="none";
// FIN script paraborrar "resultado3"
function calculoTotal(){
    num1 = document.getElementById("numero1").value;
    num1 = parseInt(num1,10);
    while(num1!=0){
        num1= parseInt(num1/10);
        cuentaDigitos1++;
    }

// INICIO bloque para imprimir en pantalla el primer resultado
    let reslutado1= document.getElementById("resultado1")
    reslutado1.innerHTML = "el numero ingresado tiene "+ "<span>"+cuentaDigitos1+"</span>" + " digito(s)";
    
// FIN bloque para imprimir en pantalla el primer resultado
    console.log(cuentaDigitos1);
    cuentaDigitos1=0;
    // codigo para la segunda casilla en este caso
    num2 = document.getElementById("numero2").value;
    num2 = parseInt(num2,10);
    console.log(num2);
    while(num2!=0){
        num2= parseInt(num2/10);
        cuentaDigitos2++;
    }
// INICIO bloque para imprimir en pantalla el segundo resultado
    let reslutado2= document.getElementById("resultado2")
    reslutado2.innerHTML = "el numero ingresado tiene "+ "<span>"+cuentaDigitos2+"</span>" + " digito(s)";

// FIN bloque para imprimir en pantalla el segundo resultado
    console.log(cuentaDigitos2);
    document.getElementById("formulario").reset();
    cuentaDigitos2=0;
}