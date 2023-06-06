import { TitleWithIcon } from './TitleWithIcon';

export default {
  title: 'Example/TitleWidtIcon',
  component: TitleWithIcon,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      options: ['h4', 'p'],
      control: {
        type: 'select',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    iconName: {
      control: {
        type: 'text', 
      },
    },
  },
};

export const H1 = {
  args: {
    tag: 'h4',
    children: 'Sheung Wan',
    iconName: 'place',
  },
}

export const p = {
  args: {
    tag: 'p',
    children: 'Sheung Wan',
    iconName: 'place',
  },
}

