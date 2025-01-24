export {};

function loadCOIServiceWorker() {
  console.log('Load COIServiceWorker', navigator);
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    window.location.hostname != 'localhost'
  ) {
    navigator.serviceWorker
      .register('/ng-integration-guide/lib/coi-serviceworker.min.js')
      .then((registration) =>
        console.log(
          'COI Service Worker registered with scope:',
          registration.scope
        )
      )
      .catch((error) =>
        console.error('COI Service Worker registration failed:', error)
      );
  }
}

loadCOIServiceWorker();
