let inputDigits = document.getElementById('input-digits');
let sumTotal = document.getElementById('sumTotal');
buttons = document.querySelectorAll('button');
let screenValue = '';
// Remove last character
const popLastChar = (str) => {
	return str.slice(0, -1);
};

for(item of buttons) {
  item.addEventListener('click', (e)=>{
    buttonText = e.target.innerText;
    if(buttonText == 'X'){
      buttonText = '*';
      screenValue += buttonText;
      inputDigits.innerHTML = screenValue;
    }

    else if(buttonText == 'CE'){
      screenValue = "";
      sumTotal.innerHTML = "";
      inputDigits.innerHTML = screenValue;
    }
    else if(buttonText == 'Del'){
      screenValue = popLastChar(screenValue);
			inputDigits.innerText = screenValue;
    }
    else if(buttonText == '÷'){
      buttonText = '/';
      screenValue += buttonText;
			inputDigits.innerText = screenValue;
    }

    else{
      screenValue += buttonText;
      inputDigits.innerHTML = screenValue;
      sumTotal.innerHTML = eval(screenValue);
    }

  });
}
