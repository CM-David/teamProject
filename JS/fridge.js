let food =[]

let fillFridge = (div, arr) => {
    div.innerHTML = '';
    arr.forEach(function(item,index){
        div.innerHTML += "test";
        if(index == 4) {
            div.innerHTML += "<br><br>"
        }
    })
}

let openTheDoor = (el) =>{
    el.classList.toggle("open-door")
};

fillFridge(document.getElementById("food"), food)

document.querySelectorAll('.door').forEach((item) => {
    item.addEventListener('click', (event) => {
        let openDoor = document.querySelector('.open-door');
        if(openDoor !== null) {
            openTheDoor(openDoor);
        }
        else{
            openTheDoor(item);
            fillFridge(document.getElementById("food"))
        }
    })
})