class Productos {
    constructor() {
        this.productos = [];
    }

    guardar(nombre, descripcion, codigo,foto,precio,stock) {
        try {
            this.productos.push({
                id: this.productos.length + 1,
                nombre: title,
                descripcion: price,
                codigo: thumbnail,
                foto: foto,
                precio: precio,
                stock: stock,
            });

        } catch (error) {
            throw error;
        }
    }

    getProductos() {
        return this.productos;
    }

    listar(id) {
        const producto = this.productos.find(producto => producto.id == id);
        return producto;
    }
}

module.exports = Productos;