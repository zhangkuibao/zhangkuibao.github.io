const fs = require("fs");
const { getConfigJSON } = require("./generateConfigJSON");
const { generateNavbar } = require("./generateNavbar");
const { generateSidbar } = require('./generatorSidebar')

getConfigJSON().then((res) => {
  // console.log(111, res);
  // fs.writeFile("./test.json", JSON.stringify(res), () => {});

  generateNavbar(res);
  generateSidbar(res);
});
