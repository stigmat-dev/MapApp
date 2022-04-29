import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useColorScheme from './hooks/useColorScheme';

function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
    </SafeAreaProvider>
  );
}

export default App;