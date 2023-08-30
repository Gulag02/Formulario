function entrar() {

 

    let email = document.getElementById("email").value;
    let password = document.getElementById("senha").value;
    alert(email)
    if (email == "" || password== "") {
        alert("Obrigatorio o peenchimento do email e senha ")
        document.querySelector("#email").focus()
    } else {
       pesquisa(email, password)
    };
    
};

function pesquisa(x,y){
    if(email=="gustavomudo@gmail.com" && senha == "1234Se"){

        window.open("../assets/index.html");
        window.close();
    }else{
        alert("Email ou senha invalido");
        document.querySelector("#username").focus();
    }

}
