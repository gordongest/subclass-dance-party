var makeAnimalDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeAnimalDancer.prototype = Object.create(makeDancer.prototype);