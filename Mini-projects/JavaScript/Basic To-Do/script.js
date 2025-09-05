let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click' , function () {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add("delete")

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
    // console.log("Clicked!");
});

// Event Deligation - for deleting new Tasks using delete Button
// So we are applying delete for ul not for button

ul.addEventListener("click" , function (event) {
    if(event.target.nodeName == 'BUTTON' ){
        let listItem = event.target.parentElement;
        listItem.remove();
        // console.log("Delete")
    }
});



// let delBtns = document.querySelectorAll('.delete');

// for(delBtn of delBtns){  // only applies for existing elements doesnt work for new elements
//     delBtn.addEventListener('click' , function () {
//         let par = this.parentElement;
//         par.remove();
//     });
// }

