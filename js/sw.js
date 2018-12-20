if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(./sw.js')
  .then(function() {
    console.log('Service Worker Registered!')
  })
  .catch(function() {
    console.log('Error Registering Service Worker!')
  });
}
