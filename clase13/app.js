//SWEET ALERT
const boton = document.getElementById("boton");
boton.addEventListener("click",()=>{
    Swal.fire('Good job!','You clicked the button!',
'success');
});

// Swal es un objeto global que tiene un método Fire.

//Personalizamos el alert:
const botonDos = document.getElementById("botonDos");
botonDos.addEventListener("click",() => {
    Swal.fire({
        title: "Error",
        text: "El Pokemon / ID no existe",
        icon: "error",
        imageUrl: "https://placekitten.com/200/286",
        confirmButtonText: "Aceptar",
        background: "#FDEBD0",
        backdrop: "#808080"
    });
});

// Eliminar fideos
const botonTres = document.getElementById("botonTres")
let carrito = ["Arroz","Fideos","Pan"]
botonTres.addEventListener("click",()=>{
    Swal.fire({
        title: "Estas seguro de eliminar los fideos?",
        icon: "warning",
        background: "#FDE8D0",
        backdrop: "#808080",
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            carrito = carrito.filter(producto => producto !== "Fideos");
            console.log(carrito);
            Swal.fire({
                title: "Fideos eliminados",
                icon: "success",
                background: "#FDE8D0",
                backdrop: "#808080",
                confirmButtonText: "Aceptar",
            })
        }
    })
})

//un login
const botonCuatro = document.getElementById("botonCuatro")
const usuarioAutorizado = "bobo"
const passwordAutorizado = "1234"
botonCuatro.addEventListener("click",()=>{
    Swal.fire({
        title: "Login",
        html: `
            <input type="text" id="usuario" class="swal2-input" placeholder="Usuario">
            <input type="text" id="password" class="swal2-input" placeholder="Contraseña">
        `,
        confirmButtonText: "Ingresar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            const usuario = document.getElementById("usuario").value
            const password = document.getElementById("password").value
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
                Swal.fire({
                    title: "Bienvenido",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }).then((resultAceptar)=>{
                    if(resultAceptar.isConfirmed){
                        window.location.href= "./ingreso.html"
                    }
                })
                
            }else{
                Swal.fire({
                    title: "Contraseña o usuario erroneo",
                    icon: "error"
                })
            }
        }
    })
})

// Tostify
