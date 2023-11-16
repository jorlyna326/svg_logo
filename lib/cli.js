const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter text for the logo. (Must not be more than 3 characters.)",
          validate: (text) =>
            text.length <= 3 ||
            "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a text color",
        },
        // to do: need two more questions, shape type(type: list, choices:array of strings with the shape names) as well as shape color
      ])
      .then((shapeText, shapeColor, textColor, shapeType) => {
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle();

            break;
          case "triangle":
            shape = new Triangle();

          default:
            shape = new Square();
            break;
        }
        shape.setColor(shapeColor)
        const svg= new SVG();
        svg.setText(shapeText, textColor)
        svg.setShape(shape)
        return writeFile("SuperCool.svg", svg.render())
    
      
      })
      .then(() => {
        console.log("SVG Created!");
      })
      .catch((error) => {
        console.log(error);
        console.log("Whoops there was an error!");
      });
  }
}
module.exports = CLI