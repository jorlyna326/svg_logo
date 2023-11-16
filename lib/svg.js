// this creates a SVG to put my shapes into
class SVG {
  constructor() {
    this.textElement = "";
    //   to do : create shape element
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//to do :shapes and text will go here

</svg>`;
  }
  setText(shapeText, textColor) {
    if (shapeText.length > 3) {
      throw new Error("Too many characters, must be three");
    }
    this.textElement = `
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text>`;
  }
  setShape(shape) {
    this.shapeElement = shape.render();
  }
}
module.exports = SVG;
