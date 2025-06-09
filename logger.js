const chalk = require('chalk');

function createLogger(userColors = {}) {
  const defaultColors = {
    ...userColors
  };

  const logger = {};

  Object.keys(defaultColors).forEach((type) => {
    if (type === 'custom') {
      logger[type] = (label, msg) => {
        const time = timestamp();
        const color = defaultColors.custom;
        console.log(time, format(color, msg, label));
      };
    } else {
      logger[type] = (msg, label = type.toUpperCase()) => {
        const time = timestamp();
        const color = defaultColors[type];
        console.log(time, format(color, msg, label));
      };
    }
  });

  function timestamp() {
    const time = new Date().toTimeString().split(' ')[0];
    return chalk.gray(`[${time}]`);
  }

  function format(color, msg, type) {
    const label = chalk.bold(`[${type}]`);
    const applyColor = color?.startsWith?.('#')
      ? chalk.hex(color)
      : chalk[color] || ((x) => x);
    return applyColor(`${label} ${msg}`);
  }

  return logger;
}

module.exports = createLogger;
