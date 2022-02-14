import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { FirebaseConfig } from './firebase-cred';

const firebaseConfig = {
  apiKey: FirebaseConfig.apiKey,
  authDomain: FirebaseConfig.authDomain,
  databaseURL: FirebaseConfig.databaseURL,
  projectId: FirebaseConfig.projectId,
  storageBucket: FirebaseConfig.storageBucket,
  messagingSenderId: FirebaseConfig.messagingSenderId,
  appId: FirebaseConfig.appId,
  measurementId: FirebaseConfig.measurementId,
};

export let firebaseAnalytics;

export let log: (eventName: string) => void;

if (process.env.NODE_ENV === 'production') {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  log = (eventName: string) => logEvent(analytics, eventName);
} else {
  log = (eventName: string) => console.log(eventName);
}
