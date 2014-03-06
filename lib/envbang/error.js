function EnvBangError (msg) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.message = msg;
  this.name = 'EnvBangError';
};

EnvBangError.prototype.__proto__ = Error.prototype;

module.exports = EnvBangError;
