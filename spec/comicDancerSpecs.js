describe('comicDancer', function() {

  var comicDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeComicDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(comicDancer.$node, 'toggle');
    comicDance.step();
    expect(comicDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(comicDancer, 'step');
      expect(comicDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(comicDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(comicDancer.step.callCount).to.be.equal(2);
    });
  });
});