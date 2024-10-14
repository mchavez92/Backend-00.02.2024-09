function ejercicio1() {
    /**
     1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
     */
    let intNum = parseInt(document.getElementById("e1_input1").value);
    
    if(intNum>99 && intNum<1000){
        document.getElementById("Resultado_ejercicio1").innerHTML = "Es un numero positivo de 3 cifras";
    }else{
        if (intNum < -99 && intNum > -1000) {
            document.getElementById("Resultado_ejercicio1").innerHTML = "Es un numero negativo de 3 cifras";
        }else{
            document.getElementById("Resultado_ejercicio1").innerHTML = " No es un numero de 3 cifras";
        }
    }	
	document.getElementById("e1_input1").innerHTML = "";
}

function ejercicio2(){
	//2. Hacer un JavaScript en Pseint que lea un número entero por el teclado y determinar si es negativo.
    let intNum = parseInt(document.getElementById("e2_input1").value);
    
   if (intNum >= 0) {
    document.getElementById("Resultado_ejercicio2").innerHTML = "Es positivo";
   } else {
    document.getElementById("Resultado_ejercicio2").innerHTML = "Es negativo";
   }
}

function ejercicio3(){
    // Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let intNum = parseFloat(document.getElementById("e3_input1").value);
    
    if (intNum % 10 == 4 ) {
        document.getElementById("Resultado_ejercicio3").innerHTML = "Ultimo digito es 4";
    } else {
        document.getElementById("Resultado_ejercicio3").innerHTML = "Ultimo digito no es 4";
    }
}

function ejercicio4(){
    // Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let elMayor = parseFloat(document.getElementById("e4_input1").value);
    let elMenor = parseFloat(document.getElementById("e4_input2").value);
    let elMediano = parseFloat(document.getElementById("e4_input3").value);
    let Auxiliar = 0.0;
   

    if (elMayor <= elMenor) {
        Auxiliar = elMayor;
		elMayor=elMenor;
		elMenor=Auxiliar;
    } else {
        if (elMayor <= elMediano) {
            Auxiliar = elMayor
		    elMayor=elMenor
		    elMenor=Auxiliar
        } else {
            if (elMayor <= elMediano) {
                Auxiliar = elMediano
			    elMayor=elMediano
			    elMediano=Auxiliar
            } else {
                Auxiliar = elMediano
				elMediano=elMenor
				elMenor=Auxiliar
            }  
        } 
    }
    document.getElementById("Resultado_ejercicio4").innerHTML = `El mayor: ${elMayor}, El mediano ${elMediano}, el menor ${elMenor}`;
}


function ejercicio5(){
    // Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
    //  esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
    //   si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos 
    //   se otorgará un 40% de descuento. El precio de cada zapato es de $80.

    let precio = 80.0;
	let porcentaje1 = 0.1;
	let porcentaje2 = 0.2;
	let porcentaje3 = 0.4;
	let descuento= 0.0;
	let total=0.0;
	

    let cantidad = parseFloat(document.getElementById("e5_input1").value);
    total = (cantidad * precio);
   
    if (30 < cantidad) {
        descuento= (total)*porcentaje3;
    } else {
        if (20 < cantidad ) {
            descuento= (total)*porcentaje2;
        } else {
            if (10 < cantidad) {
                descuento= (total)*porcentaje1;
            } else {
                descuento=0
            }
        }
    }
    document.getElementById("Resultado_ejercicio5").innerHTML = `El total es: ${total} Su descuento es: ${descuento} Monto a pagar: ${total-descuento}`;
}

function ejercicio6() {
    // Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
    // se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
    // pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

    let sueldo = 0.0;
	const costoHora = 20;
	const horaExtra = 25;
	
	let horas =parseFloat( document.getElementById("e6_input1").value);

    if (horas <= 40) {
        sueldo = horas * costoHora;
    } else {
        sueldo = 800 + ((horas - 40)*horaExtra);
    }
	document.getElementById("Resultado_ejercicio6").innerHTML = `Su sueldo es: ${sueldo} `;
    
}


