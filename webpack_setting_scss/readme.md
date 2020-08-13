# Webpack and SCSS config

1. Create a directory for project

2. Initialise project, install `webpack` and `webpack-cli`

    `npm init -y` <br>
    `npm install webpack webpack-cli -D`
    
    Instead of flag `-D` you can write `--save-dev`
    
    `-D` or `--save-dev` means that package will appear in your devDependencies

3. Install packages for work with `scss`

    `npm i css-loader sass-loader node-sass mini-css-extract-plugin -D`
    
4. Write and delete some lines on `package.json` <br>

    Delete:
    * `"main": "index.js",`
    
    Add:
    * `"private": true,`
    * `"build": "webpack",`
    * `"start": "webpack --watch"`
    
    ```json
     //...
         "description": "",
         "private": true,
         "main": "index.js",
         //...
         "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack",
            "start": "webpack --watch"
         },
         //...
    ```
   > `"private": true` disallows `npm` publishing of private repositories <br>
   > in `"buld"` there are tasks to do
   > in `"start"` we add `--watch` which will allow doing processing after each change

5. Add `webpack.config.js` file to root including:
    ``` javascript
    const path = require('path');
    const miniCss = require('mini-css-extract-plugin');
    module.exports = {
       entry: './src/index.js',
       output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist')
       },
       module: {
          rules: [{
             test:/\.(s*)css$/,
             use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
             ]
          }]
       },
       plugins: [
          new miniCss({
             filename: 'style.css',
          }),
       ]
    };
    ```
   `entry` is script from which webpack begin processing <br>
   `output` is place for bundle
   
6. Add folders `dist` and `src` <br>
    In `src` place  `scss` and `index.js` files <br>
    And put one line in `index.js`: `import './scss/app.scss';` <br>
    > in file `scss/app.scss` will be import of other scss styles <br>
                                                                                                                                                               
    In `dist` place `index.html` incliding:
    ```html
    <!doctype html>
    <html>
       <head>
          <title>Webpack</title>
          <link rel='stylesheet' href='style.css'>
       </head>
       
       <body>
          <script src="bundle.js"></script>
       </body>
    </html>
    ```

7. To run webpack type `npm run build`
    > For automatic processing run `npm run start`