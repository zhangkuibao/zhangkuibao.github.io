let fs = require("fs");
let navbarMd = "";
let finishTimmer;

function generateNavbar(fullpath, str) {
  clearTimeout(finishTimmer);
  finishTimmer = setTimeout(() => {
    fs.writeFile(fullpath, str, () => {
      console.log(`${fullpath}写入成功`);
    });
  }, 100);
}
