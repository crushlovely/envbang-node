# EnvBang for Node.js

![Build Status](https://travis-ci.org/crushlovely/envbang-node.png)

Ensure you have all the right environment variables set in your app.


## Installation & Usage

As early as possible in your application require envbang and pass it your required environment variables.

``` javascript
EnvBang = require('envbang-node');
envbang = new EnvBang(['NODE_ENV', 'PORT', 'MONGOHQ_URL']);
// Once initialized, run #check() to ensure your environment variables are present
envbang.check();
```

If you are missing any environment variables, envbang will throw an error and give you a list of the variables you're missing:

``` bash
The following required environment variables are missing:
=> NODE_ENV
=> PORT
=> MONGOHQ_URL
```

## Inspiration

This package is meant to be used as a companion to [dotenv-node](https://github.com/crushlovely/dotenv-node). We are big fans of configuration via environment variables, but it can occasionally get a little crazy when you have a team of developers trying to keep up with changes to a `.env` file. The goal is to give clear feedback on application configuration to help reduce developer confusion and frustration.

### References

* [The Twelve Factor App](http://12factor.net/config)
* [jcamenisch/ENV_BANG](https://github.com/jcamenisch/ENV_BANG) - the original, written in Ruby

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Running tests

```bash
npm install
npm test
```