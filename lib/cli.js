const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer.prompt([
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
    ]);
  }
}
