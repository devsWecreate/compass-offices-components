import { Title } from './Title';

export default {
  title: 'Example/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
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
  },
};

export const H1 = {
  args: {
    tag: 'h1',
    children: 'BOC Group Life Assurance Tower',
  },
}

export const H2 = {
  args: {
    tag: 'h2',
    children: 'BOC Group Life Assurance Tower',
  },
}
export const H3 = {
  args: {
    tag: 'h3',
    children: 'BOC Group Life Assurance Tower',
  },
}
export const H4 = {
  args: {
    tag: 'h4',
    children: 'BOC Group Life Assurance Tower',
  },
}
