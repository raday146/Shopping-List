
var user_input = document.getElementById("userInput");
var click_btn = document.getElementById("click_btn");
var ul = document.getElementById("arr_list");

// Input validation by checking  the length of the input and 
function checkLength(){
    if(user_input.value.length> 0){
        return true; 
    }
    return false;
}

// A function that creates a li element and adds it to a list that already exists on the page
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(user_input.value));
    ul.appendChild(li);
    user_input.value = "";
}

// A function that is activated when the user presses the button
function addByClick(){
    if(checkLength()){
        createListElement();
    }
}

// A function that is activated when the user presses enter 
function addByKeypress(event){
    if(checkLength() && event.keyCode == 13){
        createListElement();
    }
}

// The listener events
click_btn.addEventListener("click", addByClick);
user_input.addEventListener("keypress", addByKeypress);
