// const name = 'Alexandre'
// const userAge = 44

// const user = {
//     name,
//     age: userAge,
//     location: 'Philadelphia'
// }

// console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const { label:productLabel, stock, rating = 5 } = product

console.log(productLabel, stock, rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)
transaction('order')
