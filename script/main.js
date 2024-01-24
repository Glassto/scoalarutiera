let pressedButton = document.getElementsByClassName('btn');
let changeTextOnClick = document.getElementById('changeable-text')


function chk(code) {
  console.log(code)
}
pressedButton[0].style = `box-shadow: 0 0 0 2px #469b38`;

function focusButtons(index) {
  const boxShadowDefault = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
  for (let i = 0; i < pressedButton.length; i++) {
    pressedButton[i].style = boxShadowDefault;
  }

  pressedButton[index].style = `box-shadow: 0 0 0 2px ${getButtonColor(index)}`;
  changeTextOnClick.innerHTML = getButtonText(index);
  chk(clearInterval(advancer))
  
}

function getButtonColor(index) {
  const colors = ['#469b38', '#fe9e69', '#2ea0b9', '#ed3b3b'];
  return colors[index];
}
function getButtonText(index) {
  const texts = [
    "Găsești toată legislația și teoria structurată <span>pe 5 cursuri</span>, cel mai important fiind cursul de legislație rutieră - <span>explicat prin animații 3D.</span>",
    "Găsești toate indicatoarele și marcajele rutiere <span>explicate pe înțelesul tuturor.</span>",
    "Găsești toate întrebările de la examenul oficial DRPCIV, verificate și <span>explicate Audio-Video prin animații 3D</span>  de către profesioniști.",
    "Îți vei testa cunoștințele <span>acumulate deja din primii trei pași de învățare</span> la final de chestionar le va afișa pe acelea la care ai greșit."
  ];
  return texts[index];
}

let j = -1;
setInterval(automaticAdvance, 8000)
function automaticAdvance() {
  if (j > focusButtons.length + 1) {
    j = 1-1
  } else {j = ++j}
  focusButtons(j);
}
