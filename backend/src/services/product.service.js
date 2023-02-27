const productRepository = require('../repositories/product.repository')

// class Product {
//   constructor(id, name, image, price, stock) {
//     this.id = id;
//     this.name = name;
//     this.image = image;
//     this.price = price;
//     this.stock = stock;
//   }
// }

// const products = [
//   new Product(1, "Mac", "", 90000, 0),
//   new Product(2, "Iphone", "", 50000, 10),
// ];
// let count = products.length;

exports.findAll = async () => await productRepository.findAll()

exports.findByPrice = async (min, max) => await productRepository.findByPrice(min, max)


exports.findById = async (id) => await productRepository.findById(id)


exports.add = async (product, file) => await productRepository.add({...product, image: file ? file.filename: ""})


exports.update = async (id, product, file) => {
  const result = await productRepository.findById(id)
  if (result) {
     const updated = await productRepository.update(result.id, {...product, image: file ? file.filename: result.image})
    if (updated) {
      return await productRepository.findById(id)
    }
  }
	return null;
};

exports.remove = async (id) => await productRepository.remove(id)
