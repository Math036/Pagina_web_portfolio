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
    //verificar se opção já foi clicada
   var clickCheck = document.getElementById("price");
   addPrice = number;

   if(clickCheck.checked){
   }else if(totalPrice == 0){
        totalPrice = number;
        }else{ 
        totalPrice = totalPrice + addPrice;
        }
}

function subNumber(number){
    var clickCheck = document.getElementById("price");

    if (clickCheck.checked == false){
        totalPrice = totalPrice - number;
    }
}

function catchCharacterNumber(){
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

    const response = await fetch('https://api.fastforex.io/convert?from=' + from + '&to=' + to + '&amount=' + totalPrice +'&api_key=47b95b05a1-fc6cc38e28-shi01d', options);
    const data = await response.json();

    const conversionText = document.getElementById('convertMessage');
    conversionText.innerText = data.results;

    /*fetch('https://api.fastforex.io/convert?from=' + from + '&to=' + to + '&amount=' + totalPrice +'&api_key=47b95b05a1-fc6cc38e28-shi01d', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => {
        const data = response;
        let msg = ${};
        const conversionText = document.getElementById("convertMessage");
        conversionText.innerText = msg;
      })
      .catch(err => console.error(err));*/
      
    return data.results;
}

