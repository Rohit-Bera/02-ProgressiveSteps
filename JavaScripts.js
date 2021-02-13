//selectors
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currentActive = 1;

//Event-Listners

    //next button
next.addEventListener('click' , () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
})

        //previous button
prev.addEventListener('click' , () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
})

//Functions
function update() {
    // update active class in circle
    
    circles.forEach((circle,index) => {
        if(index < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
    // update the progress bar

    var activeCircle = document.querySelectorAll('.active');

    progress.style.width=(activeCircle.length-1) / (circles.length-1)*100 + '%';
    
    // change the button enabled-disable state
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length)
    {
        next.disabled = true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}