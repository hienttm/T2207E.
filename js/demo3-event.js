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
function demoevent2(){

    // var ips=document.getElementsByTagName("input"); //array
    //     //    chú ý có chứ s ở elements
    // for(var i=0;i<ips.length;i++){
    //     ips[i].style.background = "pink";
    // }
    // //hàm làm cho các tag input chuyển background thành màu hồng khi xảy ra event

    var ipx=document.getElementsByClassName("input-text");
    for(var i=0;i<ipx.length;i++){
        ipx[i].style.background="red";
    }

}
//3 cách cơ bản: id: gọi về đối tượng; class; select