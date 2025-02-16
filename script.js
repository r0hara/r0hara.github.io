function onSubscribe(button) {
    let inputText = document.getElementsByTagName("input").item(0).value;
        
    if (inputText === undefined || !inputText.includes("@")) {
        button.innerHTML = "Invalid Email"
        setTimeout(function(){
            button.innerHTML = "Subscribe";
        }, 1000);
    }
    else {
        button.innerHTML = "Thank you!";
        button.disabled = true;
    }
}