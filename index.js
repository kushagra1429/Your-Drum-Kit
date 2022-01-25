for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
    function handleClick(){
        var buttonInnerHTML= this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        
            default:
                break;
        }
    }
}
addEventListener("keypress", one)
function one(){
    alert("The key was pressed")
}