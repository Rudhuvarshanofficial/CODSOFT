const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function clearAll(){

}
function calculator(){
    try{
    display.value = eval(display.value);;
    }
    catch(error){
        display.value = "Error";
    }
}