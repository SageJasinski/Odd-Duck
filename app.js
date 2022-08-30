'use strict';

let images = [
   {pic:'img/bag.jpg', name:'bag'},
    {pic:'img/banana.jpg', name:'banana'},
    {pic:'img/bathroom.jpg', name:'bathroom'},
    {pic:'img/boots.jpg', name: 'boots'},
    {pic:'img/breakfast.jpg', name: 'breakfast'},
    {pic:'img/bubblegum.jpg', name: 'bubblegum'},
    {pic:'img/chair.jpg', name: 'chair'},
    {pic:'img/cthulhu.jpg', name: 'cthulhu'},
    {pic:'img/dog-duck.jpg', name:'dog-duck'},
    {pic:'img/dragon.jpg', name:'dragon'},
    {pic:'img/pen.jpg', name: 'pen'},
    {pic:'img/pet-sweep.jpg', name:'pet-sweep'},
    {pic:'img/scissors.jpg', name:'scissors'},
    {pic:'img/shark.jpg', name:'shark'},
    {pic:'img/sweep.png', name:'sweep'},
    {pic:'img/tauntaun.jpg', name: 'tauntaun'},
    {pic:'img/unicorn.jpg', name: 'unicorn'},
    {pic:'img/water-can.jpg', name: 'water-can'},
    {pic:'img/wine-glass.jpg', name: 'wine-glass'},
]

let imgOne = document.getElementById('firstimg');
let imgTwo = document.getElementById('secondimg');
let imgThree = document.getElementById('thirdimg');
let container = document.getElementById('imgcontainer');
let result = document.getElementById('results')
let maxclicks = 10;
let clicks = 0;

let Product = function(name,pic){
    this.name = name;
    this.pic = pic;
    this.shown = 0;
    this.score = 0;
    Product.allProducts.push(this);
}

Product.allProducts = []


for (let image of images){
    new Product(image.name, image.pic)
}

console.log('products', Product.allProducts)

function randomnumber(){
    return Math.floor(Math.random() * images.length);
}


function render(){
    let picture1 = randomnumber()
    let picture2 = randomnumber()
    let picture3 = randomnumber()

    while (picture1 === picture2){
        picture2 = randomnumber();
    }

    while (picture3 === picture2){
        picture3 = randomnumber();
    }

    while (picture1 === picture3){
        picture1 = randomnumber();
    }
    
    imgOne.src = Product.allProducts[picture1].pic;
    imgOne.alt = Product.allProducts[picture1].name
    Product.allProducts[picture1].shown++;
    
    imgTwo.src = Product.allProducts[picture2].pic
    imgTwo.alt = Product.allProducts[picture2].name
    Product.allProducts[picture2].shown++
    
    imgThree.src = Product.allProducts[picture3].pic
    imgThree.alt = Product.allProducts[picture3].name
    Product.allProducts[picture3].shown++
    // console.log(Product.allProducts[picture1, picture2, picture3].pic);
    
}


function clicked(event){
    clicks++
    let clickimg = event.target.alt;
    console.log(clickimg)
    for (let i = 0; i < Product.allProducts.length; i++){
        if(clickimg === Product.allProducts[i].name){
            Product.allProducts[i].score++;

            console.log(Product.allProducts[i].score)
            break;
        }
    }
    if (clicks === maxclicks){
        container.removeEventListener('click', clicked);
        result.addEventListener('click', showresults)
    }else{
        render();
    }
}

function showresults(){
    let ul = document.getElementById('result');
    
    for(let i = 0; i < images.length; i++){
        let title = document.createElement('li')
        title.textContent = Product.allProducts[i].name + ': ' + Product.allProducts[i].score 
        ul.appendChild(title);
    }
}

container.addEventListener('click', clicked)

render()