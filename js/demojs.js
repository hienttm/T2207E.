var x;
x= 10;
x= "Xin chao cac ban";
x= 3.14;
var y = 20;
var z = x + y;     // 23.14
x = "hello";
var k = x + y;     // hello + 10 -> hello10
                   // 10 + hello -> 10hello
console.log(k);     // console giong printf

var t = true;   // false
for (var i=0;i<10;i++){
    console.log("i="+i);
}

var ar = [];
ar[0]=1;
ar.push(10);
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");

for(var i=0;i<ar.length;i++){   //length giup ng dung khong phai dem i
    console.log(ar[i]);
}



// duyet mang theo kieu xet tung phan tu - foreach
ar.map(XYZ=>{
    console.log(XYZ);
});



var tk = tinhtong(5,3);
var tk2 = tinhtong("hello",10);
function tinhtong(a,b){
    return a+b;
}
console.log(tk);
console.log(tk2);

function demo(){

    console.log("Hello everybody...");
}
setTimeout(demo,6000) //dung ham demo o function ben tren, 6000ms la do tre
// chuc nang timeout de lam cong viec sau bao nhieu giay
// con co ten goi khac la callback function
setInterval(demo,3000);   //sau khoang 3000ms thi no lai lam lai, vo han den khi nguoi dung tat thi thoi

var n=10;
function countdown(){
    var xyz = document.getElementById("head");
    xyz.innerText = n;
    n--;
    if(n<0){
        clearInterval(si);
    }
}
var si=setInterval(countdown,1000);


// Viet chuong trinh cu 2s in ra mot so chan. In toi da 10 so va tang dan

var k=2;  //so chan
var m=0;   // dem
function countdown1(){
    var a =document.getElementById("head1");
    a.innerText += " "+ k;    //+= day la noi chuoi, con = la thay the so moi
    k=k+2;
    m++;
    if(m>=10){
        clearInterval(si1);
    }
}
var si1=setInterval(countdown1,2000);
