//Obtener un elemento del html por su id
let titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.style.color = "red";
//Modificar los elementos ya existentes
let parrafos = document.getElementsByTagName("p");
console.table(parrafos);
Array.from(parrafos).forEach((el, idx) => {
    el.innerText = "Texto " + (idx + 1);
});

let parrafos2 = document.getElementsByClassName("parrafo");
console.log(parrafos[1].textContent);
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo parrafo</strong>";

let parrafo = document.querySelector(".parrafo");
console.log(parrafo.textContent);
parrafo.className = "nuevo-parrafo";

let parrafoNuevo = document.createElement("p");
parrafoNuevo.innerText = "Este parrafo tiene un emoji 👻";
document.body.appendChild(parrafoNuevo);
//Agregar nuevos elementos
let h1 = document.querySelector("h1");
h1.innerText = "Titulo dinamico";
let hr = document.createElement("hr");

parrafoNuevo.prepend(h1);
//parrafoNuevo.parentElement.appendChild(hr); Tambien sirve para que no este dentro del parrafo
parrafoNuevo.append(hr)

//Eliminar elementos ya existentes

//let ultimo = parrafos[3];
//ultimo.remove();

//document.body.innerHTML="";  Dejar en blanco la pagina

let padreParrafo = parrafoNuevo.parentElement;
console.log(padreParrafo);

let lista = document.createElement("ol");
for (let i = 1; i<=5; i++){
    let item = document.createElement("li");
    item.innerText = `Elemento ${i}`;
    lista.appendChild(item);
}

padreParrafo.appendChild(lista);