import { StyleSheet } from 'react-native';
import { theme } from '~/components/theme';

const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowAligned: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultCustomInputContainer: {
    marginTop: 20,
  },
  sectionPadding: {
    padding: 10,
  },
  backgroundPrimaryColor: {
    backgroundColor: theme.colors?.primary,
  },
});

export { sharedStyles };
