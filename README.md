### How to run

`expo start`

### How to run storybook only:

`EXPO_STORYBOOK=true expo start`

### How to add stories: 

1. Create ```MyNewComponent.stories.tsx```

```

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import MyNewComponent from './MyNewComponent';

storiesOf('MyNewComponent', module).add('default', () => <MyNewComponent />);
```

2. Import new story in ```./storybook/stories.ts```

```
// stories.ts
import '../components/MyNewComponent/MyNewComponent.stories.tsx';
```

3. That's it.
