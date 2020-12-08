var timer = document.querySelector('.timer');

function clearCountdown(interval) {
  clearTimeout(interval);
}

function countdown() {
  var countdownBegin = 30;
  var count = setInterval(function() {
    console.log(countdownBegin);
    
    if (countdownBegin <= 0) {      
      timer.innerText = 'Done!';
      clearCountdown(count);
    } else {
      --countdownBegin;
      timer.innerText = countdownBegin;  
    }    
  }, 1000);
}

countdown();