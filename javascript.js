let inputTask = document.querySelector("#inputTask");
let list = document.querySelector("#List");
let addButton = document.querySelector("#addButton");

//Přidání ukolu
let addItem = (inputValue) => {
    if (inputValue.trim() === "") return; // kontrola vstupu 

    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputValue} <i class="delete-icon">❌</i>`; //ikona mazání

    // funkce hotovo 
    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });

    // funkce mazaní
    let deleteIcon = listItem.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // nepovoli spustit done 
        listItem.remove();
    });

    // pridani textu
    list.appendChild(listItem);
};

// pridani ukolu
addButton.addEventListener("click", function () {
    addItem(inputTask.value);
    inputTask.value = ""; // vymazat pole
});

// ukol na enter
inputTask.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addItem(this.value);
        this.value = ""; // vymazani pole
    }
});