function ejercicio7() {
    // Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes 
    // con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
    // Los descuentos son los siguientes:

    //    Tipo A 10% de descuento
    //    Tipo B 15% de descuento
    //    Tipo C 20% de descuento
    
    const descuentoA = 0.1
	const descuentoB = 0.15
	const descuentoC = 0.2

    let tipo= 0;
	
    let arrRadios = document.getElementsByName('ordenE7');
    for (let radio of arrRadios) {
      if (radio.checked) {
        // Retorna el valor del radio seleccionado
        tipo= parseInt(radio.value); 
      }
    }
	console.log(tipo);

	let monto  =parseFloat( document.getElementById("e7_input1").value);
	
    switch (tipo) {
        case 1:
            monto = monto*(1-descuentoA)
            break;
        case 2:
            monto = monto*(1-descuentoB)
            break;
        case 3:
            monto = monto*(1-descuentoC)
            break;
        default:
            monto = monto
            break;
    }
	document.getElementById("Resultado_ejercicio7").innerHTML = `Total a Pagar:  ${monto} `;
}

function ejercicio8() {
    // 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si 
    //el estudiante aprobó o no.
    let nota1  =parseFloat( document.getElementById("e8_input1").value);
    let nota2  =parseFloat( document.getElementById("e8_input2").value);
    let nota3  =parseFloat( document.getElementById("e8_input3").value);

    //REDONDEAR !!!
    let promedio = (nota1+nota2+nota3)/3;
    let redondeadoNumero = parseFloat(promedio.toFixed(2));

    if (promedio>= 10.5) {
        document.getElementById("Resultado_ejercicio8").innerHTML = `Aprobado:  ${redondeadoNumero}`;
    } else {
        document.getElementById("Resultado_ejercicio8").innerHTML = `Desaprobado:  ${redondeadoNumero} `;
    }
}

function ejercicio9() {
    //9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
    //se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
    //si generaba menos de $2000 su aumento será de un 10%.
    const porcentaje1=0.05
	const porcentaje2=0.1
	let aumento=0.0
	
	let sueldo =parseFloat( document.getElementById("e9_input1").value);
    
	if (sueldo>2000) {
        aumento = sueldo*porcentaje1;
    } else {
        aumento = sueldo*porcentaje2;
    }
	document.getElementById("Resultado_ejercicio9").innerHTML = `Aumento optenido:  ${aumento} `;  
}

function ejercicio10() {
    //10. Hacer un algoritmo en Pseint que diga si un n�mero es par o impar.
    let num =parseFloat( document.getElementById("e10_input1").value);

    if (num % 2 === 0) {
        document.getElementById("Resultado_ejercicio10").innerHTML = ` ${num}  es par`;      
    } else {
        document.getElementById("Resultado_ejercicio10").innerHTML = ` ${num}  es impar`;  
    }
}

function ejercicio11() {
    // Hacer un algoritmo en Pseint que lea tres n�meros y diga cu�l es el mayor.
    let numeros =[];
    let numeroMayor=-999;
    let num1 = parseFloat(document.getElementById("e11_input1").value);
    numeros.push(num1);
    let num2 = parseFloat(document.getElementById("e11_input2").value);
    numeros.push(num2);
    let num3 = parseFloat(document.getElementById("e11_input3").value);
    numeros.push(num3);
    
    for (let index = 0; index < 3; index++) {
        
        if ( numeros[index] >= numeroMayor) {
            numeroMayor = numeros[index];
        }
    }
    document.getElementById("Resultado_ejercicio11").innerHTML = ` ${numeroMayor}  es el mayor`; 
}

function ejercicio12() {
    // Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
    let numeroMenor=9999;
    let num1 = parseFloat(document.getElementById("e12_input1").value);
    let num2 = parseFloat(document.getElementById("e12_input2").value);

    if (num1 === num2) {
        document.getElementById("Resultado_ejercicio12").innerHTML = ` Son iguales`; 
    } else {
        if (num1 > num2) {
            document.getElementById("Resultado_ejercicio12").innerHTML = ` ${num1} Es el mayor`; 
        } else {
            document.getElementById("Resultado_ejercicio12").innerHTML = ` ${num2} es el mayor`; 
        }
    } 
}

function ejercicio13(){
    //Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

    let char = document.getElementById("e13_input1").value;
    char = char.toLowerCase();
	
	if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        document.getElementById("Resultado_ejercicio13").innerHTML = ` "${char}" Es una vocal`; 
    } else {
        document.getElementById("Resultado_ejercicio13").innerHTML = ` "${char}" No es una vocal`; 
    }
}


