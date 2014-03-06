var _ = require('underscore');

function EnvBangFeedback(missingVariables) {
  this.missingVariables = missingVariables;
  return this.message();
};

_(EnvBangFeedback.prototype).extend({

  message: function() {
    return ['The following required environment variables are missing:'].concat(this.formattedMissingVariables()).join("\n");
  },

  formattedMissingVariables: function() {
    return _.map(this.missingVariables, function(variable) { return '=> ' + variable; });
  }

});

module.exports = EnvBangFeedback;
