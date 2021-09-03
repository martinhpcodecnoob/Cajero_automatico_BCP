var usuarios=[
    {
        usuario:"martin",
        pass:"helloworld"
    },
    {
        usuario:"gera",
        pass: "133t"
    },
    {
        usuario:"maui",
        pass:"123"
    }
];

var currentUser;
function login( correo, password )
{
    let flatAlert = true;
    let alert = document.getElementById("liveAlert");

    for( let i=0; i < usuarios.length;i++  )
    {
        let tmpUsuario = usuarios[i];

        if( (correo.toLowerCase() === tmpUsuario.usuario.toLowerCase()) 
                && 
            ( password === tmpUsuario.pass  )  )
        {
            alert.classList.add("alert-primary");
            alert.innerText="Inicio Sesion Exitoso!!! Espera un momento para enviarte a la pagina de operaciones";
            flatAlert = false;
            setTimeout(function(){
                cleanMessage();
                location.href="pageprincipal.html?id="+i;
            }, 5000);
        }
    }

    if( flatAlert == true )
    {
        alert.classList.add("alert-danger");
        alert.textContent = "Chale!! Revisa usuario y contraseña!!"
        setTimeout(function(){cleanMessage()}, 3000);
    }

    
}

function cleanMessage()
{
    let alert = document.getElementById("liveAlert");
    alert.classList.remove("alert-danger","alert-primary");
    alert.innerText="";
}

let  btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click",function()
{
    let usuario1 = document.getElementById("txt-user").value;
    let password1 = document.getElementById("txt-pass").value;

    login(usuario1,password1);
});