const $butao_acessivel = document.querySelector(".cabecalho__butao__noturno");

const $img_butao = document.querySelector(".cabecalho__butao__noturno__icon");

const $bg_color = getComputedStyle(document.documentElement).getPropertyValue(
  "--bg-color"
);
const $font_color = getComputedStyle(document.documentElement).getPropertyValue(
  "--font-color"
);

let verifica = true;

$butao_acessivel.addEventListener("click", () => {
  if (verifica == true) {
    $img_butao.setAttribute("src", "assets/iconmonstr-Moon.svg");
    document.documentElement.style.setProperty("--bg-color", "#f6f6f6");
    document.documentElement.style.setProperty("--font-color", "#121012");
    verifica = false;
  } else {
    document.documentElement.style.setProperty("--bg-color", "#121012");
    document.documentElement.style.setProperty("--font-color", "#f6f6f6");
    $img_butao.setAttribute("src", "assets/iconmonstr-weather-2.svg");
    verifica = true;
  }
});
