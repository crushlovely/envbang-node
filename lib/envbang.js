var _ = require('underscore')
  , EnvBangError = require('./envbang/error')
  , EnvBangFeedback = require('./envbang/feedback')

var EnvBang = function(requiredVariables) {
  this.requiredVariables = requiredVariables;
  this.missingVariables = [];
}

_(EnvBang.prototype).extend({

  check: function() {
    this.checkEnvironmentVariables();
    this.reportFindings();
    return true;
  },

  checkEnvironmentVariables: function() {
    _.each(this.requiredVariables, function(requiredVariable){
      this.checkIfVariableIsSet(requiredVariable);
    }, this);
  },

  checkIfVariableIsSet: function(requiredVariable) {
    if (_.isUndefined(process.env[requiredVariable])) {
      this.missingVariables.push(requiredVariable);
    }
    return true;
  },

  reportFindings: function() {
    if (!_.isEmpty(this.missingVariables)) {
      feedback = new EnvBangFeedback(this.missingVariables);
      throw new EnvBangError(feedback.message());
    }
  }

});

module.exports = EnvBang;
