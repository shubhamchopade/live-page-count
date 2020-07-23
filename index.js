const count = document.getElementById('counter')

updateVisitors();

function updateVisitors(){
  fetch('https://api.countapi.xyz/update/techsapien.org/saps/?amount=1')
  .then(res => res.json())
  .then(res => count.innerHTML = res.value)
}