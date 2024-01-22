function clearScreen(){
    document.getElementById("screen").value=""
}

function clickbutton(val){
    document.getElementById("screen").value+=val
}
function answer(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function deletebutton(){
    var currentValue=document.getElementById("screen").value
    if (currentValue.length>1){
        document.getElementById("screen").value = currentValue.slice(0, -1);
    } 
    else {
        document.getElementById("screen").value = '';
    }
    }
