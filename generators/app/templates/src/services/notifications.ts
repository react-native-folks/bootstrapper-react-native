import { isAndroid } from 'constants/platform';

import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

let unsubscribeBackgroundMessage: any = null;
let unsubscribeNotificationOpenedApp: any = null;
let unsubscribeNotificationAppOpened: any = null;

export const subscribeToMessagingService = async () => {
  const permissionGranted = await requestPermission();
  if (!permissionGranted) {
    Alert.alert('Permission not granted');
    return;
  }
  unsubscribeNotificationOpenedApp = messaging().onNotificationOpenedApp(
    async (remoteMessage: any) => {
      handleNotification(remoteMessage);
    }
  );
  unsubscribeNotificationAppOpened = messaging().onMessage(
    async (remoteMessage: any) => {
      console.warn(`onMessage: ${remoteMessage}`);
    }
  );

  unsubscribeBackgroundMessage = messaging().setBackgroundMessageHandler(
    async (remoteMessage: any) => {
      handleNotification(remoteMessage);
    }
  );

  return getFCMToken();
};

export async function checkInitialNotification() {
  const notification = await messaging().getInitialNotification();
  if (notification) {
    await handleNotification(notification);
  }
}

async function handleNotification(remoteMessage: any) {
  console.warn('Correctly define how to handle notifications', remoteMessage);
}

export const unsubscribeToMessagingService = async () => {
  if (
    unsubscribeBackgroundMessage &&
    unsubscribeNotificationOpenedApp &&
    unsubscribeNotificationAppOpened
  ) {
    unsubscribeBackgroundMessage();
    unsubscribeNotificationOpenedApp();
    unsubscribeNotificationAppOpened();
    unsubscribeBackgroundMessage = null;
    unsubscribeNotificationOpenedApp = null;
    unsubscribeNotificationAppOpened = null;
  }
};

// Obtain the FCM token registered on the device (unique per device + app)
export const getFCMToken = async () => {
  return await messaging().getToken();
};

export const getDeviceTokensForLogin = async () => {
  const tokenContent = await getFCMToken();
  return {
    tokenContent
  };
};
export const checkPermissions = async () => {
  const authorizationStatus = await messaging().hasPermission();
  return (
    isAndroid ||
    authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};

export const requestPermission = async () => {
  if (isAndroid) {
    return;
  }
  const permissionsGranted = await checkPermissions();
  if (!permissionsGranted) {
    const authorizationStatus = await messaging().requestPermission({
      alert: true,
      badge: true,
      criticalAlert: true,
      sound: true
    });
    return (
      authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  }
  return permissionsGranted;
};
