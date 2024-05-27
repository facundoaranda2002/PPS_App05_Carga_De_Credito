import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app5.qr',
  appName: 'ppsapp05',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchFadeOutDuration: 1000,
      launchShowDuration : 1000,
      splashFullScreen: true,
    }
  }
};

export default config;
