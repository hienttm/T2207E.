function update(){
    var xhttp = new XMLHttpRequest();
        xhttp.onload=function (){
            // console.log(this.responseText);--> ra chuỗi...
        //    cách chuyển JSON thành đối tượng của JS
            var data=JSON.parse(this.responseText);
            // console.log(data); --> ra chuỗi
            // console.log(data.main.temp); // lấy 26 - nhiệt độ hiện tại của HN
            var t=data.main.temp; //laaấy giá trị 26
            var x1= document.getElementById("temp"); //dí đối tượng id=temp bên html để tác động
            x1.innerText=t; // gán x1 bằng giá trị 26
            //thay đổi city
            var p=data.name;//Hanoi
            var x2=document.getElementById("city");
            x2.innerText=p+" Vietnam";

            //thay đổi giá trị áp suất:
            var pr=data.main.pressure;
            var x3=document.getElementById("press");
            x3.innerText=pr;

        }
    var link="https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
        xhttp.open("get",link,true);
        xhttp.send();
}
//vd chuỗi được định dạng theo chuẩn JSON, có thể dủng để lấy dữ liệu; bắt đầu là { thì dữ liệu là đối tượng; còn bắt đầu [ thì sẽ là mảng
//{"coord":{"lon":105.8412,"lat":21.0245},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":26,"feels_like":26,"temp_min":26,"temp_max":26,"pressure":1012,"humidity":88,"sea_level":1012,"grnd_level":1011},"visibility":10000,"wind":{"speed":1.81,"deg":267,"gust":2.25},"clouds":{"all":91},"dt":1662556340,"sys":{"type":1,"id":9308,"country":"VN","sunrise":1662504112,"sunset":1662548890},"timezone":25200,"id":1581130,"name":"Hanoi","cod":200}