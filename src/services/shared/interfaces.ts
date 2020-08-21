import { NavigationProp } from '@react-navigation/native';

export interface INavigation {
  navigation: NavigationProp<Record<string, object | undefined>, string>
}
