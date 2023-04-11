var getlink = $("#getlink"),
gotolink = $("#gotolink"),
infokeeda = $('#infokeeda');


if (window.location.href.includes('#?dest=')) {
  
  var destValue = window.location.hash.substring(7);

  infokeeda.pietimer({
    infokeedaSeconds: 10,
    color: '#03a9f4',
    fill: false,
    showPercentage: true,
    callback: function() {
      getlink.prop('disabled', false);
      getlink.removeClass('hidden');
      infokeeda.addClass('hidden');
    }
  });
}

if (window.location.href.includes('#?dest=') || window.location.href.includes('?dest=')) {
  fetch('https://api.npoint.io/d47596e333413c4bcfe4')
  .then(response => response.json())
  .then(data => {
    const currentDomain = window.location.hostname;
    const matchedDomain = data.find(obj => currentDomain === obj.currentDomain || currentDomain.endsWith('+' + obj.currentDomain));
    if (!matchedDomain) {
      document.body.innerHTML = '<center><h1>Invalid License Contact Admin For License. Telegram: @infokeeda</h1></center>';
      setTimeout(function() {
        window.location.href = 'https://cutt.ly/licen';
      }, 6000); // Redirect after 3 seconds (adjust this value as needed)
    }
  });
}
function gotolinkcountdown(){
var countDown = 10;
gotolink.removeClass('hidden');
var x = setInterval(function() {

var distance = countDown -= 1;
gotolink.html('<span class="glyphicon glyphicon-time"></span> Please Wait...');

if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span> Go to Link');
}
}, 1000);
}				

var request = false;
getlink.click(function() {
if (request == false) {
gotolinkcountdown();
request = true;		
}
$('html, body').animate({
scrollTop: eval(gotolink.offset().top - 10)
}, 100);  
});	

gotolink.on("click",function(){
var destValue = window.location.hash.substring(7);
decodedDestValue = atob(destValue);
window.location.href= decodedDestValue; 
});
