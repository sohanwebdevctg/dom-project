//getInputValueInc
function getInputValueInc(inputId){

    let getInputValue = document.getElementById(inputId);
    let getInputValueStr = getInputValue.value;
    let getInputValueFloat = parseFloat(getInputValueStr);

    //checking validation
    getInputValue.value = '';
    return getInputValueFloat;


    

}

//showData Value
function showData(getDataId, getDataValue){
    let showDataValue = document.getElementById(getDataId);
    showDataValue.innerText = getDataValue;
}

//hideShowData value
function hideShowData(dataId){
    let hideShowData = document.getElementById(dataId);
    hideShowData.style.display = "block";
}

//randomColor
let carsSection = document.getElementsByClassName("card");

for(let cards of carsSection){
    cards.addEventListener("mouseover", function (){
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        cards.style.backgroundColor = '#' + randomColor;
    });
}

