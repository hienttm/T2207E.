var obj={
    //khai bao doi tuong- obj
    name:"Nam",
    age: 18,
    tel: "0392259898",
    eat: function abc(){
    //   function abc(): khai báo hàm vô danh
        console.log(this.name+" đang ăn mì tôm... "); //this: là đối tượng ngầm định của đối tượng bên trong chính nó== obj
    }
};
console.log(obj.tel);
//se lay duoc gia tri ben phai cua thuoc tinh trong doi tuong
obj.eat(); //giá trị là 1 hàm nên chạy kiểu ntn
obj.name="Huy"; //đổi tên obj thành Huy
console.log(obj.name);
obj.eat();
var obj2={
    name:"Nam",
    age: 18,
    tel: "0392259898",
    eat: function abc() {
        //   function abc(): khai báo hàm vô danh
        console.log(this.name + " đang ăn mì tôm... ")
    }//this là đối tượng obj2
};
var a=document.getElementById("abc");
console.log(a.innerText); //ABC
var x=0;
function changeText(){
    // a.innerText="Xin chao cac bạn";
    // a.innerHTML+=x+"<p>Xin chao cac ban</p>";
    a.style.fontSize=x+"px";
    a.style.color="pink";
    a.classList.add("classnaodo"); //
    a.style.transform="rotate("+x+"deg)";
    x++;
}
setInterval(changeText,30);