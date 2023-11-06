const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const products = document.querySelectorAll(".product");
const gradients = document.querySelectorAll('.gradient');

let prevColor = "blue";
let animationEnd = true;

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor() {
    if(!animationEnd){
        console.log(error);
        return;
    };
    let primary = this.getAttribute('primary');
    let currentColor = this.getAttribute('color');
    let product = document.querySelector(`.product[color="${currentColor}"]`);
    let gradient = document.querySelector(`.gradient[color="${currentColor}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    colors.forEach(color => color.classList.remove("active"));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary-color', primary);

    products.forEach(s => s.classList.remove('show'));
    product.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = currentColor;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener("click", changeSize))
colors.forEach(color => color.addEventListener("click", changeColor))

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);