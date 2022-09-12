function forecaseAjax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload=function (){
        var data = JSON.parse(this.responseText);
        var list=data.list;
        for(var i=0;i<list.length;i++){
            var f=`<div class="box-weather">
                  <h3>${list[i].dt_txt}</h3>
                  <h2>${list[i].main.temp}<sup>o</sup>C</h2>
                  <p>${list[i].weather[0].description}</p>
                  <img src="https://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png">
              </div>`;
            document.getElementById("forecast").innerHTML+=f;
        }
    }
    var url=" http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get",url,true);
    xhttp.send();
}
forecaseAjax();