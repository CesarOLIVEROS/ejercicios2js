class Producto{

    static contadorProducto =0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio =precio;

    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `codigo: ${this._idProducto} nombre: ${this._nombre} con precio de: $ ${this._precio}`;
    }
}

class Orden{

    static contadorOrdenes=0;
    
    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(){
        
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos=[];
       // this._contadorProductosAgregados =0;

    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); // agregar un nuevo producto al arreglo vacio de productos.
        }
        else{
            console.log('No se puede agregar mas productos');
        }
    }
    calcularTotal(){
        let TotalVenta =0;
        for(let producto of this._productos){
            TotalVenta += producto.precio; // es igual TotalVenta = TotalVenta + producto.precio;
        }
        return TotalVenta;
    }
    mostrarOrden(){
        let productosOrden ='';
            for(let producto of this._productos){
                productosOrden += '\n{' + producto.toString() + '} ';
            }
        console.log(`Orden: ${this._idOrden} Total: $ ${this.calcularTotal()}, Productos en la compra: ${productosOrden}`);
    }
}



let producto1 = new Producto('Jabon', 34000);
let producto2 = new Producto('Arroz', 3000);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();