const userData=[
    {id:1,  name:"john",  age :"18", profession:"developer"},
    {id:2,  name:"jack",  age :"20", profession:"developer"},
    {id:3,  name:"Karen",  age :"19", profession:"admin"},
];

let select= document.getElementById("select Profession");
let listOnPage= document.getElementById("list");

let filterBtn= document.getElementById("filterBtn");
let addBtn= document.getElementById("addBtn");

let nameInput = document.getElementById("nameInput");
let professionInput = document.getElementById("professionInput");
let ageInput= document.getElementById("ageInput");


filterBtn.addEventListener('click', filterUsers)
addBtn.addEventListener('click', addUsers)

function filterUsers(){
    let option = select.value;
    console.log(option)
    if(option == "Profession"){
        alert("Please select profession")
    }
    else
    {
        let filteredUsers=userData.filter
        ((item)=>{ return item.profession==option
    })
}
    console.log(filteredUsers)
    {
        filterUsers.forEach((item)=>{
            let newDiv=document.createElement("div");
            newDiv.innerHTML=$ {item.id} Name: ${item.name} Age: ${item.age} profession: ${item.profession}
            listonPage.append(newDiv);
        })
    }
}
function addUsers(){
    let name =  nameInput.value;
    let profession= professionInput.value;
    let age= ageInput.value;

    if(name!="" && profession !="" && age!=""){
        id=userData length+1
        let newobj={name,
        profession,
        age
        userData.push(newobj);
        console.log(userData)
        let newDiv=document.createElement("div");
        newDiv.innerHTML=$ {item.id} Name: ${item.name} Age: ${item.age} profession: ${item.profession}
        listonPage.append(newDiv);

        alert("please fill all fields")
    }
    }
} 