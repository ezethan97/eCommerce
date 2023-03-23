class product{
    constructor(name,price,description){
        this.name = name;
        this.price = price;
    }
}

function store(id){
    var names = Array.from(document.getElementsByClassName("card-title"));
    var prices = Array.from(document.getElementsByClassName("btn"));
    for(var i = 0; i < names.length; i++){
        console.log(names[i].innerHTML + prices[i].innerHTML);
        var prod = new product(names[i].innerHTML, prices[i].innerHTML);
        if(i == id)
            localStorage.setItem('product'+i, JSON.stringify(prod));
    }
}