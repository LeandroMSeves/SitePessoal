function gravar(){
    var nome = document.getElementById("nome").value ;
    var div = document.getElementById("segundo");
    if (nome == "" || nome.length > 10){
        alert("Por favor, preencha o campo nome com no máximo 9 caracteres");
    }else{
    var arr = nome.split("");
    var final = arr.length;
    final = final - "1";
    nome = "";
    for (var i in arr){
        if (i == final){
            nome = nome + arr[i];
        }else{
            nome = nome + arr[i] + "&#729;";
        }
    }
    
    div.innerHTML = nome;
    }
}