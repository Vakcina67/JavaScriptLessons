let Fruits = [{fruit: 'apple', kgCount: 2, price: 60}, {fruit: 'pear', kgCount: 1, price: 65}]
function countBasketPrice(myArray) {
    let allPrice = 0;
    for (let i in myArray) {
        allPrice += myArray[i].kgCount * myArray[i].price;
    }
    console.log(allPrice);
}
countBasketPrice(Fruits);