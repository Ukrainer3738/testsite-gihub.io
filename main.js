
var data = prompt("Ви з України?", "так");
var data2 = prompt("Ви з росії?", "ні");
if(data == "так" || data == "Так"){
    alert("Слава Україні")
}else if(data2 == "ні" || data2 == "Ні"){
    alert("Okey")
}else{
    window.close();
}

console.log(data, data2)