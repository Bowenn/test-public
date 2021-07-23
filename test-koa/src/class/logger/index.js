
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

class Logger {
    // filePath = path.resolve(require.main.path, 'log/unnamed.log');
    options = {
        encoding: 'utf8',
    };

    /**
     *
     * @param {string} filePath - log文件路径
     * @param {Object} [options] - 文件配置项
     * @param
     */
    constructor(filePath, options = undefined) {
        // console.log(require, 1);
        filePath && (this.filePath = path.resolve(require.main.path, filePath));
        options && (this.options = options);

        // 创建log目录
        const dirPath = path.dirname(this.filePath);
        fs.mkdir(dirPath, { recursive: true }, err => {
            if (err) {
                console.log(chalk.red(err));
            }
        });

        return this;
    }

    /**
     *
     * @param {string} message - log内容
     * @param {Object} [options] - 可选配置项
     * @param {boolean} options.silence - 是否禁用控制台输出
     * @param {Function} options.wrap - 可用于包装控制台输出(chalk)
     */
    log(message, { silence = false, wrap = undefined }) {
        try {
            fs.appendFileSync(
                this.filePath,
                message,
                this.options
            );
            silence || console.log(wrap ? wrap(message) : message);
        }
        catch (err) {
            silence || console.log(chalk.red(err));
        }
    }
}

module.exports = Logger;
