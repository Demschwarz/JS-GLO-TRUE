function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.render = function() {
    if (this.selector[0] == '.') {
        let elem = document.createElement('div');
        elem.classList.add(this.selector.substr(1));
        elem.textContent = 'Привет, я див';
        elem.style.height = this.height;
        elem.style.width = this.width;
        elem.style.width = this.width;
        elem.style.background = this.bg;
        elem.style.fontSize = this.fontSize;
        document.body.appendChild(elem);
    }
    if (this.selector[0] == '#') {
        let elem = document.createElement('p');
        elem.setAttribute('id', this.selector.substr(1));
        elem.textContent = 'Привет, я див';
        elem.style.height = this.height;
        elem.style.width = this.width;
        elem.style.width = this.width;
        elem.style.background = this.bg;
        elem.style.fontSize = this.fontSize;
        document.body.appendChild(elem);
    }
}

let test = new DomElement('#smth', '100px', '100px', 'green', '15px');
test.render();



// function extendedDomElement(selector, height, width, bg, fontSize, mother) {
//     DomElement.apply(this, arguments);
//     this.mother = mother
// }

// extendedDomElement.prototype = Object.create(DomElement.prototype);

// let b = new DomElement(1, 2, 3, 4, 5);
// b.render();
// let a = new extendedDomElement(1, 2, 3, 4, 5, true);
// a.render();










// function Car(brand, model) {
//     this.brand = brand;
//     this.model = model;
//     this.go = function() {
//         console.log(this.brand + ' ' + this.model + ' поехала');
//     }
// };

// let Audi = function(brand, model, options) {
//     Car.apply(this, arguments);
//     this.turbo = options.turbo;
//     this.wheels = options.wheels;
// };

// let Q7 = new Audi('Audi', 'Q7', {turbo: true, wheels: 4});
// console.log(Q7);


// function Class(text, value) {
//     this.text = text;
//     this.value = value;
// };
// function extendedClass(text, value, number) {
//     Class.apply(this, arguments);
//     this.number = number;
// }
// extendedClass.prototype = Object.create(Class.prototype);
// let ex = new extendedClass('число', 1, 1);
// console.log('ex: ', ex);
