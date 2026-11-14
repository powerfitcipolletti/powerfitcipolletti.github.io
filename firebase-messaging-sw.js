// Notificaciones de PowerFit: recibe los avisos de Firebase y los muestra en el celu aunque la app esté cerrada.
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA3vWtS0Y2i4o4zxqx-6hMQxt6xl7Jye_k",
  authDomain: "powerfit-cipolletti.firebaseapp.com",
  projectId: "powerfit-cipolletti",
  messagingSenderId: "269114250182",
  appId: "1:269114250182:web:e9cbf4f12dd28ef89818c7"
});
// Los avisos traen título y texto: Firebase los muestra solo y al tocarlos abre la app.
firebase.messaging();
