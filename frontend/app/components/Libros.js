export function Libros(datos){
    const $contenedor = document.createElement('div');
    const $libros = document.createElement('div');
    $libros.innerHTML = `
    <form><label> Libro: 
        <input type="text" id="busca" placeholder="Escribe el titulo"></label>
    </form>`;
    $contenedor.innerHTML = '';
    datos.forEach(element => {
        $contenedor.innerHTML = $contenedor.innerHTML + `
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        <div class="col w-20 p-3">
          <div class="card">
            <img
              src="${element.img}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text text-truncate">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Read more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    });
    $libros.appendChild($contenedor);
    $libros.addEventListener('keyup', () => {
        let $busca = document.getElementById('busca').value;
        let filtro = datos.filter((e) => e.title.includes($busca));
        $contenedor.innerHTML='';
        
        filtro.forEach(element => {
            $contenedor.innerHTML = $contenedor.innerHTML + `
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <div class="col w-20 p-3">
              <div class="card">
                <img
                  src="${element.img}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text text-truncate">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Read more...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
        });
    })


    return $libros;    

}