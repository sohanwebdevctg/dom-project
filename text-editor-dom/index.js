let textarea = document.getElementById("textarea");

//number
function f1(){
    let number = document.getElementById("number");
    let numbers = number.value;
    textarea.style.fontSize = numbers + "px";
}

//bold
function f2(){
    if(textarea.style.fontWeight == "bold"){
        textarea.style.fontWeight = "normal";
    }else{
        textarea.style.fontWeight = "bold";
    }
}

//italic
function f3(){
    if(textarea.style.fontStyle == "italic"){
        textarea.style.fontStyle = "normal";
    }else{
        textarea.style.fontStyle = "italic";
    }
}

//underLine
function f4(){
    if(textarea.style.textDecoration == "underline"){
        textarea.style.textDecoration = "normal";
    }else{
        textarea.style.textDecoration = "underline";
    }
}

//text-left
function f5(){
    if(textarea.style.textAlign == "left"){
        textarea.style.textAlign = "none";
    }else{
        textarea.style.textAlign = "left";
    }
}

//text-center
function f6(){
    if(textarea.style.textAlign == "center"){
        textarea.style.textAlign = "none";
    }else{
        textarea.style.textAlign = "center";
    }
}

//text-right
function f7(){
    if(textarea.style.textAlign == "right"){
        textarea.style.textAlign == "none";
    }else{
        textarea.style.textAlign = "right";
    }
}

//upperCase
function f8(){
    if(textarea.style.textTransform == "uppercase"){
        textarea.style.textTransform = "normal";
    }else{
        textarea.style.textTransform = "uppercase";
    }
}

//lowerCase
function f9(){
    if(textarea.style.textTransform == "lowercase"){
        textarea.style.textTransform = "normal";
    }else{
        textarea.style.textTransform = "lowercase";
    }
}

//normal
function f10(){
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "normal";
    textarea.style.textDecoration = "none";
    textarea.value = " ";
}

//color
function f11(){
    let colorItem = document.getElementById("color");
    let colors = colorItem.value;
    textarea.style.color = colors;
}

//backgroundColor
function f12(){
    let colorItem = document.getElementById("backgroundColor");
    let colors = colorItem.value;
    textarea.style.backgroundColor = colors;
}


