function retrieve()
{
    document.getElementById("products").innerHTML = "";
    var total = 0.0;
    for(var i = 0; i < localStorage.length; i++){
        var item = localStorage.getItem(localStorage.key(i));
        item = item.replace('{', '');
        item = item.replace('}', '');
        item = item.replace(/"/g, '');
        const myArray = item.split(',');
        var name = myArray[0];
        var price = myArray[1];
        document.getElementById("products").innerHTML += "<p>" + name + "</p>";
        document.getElementById("products").innerHTML += "<p>" + price + "</p>";        
        price = price.replace(/[^0-9.]/g, '');
        total += parseFloat(price);
    }
    document.getElementById("total").innerText = "$"+total;
}