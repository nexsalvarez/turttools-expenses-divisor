const bmfGastosBasicos = document.querySelector('#bmf-gb');
const bmfGastosPersonales = document.querySelector('#bmf-gp');
const bmfAhorro = document.querySelector('#bmf-ahorro');
const hefNecesidadesBasicas = document.querySelector('#hef-nb');
const hefInversion = document.querySelector('#hef-inversion');
const hefAhorro = document.querySelector('#hef-ahorro');
const hefFormacion = document.querySelector('#hef-formacion');
const hefDonativos = document.querySelector('#hef-donativos');
const hefOcio = document.querySelector('#hef-ocio');
const drfVivienda = document.querySelector('#drf-vivienda');
const drfDonativos = document.querySelector('#drf-donativos');
const drfAhorro = document.querySelector('#drf-ahorro');
const drfServicios = document.querySelector('#drf-servicios');
const drfTransporte = document.querySelector('#drf-transporte');
const drfComida = document.querySelector('#drf-comida');
const drfRopa = document.querySelector('#drf-ropa');
const drfSalud = document.querySelector('#drf-salud');
const drfPersonal = document.querySelector('#drf-personal');
const drfRecreacion = document.querySelector('#drf-recreacion');
const drfDeudaInversion = document.querySelector('#drf-deuda-inversion');
const userNum = document.querySelector('#money-income');
const buttonResult = document.querySelector('#button-result');

const divisors = [
    50,
    30,
    25,
    20,
    10,
    5,
]

function balanceMoneyFormula () {
    const userMoney = Number(userNum.value);
    const a = userMoney * (divisors[0] / 100);
    const b = userMoney * (divisors[1] / 100);
    const c = userMoney * (divisors[3] / 100);

    if (userMoney > 0) {
        bmfGastosBasicos.innerHTML = a;
        bmfGastosPersonales.innerHTML = b;
        bmfAhorro.innerHTML = c;
    } else {
        console.warn('Necesitas colocar un monto mayor a cero');
    }
    console.log (a, b, c)
    return
}

function harvEkerFormula () {
    const userMoney = Number(userNum.value);
    const a = userMoney * (divisors[0] / 100);
    const b = userMoney * (divisors[4] / 100);

    if (userMoney > 0) {
        hefNecesidadesBasicas.innerHTML = a;
        hefInversion.innerHTML = b;
        hefAhorro.innerHTML = b;
        hefFormacion.innerHTML = b;
        hefDonativos.innerHTML = b;
        hefOcio.innerHTML = b;
    } else {
        console.warn('Necesitas colocar un monto mayor a cero');
    }
    console.log (a, b)
    return
}

function daveRamseyFormula () {
    const userMoney = Number(userNum.value);
    const a = userMoney * (divisors[2] / 100);
    const b = userMoney * (divisors[4] / 100);
    const c = userMoney * (divisors[5] / 100);

    if (userMoney > 0) {
        drfVivienda.innerHTML = a;
        drfDonativos.innerHTML = b;
        drfAhorro.innerHTML = b;
        drfServicios.innerHTML = b;
        drfTransporte.innerHTML = b;
        drfComida.innerHTML = b;
        drfRopa.innerHTML = c;
        drfSalud.innerHTML = c;
        drfPersonal.innerHTML = c;
        drfRecreacion.innerHTML = c;
        drfDeudaInversion.innerHTML = c;
    } else {
        console.warn('Necesitas colocar un monto mayor a cero');
    }
    console.log (a, b, c)
    return
}