// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no Botão
.addEventListener("click", cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    
    // limpar os campos :
    const fields = newFieldContainer.querySelectorAll("input");

    fields.forEach(element => {
        element.value = ""
    });
        
    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
