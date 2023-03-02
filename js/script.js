// global
const endTime = new Date('04/01/2024');

// ready 
$(document).ready(function() {
  $('.details h4').eq(0).next().css('padding','15px').slideDown(500);

  setInterval(function() { timer(endTime); }, 1000);
})

// singer details
$('.details h4').click(function() {
  $(this).next().css('padding','15px').slideToggle(500).siblings('p').slideUp(500);
})

// duration
function timer(endTime) {
  endTime = (Date.parse(endTime) / 1000);
  let now = new Date();
  now = (Date.parse(now) / 1000);
  let timeLeft = endTime - now;

  if (timeLeft < 0) {
    $('#days').text('00 D');
    $('#hours').text('00 H');
    $('#minutes').text('00 M');
    $("#seconds").text('00 S');
  } else {
    let days = Math.floor(timeLeft / 86400); 
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
    (hours < 10) ? hours = "0" + hours : '';
    (minutes < 10) ? minutes = "0" + minutes : '';
    (seconds < 10) ? seconds = "0" + seconds : '';

    $('#days').text(`${days} D`);
    $('#hours').text(`${hours} H`);
    $('#minutes').text(`${minutes} M`);
    $("#seconds").text(`${seconds} S`);
  }
}

// Message letter counter
$('form textarea').on('input',function () {
  if($('form textarea').val().length > 100) {
    $('#text-area-count').text(`your available character finished ${100 - $('form textarea').val().length}`);
    $('form button').attr('disabled', 'disabled');
  } else {
    $('#text-area-count').text(100 - $('form textarea').val().length);
    $('form button').removeAttr('disabled');
  }
})

// navbar
$('.nav-icon, #closeBtn').click(function() {
  if($('.nav-icon').css('left') == '0px') {
    $('.nav-icon').animate({'left':'300px'},700);
    $('.nav-body').animate({'width': '300px'},700); 
  } else {
    $('.nav-icon').animate({'left':'0px'},700);
    $('.nav-body').animate({'width': '0px'},700); 
  }
})

// Submit
$('form').submit(function(e) {
  e.preventDefault();
});