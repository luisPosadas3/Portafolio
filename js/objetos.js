/*let nombre = prompt("¿Como te llamas?");

if(nombre) {
    alert(`Hola ${nombre}`);
} else {
        alert("Anonimo");
    }*/

let lista = document.getElementById("log");

function registro(texto){
    let item = document.createElement("li");
    item.innerText = texto;
    return item;
}
lista.appendChild(registro("DOM LOADED"));

let timer = setTimeout(() => {
    lista.appendChild(registro("Timer a los 3 seg."));
}, 3000);

let repetidor = setInterval(() => {
    lista.appendChild(registro("Cada 1.5segs ⌛"));
}, 1500);

let btnActivaTimer = document.getElementById("activaTimer");
let btnStop = document.getElementById("pararRepetidor");

btnActivaTimer.addEventListener("click", function(){
    lista.appendChild(registro("Inicar timer..."));
    clearTimeout(timer);
    timer.setTimeout(3000);
});

btnStop.addEventListener("click", function(){
    lista.appendChild(registro("Parar repetidor"));
    clearInterval(repetidor);
});

console.table(location);
let secure = document.getElementById("secure");
if(location.protocol.value == "https"){
    secure.innerText = "Seguro";
}else{
    secure.innerText = "No seguro";
}

let fecha_actual = new Date();

console.log(fecha_actual.getFullYear());
console.log(fecha_actual.getMonth());
console.log(fecha_actual.getDate());
console.log(fecha_actual.getHours());
console.log(fecha_actual.getMinutes());
console.log(fecha_actual.getSeconds());

let navidad2024 = new Date("2024-12-24 12:00:00");
let fin2024 = new Date(2024,11,31,23,59,59);

console.log(navidad2024);
console.log(fin2024);


