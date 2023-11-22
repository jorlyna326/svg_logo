const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "shapeType",
          type: "list",
          message: "please select shape",
          choices:  [ 'circle', 'triangle', 'square']
        },
        {
          name: "shapeText",
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
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
        
      ])
      .then(({shapeText, shapeColor, textColor, shapeType}) => {
        let shape;
        switch (shapeType) {
          case "circle":
            shape = new Circle(shapeColor, textColor, shapeText);

            break;
          case "triangle":
            shape = new Triangle(shapeColor, textColor, shapeText);

          default:
            shape = new Square(shapeColor, textColor, shapeText);
            break;
        }
   
 
      
      writeFile("SuperCool.svg", shape.render())
    
      console.log("SVG Created!");
      
      })
      .catch((error) => {
        console.log(error);
        console.log("Whoops there was an error!");
      });
  }
}
module.exports = CLI