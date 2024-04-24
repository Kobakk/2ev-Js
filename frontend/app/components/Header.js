import { Title } from "./Title.js";
import { Menu } from "./Menu.js";

export function Header() {
  const $header = document.createElement("header");
  //$header.appendChild(Title());
  $header.appendChild(Menu());

  return $header;
}
