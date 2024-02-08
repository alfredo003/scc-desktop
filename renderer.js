const updateOnlineStatus = () => {
  const statusElement = document.getElementById('status');
  if (navigator.onLine) {
    statusElement.innerHTML = 'online';
    // Redirect to a website when online
    window.location.href = 'https://example.com';
  } else {
    statusElement.innerHTML = 'offline';
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

updateOnlineStatus();
