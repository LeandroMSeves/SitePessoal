function valida(){
    var nomes;
    var email;
    var dtnasci;
    
    var dtna;
    var dthj;
    var ano;
    var quinzeanos;
    var radios;
    
    var validaNome=false;
    var validaEmail=false;
    var validaInteresse=false;
    var validaSexo=false;
    
    nomes = document.getElementById('nome').value;
    email = document.getElementById('mail').value;
    dtnasci =document.getElementById('dtnasc').value;
    radios = document.getElementsByName("ecivil");
    sexo = document.getElementById("sexo");
      
    
    if (nomes.length < 15){
        alert("Nome Inválido - Seu nome possui menos de 15 caracteres! Favor verificar!");
        document.getElementById('nome').focus();
        return false;
    }
    
    if(isNaN(nomes)== false) {
        alert("Nome Inválido - Você digitou um número! - Favor Verificar");
        document.getElementById('nome').focus();
        return false;
    }
    
    if(isNaN(nome)== true) {
        validaNome=true;
    }
    
    if(email.indexOf("@")>0 && email.indexOf(".")>0 && email.length>10){
        validaEmail=true;
    }else {
        alert("E-mail Inválido - Favor verificar!");
        document.getElementById('mail').focus();
        return false;
    }
    
    if (dtnasci.length<9){
        alert("Data Inválida - Favor verificar!");
        document.getElementById('dtnasc').focus();
        return false;
    } 
    
    
    switch(document.getElementById("sexo").value){
        case "fem":
            validaSexo=true;
            break;
        case "mas":
            validaSexo=true;
            break;
        default:
            alert(document.getElementById("sexo").value);
            alert("Sexo inválido - Escolha um gênero!");
    }
    
    if (document.formulario.ana.checked == false &&
        document.formulario.bds.checked == false &&
        document.formulario.dev.checked == false &&
        document.formulario.eds.checked == false &&
        document.formulario.rdc.checked == false){
        alert("É obrigatório escolher, pelo menos uma área de interesse.");
    }else{
        validaInteresse = true;   
    }
    
    
    
    if (validaNome == true && validaEmail == true && validaInteresse == true && validaSexo == true){
        alert("Parabéns!!! Você se cadastrou com sucesso.");
        return true;
    }
}