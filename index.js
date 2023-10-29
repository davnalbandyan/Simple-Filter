"use strict"

const input = document.querySelector(".input");
const listItems = document.querySelectorAll(".list");

function funcSearch(){
   
    const filter = input.value.toLowerCase();

    listItems.forEach(item=>{
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = "block"
        }else{
            item.style.display = `none`
        }
    })

}

input.addEventListener("input",funcSearch)

console.log(listItems);