$(document).ready(function() {
  const CLOCK = '.clock'
  const HOUR = '.hour-hand'
  const MIN = '.min-hand'
  const SEC = '.second-hand'

  // $(CLOCK).css('transform', 'scale(1.1)')
  //            .css('opacity', '1');
  var degHour = 0;
  var degMin = 0;
  var state = false
  var degFinalHour = 0;
  var step = 0;
  var oldStep = 0;

  // $(HOUR).css('transform', 'rotate(90deg)')
  $('.BtnPlus').on('click', function() {
    incrementStep()
  })
  $('.BtnMoins').on('click', function() {
    decrementStep()
  })

function setCase() {
  switch (step) {
    case 0:
      setHour({
        hour: 0
      })
      break;
    case 1:
      setHour({
        hour: 8,
        min: 30
      })
      transition()
      break;
    case 2:
      setHour({
        hour: 10,
        min: 45
      })
      transition()
      break;
    case 3:
      setHour({
        hour: 13
      })
      transition()
      break;
    case 4:
      setHour({
        hour: 16
      })
      transition()
      break;
    case 5:
      setHour({
        hour: 20
      })
      transition()
      break;
  }
}

  function incrementStep() {
    oldStep = step
      if (step == 5) {
        step = 5
      }
      else {
        step++
        setCase()
      }
  }

  function decrementStep() {
    oldStep = step
    if (step == 0) {
      step = 0
    }
    else {
      step--
      setCase()
    }
  }

  function setHour(opt) {
    opt.min = opt.min ? opt.min : 0

    degHour += opt.hour * 30 - degHour
    degMin += opt.min * 6 + 360 * opt.hour - degMin

    $(HOUR).css('transform', 'rotate('+ degHour +'deg)')
    $(MIN).css('transform', 'rotate('+ degMin +'deg)')
  }

  function transition() {
    $('.step').fadeOut();

    if( $(".Content").data( "step" ) == step ) {
      console.log('1')
    }

    $('.hour-hand').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function(e) {
          $('.step').fadeIn();
      // code to execute after transition ends
    });
  }
})
