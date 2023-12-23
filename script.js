document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            handleButtonClick(button.innerText);
        });
    });

    function handleButtonClick(value) {
        if (value === "AC") {
            input.value = "";
        } else if (value === "Del") {
            input.value = input.value.slice(0, -1);
        } else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = "Error";
            }
        } else {
            input.value += value;
        }
    }
});