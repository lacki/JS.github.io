


var goods = {
    "28292": {
        "nane" : "Банан",
        "cost" : 30,
        "img" : "https://cdn3.iconfinder.com/data/icons/healthy-food-10/64/banana-healthy-fruit-nutritious-512.png",
        "sklad" : "да"
    
    },
    "23245": {
        "nane" : "Помидор",
        "cost" : 20,
        "img" : "https://cdn3.iconfinder.com/data/icons/healthy-food-10/64/Tomatoes-vegetable-healthy-nutritious-512.png",
        "sklad" : "да"
},
"28293": {
    "nane" : "Апельсин",
    "cost" : 32,
    "img" : "https://cdn3.iconfinder.com/data/icons/healthy-food-10/64/orange-healthy-fruit-vitamins-512.png",
    "sklad" : "да"
},
"28294": {
    "nane" : "Яблоко",
    "cost" : 18,
    "img" : "https://cdn3.iconfinder.com/data/icons/healthy-food-10/64/apple-healthy-fruit-nutritious-256.png",
    "sklad" : "да"
}
};
console.log(goods);

var out = '';
for (var key in goods) {
    out+= "" +goods[key].nane + '<br>';
    out+= "Цена :" +goods[key].cost + '<br>';
    out+= "Наличие :" +goods[key].sklad + '<br>';
    out+='<img src="'+goods[key].img+'">';
    out+= '<hr>';
}
document.getElementById('out').innerHTML=out;
