function habilitar(){
    document.formulario.valordois.disabled = false;
    document.getElementById("passotres").innerHTML = "3º Passo - Digite o segundo valor!";
}

function desabilitar(){
    document.formulario.valordois.disabled = true;
    document.getElementById("passotres").innerHTML = "<span class='aviso'>Essa operação, não necessita do segundo valor!</span>";
    document.getElementById("valordois").value = " ";
}

function passo2(){
    var vum = document.getElementById("valorum").value;
    if (!vum){
    }else{
        document.getElementById("passodois").innerHTML = "2º Passo - Escolha uma operação para ser realizada!";
    }
}

function calculo(){
    var radios = document.getElementsByName("operacao");
    var controle;
    var resultado;
    var vum;
    var vdois;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          //  console.log("Escolheu: " + radios[i].value);;
            controle = radios[i].value;
        }
    }
    
    if (controle == "Soma"){
        vum = parseFloat(document.getElementById("valorum").value);
        vdois = parseFloat(document.getElementById("valordois").value);
        if (isNaN(vum) == false && isNaN(vdois) == false){
            resultado = (vum + vdois);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado;
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Subtração"){
        vum = parseFloat(document.getElementById("valorum").value);
        vdois = parseFloat(document.getElementById("valordois").value);
        if (isNaN(vum) == false && isNaN(vdois) == false){
            resultado = (vum - vdois);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado;
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Multiplicação"){
        vum = parseFloat(document.getElementById("valorum").value);
        vdois = parseFloat(document.getElementById("valordois").value);
        if (isNaN(vum) == false && isNaN(vdois) == false){
            resultado = (vum * vdois);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado;
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Divisão"){
        vum = parseFloat(document.getElementById("valorum").value);
        vdois = parseFloat(document.getElementById("valordois").value);
        if (isNaN(vum) == false && isNaN(vdois) == false){
            resultado = (vum / vdois);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado.toFixed(2);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    // If da Raiz quadrada
    if (controle == "√"){
        vum = parseFloat(document.getElementById("valorum").value);
       
        if (isNaN(vum) == false){
            resultado = Math.sqrt(vum);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + vum +" é " + resultado.toFixed(5);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    
    if (controle == "Percentagem"){
        vum = parseFloat(document.getElementById("valorum").value);
        vdois = parseFloat(document.getElementById("valordois").value);
        if (isNaN(vum) == false && isNaN(vdois) == false){
            resultado = ((vum/100)*vdois);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado.toFixed(2);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Quadrado X²"){
        vum = parseFloat(document.getElementById("valorum").value);
        if (isNaN(vum) == false){
            resultado = (vum * vum);
            document.getElementById("calculado").innerHTML = "O resultado da " + vum + "² é " + resultado.toFixed(2);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "X elevado Y"){
        vum = parseFloat(document.getElementById("valorum").value);
        vdois = parseFloat(document.getElementById("valordois").value);
        if (isNaN(vum) == false && isNaN(vdois) == false){
            resultado = Math.pow(vum, vdois);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado.toFixed(2);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Seno"){
        vum = parseFloat(document.getElementById("valorum").value);
        if (isNaN(vum) == false){
            resultado = Math.sin(vum);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado.toFixed(5);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Coseno"){
        vum = parseFloat(document.getElementById("valorum").value);
        if (isNaN(vum) == false){
            resultado = Math.cos(vum);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado.toFixed(5);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Tangente"){
        vum = parseFloat(document.getElementById("valorum").value);
        if (isNaN(vum) == false){
            resultado = Math.tan(vum);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado.toFixed(5);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
    if (controle == "Log"){
        vum = parseFloat(document.getElementById("valorum").value);
        if (isNaN(vum) == false){
            resultado = Math.log(vum);
            document.getElementById("calculado").innerHTML = "O resultado da " + controle + " é " + resultado.toFixed(5);
            document.getElementById("passoquatro").innerHTML = "4º Passo - Parabéns! Seu cálculo foi realizado.";
        }else{
            alert("preencha");
        }
    }
    
}

















