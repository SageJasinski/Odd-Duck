'use strict';

// const { Chart } = require("chart.js");

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
let result = document.getElementById('results');
let maxclicks = 25;
let clicks = 0;
let refresh = [];
let userIn = [];



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


function randomnumber(){
    return Math.floor(Math.random() * images.length);
}


function render(){
    
    // let diffrentimage = Unique();
    let picture1 = randomnumber()
    let picture2 = randomnumber()
    let picture3 = randomnumber()
    // console.log(diffrentimage)
    
    
    while (picture1 === picture2){
        picture2 = randomnumber();
    }
    while (picture3 === picture2){
        picture3 = randomnumber();
    }
    while (picture1 === picture3){
        picture1 = randomnumber();
    }


    
    refresh.push(picture1, picture2, picture3);

    
    imgOne.src = Product.allProducts[picture1].pic;
    imgOne.alt = Product.allProducts[picture1].name
    Product.allProducts[picture1].shown++;
    
    imgTwo.src = Product.allProducts[picture2].pic
    imgTwo.alt = Product.allProducts[picture2].name
    Product.allProducts[picture2].shown++
    
    imgThree.src = Product.allProducts[picture3].pic
    imgThree.alt = Product.allProducts[picture3].name
    Product.allProducts[picture3].shown++


}

function Unique(){

    let currentarray = [];
    while(currentarray.length < 3) {
        let randomnum = randomnumber();
        if (currentarray.includes(randomnum) || refresh.includes(randomnum)){

        }else {
            currentarray.push(randomnum);
        }
    }
    refresh = currentarray;
    return currentarray
}



function clicked(event){
    

    clicks++
    let clickimg = event.target.alt;
    console.log(clickimg)
    for (let i = 0; i < Product.allProducts.length; i++){
        if(clickimg === Product.allProducts[i].name){
            Product.allProducts[i].score++;
            userIn.push(Product.allProducts[i].score)
            // console.log(Product.allProducts[i].score);
            // console.log(Product.allProducts[i].score)
            break;
        }
    }

    

    if (clicks >= maxclicks){
        result.addEventListener('click', showresults);
        chartRender();
    }else{
        let data = Product.allProducts;
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
        render();
    }
}

function chartRender(){
    let chart ;  
    let newChart ;
    let ctx = document.createElement('canvas');
    let result = document.getElementById('results');
    result.appendChild(ctx);


    chart = new Chart (ctx, {
        type: 'radar',
        data: {
            labels: [Product.allProducts[0].name,
            Product.allProducts[1].name,
            Product.allProducts[2].name,
            Product.allProducts[3].name,
            Product.allProducts[4].name,
            Product.allProducts[5].name,
            Product.allProducts[6].name,
            Product.allProducts[7].name,
            Product.allProducts[8].name,
            Product.allProducts[9].name,
            Product.allProducts[10].name,
            Product.allProducts[11].name,
            Product.allProducts[12].name,
            Product.allProducts[13].name,
            Product.allProducts[14].name,
            Product.allProducts[15].name,
            Product.allProducts[16].name,
            Product.allProducts[17].name,
            Product.allProducts[18].name,
        ],
            datasets: [{
                label: 'Score',
                data: [Product.allProducts[0].score,
                Product.allProducts[1].score,
                Product.allProducts[2].score,
                Product.allProducts[3].score,
                Product.allProducts[4].score,
                Product.allProducts[5].score,
                Product.allProducts[6].score,
                Product.allProducts[7].score,
                Product.allProducts[8].score,
                Product.allProducts[9].score,
                Product.allProducts[10].score,
                Product.allProducts[11].score,
                Product.allProducts[12].score,
                Product.allProducts[13].score,
                Product.allProducts[14].score,
                Product.allProducts[15].score,
                Product.allProducts[16].score,
                Product.allProducts[17].score,
                Product.allProducts[18].score],
    
                backgroundColor: ['rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: [Product.allProducts[0].shown,
            Product.allProducts[1].shown,
            Product.allProducts[2].shown,
            Product.allProducts[3].shown,
            Product.allProducts[4].shown,
            Product.allProducts[5].shown,
            Product.allProducts[6].shown,
            Product.allProducts[7].shown,
            Product.allProducts[8].shown,
            Product.allProducts[9].shown,
            Product.allProducts[10].shown,
            Product.allProducts[11].shown,
            Product.allProducts[12].shown,
            Product.allProducts[13].shown,
            Product.allProducts[14].shown,
            Product.allProducts[15].shown,
            Product.allProducts[16].shown,
            Product.allProducts[17].shown,
            Product.allProducts[18].shown],

            backgroundColor: ['rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }
            
    ]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    
        },
        )
    chart.destroy();
    console.log(chart);

    newChart = new Chart (ctx, {
        type: 'bar',
        data: {
            labels: [Product.allProducts[0].name,
            Product.allProducts[1].name,
            Product.allProducts[2].name,
            Product.allProducts[3].name,
            Product.allProducts[4].name,
            Product.allProducts[5].name,
            Product.allProducts[6].name,
            Product.allProducts[7].name,
            Product.allProducts[8].name,
            Product.allProducts[9].name,
            Product.allProducts[10].name,
            Product.allProducts[11].name,
            Product.allProducts[12].name,
            Product.allProducts[13].name,
            Product.allProducts[14].name,
            Product.allProducts[15].name,
            Product.allProducts[16].name,
            Product.allProducts[17].name,
            Product.allProducts[18].name,
        ],
            datasets: [{
                label: 'Score',
                data: [Product.allProducts[0].score,
                Product.allProducts[1].score,
                Product.allProducts[2].score,
                Product.allProducts[3].score,
                Product.allProducts[4].score,
                Product.allProducts[5].score,
                Product.allProducts[6].score,
                Product.allProducts[7].score,
                Product.allProducts[8].score,
                Product.allProducts[9].score,
                Product.allProducts[10].score,
                Product.allProducts[11].score,
                Product.allProducts[12].score,
                Product.allProducts[13].score,
                Product.allProducts[14].score,
                Product.allProducts[15].score,
                Product.allProducts[16].score,
                Product.allProducts[17].score,
                Product.allProducts[18].score],
    
                backgroundColor: ['rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: [Product.allProducts[0].shown,
            Product.allProducts[1].shown,
            Product.allProducts[2].shown,
            Product.allProducts[3].shown,
            Product.allProducts[4].shown,
            Product.allProducts[5].shown,
            Product.allProducts[6].shown,
            Product.allProducts[7].shown,
            Product.allProducts[8].shown,
            Product.allProducts[9].shown,
            Product.allProducts[10].shown,
            Product.allProducts[11].shown,
            Product.allProducts[12].shown,
            Product.allProducts[13].shown,
            Product.allProducts[14].shown,
            Product.allProducts[15].shown,
            Product.allProducts[16].shown,
            Product.allProducts[17].shown,
            Product.allProducts[18].shown],

            backgroundColor: ['rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }
            
    ]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    
        },
        )

}

function showresults(){
    let ul = document.getElementById('result');
    
    for(let i = 0; i < images.length; i++){
        let title = document.createElement('li')
        title.textContent = Product.allProducts[i].name + ': ' + Product.allProducts[i].score 
        ul.appendChild(title);
    }
    chartRender();
}

let store = localStorage.getItem("data");
if (store) {
    Product.allProducts = JSON.parse(store);
}
console.log(store);

container.addEventListener('click', clicked);

render();
