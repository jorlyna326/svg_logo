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
// const circle = new Circle('ABC','red', 'blue')
// console.log(circle.render());
class Circle extends Shape {
  render() {
    return `

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
      
      `;
  }
}
// we need a class for Triangle and it should have a render method
// to do - look up points to create triangle 
// points from readme '<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
class Triangle extends Shape {
    render() {
        return  `
        <polygon points="" fill="${this.shapeColor}" />
        `
    }   
}
// we need a class for Square and it should have a render method
// to do : enter in points to create square
class Square extends Shape {
    render() {
        return  `
        <rect x="" y="" width="" height="" fill="${this.shapeColor}" />
        `
    }   
}
// make sure to export the child classes
module.exports = { Circle, Triangle, Square};
