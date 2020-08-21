import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { ThemeProvider } from 'react-native-elements';
import { enableScreens } from 'react-native-screens';
import { theme } from './components/theme';

enableScreens();

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <Routes />
      </ThemeProvider>
    </Provider>
  )
};

export default App;
