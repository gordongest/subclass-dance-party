$(document).ready(function() {
  window.dancers = [];



  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var winHeight = Math.max(($('body').width() * Math.random()), 250);

    var dancer = new dancerMakerFunction(
      winHeight,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $(dancer.$node).addClass(dancerMakerFunctionName);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineDanceButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      let currentDancer = window.dancers[i];
      $(currentDancer.$node).animate({top: 350}, 250);
    }
  });

  $('.clearButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      let currentDancer = window.dancers[i];
      $(currentDancer.$node).remove();
    }
  });

  /* this doesn't work yet */
  $('.intensify-button').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      let currentDancer = window.dancers[i];
      $(currentDancer.$node).animate({
        height: '500px',
        width: '500px'
      });
    }
  });
});