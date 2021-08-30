const { getSideBarConfig } = require("./generateSideBarConfig");

getSideBarConfig().then(res => {
    console.log(111, res)
})