const mail = document.querySelector ("#mail");
const password = document.querySelector ("#password");
const btnLogin = document.querySelector("#login");
const btnClose = document.querySelector ("#close");
const btnLogout = document.querySelector ("#logout");
const btnLoginPage = document.querySelector ("#login-page");

let email = "";
let pass ="";

const key = "sesion"; 

mail.addEventListener("change", function (e){
    email = e.target.value;
});
password.addEventListener("change", function(e){
    pass= e.target.value;
});
btnLogin.addEventListener("click", function(e){
    if (email === "admin" && pass === "admin"){
        const usuario = new Usuario (email, pass, "admin", true);
    localStorage.setItem(key , JSON.stringify(usuario));
    btnClose.click();
    btnLoginPage.style.display = "none";
    btnLogout.style.display = "block"; 
    }else {
    console.error("Usuario o contraseña incorrecto");
    }
});

class Usuario {
    mail = "";
    password = "";
    rol = "";
    isLogged = false ;
    constructor (mail, password, rol , isLogged){
        this.mail = mail;
        this.password = password ;
        this.rol = rol;
        this.isLogged = isLogged;
    }
}