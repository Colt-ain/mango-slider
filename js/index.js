var start = Date.now();
var timer = setInterval(function() {
  if (timePassed >= 2000) { clearInterval(timer);
      return;
  }
  draw(timePassed);
  }, 20);

  function draw(timePassed) {
   train.style.left = timePassed / 5 + 'px';
 }
