import('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js')
import('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js')
import('https://www.gstatic.com/firebase/init.js')
import firebase from 'firebase'
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  window.console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

