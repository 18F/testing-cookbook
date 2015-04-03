var Gadget = function(speed) {
  this.speed = speed;
};

Gadget.prototype.slice = function() {
  return true;
};

Gadget.prototype.dice = function() {
  return true;
};

Gadget.prototype.blend = function(what) {
  if (what === 'iPhone') return this.speed > 100;
  return true;
};

module.exports = Gadget;
