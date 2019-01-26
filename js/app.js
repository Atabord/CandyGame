$(function () {

  function colorWhite() {
    $('.main-titulo').animate({
      color: 'white',
    }, 500, colorYellow)
  }

  function colorYellow() {
    $('.main-titulo').animate({
      color: '#DCFF0E',
    }, 500, colorWhite)
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
  
  function initCandies() {
    var columns = $('.panel-tablero').children()
    var candies = [];
    $.map(columns, (col, index) => {
      candies[index] = [];
      for(let i = 0; i < 7; i ++) {
        var random = Math.floor(Math.random() * 4 + 1);
        candies[index].push(random);
        var image = getCandy(random);
        col.innerHTML += image;
      }
    })
    return candies;
  }

  function getCandy(number) {
    var random = number || Math.floor(Math.random() * 4 + 1);
    var image = `<img src="./image/${random}.png" class="dulce-${random}" />`
    return image;
  }

  function verifyDesk() {
    var desk = $('.panel-tablero')[0].children;
    $.map(desk, (col, index) => {
      for(var i = col.childElementCount; i < 7; i ++) {
        var image = getCandy();
        $(col).prepend(image);
      }
    })
    verifyCandies();
  }

  
  function removeCandies(indexes) {
    indexes.map((index) => {
      var col = $(`.col-${index[0] + 1 }`)[0];
      var row = col.children[index[1]];
      $(row).hide('pulsate', {}, 2000, () => {
        $(row).remove()
        verifyDesk();
      });
    })
  }

  function getCandiesArray() {
    var cols = $('.panel-tablero').children();
    var deskArray = [];
    $.map(cols, (col, index) => {
      var candies = $(col).find('img');
      deskArray[index] = []
      for (var i = 0; i < candies.length; i += 1) {
        var candy = $(candies[i]).attr('class').slice(-1)
        deskArray[index].push(Number(candy));
      }
    })
    return deskArray; 
  }

  function verifyCandies(candiesAr) {
    var indexes = [];
    var candies = candiesAr || getCandiesArray();
    for (var i = 0; i < candies.length; i += 1) {
      for (var j = 0 ; j < candies[i].length; j += 1) {
        if (candies[i][j] === candies[i][j + 1] 
          && candies[i][j] === candies[i][j + 2]) {
            indexes.push([i,j],[i,j+1],[i,j+2])
        }
        if (candies[i+2]) {
          if (candies[i][j] === candies[i+1][j] 
            && candies[i][j] === candies[i+2][j]) {
              indexes.push([i,j],[i+1,j],[i+2,j])
          }
        }
      }
    }
    var uniqIndexes = Array.from(new Set(indexes.map(JSON.stringify)), JSON.parse);
    removeCandies(uniqIndexes);
  }


  colorWhite();
  initTime();
  var candiesAr = initCandies();
  verifyCandies(candiesAr);
})