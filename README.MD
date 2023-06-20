 - commander  可以跑命令行
> npm install --save commander

- chalk  对console的美工,命令里面会有一些颜色标识
> npm install --save chalk

- download-git-repo 支持从 Github下载仓库，详细了解可以参考官方文档
> npm install --save download-git-repo

- inquirer 命令行交互功能可以在用户执行 init 命令后，向用户提出问题，接收用户的输入并作出相应的处理。用 inquirer.js 来实现
> npm install --save inquirer

- ora ora进度显示
> npm install --save ora

- log-symbols 在信息前面加上 √ 或 × 等的图标
> npm install --save log-symbols

- handlebars.js，模板引擎，将用户提交的信息动态填充到文件中


```js
inquirer
      .prompt([
        {
          type: 'input',
          name: 'author',
          message: '请输入你的名字'
        }
      ])
      .then(answers => {
        console.log(answers.author)
        const lqProcess = ora('正在创建...')
        lqProcess.start()
        download(
          'direct:https://github.com/mageAoe/vite-vue3-ts-template-.git',
          name,
          { clone: true },
          err => {
            if (err) {
              lqProcess.fail()
              console.log(symbols.error, chalk.red(err))
            } else {
              lqProcess.succeed()
              const fileName = `${name}/package.json`
              const meta = {
                name,
                author: answers.author
              }
              if (fs.existsSync(fileName)) {
                const content = fs.readFileSync(fileName).toString()
                const result = handlebars.compile(content)(meta)
                fs.writeFileSync(fileName, result)
              }
              console.log(symbols.success, chalk.green('创建成功'))
            }
          }
        )
      })
```