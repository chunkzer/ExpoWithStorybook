import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

configure(() => {
  require('./stories.ts');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: require('@react-native-community/async-storage').default
});

export default StorybookUIRoot;
