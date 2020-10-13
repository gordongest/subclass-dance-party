var makeComicDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  console.log(this.$node);
};

makeComicDancer.prototype = Object.create(makeBlinkyDancer.prototype);

// makeComicDancer.prototype.oldStep = makeDancer.prototype.step;

makeComicDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};