# ts_admin

[front_vuetify_template](https://github.com/FumihiroMaejima/front_vuetify_template)のTypeScript版

## Update Yarn

```
$ yarn -v
1.21.1

$ npm uninstall yarn -g
$ npm install yarn -g

$ yarn --version
1.22.1
```


## Update Vue-cli

```
$ vue --version
@vue/cli 4.1.1

$ yarn global add @vue/cli

$ vue --version
@vue/cli 4.2.3


$ yarn -v
1.21.1
```


## Make Projet

### gitリポジトリそのものをフロントエンドのリポジトリにしたい場合
一度rootに新規プロジェクトディレクトリを作成し、
node_modules以外をrootディレクトリに移すことでプロジェクトを作ることが出来る。

```
$ vue create sample
$ mv sample/* ./ // エディターを使ってコピペして来た方が良い
$ rm -rf sample
$ yarn install
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 環境構築

vue-cliでプロジェクト作成時に、ある程度のパッケージの設定を自動的に行えるので出来るだけそちらを利用すること。

## envファイルの設定

「.env.local-example」をリネームして環境ごとの環境変数を設定する

```
.env.local
.env.development
.env.prod

# .env.local
NODE_ENV='local'
VUE_APP_API_BASE_URL='http://localhost:8080/api/v1/xxx'

# .env.development
# NODE_ENV='development'
# VUE_APP_API_BASE_URL='https://development/api/v1/xxx'

# .env.prod
# NODE_ENV='production'
# VUE_APP_API_BASE_URL='https://production/api/v1/xxx'
```

## アセットディレクトリの作成

/src/assets/下に
「css」、「img」、「js」ディレクトリ作成

## ライブラリの追加

下記のライブラリを追加

ルートディレクトリにある[パッケージインストール用バッチ](./yarn_package_list.sh)を使ってもインストール出来る。
必要に応じてコメントアウトをかける、外すが必要。

```
$ yarn add vue-router
$ yarn add vuex
$ yarn add axios
$ yarn add axios-mock-server
$ vue add vuetify
$ yarn add material-design-icons-iconfont
$ yarn add @vue/test-utils
$ yarn add --dev prettier
$ yarn add --dev stylelint
$ yarn add jest
$ yarn add vue-jest
$ yarn add babel-jest
$ yarn add vuex-class
```

## ライブラリの設定

package.jsonの編集

```Json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:unit": "jest",
    "fmt": "prettier --write \"src/**/*.js\"",
    "lint:css": "stylelint src/**/*.css",
    "mock:build": "axios-mock-server -b",
    "mock:watch": "axios-mock-server -w"
  },
```

movie/.eslintrc.jsの作成と編集

```Javascript
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
```

movie/.stylelintrcの作成と編集

```Json
{
  "rules": {
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "custom-property-no-outside-root": true,
    "indentation": 2,
    "length-zero-no-unit": true,
    "media-feature-name-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "selector-root-no-composition": true,
    "string-quotes": "single"
  }
}
```


## Vuetifyの設定

インストール

```
$ vue add vuetify
$ yarn add material-design-icons-iconfont
```

Typescriptを使っている場合は下記の通りtsconfig.jsonの「types」に「vuetify」を追加する

```Json
{
  "compilerOptions": {
    "types": [
      "webpack-env",
      "vuetify",
      "jest"
    ],
  }
}
```



## huskyの設定

lint-stagedを設定する

```
$ npx mrm lint-staged
```

package.jsonに「gitHooks」の設定があれば削除する



## Componentsディレクトリの設定(Atomic Designs)

movie/src/Components下に下記のディレクトリを作成する
Atomic Designs

＊(pagesとorganismsで十分作れるのならtemplatesは作らない)

```
atoms
molecules
organisms
templates
pages
```

## vue-routerの設定

movie/src/router.jsの作成と編集

```Javascript
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TestPage from './components/Pages/TestPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'test',
            component: TestPage
        },
    ]
})

```

## vuexの設定

TypeScriptでvuexを使う為にvuex-classをインストール

```Shell
$ yarn add vuex-class
```

movie/src/store.jsの作成と編集

関連するモジュールも作成しておくこと

```Javascript
import Vue from 'vue'
import Vuex from 'vuex'
// import testModule from './store/modules/testModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // test: testModule
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})

export default store
```


movie/src/store/modulesディレクトリの作成

```shell-session
$ mkdir /src/store/modules
```

movie/src/store/modules/testModule.jsの作成と編集

コードは省略


## モジュールを利用するコンポーネントの作成

「/test」にアクセスした時に利用するコンポーネント

movie/src/components/Pages/TestPage.vueの作成と編集

```Javascript
<template>
    <div>
        <TestSubModuleComponent module="subModule1"/>
        <TestSubModuleComponent module="subModule2"/>
        <TestModuleComponent/>
    </div>
</template>

<script>
import TestSubModuleComponent from './TestSubModuleComponent.vue'
import TestModuleComponent from './TestModuleComponent.vue'

