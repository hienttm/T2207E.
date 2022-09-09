function update(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload=function (){
        var data=JSON.parse(this.responseText);
        var t=data.main.temp;
        var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
        x1.innerText=t;
        var p=data.name;//Hanoi
        var x2=document.getElementById("city");
        x2.innerText=p+" Vietnam";
        var pr=data.main.pressure;
        var x3=document.getElementById("press");
        x3.innerText=pr;

    }


    var link="https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get",link,true);
    xhttp.send();
}
function update2(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload=function (){
        var data=JSON.parse(this.responseText);
        var t=data.main.temp;
        var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
        x1.innerText=t;
        var p=data.name;//Hanoi
        var x2=document.getElementById("city");
        x2.innerText=p+" Vietnam";
        var pr=data.main.pressure;
        var x3=document.getElementById("press");
        x3.innerText=pr;

    }


    var link="https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get",link,true);
    xhttp.send();
}
function update3(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload=function (){
        var data=JSON.parse(this.responseText);
        var t=data.main.temp;
        var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
        x1.innerText=t;
        var p=data.name;//Hanoi
        var x2=document.getElementById("city");
        x2.innerText=p+" Vietnam";
        var pr=data.main.pressure;
        var x3=document.getElementById("press");
        x3.innerText=pr;

    }


    var link="https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get",link,true);
    xhttp.send();
}
function update4(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload=function (){
        var data=JSON.parse(this.responseText);
        var t=data.main.temp;
        var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
        x1.innerText=t;
        var p=data.name;//Hanoi
        var x2=document.getElementById("city");
        x2.innerText=p+" Vietnam";
        var pr=data.main.pressure;
        var x3=document.getElementById("press");
        x3.innerText=pr;

    }


    var link="https://api.openweathermap.org/data/2.5/weather?q=newyork&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get",link,true);
    xhttp.send();
}
function update5(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload=function (){
        var data=JSON.parse(this.responseText);
        var t=data.main.temp;
        var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
        x1.innerText=t;
        var p=data.name;//Hanoi
        var x2=document.getElementById("city");
        x2.innerText=p+" Vietnam";
        var pr=data.main.pressure;
        var x3=document.getElementById("press");
        x3.innerText=pr;

    }


    var link="https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get",link,true);
    xhttp.send();
}