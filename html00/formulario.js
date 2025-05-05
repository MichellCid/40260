console.log("inicio")

const boton = document.getElementById("enviar")
boton.addEventListener("click", 
    ()=> {
        console.log("los parametros")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        //console.log(user+" "+password)
        console.log(user.value)
        console.log(password.value)

    }
)