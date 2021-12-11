function loadjson(file,callback){
    var xhr =new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.profile);
})

function display(cse){
    var rdata=document.querySelector(".row")
console.log(rdata)
//card
var cad=document.createElement("div")
cad.classList.add("card")
console.log(cad)
rdata.appendChild(cad)

//img
var pic=document.createElement("img")
pic.src=cse[k].img
cad.appendChild(pic)

var sname=document.createElement("h1")

console.log(cse)

    for(var k=1;k<cse;k++){
        console.log(cse)

    }
}

var rdata=document.querySelector(".row")
console.log(rdata)

var cad=document.createElement("div")
cad.classList.add("card")
console.log(cad)
var pic=document.createElement("img")
console.log(pic)