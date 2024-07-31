function enableDisableTextBox(openCharacters){
    var characterNumber = document.getElementById("characterNumber");
    characterNumber.disabled = openCharacters.checked ? false : true;
    if (!characterNumber.disabled) {
        characterNumber.focus();
    }
}

let totalPrice = 0.00;
let addPrice;

function catchNumber(number){
   
    if(totalPrice == 0){
        totalPrice = number;
    }else{
        addPrice = number;
        totalPrice = totalPrice + addPrice;
    }
}

function catchCharacterNunber(){
    let charNumber = document.getElementById("characterNumber").value;
    if(charNumber != null){
        totalPrice = totalPrice + (charNumber * 10);
    }
}

var priceMessage = document.getElementById("messageText");

function showPrice(){

    priceMessage.innerText = "O valor estimado da comissão é " + totalPrice + " reais.";

}

//Conversor de Moedas//

async function convert(from, to) {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch('https://api.fastforex.io/convert?from=' + from + '&to=' + to + '&amount=' + totalPrice +'&api_key=47b95b05a1-fc6cc38e28-shi01d', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    showConversion();
      
    return totalPrice;
}

var conversionText = document.getElementById("convertMessage");

function showConversion() {
    conversionText.innerText = "The Comission will cost " + totalPrice;
}
