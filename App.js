import AppBar from './components/AppBar.jsx'
import Home from './components/Home.jsx'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { View, StatusBar } from 'react-native-web';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0022ff',
    },
  };
  return (
    <>
      <PaperProvider theme={theme} >
        <View>
          <StatusBar hidden />
          <AppBar />
          <Home />
        </View>
      </PaperProvider>
    </>
  );
}
