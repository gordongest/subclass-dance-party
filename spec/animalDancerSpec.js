describe('animalDancer', function() {

  var animalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    animalDancer = new makeAnimalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(animalDancer.$node).to.be.an.instanceof(jQuery);
  });

});
