function resultado(){
    let valor1 = document.getElementById("valor1");
    let valor2 = document.getElementById("valor2");   
    let res = document.getElementById("res");

    let num1 = parseFloat(valor1.value);
    let num2 = parseFloat(valor2.value);

    let operacion = document.getElementById("operaciones");

    switch (operacion.value){

        case "suma":
            res.value = num1 + num2;
        break;

        case "resta":
            res.value = num1 - num2;
        break;

        case "multiplicacion":
            res.value = num1 * num2;
        break;

        case "division":
            res.value = num1 / num2;
        break;
    }
}