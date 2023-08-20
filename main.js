const trocarBotao = document.getElementById("trocarMidia");
const iconGear = document.getElementById("iconGear");
const mediaQuery = window.matchMedia('(max-width: 480px)');


const urlsImage = [
  "img/gear5.jpeg",
  "img/gearSecond.jpg",
  "img/bouceman.jpg",
  "img/snakeman.jpg"
];
const urlsIcon = [
  "img/iconGear5.png",
  "img/iconGearSecond.png",
  "img/iconBouceman.png",
  "img/iconSnakeman.png"
]
const mobileImage = [
  "img/mobileGear5.jpeg",
  "img/mobileGearSecond.jpeg",
  "img/mobileBouceman.jpeg",
  "img/mobileSnakeman.jpeg"
]
let imagemAtual = 0;

function trocarMidia() {
  imagemAtual = (imagemAtual + 1) % urlsIcon.length;
  if (mediaQuery.matches) {
    document.body.style.backgroundImage = `url('${mobileImage[imagemAtual]}')`;
    iconGear.src = urlsIcon[imagemAtual];
    console.log('deu certo');
  }else{
    iconGear.src = urlsIcon[imagemAtual];
    document.body.style.backgroundImage = `url('${urlsImage[imagemAtual]}')`;
  }
}
trocarBotao.addEventListener("click", trocarMidia);
if (mediaQuery.matches){
  document.body.style.backgroundImage = `url(img/mobileGear5.jpeg)`;
}else{
  document.body.style.backgroundImage = `url(img/Gear5.jpeg)`;
}
