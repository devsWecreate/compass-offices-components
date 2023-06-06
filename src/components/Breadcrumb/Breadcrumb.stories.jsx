import { Breadcrumb } from "./Breadcrumb";

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
  },
};

export const Principal = {
  args: {
    data: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Page',
      href: '#'
    }, {
      label: 'Current',
      href: '#'
    }],
  },
}
