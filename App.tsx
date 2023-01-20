import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/Routes';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
// import { Loading } from './src/components/Loading/Loading';
// import FlashMessage from 'react-native-flash-message';
import { theme } from './src/theme/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return null
    // return <Loading />
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style="auto" />
        {/* <FlashMessage position="top" /> */}
      </ThemeProvider>
    </React.Fragment>
  );
}