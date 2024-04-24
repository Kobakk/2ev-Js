import { Container } from "./Container.js";
import { Title } from "./Title.js";

export function Main() {
  const $main = document.createElement("main");
  $main.id = "main";
  $main.classList = "container";
  $main.appendChild(Title());
  $main.appendChild(Container());

  return $main;
}
