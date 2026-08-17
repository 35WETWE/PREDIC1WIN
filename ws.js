// Archivo: sw.js (Service Worker para Notificaciones Push con Botones)

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Este bloque intercepta y muestra la notificación push en el dispositivo
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'AVIATORPKA';
    
    const options = {
        body: data.body || '¡Hay una nueva señal o promoción disponible!',
        icon: 'logo.jpg',
        badge: 'logo.jpg',
        vibrate: [200, 100, 200],
        // Definimos las acciones interactivas (botones) sin emojis
        actions: [
            {
                action: 'ver-accion',
                title: 'Ver Señal' // Texto del botón para abrir la app
            },
            {
                action: 'cerrar-accion',
                title: 'Cerrar'   // Texto del botón para descartar la notificación
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Manejar los clics en la notificación o en sus botones
self.addEventListener('notificationclick', function(event) {
    // Al hacer clic, cerramos la notificación inmediatamente
    event.notification.close();

    // Lógica para diferenciar qué botón presionó el usuario
    if (event.action === 'cerrar-accion') {
        // Si eligió "Cerrar", no hacemos nada más
        console.log('Notificación cerrada por el usuario.');
        return;
    }

    // Si hizo clic en el cuerpo de la notificación o en "Ver Señal", abrimos la app
    event.waitUntil(
        clients.openWindow('./index.html') // Asegúrate de usar la ruta correcta de tu web
    );
});