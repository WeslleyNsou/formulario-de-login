const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordconfimation = document.getElementById('password-confimation')

//impede a pagina de recarregar quando o botão submit for clickdo
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordconfimationValue = passwordconfimation.value;

    if(usernameValue === ""){
        setErrorFor(username, "O nome de usuario e obrigatório.");
    }else{
        setSuccessFor(username)
    }

    if(emailValue === ""){
        setErrorFor(email, "Email obrigatorio!")
    }else if(!checkEmail (emailValue)){
        setErrorFor(email, "Digite um email valido!")
    }else{
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "Senha obrigatoria!")
    }else if(passwordValue.length < 7){
        setErrorFor(password, "A senha deve conter 8 digitos!")
    }else{
        setSuccessFor(password)
    }

    if(passwordconfimationValue === ""){
        setErrorFor(passwordconfimation, "Confirmação de senha obrigatoria!")
    }else if(passwordconfimationValue !== passwordValue){
        setErrorFor(passwordconfimation, "Senhas não conferem!")
    }else{
        setSuccessFor(passwordconfimation)
    }
}

function setErrorFor(input, menssage){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //adicionar mensagem de erro
    small.innerText = menssage;

    //adicionar classe de erro
    formControl.className = "form-control erro";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //adiciona a classe de sucesso
    formControl.className = "form-control sucess";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }