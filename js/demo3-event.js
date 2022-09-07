var x=0;
var flag=false;
function demoEven(){
    if(flag==false){
    var h=document.getElementById("heading");
    h.style.color="red";
    setInterval(changeText,20);
        flag=true;
    }
}

function changeText() {
    var h=document.getElementById("heading");
    h.style.transform="rotate("+x+"deg)";
    x++;
}
function inputsearch(){
    console.log("Seaeching: ");

}
// function inputsearch2(){
//     var ix=document.getElementById("ips")
//     console.log("Seaeching: "+ix.value);
//
// }
// function inputsearch3(){
//     var cx=document.getElementById("city");
//     console.log("Seaeching: "+cx.value);
// }
function inputsearch4(obj) {
    console.log("Seaeching: " + obj.value);
}