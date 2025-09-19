// Return the colleges data from Hippo University List

let btn = document.querySelector('button');

let url = 'http://universities.hipolabs.com/search?country='

btn.addEventListener('click' , async () => {
    let country = document.querySelector('input').value;
    let colArr = await getData(country);
    show(colArr);
})


function show(colArr){
    let list = document.querySelector('#list');
    list.innerText = "";
    for ( col of colArr){
        console.log(col.name);

        let li =  document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li)
    }
}


async function getData(country){
    try{
        let result = await axios.get(url+country);
        return result.data;
    } catch (ex){
        return [];
    }
    
}