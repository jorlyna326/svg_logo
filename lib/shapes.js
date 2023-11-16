// we need a class for Shape, it needs to received the following perameters (shapeText, shapeColor, textColor)
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
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
    return `

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
      
      `;
  }
}

// const circle = new Circle('ABC','red', 'blue')
// console.log(circle.render());

// we need a class for Triangle and it should have a render method
// we need a class for Square and it should have a render method

// make sure to export the child classes
module.exports = { Circle };
