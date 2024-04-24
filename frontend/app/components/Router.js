import config_db from "../helpers/config_db.js";
import { peticion } from "../helpers/peticion.js";
import { Books } from "./Books.js";
import { Container } from "./Container.js";
// import {Books} from "/Books.js";

export function Router() {
  const $main = document.getElementById("main");
  const $centerContainer = document.getElementById("centerContainer");
  let { hash } = location;

  if (hash == "") {
    fetch(config_db.BOOKS_ALL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        for (let i = 0; i < data["data"].length; i++) {
          $centerContainer.appendChild(Books(data["data"][i]));
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  } else if (hash == "#recomendar") {
    let randomIndex;
    fetch(config_db.BOOKS)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let arrayLenght = data["data"].length;
        randomIndex = Math.floor(Math.random() * arrayLenght);
        $centerContainer.appendChild(Books(data["data"][randomIndex]));
      });
  } else if (hash == "#buscador") {
    let busqueda;
    const $formulario = document.getElementById("formulario");
    $formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        busqueda = document.getElementById("buscador").value;
        fetch(config_db.BOOKS_ALL)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            $centerContainer.innerHTML = "";
            for (let i = 0; i < data["data"].length; i++) {
              let titulo = data["data"][i]["title"];
              if (titulo.includes(busqueda)) {
                $centerContainer.appendChild(Books(data["data"][i]));
              }
            }
          })
        .catch((error) => {
        console.log("error:", error);
      });
      })

  } else {
    $main.innerHTML = "No conozco la ruta";
  }
}
