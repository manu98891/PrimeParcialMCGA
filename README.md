# PrimeParcialMCGA

## Cosigna
Crear un servidor web usando Node.js, NPM y Express.js respetando la arquitectura API REST. Debe contarcon una serie de endpoints que contemple las acciones básicas de un CRUD de productos. Los datos de losproductos afectados deben estar persistidos en un base de datos NoSQL, usando Mongoose como ODM yMongo Atlas como servicio en la nube en donde alojar la base de datos.

## Rutas
- post("/products") = Agragar un producto
- get("/products") = Traertodos los productos
- get("/products/:id") = Traer un producto por su id
- put("/products/:id") = Modificar un producto, seleccionado por su id
- router.delete("/products/:id") = Eliminar un producto, seleccionandolo por su id

## Librerias necesarias
```
npm install
npm install express
npm install mongoose
npm install -g nodemon
npm install dotenv --save
```