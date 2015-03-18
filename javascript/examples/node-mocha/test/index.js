// require the parent module, in this case a class constructor
var Gadget = require('../');
// Node's assert module is a built-in
var assert = require('assert');

// this describes the context of your unit tests
describe('Gadget', function() {
  
  it('it slices', function() {
    var gadget = new Gadget();
    assert.ok(gadget.slice(), 'it does not slice');
  });
  
  it('it dices', function() {
    var gadget = new Gadget();
    assert.ok(gadget.dice(), 'it does not dice');
  });
  
  it('but does it blend?', function() {
    var gadget = new Gadget();
    assert.ok(gadget.blend('iPhone'));
  });
  
});
