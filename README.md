## README für Ionic App mit Electron und Capacitor

**Beschreibung:**

Diese Ionic-Applikation kann auf Web, Android und Desktop mit Electron und Capacitor ausgeführt werden.

**Voraussetzungen:**

- Node.js installiert
- Ionic CLI installiert
- Capacitor CLI installiert
- Android Studio (für Android-Entwicklung)

**Installation:**

1. Clone das Repository: `git clone https://github.com/abdullah-alhoty/ionic_app.git`
2. In das Projektverzeichnis wechseln: `cd ionic_app`
3. Abhängigkeiten installieren: `npm install`
4. Applikation ausführen:

   - Web: `npx ionic serve`
   - Android: `npx cap add android` then `npx cap open android`with Android Studio Emulator
   - Desktop: `npx cap add  @capacitor-community/electron` then `npx cap open  @capacitor-community/electron`

**Weitere Informationen:**

- Ionic Dokumentation: [https://ionicframework.com/](https://ionicframework.com/)
- Capacitor Dokumentation: [https://capacitorjs.com/](https://capacitorjs.com/)
- Electron Dokumentation: [https://electronjs.org/](https://electronjs.org/)
