## Add Linting Support - [**ESLint**](https://eslint.org/)

1. **Install ESLint**

```
npm install eslint --save-dev
```

2. **Initialize ESLint configuration file**

```
npx eslint --init
```

## Add [**Babel**](https://babeljs.io/) to transfile code

1. **Install required dependencies**

```
npm install @babel/core @babel/cli @babel/preset-env --save-dev
```

2. **Create configuration file - `babel.config.json`**

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

3. **Add npm script - `package.json`**

```
"compile": "babel --watch src --out-dir dist"
```
