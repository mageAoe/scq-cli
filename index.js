#!/usr/bin/env node

// eslint-disable-next-line no-undef
if (typeof exports !== "undefined") exports.__esModule = true;
const chalk = require('chalk')
// const { __dirname } = require('../utils/nodeVariable')
// console.log('Hello, cli!')
const fs = require('fs-extra')
// const { resolve } = require('path')
const program = require('commander')
// const download = require('download-git-repo')
const inquirer = require('inquirer')
// const ora = require('ora')
// const symbols = require('log-symbols')
// const handlebars = require('handlebars')
// const pc = require('picocolors')
const { createProject } = require('./create');


program
  .version(chalk.green('v'+ require('./package').version), '-v, --version')
  .command('init <projectName>')
  .action(async projectName => {
    console.log(chalk.green('init create'))
    const questions = [
      {
        type: 'input',
        name: 'author',
        message: 'Author:',
      },
      // 添加更多问题，例如项目描述、许可证等
    ];

    const answers = await inquirer.prompt(questions);
    createProject(projectName, answers);
  })
program.parse(process.argv)