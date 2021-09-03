var url_string = window.location.href
var url = new URL(url_string);
let id = url.searchParams.get("id");
let userr = usuarios[id];

let nombre=document.getElementById("welcome");
nombre.textContent=('Bienvenido '+userr.usuario+" al BCP");

let accesUser=[
    {
        nombre:"martin",
        sueldo:200
    },
    {
        nombre:"gera",
        sueldo:290
    },
    {
        nombre:"maui",
        sueldo:67
    }
];
// ESTO ES PARA VER MI SALDO
let cuenta=document.getElementById("cuenta");
let consulMoney=document.getElementById("clickSaldo");

consulMoney.addEventListener("click",function() {
    for (let i = 0; i <= accesUser.length; i++) {
        let perfiUsu=accesUser[i];
        if (userr.usuario==perfiUsu.nombre) {
            cuenta.textContent="Tu cuenta es: "+perfiUsu.sueldo;
            consulMoney.setAttribute("disabled","disabled");
        }
    }
});
// ESTO ES PARA AGREGAR UN MONTO MAS
let montNeto=document.getElementById("monto");
montNeto.addEventListener("click", function(){
    
    for (let i = 0; i <= accesUser.length; i++) {
        let perfiUsu=accesUser[i];
        let ingresos=parseInt(document.getElementById("money").value);
        if (isNaN(ingresos)) {
            alert("La cantidad no es un numero completo o esta vacio");
            break;
        }else{
            if (userr.usuario==perfiUsu.nombre) {
            perfiUsu.sueldo+=ingresos;
                if (perfiUsu.sueldo<11 || perfiUsu.sueldo>990) {
                alert("Tu saldo tiene un limite de 10 a 990 USD");
                perfiUsu.sueldo-=ingresos;
                break;
                }  
            cuenta.textContent="Tu cuenta es: "+perfiUsu.sueldo;
            // AGREGAR UNA LISTA DE MONTO
            const tablacuerpo=document.getElementById("tabBod");
            const arrayElementHTML=[`<th scope="row" class="table-primary" id="td">Deposito de: ${ingresos} USD</th>`];
            arrayElementHTML.forEach(item=>{
                const tr=document.createElement('tr');
                tr.innerHTML=item;
                tablacuerpo.appendChild(tr);
            });
        }
        }
        
    }
});
// ESTO ES PARA QUITAR UN MONTO MAS
let montQuit=document.getElementById("menosmonto");
montQuit.addEventListener("click", function(){
    
    for (let i = 0; i <= accesUser.length; i++) {
        let perfiUsu=accesUser[i];
        let ingresos=parseInt(document.getElementById("money").value);
        if (isNaN(ingresos)) {
            alert("La cantidad no es un numero completo o esta vacio");
            break;
        }else{
            if (userr.usuario==perfiUsu.nombre) {
            perfiUsu.sueldo-=ingresos;
                if (perfiUsu.sueldo<11 || perfiUsu.sueldo>990) {
                alert("Tu saldo tiene un limite de 10 a 990 USD");
                perfiUsu.sueldo+=ingresos;
                break;
                } 
            cuenta.textContent="Tu cuenta es: "+perfiUsu.sueldo;
            // AGREGAR UNA LISTA DE RETIRADA
            const tablacuerpo=document.getElementById("tabBod");
            const arrayElementHTML=[`<th scope="row" class="table-danger" id="td">Retirastes: -${ingresos} USD</th>`];
            arrayElementHTML.forEach(item=>{
                const tr=document.createElement('tr');
                tr.innerHTML=item;
                tablacuerpo.appendChild(tr);
            });
        }
        }
        
    }
});