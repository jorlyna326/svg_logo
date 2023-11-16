// we need a class for Shape, it needs to received the following perameters (shapeText, shapeColor, textColor)
class Shape {
    constructor(shapeText, shapeColor, textColor) {
        this.shapeText = shapeText;
        this.shapeColor = shapeColor;
        this.textColor = textColor
    }
}
// const shape = {
//     x: '', 
//     y: '', 
//     z: ''
// }

// const shape= new Shape(1, 2, 3)
// const shape2 = new Shape(4,5,6)

// we need a class for Circle and it should have a render method
class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>
      
      </svg>`
    }
}

// const circle = new Circle('ABC','red', 'blue')
// console.log(circle.render());

// we need a class for Triangle and it should have a render method
// we need a class for Square and it should have a render method

// make sure to export the child classes
module.exports = { Circle }
