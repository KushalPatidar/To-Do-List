let arr1 = JSON.parse(localStorage.getItem("data"));
if(arr1===null){
    arr1 = [];
}
document.querySelector("#plus").addEventListener("click",()=>{
    let msg = document.querySelector("input").value;
    arr1.push(msg);
    localStorage.setItem("data",JSON.stringify(arr1));
    // console.log(localStorage);
    showData();
})

function showData(){
    let l = arr1.length;
    console.log(arr1,l);
    let ans='';
    for(let i=0;i<l;i++){
        let msg = arr1[i];
        ans+=`<li id="req">
        <div class="b1">
            <p>${msg}</p>
        </div>
        <div class="b2">
            <img src="delete.png" alt="" onclick="deleteItem(${i})">
        </div>
        </li>`
        document.querySelector(".box3").innerHTML = ans;
    }
}
showData();
function deleteItem(index){
    arr1.splice(index,1);
    localStorage.setItem("data",JSON.stringify(arr1));
    showData();
}   






































// document.querySelector("#plus").addEventListener("click",()=>{
//     let child = document.createElement("li");
//     document.querySelector(".box3").appendChild(child);
//     child.classList.add("req1");
//     let c1 = document.createElement("div");
//     child.appendChild(c1);
//     c1.classList.add("b1");
//     let c2 = document.createElement("div");
//     child.appendChild(c2);
//     c2.classList.add("b2");
//     let p = document.createElement("p");
//     c1.appendChild(p);
//     p.innerHTML = document.querySelector("input").value;
//     let i = document.createElement("img");
//     c2.appendChild(i);
//     i.setAttribute("src","delete.png");
//     // saveData(p);
//     i.addEventListener("click",()=>{
//         console.log(p.innerHTML);
//         child.remove();
//     })
// })
