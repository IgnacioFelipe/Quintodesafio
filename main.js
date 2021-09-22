class Productos {
    constructor (nombre, color, talla, cantidad ) {
        this.nombre = nombre;
        this.color = color;
        this.talla = talla;
        this.cantidad = cantidad;
    }
    descontarProducto (){
        this.cantidad = -1 + cantidad; 
    }


}

const nombre = prompt ("Ingrese el nombre del producto");
const color = prompt ("Ingrese el color del Producto");
const talla = prompt ("Ingrese talla del producto (S,M,L,XL.)")
const cantidad = Number (prompt ("Ingrese cantidad de productos existentes") );

const Producto1 = new Productos(nombre,color,talla,cantidad);

console.log (Producto1);
console.log (Producto1.descontarProducto);

Producto1.descontarProducto (); 