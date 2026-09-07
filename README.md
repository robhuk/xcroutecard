# Route card PWA

## Install
1. Upload the contents to any HTTPS-enabled web server, or open it through a local development server.
2. Open the app in Chrome, Edge or another PWA-capable browser.
3. Use **Install app** / the browser install option.

The app uses:
- Web App Manifest with `display: standalone`
- Service Worker offline caching
- Local device storage for all route and history data
- Local JSON backup/import
- Offline printable PDF export via the browser's Save as PDF option

No route-card data is sent to a server by this build.

## Reminder note
When notification permission is granted, the app checks for routes over 91 days and can show a device notification while the app is opened. Browser/OS background scheduling for a fully offline PWA is platform-dependent, so guaranteed timed background alerts require a native app or platform-specific background notification support.
