// You are building an application that involves managing a list of products.
// Each product has a name, a price, and a category.
// You need to define an interface for a product object.


interface Product {
    name: string,
    price: number,
    category: string
}

const exampleProduct: Product = {
    name: "HP EliteBook",
    price: 1444,
    category: "laptops"
}

console.log(exampleProduct)