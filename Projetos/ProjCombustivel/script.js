function calcular(){
    var vcombustivel = parseFloat(document.getElementById("vcombustivel").value);
    var opcao = document.getElementsByName("forma");
    if (opcao[0].checked){
        opcao = "litro";
    }else{
        opcao = "valor";
    }
    var validavc;
    var validali;
    var validacv;
 
    if (Number.isNaN(vcombustivel)){
        document.getElementById("resultado").innerHTML = "<span style='color:red'>Atenção, digite apenas números, igual ao exemplo: 00.00 ou 00,00!!!</span>";
    }else{
    switch (opcao) {
        case "litro":
            clitro = parseFloat(document.getElementById("qlitro").value);
            document.getElementById("resultado").innerHTML = " R$ " + (vcombustivel * clitro).toFixed(2);
            break;
        case "valor":
            cvalor = parseFloat(document.getElementById("qvalor").value);
            document.getElementById("resultado").innerHTML = (cvalor / vcombustivel).toFixed(2) + " Litro(s)";
            break;
        default:
            alert("Escolha uma opção.");
    }
    }
}

function habilitarvalor(){
    document.form.qvalor.disabled = false;
    document.form.qlitro.disabled = true;
    
}

function habilitarlitro(){
    document.form.qvalor.disabled = true;
    document.form.qlitro.disabled = false;
    
}