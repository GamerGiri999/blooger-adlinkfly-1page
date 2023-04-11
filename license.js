if (window.location.href.includes('#?dest=') || window.location.href.includes('?dest=')) {
  fetch('https://api.npoint.io/d47596e333413c4bcfe4')
  .then(response => response.json())
  .then(data => {
    const currentDomain = window.location.hostname;
    const matchedDomain = data.find(obj => currentDomain === obj.currentDomain || currentDomain.endsWith('@' + obj.currentDomain));
    if (!matchedDomain) {
      document.body.innerHTML = '<center><h1>Invalid License Contact Admin For License. Telegram: @infokeeda</h1></center>';
      setTimeout(function() {
        window.location.href = 'https://cutt.ly/licen';
      }, 6000); // Redirect after 3 seconds (adjust this value as needed)
    }
  });
}