export default {
    name: 'app',
    components: {
        TestSubModuleComponent,
        TestModuleComponent,
    }
}
```

## main.jsの設定

main.jsの編集

```Javascript
import Vue from 'vue'
import App from './App.vue'
import router from './routers/'
import store from './store/'
import client from './client'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$client = client

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
```

## App.vueの設定

App.vueの編集

```Javascript
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
```


## vuetifyのインストール

vuetifのインストール

yarnでinstallしないことに注意

```shell-session
$ vue add vuetify
```


## axios-mock-serverの設定

### mocksディレクトリの作成

```shell-session
$ mkdir mocks
```

### apiファイルとdataファイルを作成

/mocks/api/users/user.js
/mocks/data/users/user.json

・user.js

```Javascript
import data from '../../data/users/user.json'

export default {
  get() {
    return [
      200,
      data
    ]
  }
}
```

・user.json

```Json
{
  "id": 0,
  "name": "foo"
}
```

### mockのビルド

```shell-session
$ yarn mock:build
yarn mock:build
yarn run v1.22.1
$ axios-mock-server -b
mocks/$mock.js was built successfully.
```

/mocks/$mock.jsファイルが作成される。

### client.jsの修正

client.jsを下記の通りに修正

```Javascript
import axios from 'axios'
import mock from '../mocks/$mock'
if (process.env.NODE_ENV === 'development') {
  mock()
}

export default {
  async get(url) {
    const response = await axios.get(url)
    return response
  },
  async post(url, data, option) {
    const response = await axios.post(url, data, option)
    return response
  }
}
```

### vue.config.jsの修正

バックエンドのプロキシ設定を行う。

```Javascript
module.exports = {
  // ポートなどの設定
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        https: false
      }
    }
  }
}
```


## テスト環境の構築

下記をインストール

```
$ yarn add @vue/test-utils
$ yarn add jest
$ yarn add vue-jest
$ yarn add babel-jest
```

babel-core、babel-preset-envを「devDependencies」側にインストールする必要があるが、こちらはpackage.jsonにてバージョンを指定した上でyarn installすること。

2020年2月現在は下記の通り

```
"babel-core": "^7.0.0-bridge.0",
または "babel-core": "^7.0.0-0",
"babel-preset-env": "^7.0.0-beta.3",
```


package.jsonのscriptにJestを設定

```
"scripts": {
    ・
	"test:unit": "jest",
    ・
}
```

ackage.jsonにJestの設定

```
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
```

.babelrcの作成

```
{
  "presets": [["@babel/preset-env",{
    "modules": false,
    "targets": {
      "browsers": "> 1%",
      "ie": 11,
      "uglify": true
    },
    "useBuiltIns": "entry"
  }]],
  "env": {
    "test:unit": {
      "presets": [
        ["env",{"targets": {"node": "current"}}]
      ]
    }
  }
}
```


/tests/unit/ディレクトリの作成し、その中にテストファイルを作成する。

eslintが邪魔するなら「/* eslint-disable no-undef */」を先頭に追記

Sampleコンポーネントファイルのテストファイル、Sample.spec.jsとすると下記の様な具合
/tests/unit/Sample.spec.js

```
import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Sample from '@/components/molecules/Sample.vue'

Vue.use(Vuetify)
const wrapper = shallowMount(Sample)

describe('Sample test', () => {
  it('sampleFunction param true', () => {
    expect(wrapper.vm.sampleFunction(true)).toBeTruthy()
  })
})
```



## SCSSの利用設定

### sass-loaderとnode-sassをインストールする

```
$ yarn add --dev sass-loader
$ yarn add --dev node-sass
$ yarn add --dev css-loader
$ yarn add --dev sass-resources-loader
$ yarn add --dev style-loader
$ yarn add --dev stylelint-scss
$ yarn add --dev stylelint-webpack-plugin
$ yarn add --dev stylus
$ yarn add --dev stylus-loader
```

main.jsに追記

```Javascript
require('@/assets/scss/App.scss')
```

## TypeScriptのインストール

### グローバルにインストールする

```
$ npm install -g typescript
$ tsc -v
Version 3.8.3
```

### プロジェクトにインストールする

＊Vue-cliのプロジェクト作成時に選択した方が楽である。

```
$ yarn add typescript
```

その他のパッケージもインストールする

```
$ yarn add ts-loader
$ yarn add webpack
$ yarn add webpack-cli
```


## tsconfig.jsonに追記する事項

随時追記する

```Json
"experimentalDecorators": true,
"types": [
  "vuetify",
]
```



## API Blueprintの設定

### aglioのインストール
*Mac版の場合

・Windowsは「--unsafe-perm」を付けない
・yarnではインストール出来ない

```
$ npm install -g aglio --unsafe-perm
```

### apibディレクトリの作成

test.apibファイルを作成し、下記のコマンドでWeb上にAPI仕様を出力出来る。

```
$ aglio -i apib/api.apib --theme-template triple -s
```

API仕様書のHTMLファイルの出力

```
$ aglio -i apib/api.apib -o apib/doc/api.html
```
