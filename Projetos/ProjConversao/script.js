function converter(){
    var dolar = 5.36;
    var euro = 5.99;
    var peso = 0.07;
    var libra = 6.64;
    var yuan = 0.75;

    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano4 = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var str_data = dia + "/" + (mes + 1) + "/" + ano4;
    var str_hora = hora + ":" + min + ":" + seg;
    
    valor = parseFloat(document.getElementById("valorinicial").value);

    if (Number.isNaN(valor)){
        document.getElementById("valorconvertido").innerHTML = "<h5 style='color: red'>O campo valor é de preenchimento obrigatório e somente números!<h3>"
    }
    else{
        switch (document.getElementById("opcoes").value) {
        case "dol":    
            document.getElementById("valorconvertido").innerHTML = "<span class='valores'>US$ " + (valor/dolar).toFixed(2) + "</span>"; 
            break;
        case "eur":
            document.getElementById("valorconvertido").innerHTML = "<span class='valores'>€ " + (valor/euro).toFixed(2) + "</span>"; 
            break;
        case "pes":
            document.getElementById("valorconvertido").innerHTML = "<span class='valores'>$ " + (valor/peso).toFixed(2) + "</span>"; 
            break
        case "lib":
            document.getElementById("valorconvertido").innerHTML = "<span class='valores'>$ " + (valor/libra).toFixed(2) + "</span>"; 
            break
        case "yua":
            document.getElementById("valorconvertido").innerHTML = "<span class='valores'>¥ " + (valor/yuan).toFixed(2) + "</span>"; 
            break
        default:
            document.getElementById("valorconvertido").innerHTML = "<h5 style='color: red'>Nenhum moeda  selecionada<h3>"
        }
    }
    document.getElementById("datahora").innerHTML = "<li>Data da cotação: " + str_data + " - " + str_hora + ".</li>"
}