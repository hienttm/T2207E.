//cach 1: 5 function
// function update(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload=function (){
//         var data=JSON.parse(this.responseText);
//         var t=data.main.temp;
//         var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
//         x1.innerText=t;
//         var p=data.name;//Hanoi
//         var x2=document.getElementById("city");
//         x2.innerText=p+" Vietnam";
//         var pr=data.main.pressure;
//         var x3=document.getElementById("press");
//         x3.innerText=pr;
//     }
//     var link="https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
//     xhttp.open("get",link,true);
//     xhttp.send();
// }
// function update2(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload=function (){
//         var data=JSON.parse(this.responseText);
//         var t=data.main.temp;
//         var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
//         x1.innerText=t;
//         var p=data.name;//Hanoi
//         var x2=document.getElementById("city");
//         x2.innerText=p+" Vietnam";
//         var pr=data.main.pressure;
//         var x3=document.getElementById("press");
//         x3.innerText=pr;
//
//     }
//
//
//     var link="https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
//     xhttp.open("get",link,true);
//     xhttp.send();
// }
// function update3(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload=function (){
//         var data=JSON.parse(this.responseText);
//         var t=data.main.temp;
//         var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
//         x1.innerText=t;
//         var p=data.name;//Hanoi
//         var x2=document.getElementById("city");
//         x2.innerText=p+" England";
//         var pr=data.main.pressure;
//         var x3=document.getElementById("press");
//         x3.innerText=pr;
//
//     }
//
//
//     var link="https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
//     xhttp.open("get",link,true);
//     xhttp.send();
// }
// function update4(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload=function (){
//         var data=JSON.parse(this.responseText);
//         var t=data.main.temp;
//         var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
//         x1.innerText=t;
//         var p=data.name;//Hanoi
//         var x2=document.getElementById("city");
//         x2.innerText=p+" American";
//         var pr=data.main.pressure;
//         var x3=document.getElementById("press");
//         x3.innerText=pr;
//
//     }
//
//
//     var link="https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
//     xhttp.open("get",link,true);
//     xhttp.send();
// }
// function update5(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload=function (){
//         var data=JSON.parse(this.responseText);
//         var t=data.main.temp;
//         var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
//         x1.innerText=t;
//         var p=data.name;//Hanoi
//         var x2=document.getElementById("city");
//         x2.innerText=p+" Japan";
//         var pr=data.main.pressure;
//         var x3=document.getElementById("press");
//         x3.innerText=pr;
//
//     }
//
//
//     var link="https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
//     xhttp.open("get",link,true);
//     xhttp.send();
// }
//cach 2: dung tham so URL
function update(city){
    var bg=document.getElementById("bg-fade");
    bg.style.display="block"; //khi nhấn hiện loading
    var xhttp = new XMLHttpRequest();
    xhttp.onload=function (){
        var data=JSON.parse(this.responseText);
        var t=data.main.temp;
        var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
        x1.innerText=t;
        var pr=data.main.pressure;
        var x3=document.getElementById("press");
        x3.innerText=pr;
       var ct=data.name+", "+data.sys.country;
        document.getElementById("city").innerText=ct;

        bg.style.display="none"; // chạy xong mất ảnh loading
    };
    var link="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get",link,true);
    xhttp.send();
}