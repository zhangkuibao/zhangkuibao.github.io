const { exec } = require("child_process");
const fs = require("fs");
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

    console.log(arr);
    fs.writeFile("./commit.json", JSON.stringify(result), (err) => {
      console.log(err);

      fs.rm("./commit.log", (err) => {
        console.log(err);
      });
    });
  });
});
