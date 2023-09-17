const inputProduct = document.querySelector('.product')
const inputPrice = document.querySelector('.price')
const inputImage = document.querySelector('.image')

const img = document.querySelector('.img')
const productText = document.querySelector('.product-text')
const priceText = document.querySelector('.price-text')

const btn = document.querySelector('.btn')

const obj = {
    image:'',
    product:'',
    price:''
}

    console.log(obj)


btn.addEventListener('click', function(){
    // obj.image.valueOf = inputImage.src
    productText.innerText = inputProduct.value
    priceText.innerText = [ '$' + inputPrice.value ] 
    img.src = inputImage.value
})

