export function Books(book){
    const $div = document.createElement("div");
    $div.classList = "card";
    $div.id= "books";
    
    $div.innerHTML = `
    <img
    src="${book["img"]}"
    class="card-img-top"
    alt="${book['descripcion']}"
  />
  <div class="card-body">
    <h5 class="card-title">${book["title"]}</h5>
    <p class="card-text text-truncate">
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Read more...</a>
  </div>
    `;
    return $div;
}