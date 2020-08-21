import { RFValue } from 'react-native-responsive-fontsize';
import { FullTheme } from 'react-native-elements'

const theme: Partial<FullTheme> = {
  Icon: {
    //Default value to all Icon of the app
  },
  Text: {
    //Default value to all Text of the app
    style: {
      fontSize: RFValue(14)
    }
  },
  Button: {
    //Default value to all button of the app
  },
  colors: {
    primary: '#03428E',
    secondary: '#F58220'
  },
};

export { theme };