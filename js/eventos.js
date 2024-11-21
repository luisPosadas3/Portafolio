function saludar(){
    let salida = document.getElementById("salida_boton");
        salida.innerText = "Hola desde la funcion saludar";
}

let otro_boton = document.getElementById("otro_boton");
otro_boton.addEventListener("click",function(){
    let salida = document.getElementById("salida_otro");
    salida.innerText = "Otro saludo 😉"
});

otro_boton.addEventListener("mouseenter", function(){
    this.innerText = "Entro el mouse";
});

otro_boton.addEventListener("mouseleave", function(){
    this.innerText = "Salio el mouse";
});

otro_boton.addEventListener("mousemove", function(){
    this.innerText = "🐭";
});

let txtNombre = document.getElementById("nombre");
let salida_teclado = document.getElementById("salida_teclado");
txtNombre.addEventListener("keydown", function(event){
    salida_teclado.innerText = `Se presento ${event.key}`; //<hbd>
});

let miForm = document.getElementById("miForm");

miForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //alert("Se intento procesar el formulario");
    let txtA = document.getElementById("a");
    let txtB = document.getElementById("b");
    //console.log(a, b);
    let salida = document.getElementById("salida_suma");
    
    let a = parseInt(txtA.value);
    let b = parseInt(txtB.value);
    let resultado = a + b;
    salida.innerText = resultado;
});