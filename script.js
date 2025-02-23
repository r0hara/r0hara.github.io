function onSubscribe(button) {
    let input = document.getElementsByTagName("input").item(0)
    let inputText = input.value;
        
    if (inputText === undefined || !inputText.includes("@")) {
        button.innerHTML = "Invalid"
        setTimeout(function(){
            button.innerHTML = "Subscribe";
        }, 1000);
    }
    else {
        button.innerHTML = "Thank you!";
        input.value = "";
        button.disabled = true;
        button.style.backgroundColor = 'white';
        button.style.color = 'rgb(86, 102, 29)';
    }
}