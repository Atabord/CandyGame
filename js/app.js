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

  colorWhite();
})