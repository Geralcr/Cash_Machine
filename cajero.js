let cantidadRetirar = document.getElementById("valortexto");
let botonDeConsulta = document.getElementById("consultar");
let cambioInformacion = document.getElementById("Informacion");
let numerosPorUsuario = document.getElementsByName("numeros");
for (let i = 0; i < numerosPorUsuario.length ; i++) {
    numerosPorUsuario[i].addEventListener("click",obtenerNumeros);
}

botonDeConsulta.addEventListener("click", Empezar)

class Billetes {
    constructor(valorBillete, cantidadBillete) {
        this.valorBillete = valorBillete;
        this.cantidadBillete = cantidadBillete;
    }
}

let cantidadBilleteUsuarioEntregado = [];
let caja = [];
caja[0] = new Billetes(50, 8);
caja[1] = new Billetes(20, 15);
caja[2] = new Billetes(10, 30);
caja[3] = new Billetes(5, 10);
caja[4] = new Billetes(2, 10);
caja[5] = new Billetes(1, 10);