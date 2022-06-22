const chalk = require("chalk");
const moment = require("moment");
const log = console.log;

function format(messages) {
  messages = [`${moment().format("YYYY-MM-DD HH:mm:ss")}`, ...messages];
  return messages.join("-");
}

exports.consoleInfo = function (...messages) {
  log(chalk.yellow(format(messages)));
};

exports.consoleNotice = function (...messages) {
  log(chalk.green(format(messages)));
};

exports.consoleError = function (...messages) {
  log(chalk.white.bgRed(format(messages)));
};

exports.consoleSuccess = function (...messages) {
  log(chalk.yellow.bgGreen(format(messages)));
};
