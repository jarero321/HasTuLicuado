const vaso = document.getElementById("vaso");
const items_boton = document.querySelectorAll(".item-option");
const options = ["leche","papaya","mango","fresa","platano"];
const reinicio = document.querySelector(".reiniciar");
const modal = document.querySelector(".modal");
let capacidad = 100;
// agregando el evento click a los enlaces
items_boton.forEach( (item,index) => {
    item.addEventListener("click", () => {
        if (capacidad > 0){
        const div = document.createElement("div");
        div.className = `item ${options[index]}`;
        vaso.appendChild(div)
        capacidad -= 20
        vaso.firstElementChild.innerHTML = `${capacidad}% de su capacidad`;
        }else{
            modal.classList.add("visible")
        }
    })
})
reinicio.addEventListener("click", () => {
    modal.classList.remove("visible");
    capacidad = 100;
    document.querySelectorAll(".item").forEach(e => e.parentNode.removeChild(e));
})