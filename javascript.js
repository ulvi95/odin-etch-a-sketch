function createGrid(NUMBER_OF_ROWS) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const containerSize = 640;
    container.style.width = containerSize + "px";
    container.style.height = containerSize + "px";

    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
        const div_row = document.createElement("div");
        div_row.classList.add("row");

        div_row.style.height = (containerSize / NUMBER_OF_ROWS) + "px";

        for (let j = 0; j < NUMBER_OF_ROWS; j++) {
            const div_square = document.createElement("div");
            div_square.classList.add("square");
            div_square.style.width = div_row.style.height;
            div_square.style.height = div_row.style.height;

            div_square.style.backgroundColor = "white";

            div_square.addEventListener("mouseover", () => {
                if (div_square.style.backgroundColor === "white") {
                    div_square.style.backgroundColor = "black";
                } else {
                    div_square.style.backgroundColor = "white";
                }
            });

            div_row.appendChild(div_square);
        }
        container.appendChild(div_row);
    }
}

const button = document.querySelector(".grid-creator");
button.addEventListener("click", () => {
    let input = prompt("To create NxN grid, enter the N. Maximum number is 100.");

    if (input !== null) {
        let value = Math.floor(input);

        while (Number.isNaN(value) || value > 100 || value < 0) {
            if (Number.isNaN(value)) {
                alert("Invalid Input!");
            } else if (value > 100) {
                alert("Invalid Input! Value cannot be higher than 100");
            } else if (value < 0) {
                alert("Invalid Input! Value cannot be below 0");
            }

            input = prompt("To create NxN grid, enter the N. Maximum number is 100.");
            value = Math.floor(input);
        }
        createGrid(value);
    }
});

createGrid(16);