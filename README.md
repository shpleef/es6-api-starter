Express & ES6 REST API Boilerplate
==================================

[![bitHound Score](https://www.bithound.io/github/developit/express-es6-rest-api/badges/score.svg)](https://github.com/shpleef/es6-api-starter)

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- JWT Auth Token via jsonwebtokens
- User login/logout/forgot password/new password
- MongoDB via Mongoos
> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

Getting Started
---------------

```sh
# clone it
git clone git@github.com:shpleef/es6-api-starter.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Run it
PORT=8080 npm start

# With nodemon:
PORT=8080 nodemon
```


License
-------

MIT
