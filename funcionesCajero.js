
function ConsultaCaja(valorUsuarioRetirar) {
    let valorTotal = 0;

    for (const billetes of caja) {
        valorTotal += billetes.valorBillete * billetes.cantidadBillete
    }
    if (valorTotal >= valorUsuarioRetirar) {
        return true;
    } else {
        return false;
    }
}

function Empezar() {
    cantidadBilleteUsuarioEntregado = [];
    cantidadRetirarPorUsuario = parseInt(cantidadRetirar.value);
    if (cantidadRetirarPorUsuario > 0) {
        EmpezarConsulta();
    } else {
        cambioInformacion.innerHTML = "<h4> Ingrese un valor </h4>";
    }
}

function EmpezarConsulta() {
    if (ConsultaCaja(cantidadRetirarPorUsuario)) {
        for (const billetes of caja) {

            numBilletesEntregar = Math.floor(cantidadRetirarPorUsuario / billetes.valorBillete);

            if (numBilletesEntregar >= billetes.cantidadBillete) {
                numBilletesEntregar = billetes.cantidadBillete;
                billetes.cantidadBillete = 0;
            } else if (billetes.cantidadBillete > 0) {
                billetes.cantidadBillete -= numBilletesEntregar;
            }

            cantidadRetirarPorUsuario = cantidadRetirarPorUsuario - (numBilletesEntregar * billetes.valorBillete);
            cantidadBilleteUsuarioEntregado.push(new Billetes(billetes.valorBillete, numBilletesEntregar));

        }
        imprimirCantidadBilletes();
    } else {
        cambioInformacion.innerHTML = "<h4> Este cajero no contiene esa cantidad de dinero </h4>";
    }

}

function imprimirCantidadBilletes() {
    let msg = '';
    for (const billetes of cantidadBilleteUsuarioEntregado) {
        if (billetes.cantidadBillete > 0) {
            msg += `<h4> ${billetes.cantidadBillete} billetes de $${billetes.valorBillete}.</h4>`;
        }
    }
    cambioInformacion.innerHTML = msg;
}

function obtenerNumeros(evento) {
    cantidadRetirar.value += evento.target.value;
}