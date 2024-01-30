document.getElementById('btn-next').addEventListener('click', function() {
    document.getElementById('confirmation').classList.remove('hidden');
  });
  
  document.getElementById('btn-yes').addEventListener('click', function() {
    localStorage.setItem('confirmation', 'yes');
  });
  
  document.getElementById('btn-no').addEventListener('click', function() {
    localStorage.setItem('confirmation', 'no');
  });