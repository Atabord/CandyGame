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

  var columns = $('.panel-tablero').children()
  $.map(columns, col => {
    for(let i = 0; i < 7; i ++) {
      var random = Math.floor(Math.random() * 4 + 1);
      var image = `<img src="./image/${random}.png" class="dulce-${random}" />`
      col.innerHTML += image;
    }
  })

  colorWhite();
  initTime();
})