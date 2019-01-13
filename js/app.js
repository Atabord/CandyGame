$(function () {

  function colorWhite() {
    $('.main-titulo').animate({
      color: 'white',
    }, 1000, colorYellow)
  }

  function colorYellow() {
    $('.main-titulo').animate({
      color: '#DCFF0E',
    }, 1000, colorWhite)
  }
  
  function initTime() {
    var timer = new easytimer.Timer();
    timer.start({countdown: true, startValues: {minutes: 2}});
    $('#timer').html(timer.getTimeValues().toString().slice(3));
    timer.addEventListener('secondsUpdated', function (e) {
        $('#timer').html(timer.getTimeValues().toString().slice(3));
    });
    // timer.addEventListener('targetAchieved', function (e) {
    //     $('#countdownExample .values').html('KABOOM!!');
    // });
  }

  colorWhite();
  initTime();
})