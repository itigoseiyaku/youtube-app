import type { Meta, StoryObj } from '@storybook/vue3';

import UserInfoMenu from './UserInfoMenu.vue';

const meta: Meta<typeof UserInfoMenu> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'UserInfoMenu',
  component: UserInfoMenu,
  render: (args: any) => ({
    components: { UserInfoMenu },
    setup() {
      return { args };
    },
    template: '<UserInfoMenu :v-bind="args" />'
  })
};

export default meta;
type Story = StoryObj<typeof UserInfoMenu>;

export const Primary: Story = {
  args: {
    icon: './SampleUserIcon.svg',
    userName: '名無しの権兵衛',
    email: 'hoge@example.com'
  }
};
