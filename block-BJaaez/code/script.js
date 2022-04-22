let search = document.querySelector("#search");
let ul = document.querySelector("ul");
let container = document.querySelector("main")

let allPeople = got.houses.reduce((acc,cv) =>{
    acc = acc.concat(cv.people);
    return acc;
},[]);

let allTags = got.houses.map( house => house.name);

function block(data){
    container.innerText = "";
    data.forEach((people) => {
        let div = document.createElement("div");
        div.classList.add("box");
        let img = document.createElement("img");
        img.src = people.image;
        let h2 = document.createElement("h2");
        h2.innerText = people.name;
        let p = document.createElement("p");
        p.innerText = people.description;
        let button = document.createElement("button");
        button.href = people.wikiLink;
        button.innerText = "Know More"

        div.append(img,h2,p,button);
        container.append(div);
    })
}

function createTag(tags){
    ul.innerText = "";
    tags.forEach( t => {
        let li = document.createElement("button");
        li.innerText = t;
        li.addEventListener("click",()=>{
            let gotPeople = got.houses.find((house) => house.name == t).people || [];
            block(gotPeople)
        })
        ul.append(li);
    })
}

function handleSearch(event){ 
        let text = event.target.value;
        let filtered =allPeople.filter((p)=>p.name.includes(text));
        block(filtered);  
}

search.addEventListener("input", handleSearch);
block(allPeople);
createTag(allTags)