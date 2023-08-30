function cadastrar() {
    let nome = document.getElementById("nome").value;

    if(nome==""){
        alert("obrigatorio o preenchiment do nome");
        document.getElementById("nome").focus();
    }

}

