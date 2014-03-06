var expect = require('chai').expect
  , _ = require('underscore')
  , EnvBangFeedback = require('../../lib/envbang/feedback');

describe('EnvBangFeedback', function() {
  beforeEach(function(){
    this.missingVariables = ['FOO', 'BAR', 'BAZ'];
    this.feedback = new EnvBangFeedback(this.missingVariables);
  });

  describe('#message', function() {
    it('includes all the variables passed in', function() {
      _.each(this.missingVariables, function(missing) {
        expect(this.feedback.message()).to.include(missing);
      }, this);
    });
  });
});
