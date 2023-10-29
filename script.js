console.log(Math.floor(Math.random() * 6) +1)


let button = document.querySelector('button')
let img = document.querySelector('img')


function randromNumber(){
    number = Math.floor(Math.random() * 6) + 1;
    return 'static/'+String(number)+'.png'
}

button.addEventListener('click', function(){
    img.src = randromNumber();
});
