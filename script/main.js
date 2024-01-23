let pressedButton = document.getElementsByClassName('btn');
let changeTextOnClick = document.getElementById('changeable-text')

pressedButton[0].style = 'box-shadow: 0 0 0 2px #469b38';
function focusButtons(index) {
  if(index === 0) {
    pressedButton[1].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[2].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[3].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[index].style = 'box-shadow: 0 0 0 2px #469b38';
    changeTextOnClick.innerHTML = "Găsești toată legislația și teoria structurată <span>pe 5 cursuri</span>, cel mai important fiind cursul de legislație rutieră - <span>explicat prin animații 3D.</span>"
  } else if (index === 1) {
    pressedButton[0].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[2].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[3].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[index].style = 'box-shadow: 0 0 0 2px #fe9e69';
    changeTextOnClick.innerHTML = "Găsești toate indicatoarele și marcajele rutiere <span>explicate pe înțelesul tuturor.</span>"
  } else if (index === 2) {
    pressedButton[0].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[1].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[3].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[index].style = 'box-shadow: 0 0 0 2px #2ea0b9';
    changeTextOnClick.innerHTML = "Găsești toate întrebările de la examenul oficial DRPCIV, verificate și <span>explicate Audio-Video prin animații 3D</span>  de către profesioniști."
  } else if (index === 3) {
    pressedButton[0].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[1].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[2].style = 'box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.4)';
    pressedButton[index].style = 'box-shadow: 0 0 0 2px #ed3b3b';
    changeTextOnClick.innerHTML = "Îți vei testa cunoștințele <span>acumulate deja din primii trei pași de învățare</span> la final de chestionar le va afișa pe acelea la care ai greșit."
  }
}
