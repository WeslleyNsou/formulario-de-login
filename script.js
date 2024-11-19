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

    if(username === ""){
        setErrorFor(username, "O nome de usuario e obrigatório.");
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