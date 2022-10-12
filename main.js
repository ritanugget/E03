//EX03 WD2 Rita Soares

console.log("hello world! (:");

//*!*alternar entre css*!*--------------------------------------------------
let cssBtn = document.querySelector("#changeCss"); // definir o botao q muda o css

cssBtn.addEventListener("click", changeCss);// quando click no botao:
  function changeCss() {
    let originalCss = document.head.querySelector("link[rel='stylesheet']"); // selecionar o link do css

    if (originalCss.hasAttribute("href")) { //se link tem href fazer:
      let styleURL = originalCss.getAttribute("href");
      if (styleURL.includes("default.css")){ //se for default:
        let newCss = "style_alternate.css";
        originalCss.setAttribute("href", newCss); // mudar para alternate
      } else {
        originalCss.setAttribute("href", "style_default.css"); // se for alternate, mudar para default ao tocar novamente
      }}
  }

  //*!*h2 "tímidos" -- aka, que desaparecem com hover e voltam *!*--------------------------------------------------

  let h2 = document.querySelectorAll("h2"); // definir o target -> h2

  for(let i = 0; i < h2.length; i++){
    h2[i].addEventListener("mouseover", function() { //rato em cima
      this.style.display = "none";//desaparecer
    });
    h2[i].addEventListener("mouseout", function() {//rato fora
      this.style.display = "block";//aparecer
    });
  }

//---------------------------------------------------------------------------------------------------------------------------

//*!* utilizador alterar o texto do header *!*----------------------------------------------------------
let target = document.querySelector("header h1");//definir target -> h1
let input = document.querySelector("#userText");// definir o input do user
//decalrar botão para alterar o conteúdo do h1(target) para o input + fazer o botão utilizar o input no target
let changeBtn = document.querySelector("#button").addEventListener ("click", changeTxt);
  function changeTxt(){
      let inputTxt = input.value; //ler o dados que o user colocou
      target.innerText = inputTxt;//substituir dados pelo target
  }

//*!* fazer o reset do h1*!*
//declarar o "botão"(a) que faz o reset + fazer o botão trocar a informação do input
let reset = document.querySelector("#reset").addEventListener ("click", resetTxt);
  function resetTxt() {
    let originalTxt = "You can change me below."; //repor o conteúdo do target
    target.innerText = originalTxt; // substituir o target pelo 'originalTxt'
  }

/*------------------------------------------------------------------
-------------------SLIDERS!!!!!!!1!!!*/
//*!* alterar o tamanho da fonte *!*
//definir slider + valor do slider + css
let sliderSize = document.querySelector(".flex-item input#size");
let newSize = document.querySelector(".flex-item .sizeValue");
let fontSize = document.querySelector(":root");

sliderSize.addEventListener ("click", changeSize);
function changeSize(){
  let newValSize = sliderSize.value; //novo valor será do slider
  fontSize.style.setProperty("--size", newValSize + "px"); //mudar o tamanho da fonte com a var --size + o valor do slider + indicação de px
  newSize.innerText = newValSize; //alterar o valor atual p/ valor do slider
}


//*!* alterar o peso da fonte *!*
//definir slider + valor do slider + css
let sliderWght = document.querySelector(".flex-item input#weight");
let newWght = document.querySelector(".flex-item .weightValue");
let fontWeight = document.querySelector(":root");

sliderWght.addEventListener ("click", changeWght);
function changeWght() {
  let newValWght = sliderWght.value; //novo valor será do slider
  fontWeight.style.setProperty("--weight", newValWght); //mudar o peso da fonte com a var --weight + o valor do slider
  newWght.innerText = newValWght;//alterar o valor atual p/ valor do slider
}

//*!* alterar o peso da fonte *!*
//definir slider + valor do slider + css
let sliderWdt = document.querySelector(".flex-item input#width");
let newWdt = document.querySelector(".flex-item .widthValue");
let fontWidth = document.querySelector(":root");

sliderWdt.addEventListener ("click", changeWdt);
function changeWdt() {
  let newValWdt = sliderWdt.value; //novo valor será do slider
  fontWidth.style.setProperty("--width", newValWdt); //mudar o espaçamento da fonte com a var --width + o valor do slider
  newWdt.innerText = newValWdt;//alterar o valor atual p/ valor do slider
}
// activate time based events
