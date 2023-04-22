let arr = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
  ];
 
console.log(arr);
fn();
function fn(){
var newarr=arr.filter((data)=>{
    console.log(data.profession);
})
}

let userName=document.getElementById("name");
let pro=document.getElementById("pro");
let age=document.getElementById('age');
let ulContainer=document.getElementById('container');
let newUl=document.createElement('ul');
newUl.className="userUl";
function addNew(){
   
    let newLi=document.createElement('li');
   
    arr.map((data,i)=>{
          newLi.innerText=`id: "${data.id}",name: "${data.name}",age: "${data.age}",profession: "${data.profession}"`
          newUl.appendChild(newLi);
    })
   ulContainer.appendChild(newLi);

}

function addUser(){
const addObj={
   id:arr.length,
   name:userName.value,
   profession:pro.value,
   age:age.value
}
console.log(addObj);
arr.push(addObj);
fn();
addNew();

}
addUser();



    
