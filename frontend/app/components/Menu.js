export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList = "navbar navbar-expand-lg bg-body-tertiary";
  $menu.innerHTML = `
  <div class="container-fluid">
    <a class="navbar-brand " href="#">Home</a>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <form action="#buscador" class="d-flex" id="formulario">
          <input id="buscador" class="form-control me-2" type="search" placeholder="Search" aria-label="Buscar" name="busqueda">
          <button class="btn btn-outline-success" type="submit" name="ok">Search</button>
        </form>
      </div>
    </nav>
    <a class="navbar-brand " href="#recomendar">Recomendar</a>
  </div>`;
  return $menu;
}
