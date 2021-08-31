let fs = require("fs");
let path = require("path");
let { spaceStr } = require("./util");
let finishTimmer;
let sidbarMdMap = {};

function ergodicConfig(dirMap, level = 0) {
  // 处理目录
  if (level === 2) {
    generateSidbarPart(dirMap);
    return;
  }
  for (let prop in dirMap.childDir) {
    let item = dirMap.childDir[prop];
    ergodicConfig(item, level + 1);
  }
}

function generateSidbarPart(partDirMap) {
  let root = partDirMap.dir;
  sidbarMdMap[root] = "";

  ergodic(partDirMap);

  function ergodic(rootMap, level = 0) {
    // 有文件
    if (rootMap?.files?.length) {
      rootMap.files.forEach((file, index) => {
        sidbarMdMap[root] += `${spaceStr(level)}- [${file.filename}](${
          file.fullpath
        })\n${rootMap.files.length - 1 === index ? "\n" : ""}`;
      });
    }
    for (let prop in rootMap.childDir) {
      let item = rootMap.childDir[prop];

      // 自身及深层没有文件时退出
      if (hasFile(item)) {
        sidbarMdMap[root] += `${spaceStr(level)}- ${prop}\n\n`;
        ergodic(item, level + 1);
      }

      generateSidbar();
    }
  }
}

function hasFile(rootMap) {
  if (rootMap?.files?.length) {
    return true;
  }
  for (let prop in rootMap.childDir) {
    let item = rootMap.childDir[prop];
    let childResult = [];
    if (item?.files?.length) {
      return true;
    }
    Object.keys(item.childDir).forEach((prop) => {
      childResult.push(hasFile(item.childDir[prop]));
    });
    // console.log(item.dir, hasFile(item.childDir))
    if (childResult.some((ele) => ele)) {
      return true;
    }
  }
  return false;
}

function generateSidbar() {
  clearTimeout(finishTimmer);
  finishTimmer = setTimeout(() => {
    Object.keys(sidbarMdMap).forEach((prop) => {
      let targetDirname = path.resolve(prop, "_sidebar.md");
      let urlList = prop.split(path.sep);
      let topTitle = `<div class="sidebar-title">${
        urlList[urlList.length - 2]
      }</div>\n<template id="root-breadcrumb">${
        urlList[urlList.length - 1]
      }</template>\n\n`;
      fs.writeFile(targetDirname, topTitle + sidbarMdMap[prop], () => {
        console.log(`${targetDirname} 写入成功`);
      });
    });
  }, 100);
}

exports.generateSidbar = ergodicConfig;
