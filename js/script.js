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

  // $(HOUR).css('transform', 'rotate(90deg)')
  $('.Btn1').on('click', function() {
    step++
    setCase()
  })
  $('.Btn6').on('click', function() {
    step--
    setCase()
  })
  $('.Btn12').on('click', function() {
    setHour({ hour: 16 })
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
      break;
    case 2:
      setHour({
        hour: 10,
        min: 45
      })
      break;
    case 3:
      setHour({
        hour: 13
      })
      break;
    case 4:
      setHour({
        hour: 16
      })
      break;
    case 5:
      setHour({
        hour: 20
      })
      break;
  }
}

  function setHour(opt) {
    opt.min = opt.min ? opt.min : 0

    degHour += opt.hour * 30 - degHour
    degMin += opt.min * 6 + 360 * opt.hour - degMin

    $(HOUR).css('transform', 'rotate('+ degHour +'deg)')
    $(MIN).css('transform', 'rotate('+ degMin +'deg)')
  }


  $('.hour-hand').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
        $('.step').fadeIn();
    // code to execute after transition ends

  });
})
