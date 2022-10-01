console.log('This is my project Calculator 65 from JavaScript course');

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
    console.log(inputDigits.innerHTML);
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);
    if(buttonText == 'X'){
      buttonText = '*';
      screenValue += buttonText;
      inputDigits.innerHTML = screenValue;
    }
    else if(buttonText == 'CE'){
      screenValue = "";
      inputDigits.innerHTML = screenValue;
    }
    else if(buttonText == 'Del'){

      screenValue = popLastChar(screenValue);
			inputDigits.innerText = screenValue;
    }

    else if(buttonText =='='){
      sumTotal.innerHTML = eval(screenValue);
      //sumTotal = inputDigits.innerHTML;
    }
    else{
      screenValue += buttonText;
      inputDigits.innerHTML = screenValue;
    }
  });
}
