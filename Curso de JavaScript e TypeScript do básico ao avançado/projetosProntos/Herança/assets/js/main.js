function Product (name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
};

Product.prototype.sellPrice = function(percent){
    this.price = this.price + (this.price * (percent / 100))
};

function Shirt (name, price, quantity, brand, color){
    Product.call(this, name, price);
    this.brand = brand;
    this.color = color;
    Object.defineProperty(this, 'quantity', {
        enumerable: true,
        configurable: true,
        
        get: function(){
            return quantity;
        },

        set: function(value) {
            if('number' !== typeof value) {
                return;
            }
            quantity = value;
        }
    });
};

Shirt.prototype = Object.create(Product.prototype);

Shirt.prototype.constructor = Shirt;

const product1 = new Product('caneca', 10.5, 3);
const shirt1 = new Shirt('Camiseta', 199.99, 10, 'Volcom', 'Black');
product1.sellPrice(-50);
shirt1.sellPrice(50);
shirt1.quantity = 150;
console.log(product1);
console.log(shirt1, shirt1.quantity);