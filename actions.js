
var user_input = document.getElementById("userInput");
var click_btn = document.getElementById("click_btn");
var ul = document.getElementById("arr_list");

function checkLength(){
    if(user_input.value.length> 0){
        return true;
    }
    return false;
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(user_input.value));
    ul.appendChild(li);
    user_input.value = "";
}

function addByClick(){
    if(checkLength()){
        createListElement();
    }
}

function addByKeypress(event){
    if(checkLength() && event.keyCode == 13){
        createListElement();
    }
}

click_btn.addEventListener("click", addByClick);
user_input.addEventListener("keypress", addByKeypress);
