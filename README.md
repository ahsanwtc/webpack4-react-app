# Webpack 4 with ReactJS App Setup
Webpack4 setup for reactjs web app

### devDependencies
 - `webpack` to bundle code
 - `webpack-cli` for using some cli features of webpack
 - `webpack-dev-server` a handy development server
 - `@babel/preset-env` behaves exactly like `@babel/preset-latest` (or superset of `@babel/preset-es2015`, `@babel/preset-es2016`, and `@babel/preset-es2017`)
 - `@babel/preset-react` adds support for `react`
 - `@babel/preset-stage-2` adds stage-2 feature of the **Ecma TC39** proposal
 - `@babel/loader` a dependency of `webpack` allows transpiling of `babel`
 - `@babel/core` a dependency of `@babel/loader`
 - `html-webpack-plugin` plugin for creation of HTML
 - `sass-loader` compiles SCSS to CSS
 - `node-sass` peer dependency for node
 - `css-loader` interprets `@impot` and `url()` like `import/require()` and resolves them
 - `style-loader` adds CSS to DOM by injecting style tag
 - `extract-text-webpack-plugin` moves all css into a seperate CSS file
 - `uglifyjs-webpack-plugin` uglifies and minimizes all CSS to reduce the bundle size
 - `optimize-css-assets-webpack-plugin` minimizes and optimizes CSS code
 - `webpack-merge` merges all webpack configs to generate a environment dependent config

### Node scripts
```js
    "scripts": {
        "start:dev": "webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback",
        "prestart:prod": "webpack --mode production --config config/webpack.prod.config.js --env.NODE_ENV=production --progress",
        "start:prod": "node server"
    }
```

 - `start:dev` starts `webpack` development server with development mode using `webpack.base.config.js` as config file, opens up the browser, enbables hot module reloadling and `--history-api-fallback` tells `webpack-dev-server` to fallback to `index.html` if requested resource can not be found
 - `prestart:prod` starts `webpack` in prodction mode using `webpack.prod.config.js` as config file, setting `env.NODE_ENV` to `production` and shows the progress of the bundle
 - `start:prod`: `node server` is equivlant to `node server/index.js`, runs `prestart` first
