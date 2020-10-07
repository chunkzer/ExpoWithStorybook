### How to run

`expo start`

### How to run storybook only:

`EXPO_STORYBOOK=true expo start`

### How to add stories: 

1. Create ```MyNewComponent.stories.tsx```

```
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import StorybookTest from './StorybookTest';

storiesOf('StorybookTest', module).add('default', () => <StorybookTest />);
```

2. Import new story in ```./storybook/stories.ts```

3. That's it.
