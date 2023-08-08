
//triangle
document.getElementById("triangle").addEventListener("click", function () {
    
    let triangleBase = getInputValueInc("getTriangleBase");
    let triangleHeight = getInputValueInc("getTriangleHeight");

    if(isNaN(triangleBase) == true || isNaN(triangleHeight) == true){
        alert("please enter integer value");
    }else if(triangleBase <= 0 || triangleHeight <= 0){
        alert("please enter valid number")
        
    }else{
        let totalTriangleResult = (0.5 * triangleBase * triangleHeight).toFixed(2);
        //showData
        showData("triangleData", totalTriangleResult);

        //hideShowData
        hideShowData("areaTriangleData");
    }
    
    
});

//rectangle
document.getElementById("rectangle").addEventListener("click", function () {

    let getRectangleWidth = getInputValueInc("getRectangleWidth");
    let getRectangleLength = getInputValueInc("getRectangleLength");

    if(isNaN(getRectangleWidth) == true || isNaN(getRectangleLength) == true){
        alert("please enter integer value");
    }else if(getRectangleWidth <=0 || getRectangleLength <= 0){
        alert("please enter valid number");
    }else{
        let totalRectangleResult = (getRectangleWidth * getRectangleLength).toFixed(2);

        //showData
        showData("rectangleData", totalRectangleResult);
    
        //hideShowData
        hideShowData("areaRectangleData");
    }



});

//parallelogram
document.getElementById("parallelogram").addEventListener("click", function () {

    let getParallelogramBase = getInputValueInc("getParallelogramBase");
    let getParallelogramHeight = getInputValueInc("getParallelogramHeight");

    if(isNaN(getParallelogramBase) == true || isNaN(getParallelogramHeight) == true){
        alert("please enter integer value");
    }else if(getParallelogramBase <= 0 || getParallelogramHeight <= 0){
        alert("please enter valid number");
    }else{
    let totalParallelogramResult = (getParallelogramBase * getParallelogramHeight).toFixed(2);
    
    //showData
    showData("parallelogramData", totalParallelogramResult);

    //hideShowData
    hideShowData("areaParallelogramData");
    }

    

});

//Rhombus
document.getElementById("rhombus").addEventListener("click", function () {

    let getRhombusD1 = getInputValueInc("getRhombusD1");
    let getRhombusD2 = getInputValueInc("getRhombusD2");

    if(isNaN(getRhombusD1) == true || isNaN(getRhombusD2) == true){
        alert("please enter integer value");
    }else if(getRhombusD1 <=0 || getRhombusD2 <= 0){
        alert("please enter valid number");
    }else{
    let totalRhombusResult = (0.5 * getRhombusD1 * getRhombusD2).toFixed(2);

    //showData
    showData("rhombusData", totalRhombusResult);

    //hideShowData
    hideShowData("areaRhombusData");
    }

    


});

//pentagon
document.getElementById("pentagon").addEventListener("click", function () {
    let getPentagonP = getInputValueInc("getPentagonP");
    let getPentagonB = getInputValueInc("getPentagonB");

    if(isNaN(getPentagonP) == true || isNaN(getPentagonB) == true){
        alert("please enter integer value");
    }else if(getPentagonP <=0 || getPentagonB <= 0){
        alert("please enter valid number");
    }else{
    let totalPentagonResult = (0.5 * getPentagonP * getPentagonB).toFixed(2);

    //showData
    showData("pentagonData", totalPentagonResult);

    //hideShowData
    hideShowData("areaPentagonData");
    }

    
    

});


//ellipse
document.getElementById("ellipse").addEventListener("click", function () {

    let getEllipseA = getInputValueInc("getEllipseA");
    let getEllipseB = getInputValueInc("getEllipseB");

    if(isNaN(getEllipseA) == true || isNaN(getEllipseB) == true){
        alert("please enter integer value");
    }else if(getEllipseA <=0 || getEllipseB <= 0){
        alert("please enter valid number");
    }else{
    let totalEllipseResult = (3.14 * getEllipseA * getEllipseB).toFixed(2);
    
    //showData
    showData("ellipseData", totalEllipseResult);

    //hideShowDat
    hideShowData("areaEllipseData");
    }

    

});

