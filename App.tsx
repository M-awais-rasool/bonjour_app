import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';
import {ToastProvider} from 'react-native-toasty-toast';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <ToastProvider>
          <NavigationContainer>
            <AuthStackNavigation />
          </NavigationContainer>
        </ToastProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
