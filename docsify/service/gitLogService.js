const { exec } = require("child_process");
const chokidar = require("chokidar");
const fs = require("fs");
function buildCommitJSON() {
  exec('git log --pretty=format:"%ad","%ar,%s" > commit.log', (err) => {
    fs.readFile("./commit.log", "utf-8", (err, data) => {
      let arr = data.split("\n");
      let result = arr.map((ele) => {
        let subArr = ele.split(",");
        return {
          date: subArr[0],
          agoDate: subArr[1],
          message: subArr[2],
        };
      });

      // console.log(arr);
      fs.writeFile("./commit.json", JSON.stringify(result), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("build success: commit.json");
          fs.rm("./commit.log", (err) => {
            // console.log(err);
          });
        }
      });
    });
  });
}

buildCommitJSON();