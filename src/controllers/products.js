const esquemaProducts = require('../models/Products')

// Método para mostrar todos los productos

const getProducts = async (req, res) => {    // Función asíncrona  --> async / await
    try{
        const response = await esquemaProducts.find() // Guardo en response la respuesta de Find según lo que encuentre en la DB
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Productos'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// Método para mostrar los productos por ID

const getProductsById = async (req, res) => {
    try{
        const response = await esquemaProducts.findOne({ id: req.params.id })

        if(!response || response.length === 0){
             return res.status(404).json({
                 error: true,
                 msg: 'El producto no existe'
             })
         }

        return res.status(200).json({
             data: response,
             error: false,
             msg: 'Producto encontrado'
         })
     }catch(error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

 // Método para mostrar los productos por Nombre

 const getProductsByName = async (req, res) => {
    try{
        const response = await esquemaProducts.findOne({ name: req.params.name })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'El producto no existe'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Producto encontrado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// Método para agregar productos

 const addProduct =  async (req, res) => {
    try{
        const Product = new esquemaProducts(req.body)
         const newProduct = await Product.save()
         return res.status(200).json({
            data: newProduct,
            error: false,
            msg: 'Prodcuto creado'
         })
    }catch (error){
         return res.status(400).json({
             error: true,
             msg: error
         })
     }
 }

// Método para borra productos por ID

 const deleteProductById = async (req, res) => {
    try{
        const response = await esquemaProducts.deleteOne({ id: req.params.id })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el producto'
            })
        }
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Producto eliminado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// Método para updatear productos por ID

const updateProductById = async (req, res) => {
    try {
     
        const response = await esquemaProducts.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'No se pudo actualizar el Producto',
            });
        }
        return res.status(200).json({
            data: response,
            error: false,
            message: 'Producto actualizado'
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsByName,
    addProduct,
    deleteProductById,
    updateProductById
}