import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { ThemeProvider } from 'react-native-elements';
import { enableScreens } from 'react-native-screens';
import { theme } from './components/theme';
import { SafeAreaView } from 'react-native';
import { sharedStyles } from './services/utils';

enableScreens();

const App: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={sharedStyles.container}>
        <ThemeProvider theme={theme} >
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  )
};

export default App;
