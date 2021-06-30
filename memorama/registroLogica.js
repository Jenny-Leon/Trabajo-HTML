console.log("Registro de usuario")

const formularioRegistro = document.getElementById("formularioRegistro");
let lista = [];

formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreIn = document.getElementById("nombreIn")
    const correoIn = document.getElementById("correoIn")


    const nuevoUsuario = {
        usu: nombreIn.Value,
        cor: correoIn.value,

    }
    guardarUsuario(nuevoUsuario)
})

const guardarUsuario = (usuario) => {

    if(localStorage.getItem('usuarios')==null) {
        lista.push(usuario)
        const listaString = JSON.stringify(lista)
        localStorage.setItem ('usuarios' , listaString)
    } else{
        lista = JSON.parse(localStorage.getItem('usuarios'))
        
        if (!validarCorreo(lista, usuario.cor)){
        lista.push(usuario)
        const listaString = JSON.stringify(lista)
        localStorage.setItem ('usuarios', listaString)
    }else{
        console.log ("el usuari ya existe")
        }
    }
}

const validarCorreo =(arreglo, correo) =>{
    let existe = false
    for(let u of arreglo) {
        if (u.cor == correo) {
            existe = true
            return existe
        }
    }
    return existe
}