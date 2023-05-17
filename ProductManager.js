class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      const newProduct = { ...product, id: this.generateId() };
      this.products.push(newProduct);
    }
  
    getProductById(productId) {
      const product = this.products.find((product) => product.id === productId);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    }
  
    updateProduct(productId, updatedFields) {
      const product = this.getProductById(productId);
      const updatedProduct = { ...product, ...updatedFields };
      const index = this.products.findIndex((product) => product.id === productId);
      this.products[index] = updatedProduct;
    }
  
    deleteProduct(productId) {
      const index = this.products.findIndex((product) => product.id === productId);
      if (index === -1) {
        throw new Error("Producto no encontrado");
      }
      this.products.splice(index, 1);
    }
  
    generateId() {
      let id;
      do {
        id = Math.random().toString(36).substr(2, 9);
      } while (this.products.some((product) => product.id === id));
      return id;
    }
  }
  

  const productManager = new ProductManager();
  
  // duvuelve un arreglo vacío []
  console.log(productManager.getProducts()); // 
  // agregar un producto 
  productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
  });
  
 // deberia mostrar el id
  console.log(productManager.getProducts()); 
  
  
  const productId = // id que queres obtener
  console.log(productManager.getProductById(productId)); // muestra el id
  
  
  const productIdToUpdate = // id del producto que queres actualizar
  const updatedFields = { 
       // campo que queres actualizar
  };
  productManager.updateProduct(productIdToUpdate, updatedFields);
  
  
  const productIdToDelete = // id que queres eliminar
  productManager.deleteProduct(productIdToDelete);
  