function ejercicio14() {
    //14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo. 
    let aux=parseInt(document.getElementById("e14_input1").value);
    let num =-1;
    let contador =0;
    // let bandera = false;

    if (!isNaN(aux) && aux >= 1 && aux <= 10) {
        num =aux;
    } 
    
    if(num === -1){
        document.getElementById("e14_input1").value = '';
        document.getElementById("Resultado_ejercicio14").innerHTML = ` "${aux}" "Número inválido. Debe ser un entero entre 1 y 10."`; 
    }else {
        for (let index = 1; index < num+1; index++) {
            if(num % index === 0){
                contador ++;
            }
        }
        if (contador > 2) {
            document.getElementById("Resultado_ejercicio14").innerHTML = ` "${num}" No es un munero primo`; 
        } else {
            document.getElementById("Resultado_ejercicio14").innerHTML = ` "${num}" Es un munero primo`; 
        }
    }
}

function ejercicio15() {
    //15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    let unidades =0.0;
	let resultado=0.0;
    let arrRadios = document.getElementsByName('radioE15');
    for (let radio of arrRadios) {
      if (radio.checked) {
        // Retorna el valor del radio seleccionado
        tipo= parseInt(radio.value); 
      }
    }
	unidades =parseFloat(document.getElementById("e15_input1").value)
    if (arrRadios === 1) {
        resultado=unidades*(0.393701);
        resultado = parseFloat(resultado.toFixed(2));
        document.getElementById("Resultado_ejercicio15").innerHTML = ` "${resultado}" Kilogramos`; 
    } else {
        resultado=unidades*(0.453592);
        resultado = parseFloat(resultado.toFixed(2));
        document.getElementById("Resultado_ejercicio15").innerHTML = ` "${resultado}" Kilogramos`;         
    }

}

function ejercicio16() {
    //16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
    let num= parseInt(document.getElementById("e16_input1").value);
    num = num % 7;
    // console.log(num);
    switch (num) {
    case 1:
        document.getElementById("Resultado_ejercicio16").innerHTML = `El día es lunes.`;     
        break;
    case 2:
        document.getElementById("Resultado_ejercicio16").innerHTML = `El día es martes.`;
        break;
    case 3:
        document.getElementById("Resultado_ejercicio16").innerHTML = `El día es miércoles.`;
        break;
    case 4:
        document.getElementById("Resultado_ejercicio16").innerHTML = `El día es jueves.`;
        break;
    case 5:
        document.getElementById("Resultado_ejercicio16").innerHTML = `El día es viernes.`;
        break;
    case 6:
        document.getElementById("Resultado_ejercicio16").innerHTML = `El día es sábado.`;
        break;
   
    default:
        document.getElementById("Resultado_ejercicio16").innerHTML = `El día es domingo.`;
        break;
   }
}

//actualizar los valores de forma activa 
// me ayude de chat GPT
// Agregar eventos para actualizar los valores al mover los rangos
document.getElementById("e17_range1").addEventListener("input", actualizarValores);
document.getElementById("e17_range2").addEventListener("input", actualizarValores);
document.getElementById("e17_range3").addEventListener("input", actualizarValores);

function actualizarValores() {
    document.getElementById("e17_valor_range1").textContent = document.getElementById("e17_range1").value;
    document.getElementById("e17_valor_range2").textContent = document.getElementById("e17_range2").value;
    document.getElementById("e17_valor_range3").textContent = document.getElementById("e17_range3").value;
}

function ejercicio17(){
    //17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

    let hor = parseInt(document.getElementById("e17_range1").value);
    let min =parseInt(document.getElementById("e17_range2").value);
    let seg = parseInt(document.getElementById("e17_range3").value);
    
    seg =seg +1;
    if (seg === 60) {
        seg =0;
		min = min+1;
    }
	
    if (min === 60 ) {
        min =0;
		hor = hor+1;
    }
	
    if (hor === 24) {
        hor =0;
    }
	document.getElementById("Resultado_ejercicio17").innerHTML = `Horas = ${hor} : Minutos =  ${min} : Segundos = ${seg}`;
}
actualizarValores();

function ejercicio18() {
    // 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    // $10. Si se compran unidades separadas hasta 9.

    // $8. Si se compran entre 10 unidades hasta 99.

    // $7. Entre 100 y 499 unidades.

    // $6. Para mas de 500 unidades.

    // La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
    
	let cantidad = parseFloat(document.getElementById("e18_input1").value);
	let total = 0.0;

    if (cantidad >= 500) {
        total = cantidad *6;
    } else {
        if (cantidad >99) {
            total = cantidad *7;
        } else {
            if (cantidad >9) {
                total = cantidad *8
            } else {
                total = cantidad *10
            }
        }   
    }

    const comision = total * 0.0825;
    document.getElementById("e18_input1").value = '';
	document.getElementById("Resultado_ejercicio18").innerHTML = `Total: ${total}   Comision:  ${comision} `;
}