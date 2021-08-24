/*----------------------------
| ejemplo # 6 pagina 163     |
-----------------------------*/
// INICIO bloque para ingresar dinamicamente la descripcion del ejemplo
let descripcion = document.getElementById("descripcion")
descripcion.innerText = "PROGRAMA PARA CALCULAR UNA POTENCIA, AL INDICAR LA BASE Y EL EXPONENTE"
// FIN bloque para ingresar dinamicamente la descripcion del ejemplo

let num1 = 0;
let num2 = 0;
let aux = 1;
let base = 0;
let exp = 0;
let res= 1;

// INICIO script paraborrar elementos del DOM que no se van a utilizar
let resultado1 = document.getElementById("resultado1");
resultado1.style.display="none";
let resultado2 = document.getElementById("resultado2");
resultado2.style.display="none";
// FIN script paraborrar elementos del DOM que no se van a utilizar

// INICIO FUNCION PARA REALIZAR EL CALCULO CON LA TECLA ENTER
var validar= document.getElementById("numero1")
validar.addEventListener("keydown",function(e){
    if(e.keyCode ===13){
        calculoTotal();
    }
});
var validar= document.getElementById("numero2")
validar.addEventListener("keydown",function(e){
    if(e.keyCode ===13){
        calculoTotal();
    }
});
// FIN FUNCION PARA REALIZAR EL CALCULO CON LA TECLA ENTER

// INICIO de la funcion Calculo
function calculoTotal(){
    res=1;
    document.getElementById("resultado3").innerText=""
    num1 = document.getElementById("numero1").value;
    num1 = parseInt(num1, 10);
    num2 = document.getElementById("numero2").value;
    num2 = parseInt(num2, 10);
    if(num2<0){
        document.getElementById("resultado3").innerHTML=`<span>Exponente ERRADO</span>`
    }else if(num2==0){
        let resultado3= document.getElementById("resultado3")
        resultado3.innerHTML=`<span>el resultado es ${res}</span>`
    }else if(isNaN(num1) && isNaN(num2)){
        num1=0;
        num2=0;
        let resultado3 = document.getElementById("resultado3")
        resultado3.innerHTML=`el resultado de <span>${num1}<sup>${num2}</sup></span> es <span>${res}</span>`
    }else if(isNaN(num2)){
        num2=0;
    }
        for(let i=0;i<num2;i++){
            if(isNaN(num1)){
                num1=0;
            }
            res*=num1;
        }
        let resultado3 = document.getElementById("resultado3")
        resultado3.innerHTML=`el resultado de <span>${num1}<sup>${num2}</sup></span> es <span>${res}</span>`
        console.log(res)
    document.getElementById("formulario").reset();
}
    
    // if (num1 < 0){
    //     document.getElementById("resultado3").innerHTML="<span>el factorial no esta definido para numeros negativos</span>";
    // }else if(isNaN(num1)){
    //     num1=0;
    //     let resultado3 = document.getElementById("resultado3");
    //     resultado3.innerHTML=`El factorial de <span>${num1}</span> es: <span>${facto}</span>`    
    // }
    // else{
    // while(cont<=num1){
    //     facto*=cont;
    //     cont++
    // }
    // resultado3 = document.getElementById("resultado3");
    // resultado3.innerHTML=`El factorial de <span>${num1}</span> es: <span>${facto}</span>`
    // }
// FIN de la funcion Calculo
