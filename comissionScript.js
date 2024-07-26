function enableDisableTextBox(openCharacters){
    var characterNumber = document.getElementById("characterNumber");
    characterNumber.disabled = openCharacters.checked ? false : true;
    if (!characterNumber.disabled) {
        characterNumber.focus();
    }
}

let totalPrice = 0;
let addPrice;

function catchNumber(number){
   
    if(totalPrice == 0){
        totalPrice = number;
    }else{
        addPrice = number;
        totalPrice = totalPrice + addPrice;
    }
}

var priceMessage = document.getElementById("messageText");

function showPrice(){

    priceMessage.innerText = "O valor estimado da comissão é " + totalPrice + "reais.";

}