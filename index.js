// let abc = document.getElementById("btn")
// console.log(abc,"abc")
// console.log(abc.dataset.role)
// console.log(abc.data-role)
let box = document.getElementById("myself")
box.classList.add("box")

if(box.classList.contains("box")){
    console.log("true")
}

box.classList.replace("box","box2")
box.classList.remove("box2")
// console.log(box)