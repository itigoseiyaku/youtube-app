import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';

import vuetify from '../src/plugins/vuetify';
import { createPinia } from 'pinia';
import { withVuetifyTheme } from './withVeutifyTheme.decorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

setup((app) => {
  // Registers your app's plugins into Storybook
  app.use(vuetify);
  app.use(createPinia());
});

export const decorators = [withVuetifyTheme];
export default preview;
