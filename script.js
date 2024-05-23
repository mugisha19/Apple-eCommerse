// Common JS

document.querySelectorAll('.watch-control, .controls a').forEach((controls) => {
    controls.addEventListener('click', e => {
        e.preventDefault();
    })
})

// End Of Common JS


// Cube

const cube = document.querySelector('.cube');
let x = 0;
let y = 0;
let z = 0;
let bool = true;
let interval;

document.querySelector('.top-x-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    
} )

document.querySelector('.bottom-x-control').addEventListener('click', () =>{
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    
} )

document.querySelector('.left-y-control').addEventListener('click', () =>{
    cube.style.transform = `rotateY(${y -= 20}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
    
} )

document.querySelector('.right-y-control').addEventListener('click', () =>{
    cube.style.transform = `rotateY(${y += 20}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
    
} )
document.querySelector('.top-Z-control').addEventListener('click', () =>{
    cube.style.transform = `rotateZ(${z -= 20}deg) rotateY(${y}deg) rotateX(${x}deg)`;
    
} )

document.querySelector('.bottom-z-control').addEventListener('click', () =>{
    cube.style.transform = `rotateZ(${z += 20}deg) rotateY(${y}deg) rotateX(${x}deg)`;
    
} )

const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            
            cube.style.transform = `rotateY(${y++}deg) rotateZ(${z}deg) rotateX(${x}deg)`;
        },100)
    } else {
        clearInterval(interval)
    }
}

playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false;
    playPause();
})
document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true;
    playPause();
})

// End Of Cube



// slideshow


const slideshowsDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div');

        div.style.backgroundImage = `url(/images/slideshow/section-1-bg-${i}.jpg)`;

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowsDivs(); 

const divs = document.querySelectorAll('.slideshow div');

let init = 1;

const slideshow = () => {
    setInterval (() => {
        init++;

        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change');

        if (init <= divs.length) {
            div.nextElementSibling.classList.add('change');
        } else {
            divs[0].classList.add('change');
            init = 1;
        }

        


    },20000)
}

slideshow ();
// End Of slideshow

// section 3sectio

const section3Content = document.querySelector('.section-3-content');

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})

// end of  section 3

// Section 4

const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-control-up')
const watchRightControl = document.querySelector('.watch-control-right')
const watchLeftControl = document.querySelector('.watch-control-left')
const watchDownControl = document.querySelector('.watch-control-down')

let axisY = 0
let axisX = 0

const hideControls = () => {
    if (axisY === -240) {
        watchTopControl.classList.add('hideControls')
    } else {
        watchTopControl.classList.remove('hideControls')
    }

    if (axisY === 240) {
        watchDownControl.classList.add('hideControls')
    } else {
        watchDownControl.classList.remove('hideControls')
    }

    if (axisX === 240) {
        watchRightControl.classList.add('hideControls')
    } else {
        watchRightControl.classList.remove('hideControls')
    }

    if (axisX === -240) {
        watchLeftControl.classList.add('hideControls')
    } else {
        watchLeftControl.classList.remove('hideControls')
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 60}rem`;
    hideControls()
})

watchDownControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 60}rem`;
    hideControls()
})
watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 60}rem`;
    hideControls()
})
watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 60}rem`;
    hideControls()
})

// End Of Section 4