function pin(){
    const pins = generatePin();
    const newPin = pins + '';
    if(newPin.length === 4){
        return pins;
    }else{
        return pin();
    }
}

function generatePin(){
    const generatePin = Math.round(Math.random() * 10000);
    return generatePin;
}

document.getElementById("generateBtn").addEventListener("click", function () {
    const previousPin = pin();
    const pinFields = document.getElementById("pinField");
    pinFields.value = previousPin;
});

document.getElementById("numbers").addEventListener("click", function (event) {
    const numbers = event.target.innerText;
    let numberField = document.getElementById("numberField");
    let previousNumber = numberField.value;
    if(isNaN(numbers)){
        if(numbers === "C"){
            numberField.value = '';
        }else if(numbers === '<'){
            let previousNumbers = previousNumber.split('');
            previousNumbers.pop();
            let newNumbers = previousNumbers.join('');
            numberField.value = newNumbers;
        }
    }else{
        let newNumberField = previousNumber + numbers;
        numberField.value = newNumberField;
    }
    
});

document.getElementById("submit").addEventListener("click", function () {
    let pinField = document.getElementById("pinField");
    let newPinField = pinField.value;

    let numberField = document.getElementById("numberField");
    let newNumberField = numberField.value;

    let successMessage = document.getElementById("successMessage");
    let failorMessage = document.getElementById("failorMessage");

    if(newPinField === newNumberField){
        successMessage.style.display= "block";
        failorMessage.style.display= "none";
    }else{
        failorMessage.style.display= "block";
        successMessage.style.display= "none";
    }

})
