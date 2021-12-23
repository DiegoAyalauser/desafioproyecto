const express = require ("express");
const { Router } = express
const app = express();
const router = Router();
const port = 8080;
const administrador = true;
const Productos = require('productos');
const productos = new Productos();

app.use ("/api", router);
app.use(express.json());
app.use(express.urlencoded({
    extender:true
}))
//*Rutas api productos*/
router.get("/productos",(req,res)=>{
    let producto = productos.listar(id);
    if (producto == null) {
        res.send({ error: "Producto no encontrado" })
    } else {
        res.json(producto)
    }
})

router.get("/productos/:id?",(req,res)=>{
    res.send("ruta id")
});

router.post("/",(req,res)=>{
res.send("ruota post")
})
router.put("/:id",(req,res)=>{
    res.send("ruta put")
})
router.delete("/:id",(req,res)=>{
    res.send("ruta delete")
})
/*Rutas api carrito*/
router.get("/carrito",(req,res)=>{
    res.send("ruta carrito")
})
router.post("carrito/",(req,res)=>{
    res.send("ruta carritopost")
})
router.get("/:id/productos",(req,res)=>{
    res.send("Listar productos")
})
router.delete("/id/productos/:id_prod",(req,res)=>{
    res.send("Eliminar producto")
})

const server = app.listen(port,()=>
{
    console.log(`Server listen on port ${port
    }`)
})