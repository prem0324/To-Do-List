let newTask=document.querySelector("#task");
const ul=document.querySelector("#list-container");
console.log(ul);
document.querySelector(".submit").addEventListener('click',function(){
  if(newTask.value===""){
    alert("Please Ener Task Before Adding")
  }
  else{
    const li=document.createElement('li');
    const txt= document.createTextNode(newTask.value);
    console.log(txt);
    li.append(txt)
    ul.append(li);
    let span=document.createElement("span")
    span.innerHTML="\u00d7";
    li.appendChild(span)
  }
  newTask.value=""
  saveData()
})

ul.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);
function saveData(){
    localStorage.setItem("data",ul.innerHTML)
}
(function showTask(){
ul.innerHTML=localStorage.getItem("data");
})();