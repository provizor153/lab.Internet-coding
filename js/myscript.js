$(document).ready(function() {
    $.ajax({
        url: "https://localhost:44311/ListPizza"
        }).done(function(data) {
        let cardConstructor = "";
        data.Pizzas.forEach(element => {
        cardConstructor = cardConstructor
        +'<div class="card">'
        +'<img class="card-img-top" src="img/мясная_600-417x417.bmp" alt="Card image cap">'
        +'<div class="card-body">'
        +'<h5 class="card-title">'+element.Name+'</h5>'
        +'<p class="card-text">'+element.Description+'</p>'
        +'<p class="card-text-price">'+element.Price+'</p>'
        +'<div class="btn-container">'
        +'<a href="#" class="btn btn-primary">Заказать</a>'
        +'</div>'         
        +'</div>'
        +'</div>'        
        });
        $('.menu-container').html(cardConstructor);
    }); 
});