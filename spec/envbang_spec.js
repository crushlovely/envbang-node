var expect = require('chai').expect
  , EnvBang = require('../lib/envbang')
  , EnvBangError = require('../lib/envbang/error')
  , EnvBangFeedback = require('../lib/envbang/feedback');

describe('EnvBang', function() {
  beforeEach(function(){
    delete process.env.FOO;
    delete process.env.BAR;
    delete process.env.BAZ;
    this.envbang = new EnvBang(['FOO', 'BAR', 'BAZ']);
  });

  describe('#check', function() {
    describe('when required variables are missing', function() {
      it('throws an EnvBangError', function() {
        envbang = this.envbang;
        expect(function(){ envbang.check() }).to.throw(EnvBangError);
      });
    });

    describe('when all required variables are present', function() {
      beforeEach(function(){
        process.env.FOO = 1;
        process.env.BAR = 1;
        process.env.BAZ = 1;
      });

      it('does not throw an EnvBangError', function() {
        envbang = this.envbang;
        expect(function(){ envbang.check() }).to.not.throw(EnvBangError);
      });
    });
  });

  describe('#checkEnvironmentVariables', function() {
    describe('when required variables are missing', function() {
      it('populates missingVariables with those variables', function() {
        process.env.BAZ = 1;
        this.envbang.checkEnvironmentVariables()
        expect(this.envbang.missingVariables).to.include('FOO', 'BAR');
        expect(this.envbang.missingVariables).to.not.include('BAZ');
      });
    });
  });
});
