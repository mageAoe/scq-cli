const inquirer = require("inquirer");
// const ora = require("ora");
// const fs = require('fs')
const path = require("path");
const fs = require("fs-extra");
const ora = require("ora");
const download = require("download-git-repo");
const symbols = require('log-symbols')
const pc = require('picocolors')
const { resolve } = require('path')
const chalk = require('chalk')


// 新建模板
async function createProject(projectName, answers) {

    const spinner = ora("Downloading template...").start();

  try {
    // await downloadTemplate();
    // spinner.succeed('Template downloaded.');

    // const sourcePath = path.join(__dirname, 'template');
    // const targetPath = path.join(process.cwd(), projectName);

    // await fs.copy(sourcePath, targetPath);
    // spinner.succeed('Template copied.');

    const { template } = await inquirer.prompt({
      type: "list",
      name: "template",
      message: "choose a template",
      choices: [
        "react",
        "vue",
        "react + typescript",
        "vue + typescript",
        "none",
      ],
    });

    console.log(symbols.success, pc.green(`fetch template ${template}`));

    const fetchingSpinning = ora(pc.blue(`fetch template`)).start();

    fetchingSpinning.color = "cyan";
    fetchingSpinning.stop();
    const copySpinner = ora(pc.blue(`generate project by template...`)).start();
    const realPath = await fs.realpath(process.cwd());

    const projectPath = realPath + "/" + projectName.toString();
    await fs.copy(resolve(__dirname, `./template/${template}`), projectPath);
    copySpinner.stop();
    const installSpinner = ora(
      pc.blue(`generate project by template...`)
    ).start();
    process.chdir(projectPath);
    installSpinner.stop();
    console.log(symbols.success, pc.green(`generate project by template`));
    console.log(symbols.success, chalk.green("create success"));

    spinner.info("Customizing template...");
    customizeTemplate(projectPath, answers);
    spinner.succeed("Template customized.");

    console.log(`\n🎉 Project ${projectName} created successfully.`);
  } catch (error) {
    spinner.fail("Error: " + error.message);
  }
}

function customizeTemplate(targetPath, answers) {
    console.log(targetPath);
  const packageJsonPath = path.join(targetPath, "package.json");
  const packageJson = require(packageJsonPath);

  packageJson.author = answers.author;
  // 根据用户输入的其他信息，如项目描述、许可证等，自定义模板

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

module.exports = { createProject };
