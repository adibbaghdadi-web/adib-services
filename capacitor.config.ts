import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.adib.services",
  appName: "ADIB",
  webDir: "public",
  server: {
    url: "https://adib-services.vercel.app",
    cleartext: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      backgroundColor: "#07070a",
      showSpinner: false,
    },
  },
};

export default config;