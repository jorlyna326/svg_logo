// we need a class for Shape, it needs to received the following perameters (shapeText, shapeColor, textColor)
class Shape {
  constructor(shapeColor, textColor, shapeText) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.shapeText = shapeText;
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
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>
</svg>
      `;
  }
}
// we need a class for Triangle and it should have a render method
// to do - look up points to create triangle 
// points from readme '<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
class Triangle extends Shape {
    render() {
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>
</svg>
        `
    }   
}
// we need a class for Square and it should have a render method
// to do : enter in points to create square
class Square extends Shape {
    render() {
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>
</svg>
        `
    }   
}
// make sure to export the child classes
module.exports = { Circle, Triangle, Square};
