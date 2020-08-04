# Express.js project startup folder

This project create a basic project setup to create express server.

The project use **`eslint`** for linting, **`babel`** to allow usage of latest javascript features and **`nodemon`** to automatically restart server on changes.

**Project Dependencies**

1. express
2. dotenv
3. morgan

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

## Add [**nodemon**](https://nodemon.io/) to automatically restart

1. **Install nodemon**

```
npm install nodemon --save-dev
```

2. **Configure nodemon - `nodemon.json`**

```json
{
  "ignore": ["src", "node_modules"]
}
```

## Add [**Express**](https://expressjs.com/)

```
npm install express
```

## Add [**morgan**](https://www.npmjs.com/package/morgan) to log requests

```
npm install morgan
```

## Manage `environment` variables using `.env` file

1. **Add [dotenv](https://github.com/motdotla/dotenv)**

```
npm install dotenv
```

2. **add environment variables to `config/config.env`**

## Error Response

```javascript
{
  success: false,
  error: 'Custom Error Info'
}
```
