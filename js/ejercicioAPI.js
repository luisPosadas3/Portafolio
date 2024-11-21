let lista = document.getElementById("listaPeliculas");
let modal = document.getElementById("ventanaModal");
let span = document.getElementsByClassName("cerrar")[0];
let contenido = document.getElementById("contenido");

fetch('https://ghibliapi.vercel.app/films')
    .then((response) => response.json())
    .then((datos) => {

    datos.forEach(film => {
            let pelicula = document.createElement('div');
            pelicula.classList.add('film');
            pelicula.innerHTML = `
                <h2>${film.title}</h2>
                <img src="${film.image}" alt="">
                <p><strong>Año:</strong> ${film.release_date}</p>
                <button id="ver${film.id}">Detalles</button>
            `;
            lista.appendChild(pelicula);
            
            let boton = document.getElementById(`ver${film.id}`);

boton.addEventListener("click",function() {
    contenido.innerHTML = `
    <h1>${film.title} (${film.original_title})</h1>
    <img src="${film.image}" alt="">
    <h3><strong>Año:</strong> ${film.release_date}</h3>
    <h4>Director: ${film.director}</h4>
    <h4>Productor: ${film.producer}</h4>
    <h4>Duracion: ${film.running_time} minutos</h4>
    <h4>Rating: ${film.rt_score}</h4>
    <p><strong>Descripción:</strong> ${film.description}</p>
    `;
    modal.style.display = "block";
  });
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

  span.addEventListener("click",function() {
    modal.style.display = "none";
  });
  
  window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });