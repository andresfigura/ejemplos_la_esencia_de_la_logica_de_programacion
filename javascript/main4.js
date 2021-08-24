/*----------------------------
| ejemplo # 5 pagina 160     |
-----------------------------*/
// INICIO bloque para ingresar dinamicamente la descripcion del ejemplo
let descripcion = document.getElementById("descripcion")
descripcion.innerText = "PROGRAMA PARA CALCULAR EL FACTORIAL DEL NUMERO INGRESADO"
// FIN bloque para ingresar dinamicamente la descripcion del ejemplo

let num1 = 0;
let num2 = 0;
let aux = 0;
let cont =1;
let facto =1;
// let cuentaDigitos1 = 0;
// let cuentaDigitos2 = 0;

// INICIO script paraborrar elementos del DOM que no se van a utilizar
let resultado1 = document.getElementById("resultado1");
resultado1.style.display="none";
let resultado2 = document.getElementById("resultado2");
resultado2.style.display="none";
let bloque2 = document.querySelector(".bloque2");
bloque2.style.display="none";
// FIN script paraborrar elementos del DOM que no se van a utilizar
// INICIO de la funcion Calculo
// INICIO FUNCION PARA REALIZAR EL CALCULO CON LA TECLA ENTER
var validar= document.getElementById("numero1")
validar.addEventListener("keydown",function(e){
    if(e.keyCode ===13){
        calculoTotal();
    }
});
// FIN FUNCION PARA REALIZAR EL CALCULO CON LA TECLA ENTER

function calculoTotal(){
    facto =1;
    cont = 1;
    document.getElementById("resultado3").innerText=""
    num1 = document.getElementById("numero1").value;
    num1 = parseInt(num1, 10);
    if (num1 < 0){
        document.getElementById("resultado3").innerHTML="<span>el factorial no esta definido para numeros negativos</span>";
    }else if(isNaN(num1)){
        num1=0;
        let resultado3 = document.getElementById("resultado3");
        resultado3.innerHTML=`El factorial de <span>${num1}</span> es: <span>${facto}</span>`    
    }
    else{
    while(cont<=num1){
        facto*=cont;
        cont++
    }
    resultado3 = document.getElementById("resultado3");
    resultado3.innerHTML=`El factorial de <span>${num1}</span> es: <span>${facto}</span>`
    }
    document.getElementById("formulario").reset();
}
// FIN de la funcion Calculo
